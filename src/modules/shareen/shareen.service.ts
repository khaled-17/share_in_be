import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ShareenService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: any = {}) {
    return this.prisma.shareen.findMany({
      where: query,
      orderBy: { created_at: 'desc' },
    });
  }

  async create(data: any) {
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
