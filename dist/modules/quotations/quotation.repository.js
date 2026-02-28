import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const getAllQuotations = async () => {
    return prisma.quotation.findMany({
        include: {
            customer: { select: { name: true } },
            project_type: true,
            items: true,
        },
        orderBy: { quote_date: 'desc' },
    });
};
export const getQuotationById = async (id) => {
    return prisma.quotation.findUnique({
        where: { id },
        include: {
            customer: true,
            project_type: true,
            items: true,
        },
    });
};
export const createQuotation = async (data) => {
    const { items, ...quoteData } = data;
    // Parse numeric fields
    if (quoteData.totalamount !== undefined)
        quoteData.totalamount = parseFloat(quoteData.totalamount);
    if (quoteData.paid_adv !== undefined)
        quoteData.paid_adv = quoteData.paid_adv ? parseFloat(quoteData.paid_adv) : null;
    const itemsData = (items || []).map((item) => ({
        description: item.description,
        unit_price: parseFloat(item.unit_price),
        quantity: parseFloat(item.quantity),
        total: parseFloat(item.total),
    }));
    return prisma.quotation.create({
        data: {
            ...quoteData,
            items: {
                create: itemsData,
            },
        },
        include: {
            customer: true,
            project_type: true,
            items: true,
        },
    });
};
export const updateQuotation = async (id, data) => {
    const { items, ...quoteData } = data;
    // Parse numeric fields
    if (quoteData.totalamount !== undefined)
        quoteData.totalamount = parseFloat(quoteData.totalamount);
    if (quoteData.paid_adv !== undefined)
        quoteData.paid_adv = quoteData.paid_adv ? parseFloat(quoteData.paid_adv) : null;
    if (items) {
        await prisma.quotationItem.deleteMany({
            where: { quotation_id: id },
        });
        const itemsData = items.map((item) => ({
            description: item.description,
            unit_price: parseFloat(item.unit_price),
            quantity: parseFloat(item.quantity),
            total: parseFloat(item.total),
        }));
        return prisma.quotation.update({
            where: { id },
            data: {
                ...quoteData,
                items: {
                    create: itemsData,
                },
            },
            include: {
                customer: true,
                project_type: true,
                items: true,
            },
        });
    }
    return prisma.quotation.update({
        where: { id },
        data: quoteData,
        include: {
            customer: true,
            project_type: true,
            items: true,
        },
    });
};
export const deleteQuotation = async (id) => {
    // Items are deleted automatically if ON DELETE CASCADE is set in Prisma schema
    return prisma.quotation.delete({
        where: { id },
    });
};
