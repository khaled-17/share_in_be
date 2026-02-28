import prisma from '../../config/prisma.js';
export const getAllUsers = async () => {
    return await prisma.user.findMany();
};
export const createUser = async (data) => {
    return await prisma.user.create({
        data,
    });
};
export const findUserByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: { email },
    });
};
export const findById = async (id) => {
    return await prisma.user.findUnique({
        where: { id },
    });
};
