import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async findOneByEmail(email: string): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: { email },
        });
    }

    async findOne(id: number): Promise<User | null> {
        return this.findOneById(id);
    }

    async findOneById(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: { id },
        });
    }

    async create(data: Prisma.UserCreateInput): Promise<User> {
        const userData = {
            ...data,
            password: data.password || '$2b$10$legacy_default_hash', // In a real app, generate a random or use a specific logic
        };
        return this.prisma.user.create({
            data: userData,
        });
    }

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async remove(id: number): Promise<User> {
        return this.prisma.user.delete({
            where: { id },
        });
    }
}
