import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getSettings = async () => {
    return prisma.companySettings.findFirst();
};

export const updateSettings = async (data: any) => {
    // Assuming we only have one row for settings with id 1
    return prisma.companySettings.upsert({
        where: { id: 1 },
        update: data,
        create: { id: 1, ...data },
    });
};
