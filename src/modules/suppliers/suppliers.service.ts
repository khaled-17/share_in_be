import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SuppliersService {
    constructor(private prisma: PrismaService) { }

    async findAll(params: { skip?: number; take?: number; search?: string }) {
        const { skip, take, search } = params;
        const where: Prisma.SupplierWhereInput = search
            ? {
                OR: [
                    { name: { contains: search } },
                    { supplier_id: { contains: search } },
                    { phone: { contains: search } },
                    { speciality: { contains: search } },
                    { contact_person: { contains: search } },
                ],
            }
            : {};

        const [suppliers, total] = await Promise.all([
            this.prisma.supplier.findMany({
                skip,
                take,
                where,
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.supplier.count({ where }),
        ]);

        return { suppliers, total };
    }

    async findOne(idOrCode: string | number) {
        let supplier;
        if (typeof idOrCode === 'number' || !isNaN(Number(idOrCode))) {
            supplier = await this.prisma.supplier.findUnique({
                where: { id: Number(idOrCode) },
            });
        }

        if (!supplier) {
            supplier = await this.prisma.supplier.findUnique({
                where: { supplier_id: String(idOrCode) },
            });
        }

        if (!supplier) {
            throw new NotFoundException('Supplier not found');
        }
        return supplier;
    }

    async create(data: Prisma.SupplierCreateInput) {
        if (data.supplier_id) {
            const existing = await this.prisma.supplier.findUnique({
                where: { supplier_id: data.supplier_id },
            });
            if (existing) {
                throw new ConflictException('Supplier ID already exists');
            }
        }
        return this.prisma.supplier.create({ data });
    }

    async update(idOrCode: string | number, data: Prisma.SupplierUpdateInput) {
        const supplier = await this.findOne(idOrCode);
        return this.prisma.supplier.update({
            where: { id: supplier.id },
            data,
        });
    }

    async remove(idOrCode: string | number) {
        const supplier = await this.findOne(idOrCode);
        return this.prisma.supplier.delete({
            where: { id: supplier.id },
        });
    }
}
