import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CustomersService {
    constructor(private prisma: PrismaService) { }

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

    async create(data: Prisma.CustomerCreateInput) {
        const existing = await this.prisma.customer.findUnique({
            where: { customer_id: data.customer_id },
        });
        if (existing) {
            throw new ConflictException('Customer ID already exists');
        }
        return this.prisma.customer.create({ data });
    }

    async update(id: string, data: Prisma.CustomerUpdateInput) {
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
