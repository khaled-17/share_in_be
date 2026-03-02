import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateWorkOrderDto, UpdateWorkOrderDto } from './dto/workorder.dto';

@Injectable()
export class WorkOrdersService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: Record<string, any> = {}) {
    return this.prisma.workOrder.findMany({
      where: query,
      include: {
        customer: true,
        quotation: true,
      },
      orderBy: { created_at: 'desc' },
    });
  }

  async findOne(id: number) {
    const workOrder = await this.prisma.workOrder.findUnique({
      where: { id },
      include: {
        customer: true,
        quotation: true,
      },
    });
    if (!workOrder) throw new NotFoundException('Work order not found');
    return workOrder;
  }

  async findByOrderCode(order_code: string) {
    return this.prisma.workOrder.findUnique({
      where: { order_code },
    });
  }

  async create(data: CreateWorkOrderDto) {
    const payload = data as unknown as Prisma.WorkOrderUncheckedCreateInput;
    if (payload.order_code) {
      const existing = await this.findByOrderCode(payload.order_code);
      if (existing)
        throw new ConflictException('Work order code already exists');
    }

    return this.prisma.workOrder.create({
      data: payload,
      include: {
        customer: true,
        quotation: true,
      },
    });
  }

  async update(id: number, data: UpdateWorkOrderDto) {
    await this.findOne(id);
    const payload = data as object;
    return this.prisma.workOrder.update({
      where: { id },
      data: payload,
      include: {
        customer: true,
        quotation: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.workOrder.delete({
      where: { id },
    });
  }
}
