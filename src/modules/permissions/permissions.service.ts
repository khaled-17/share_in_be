import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePermissionDto } from './dto/permission.dto';

@Injectable()
export class PermissionsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.permission.findMany({
      orderBy: { module: 'asc' },
    });
  }

  async create(data: CreatePermissionDto) {
    const existing = await this.prisma.permission.findUnique({
      where: { action: data.action },
    });

    if (existing) {
      throw new ConflictException(`Permission '${data.action}' already exists`);
    }

    return this.prisma.permission.create({
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.permission.delete({
      where: { id },
    });
  }
}
