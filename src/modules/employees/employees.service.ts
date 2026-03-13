import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import {
  CODE_PREFIX,
  createWithGeneratedCode,
  getNextCode,
} from '../../common/utils/code-generator';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  private async generateEmployeeCode() {
    const latestEmployee = await this.prisma.employee.findFirst({
      where: { emp_code: { startsWith: CODE_PREFIX.employee } },
      orderBy: { id: 'desc' },
      select: { emp_code: true },
    });

    return getNextCode(CODE_PREFIX.employee, latestEmployee?.emp_code);
  }

  async findAll(
    params: { skip?: number; take?: number; search?: string } = {},
  ) {
    const { skip, take, search } = params;
    const where: Prisma.EmployeeWhereInput = search
      ? {
          OR: [
            { name: { contains: search } },
            { emp_code: { contains: search } },
            { phone: { contains: search } },
            { position: { contains: search } },
          ],
        }
      : {};

    const [employees, total] = await Promise.all([
      this.prisma.employee.findMany({
        skip,
        take,
        where,
        orderBy: { id: 'desc' },
      }),
      this.prisma.employee.count({ where }),
    ]);

    return { employees, total };
  }

  async findOne(id: number) {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
    });
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }
    return employee;
  }

  async findByEmpCode(emp_code: string) {
    return this.prisma.employee.findUnique({
      where: { emp_code },
    });
  }

  async create(data: CreateEmployeeDto) {
    const rest = { ...data };
    delete rest.emp_code;

    return createWithGeneratedCode({
      generateCode: () => this.generateEmployeeCode(),
      createRecord: (emp_code) =>
        this.prisma.employee.create({
          data: { ...rest, emp_code },
        }),
      uniqueField: 'emp_code',
      entityLabel: 'employee',
    });
  }

  async update(id: number, data: UpdateEmployeeDto) {
    await this.findOne(id);

    return this.prisma.employee.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.employee.delete({
      where: { id },
    });
  }
}
