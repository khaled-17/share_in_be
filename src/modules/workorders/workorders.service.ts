import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateWorkOrderDto, UpdateWorkOrderDto } from './dto/workorder.dto';
import {
  CODE_PREFIX,
  createWithGeneratedCode,
  getNextCode,
} from '../../common/utils/code-generator';

@Injectable()
export class WorkOrdersService {
  constructor(private prisma: PrismaService) {}

  private async generateOrderCode() {
    const latestWorkOrder = await this.prisma.workOrder.findFirst({
      where: { order_code: { startsWith: CODE_PREFIX.workOrder } },
      orderBy: { id: 'desc' },
      select: { order_code: true },
    });

    return getNextCode(CODE_PREFIX.workOrder, latestWorkOrder?.order_code);
  }

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
    const rest = {
      ...payload,
      order_code: undefined,
    };

    return createWithGeneratedCode({
      generateCode: () => this.generateOrderCode(),
      createRecord: (order_code) =>
        this.prisma.workOrder.create({
          data: { ...rest, order_code },
          include: {
            customer: true,
            quotation: true,
          },
        }),
      uniqueField: 'order_code',
      entityLabel: 'work order',
    });
  }

  async update(id: number, data: UpdateWorkOrderDto) {
    await this.findOne(id);
    const rest = { ...data };
    delete rest.order_code;
    const payload = rest as object;
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
