import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CompanyService {
    constructor(private prisma: PrismaService) { }

    async getCompany() {
        return this.prisma.companySettings.findFirst();
    }

    async update(data: any) {
        return this.prisma.companySettings.upsert({
            where: { id: 1 },
            update: data,
            create: { id: 1, ...data },
        });
    }
}
