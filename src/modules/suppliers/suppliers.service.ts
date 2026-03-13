import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, Supplier } from '@prisma/client';
import {
  CODE_PREFIX,
  createWithGeneratedCode,
  getNextCode,
} from '../../common/utils/code-generator';
import { CreateSupplierDto, UpdateSupplierDto } from './dto/supplier.dto';

@Injectable()
export class SuppliersService {
  constructor(private prisma: PrismaService) {}

  private async generateSupplierId() {
    const latestSupplier = await this.prisma.supplier.findFirst({
      where: { supplier_id: { startsWith: CODE_PREFIX.supplier } },
      orderBy: { created_at: 'desc' },
      select: { supplier_id: true },
    });

    return getNextCode(CODE_PREFIX.supplier, latestSupplier?.supplier_id);
  }

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

  async findOne(idOrCode: string | number): Promise<Supplier> {
    let supplier: Supplier | null = null;
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

  async create(data: CreateSupplierDto) {
    const rest = { ...data };
    delete rest.supplier_id;

    return createWithGeneratedCode({
      generateCode: () => this.generateSupplierId(),
      createRecord: (supplier_id) =>
        this.prisma.supplier.create({
          data: { ...rest, supplier_id },
        }),
      uniqueField: 'supplier_id',
      entityLabel: 'supplier',
    });
  }

  async update(idOrCode: string | number, data: UpdateSupplierDto) {
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
