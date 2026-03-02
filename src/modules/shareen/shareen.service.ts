import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ShareenService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: Prisma.ShareenWhereInput = {}) {
    return this.prisma.shareen.findMany({
      where: query,
      orderBy: { created_at: 'desc' },
    });
  }

  async create(data: Prisma.ShareenCreateInput) {
    return this.prisma.shareen.create({
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.shareen.delete({
      where: { id },
    });
  }
}
