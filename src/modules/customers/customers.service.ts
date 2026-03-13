import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import {
  CODE_PREFIX,
  createWithGeneratedCode,
  getNextCode,
} from '../../common/utils/code-generator';
import { CreateCustomerDto, UpdateCustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  private async generateCustomerId() {
    const latestCustomer = await this.prisma.customer.findFirst({
      where: { customer_id: { startsWith: CODE_PREFIX.customer } },
      orderBy: { created_at: 'desc' },
      select: { customer_id: true },
    });

    return getNextCode(CODE_PREFIX.customer, latestCustomer?.customer_id);
  }

  async findAll(params: { skip?: number; take?: number; search?: string }) {
    const { skip, take, search } = params;
    const where: Prisma.CustomerWhereInput = search
      ? {
          OR: [
            { name: { contains: search } },
            { customer_id: { contains: search } },
            { phone: { contains: search } },
            { contact_person: { contains: search } },
          ],
        }
      : {};

    const [customers, total] = await Promise.all([
      this.prisma.customer.findMany({
        skip,
        take,
        where,
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.customer.count({ where }),
    ]);

    return { customers, total };
  }

  async findOne(id: string) {
    const customer = await this.prisma.customer.findUnique({
      where: { customer_id: id },
    });
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
    return customer;
  }

  async create(data: CreateCustomerDto) {
    const rest = { ...data };
    delete rest.customer_id;

    return createWithGeneratedCode({
      generateCode: () => this.generateCustomerId(),
      createRecord: (customer_id) =>
        this.prisma.customer.create({
          data: { ...rest, customer_id },
        }),
      uniqueField: 'customer_id',
      entityLabel: 'customer',
    });
  }

  async update(id: string, data: UpdateCustomerDto) {
    await this.findOne(id);
    return this.prisma.customer.update({
      where: { customer_id: id },
      data,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.customer.delete({
      where: { customer_id: id },
    });
  }
}
