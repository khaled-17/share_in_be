import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ShareenService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.shareen.findMany({
            orderBy: { created_at: 'desc' },
        });
    }

    async create(data: any) {
        return this.prisma.shareen.create({
            data,
        });
    }
}
