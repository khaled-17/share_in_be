import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

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

  async create(data: Prisma.EmployeeCreateInput) {
    if (data.emp_code) {
      const existing = await this.findByEmpCode(data.emp_code);
      if (existing) {
        throw new ConflictException('Employee Code already exists');
      }
    }
    return this.prisma.employee.create({ data });
  }

  async update(id: number, data: Prisma.EmployeeUpdateInput) {
    await this.findOne(id);

    if (data.emp_code && typeof data.emp_code === 'string') {
      const existing = await this.findByEmpCode(data.emp_code);
      if (existing && existing.id !== id) {
        throw new ConflictException('Employee Code already exists');
      }
    }

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
