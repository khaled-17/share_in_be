import prisma from '../../config/prisma.js';

export const getAllUsers = async (): Promise<any[]> => {
    return await prisma.user.findMany();
};

export const createUser = async (data: any): Promise<any> => {
    return await prisma.user.create({
        data,
    });
};

export const findUserByEmail = async (email: string): Promise<any> => {
    return await prisma.user.findUnique({
        where: { email },
    });
};
