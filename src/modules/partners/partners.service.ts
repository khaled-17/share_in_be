import { Injectable, NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PartnersService {
    constructor(private prisma: PrismaService) { }

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

        const totalIncreases = data.receipt_vouchers.reduce((sum, v) => sum + v.amount, 0);
        const totalWithdrawals = data.payment_vouchers.reduce((sum, v) => sum + v.amount, 0);

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

    async create(data: Prisma.PartnerCreateInput) {
        if (data.partner_code) {
            const existing = await this.findByPartnerCode(data.partner_code);
            if (existing) {
                throw new ConflictException('Partner Code already exists');
            }
        }
        if (data.initial_capital !== undefined && data.current_capital === undefined) {
            data.current_capital = data.initial_capital;
        }
        return this.prisma.partner.create({ data });
    }

    async update(id: number, data: Prisma.PartnerUpdateInput) {
        await this.findOne(id);
        if (data.partner_code && typeof data.partner_code === 'string') {
            const existing = await this.findByPartnerCode(data.partner_code);
            if (existing && existing.id !== id) {
                throw new ConflictException('Partner Code already exists');
            }
        }
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
