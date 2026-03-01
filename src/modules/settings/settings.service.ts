import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SettingsService {
  constructor(private prisma: PrismaService) {}

  // Revenue Types
  async getAllRevenueTypes() {
    return this.prisma.revenueType.findMany({
      orderBy: { revtype_name: 'asc' },
    });
  }

  async createRevenueType(data: Prisma.RevenueTypeCreateInput) {
    const existing = await this.prisma.revenueType.findUnique({
      where: { revtype_id: data.revtype_id },
    });
    if (existing) throw new ConflictException('Revenue Type ID already exists');

    return this.prisma.revenueType.create({ data });
  }

  async updateRevenueType(id: number, data: Prisma.RevenueTypeUpdateInput) {
    const existing = await this.prisma.revenueType.findUnique({
      where: { id },
    });
    if (!existing) throw new NotFoundException('Revenue Type not found');

    return this.prisma.revenueType.update({
      where: { id },
      data,
    });
  }

  async deleteRevenueType(id: number) {
    const existing = await this.prisma.revenueType.findUnique({
      where: { id },
    });
    if (!existing) throw new NotFoundException('Revenue Type not found');

    return this.prisma.revenueType.delete({
      where: { id },
    });
  }

  // Expense Types
  async getAllExpenseTypes() {
    return this.prisma.expenseType.findMany({
      orderBy: { exptype_name: 'asc' },
    });
  }

  async createExpenseType(data: Prisma.ExpenseTypeCreateInput) {
    const existing = await this.prisma.expenseType.findUnique({
      where: { exptype_id: data.exptype_id },
    });
    if (existing) throw new ConflictException('Expense Type ID already exists');

    return this.prisma.expenseType.create({ data });
  }

  async updateExpenseType(id: number, data: Prisma.ExpenseTypeUpdateInput) {
    const existing = await this.prisma.expenseType.findUnique({
      where: { id },
    });
    if (!existing) throw new NotFoundException('Expense Type not found');

    return this.prisma.expenseType.update({
      where: { id },
      data,
    });
  }

  async deleteExpenseType(id: number) {
    const existing = await this.prisma.expenseType.findUnique({
      where: { id },
    });
    if (!existing) throw new NotFoundException('Expense Type not found');

    return this.prisma.expenseType.delete({
      where: { id },
    });
  }

  // Project Types
  async findAllProjectTypes() {
    return this.prisma.projectType.findMany({
      orderBy: { type_name: 'asc' },
    });
  }

  async createProjectType(data: any) {
    const { type } = data;
    // Generate a simple ID or handle as needed
    const type_id = type.toLowerCase().replace(/\s+/g, '-');

    const existing = await this.prisma.projectType.findUnique({
      where: { type_id },
    });
    if (existing) throw new ConflictException('Project Type already exists');

    return this.prisma.projectType.create({
      data: {
        type_id,
        type_name: type,
      },
    });
  }

  async updateProjectType(id: number, data: any) {
    const existing = await this.prisma.projectType.findUnique({
      where: { id },
    });
    if (!existing) throw new NotFoundException('Project Type not found');

    const { type } = data;
    return this.prisma.projectType.update({
      where: { id },
      data: {
        type_name: type,
      },
    });
  }

  async removeProjectType(id: number) {
    const existing = await this.prisma.projectType.findUnique({
      where: { id },
    });
    if (!existing) throw new NotFoundException('Project Type not found');

    return this.prisma.projectType.delete({
      where: { id },
    });
  }
}
