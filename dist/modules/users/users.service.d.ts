import { PrismaService } from '../../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findOneByEmail(email: string): Promise<User | null>;
    findOne(id: number): Promise<User | null>;
    findOneById(id: number): Promise<User | null>;
    create(data: Prisma.UserCreateInput): Promise<User>;
    findAll(): Promise<User[]>;
    remove(id: number): Promise<User>;
}
