import * as partnerRepository from './partner.repository.js';

export const getAllPartners = async () => {
    return await partnerRepository.findAll();
};

export const getPartnerById = async (id: number) => {
    const partner = await partnerRepository.findById(id);
    if (!partner) throw new Error('Partner not found');
    return partner;
};

export const getPartnerSummary = async (id: number) => {
    const data = await partnerRepository.getSummaryById(id);
    if (!data) throw new Error('Partner not found');

    const totalIncreases = data.receipt_vouchers.reduce((sum: number, v: any) => sum + v.amount, 0);
    const totalWithdrawals = data.payment_vouchers.reduce(
        (sum: number, v: any) => sum + v.amount,
        0,
    );

    return {
        partner_code: data.partner_code,
        name: data.name,
        initial_capital: data.initial_capital,
        current_capital: data.current_capital,
        total_capital_increase: totalIncreases,
        total_withdrawals: totalWithdrawals,
        net_capital: data.initial_capital + totalIncreases - totalWithdrawals,
    };
};

export const createPartner = async (data: any) => {
    if (data.partner_code) {
        const existing = await partnerRepository.findByPartnerCode(data.partner_code);
        if (existing) throw new Error('Partner Code already exists');
    }
    if (data.initial_capital !== undefined && data.current_capital === undefined) {
        data.current_capital = data.initial_capital;
    }
    return await partnerRepository.create(data);
};

export const updatePartner = async (id: number, data: any) => {
    await getPartnerById(id);
    if (data.partner_code) {
        const existing = await partnerRepository.findByPartnerCode(data.partner_code);
        if (existing && existing.id !== id) throw new Error('Partner Code already exists');
    }
    return await partnerRepository.update(id, data);
};

export const deletePartner = async (id: number) => {
    await getPartnerById(id);
    return await partnerRepository.remove(id);
};
