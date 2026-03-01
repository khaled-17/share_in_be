import { PrismaService } from '../../prisma/prisma.service';
export declare class ReviewsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        name: string;
        id: string;
        role: string | null;
        createdAt: Date;
        review: string;
        rating: number;
        avatar: string | null;
        phoneNumber: string | null;
    }[]>;
    create(data: any): Promise<{
        name: string;
        id: string;
        role: string | null;
        createdAt: Date;
        review: string;
        rating: number;
        avatar: string | null;
        phoneNumber: string | null;
    }>;
    findOne(id: string): Promise<{
        name: string;
        id: string;
        role: string | null;
        createdAt: Date;
        review: string;
        rating: number;
        avatar: string | null;
        phoneNumber: string | null;
    } | null>;
    update(id: string, data: any): Promise<{
        name: string;
        id: string;
        role: string | null;
        createdAt: Date;
        review: string;
        rating: number;
        avatar: string | null;
        phoneNumber: string | null;
    }>;
    remove(id: string): Promise<{
        name: string;
        id: string;
        role: string | null;
        createdAt: Date;
        review: string;
        rating: number;
        avatar: string | null;
        phoneNumber: string | null;
    }>;
}
