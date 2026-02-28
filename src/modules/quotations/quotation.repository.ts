import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllQuotations = async () => {
    return prisma.quotation.findMany({
        include: {
            customer: { select: { name: true } },
            project_type: { select: { type_name: true } },
        },
        orderBy: { quote_date: 'desc' },
    });
};

export const getQuotationById = async (id: number) => {
    return prisma.quotation.findUnique({
        where: { id },
        include: {
            customer: true,
            project_type: true,
            items: true,
        },
    });
};

export const createQuotation = async (data: any) => {
    const { items, ...quoteData } = data;
    return prisma.quotation.create({
        data: {
            ...quoteData,
            items: {
                create: items || [],
            },
        },
        include: {
            items: true,
        },
    });
};

export const updateQuotation = async (id: number, data: any) => {
    const { items, ...quoteData } = data;

    // For update, it's safer to delete existing items and recreate them or update individually
    // Here we'll delete and recreate if items are provided
    if (items) {
        await prisma.quotationItem.deleteMany({
            where: { quotation_id: id },
        });

        return prisma.quotation.update({
            where: { id },
            data: {
                ...quoteData,
                items: {
                    create: items,
                },
            },
            include: {
                items: true,
            },
        });
    }

    return prisma.quotation.update({
        where: { id },
        data: quoteData,
        include: {
            items: true,
        },
    });
};

export const deleteQuotation = async (id: number) => {
    // Items are deleted automatically if ON DELETE CASCADE is set in Prisma schema
    return prisma.quotation.delete({
        where: { id },
    });
};
