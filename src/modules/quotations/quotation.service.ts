import * as quotationRepository from './quotation.repository.js';

export const getAllQuotations = async () => {
    return quotationRepository.getAllQuotations();
};

export const getQuotationById = async (id: number) => {
    const quotation = await quotationRepository.getQuotationById(id);
    if (!quotation) throw new Error('Quotation not found');
    return quotation;
};

export const createQuotation = async (data: any) => {
    return quotationRepository.createQuotation(data);
};

export const updateQuotation = async (id: number, data: any) => {
    const quotation = await quotationRepository.getQuotationById(id);
    if (!quotation) throw new Error('Quotation not found');
    return quotationRepository.updateQuotation(id, data);
};

export const deleteQuotation = async (id: number) => {
    const quotation = await quotationRepository.getQuotationById(id);
    if (!quotation) throw new Error('Quotation not found');
    return quotationRepository.deleteQuotation(id);
};
