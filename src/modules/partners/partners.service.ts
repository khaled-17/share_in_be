import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  CODE_PREFIX,
  createWithGeneratedCode,
  getNextCode,
} from '../../common/utils/code-generator';
import { CreatePartnerDto, UpdatePartnerDto } from './dto/partner.dto';

@Injectable()
export class PartnersService {
  constructor(private prisma: PrismaService) {}

  private async generatePartnerCode() {
    const latestPartner = await this.prisma.partner.findFirst({
      where: { partner_code: { startsWith: CODE_PREFIX.partner } },
      orderBy: { id: 'desc' },
      select: { partner_code: true },
    });

    return getNextCode(CODE_PREFIX.partner, latestPartner?.partner_code);
  }

  async findAll() {
    return this.prisma.partner.findMany({
      orderBy: { id: 'desc' },
    });
  }

  async findOne(id: number) {
    const partner = await this.prisma.partner.findUnique({
      where: { id },
      include: {
        receipt_vouchers: true,
        payment_vouchers: true,
      },
    });
    if (!partner) {
      throw new NotFoundException('Partner not found');
    }
    return partner;
  }

  async findByPartnerCode(partner_code: string) {
    return this.prisma.partner.findUnique({
      where: { partner_code },
    });
  }

  async getSummary(id: number) {
    const data = await this.prisma.partner.findUnique({
      where: { id },
      include: {
        receipt_vouchers: {
          where: { source_type: 'partner_capital' },
          select: { amount: true },
        },
        payment_vouchers: {
          where: { beneficiary_type: 'partner_withdrawal' },
          select: { amount: true },
        },
      },
    });

    if (!data) {
      throw new NotFoundException('Partner not found');
    }

    const totalIncreases = data.receipt_vouchers.reduce(
      (sum, v) => sum + v.amount,
      0,
    );
    const totalWithdrawals = data.payment_vouchers.reduce(
      (sum, v) => sum + v.amount,
      0,
    );

    return {
      partner_code: data.partner_code,
      name: data.name,
      initial_capital: data.initial_capital,
      current_capital: data.current_capital,
      total_capital_increase: totalIncreases,
      total_withdrawals: totalWithdrawals,
      net_capital: data.initial_capital + totalIncreases - totalWithdrawals,
    };
  }

  async create(data: CreatePartnerDto) {
    const rest = { ...data };
    delete rest.partner_code;
    if (
      rest.initial_capital !== undefined &&
      rest.current_capital === undefined
    ) {
      rest.current_capital = rest.initial_capital;
    }

    return createWithGeneratedCode({
      generateCode: () => this.generatePartnerCode(),
      createRecord: (partner_code) =>
        this.prisma.partner.create({
          data: { ...rest, partner_code },
        }),
      uniqueField: 'partner_code',
      entityLabel: 'partner',
    });
  }

  async update(id: number, data: UpdatePartnerDto) {
    await this.findOne(id);
    return this.prisma.partner.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    const partner = await this.findOne(id);
    if (
      (partner.receipt_vouchers && partner.receipt_vouchers.length > 0) ||
      (partner.payment_vouchers && partner.payment_vouchers.length > 0)
    ) {
      throw new BadRequestException('لا يمكن حذف شريك له سندات مسجلة');
    }
    return this.prisma.partner.delete({
      where: { id },
    });
  }
}
