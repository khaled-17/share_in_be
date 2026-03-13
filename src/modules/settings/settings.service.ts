import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  CODE_PREFIX,
  createWithGeneratedCode,
  getNextCode,
} from '../../common/utils/code-generator';
import {
  CreateCountryDto,
  CreateExpenseTypeDto,
  CreateProjectTypeDto,
  CreateRevenueTypeDto,
  UpdateCountryDto,
  UpdateExpenseTypeDto,
  UpdateRevenueTypeDto,
} from './dto/settings.dto';

@Injectable()
export class SettingsService {
  constructor(private prisma: PrismaService) {}

  private async generateRevenueTypeCode() {
    const latest = await this.prisma.revenueType.findFirst({
      where: { revtype_id: { startsWith: CODE_PREFIX.revenueType } },
      orderBy: { id: 'desc' },
      select: { revtype_id: true },
    });

    return getNextCode(CODE_PREFIX.revenueType, latest?.revtype_id);
  }

  private async generateExpenseTypeCode() {
    const latest = await this.prisma.expenseType.findFirst({
      where: { exptype_id: { startsWith: CODE_PREFIX.expenseType } },
      orderBy: { id: 'desc' },
      select: { exptype_id: true },
    });

    return getNextCode(CODE_PREFIX.expenseType, latest?.exptype_id);
  }

  private async generateProjectTypeCode() {
    const latest = await this.prisma.projectType.findFirst({
      where: { type_id: { startsWith: CODE_PREFIX.projectType } },
      orderBy: { id: 'desc' },
      select: { type_id: true },
    });

    return getNextCode(CODE_PREFIX.projectType, latest?.type_id);
  }

  private async generateCountryCode() {
    const latest = await this.prisma.country.findFirst({
      where: { country_code: { startsWith: CODE_PREFIX.country } },
      orderBy: { id: 'desc' },
      select: { country_code: true },
    });

    return getNextCode(CODE_PREFIX.country, latest?.country_code);
  }

  // Revenue Types
  async getAllRevenueTypes() {
    return this.prisma.revenueType.findMany({
      orderBy: { revtype_name: 'asc' },
    });
  }

  async createRevenueType(data: CreateRevenueTypeDto) {
    const rest = { ...data };
    delete rest.revtype_id;

    return createWithGeneratedCode({
      generateCode: () => this.generateRevenueTypeCode(),
      createRecord: (revtype_id) =>
        this.prisma.revenueType.create({
          data: { ...rest, revtype_id },
        }),
      uniqueField: 'revtype_id',
      entityLabel: 'revenue type',
    });
  }

  async updateRevenueType(id: number, data: UpdateRevenueTypeDto) {
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

  async createExpenseType(data: CreateExpenseTypeDto) {
    const rest = { ...data };
    delete rest.exptype_id;

    return createWithGeneratedCode({
      generateCode: () => this.generateExpenseTypeCode(),
      createRecord: (exptype_id) =>
        this.prisma.expenseType.create({
          data: { ...rest, exptype_id },
        }),
      uniqueField: 'exptype_id',
      entityLabel: 'expense type',
    });
  }

  async updateExpenseType(id: number, data: UpdateExpenseTypeDto) {
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

  async createProjectType(data: CreateProjectTypeDto) {
    const rest = { ...data };
    delete rest.type_id;

    return createWithGeneratedCode({
      generateCode: () => this.generateProjectTypeCode(),
      createRecord: (type_id) =>
        this.prisma.projectType.create({
          data: {
            ...rest,
            type_id,
          },
        }),
      uniqueField: 'type_id',
      entityLabel: 'project type',
    });
  }

  async updateProjectType(id: number, data: { type_name?: string }) {
    const existing = await this.prisma.projectType.findUnique({
      where: { id },
    });
    if (!existing) throw new NotFoundException('Project Type not found');

    const { type_name } = data;
    return this.prisma.projectType.update({
      where: { id },
      data: {
        type_name,
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

  // ==================
  // Countries
  // ==================

  async getAllCountries() {
    return this.prisma.country.findMany({
      orderBy: { country_name: 'asc' },
    });
  }

  async createCountry(data: CreateCountryDto) {
    const rest = { ...data };
    delete rest.country_code;

    return createWithGeneratedCode({
      generateCode: () => this.generateCountryCode(),
      createRecord: (country_code) =>
        this.prisma.country.create({
          data: { ...rest, country_code },
        }),
      uniqueField: 'country_code',
      entityLabel: 'country',
    });
  }

  async updateCountry(id: number, data: UpdateCountryDto) {
    const existing = await this.prisma.country.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Country not found');

    const rest = { ...data };
    delete rest.country_code;

    return this.prisma.country.update({ where: { id }, data: rest });
  }

  async deleteCountry(id: number) {
    const existing = await this.prisma.country.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Country not found');

    return this.prisma.country.delete({ where: { id } });
  }
}
