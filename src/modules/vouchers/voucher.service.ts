import * as voucherRepository from './voucher.repository.js';

// Receipt Vouchers
export const getAllReceiptVouchers = async (filters: any) => {
    return voucherRepository.getAllReceiptVouchers(filters);
};

export const getReceiptVoucherById = async (id: number) => {
    const voucher = await voucherRepository.getReceiptVoucherById(id);
    if (!voucher) throw new Error('Voucher not found');
    return voucher;
};

export const createReceiptVoucher = async (data: any) => {
    return voucherRepository.createReceiptVoucher(data);
};

export const deleteReceiptVoucher = async (id: number) => {
    return voucherRepository.deleteReceiptVoucher(id);
};

// Payment Vouchers
export const getAllPaymentVouchers = async (filters: any) => {
    return voucherRepository.getAllPaymentVouchers(filters);
};

export const getPaymentVoucherById = async (id: number) => {
    const voucher = await voucherRepository.getPaymentVoucherById(id);
    if (!voucher) throw new Error('Voucher not found');
    return voucher;
};

export const createPaymentVoucher = async (data: any) => {
    return voucherRepository.createPaymentVoucher(data);
};

export const deletePaymentVoucher = async (id: number) => {
    return voucherRepository.deletePaymentVoucher(id);
};

// Stats
export const getVoucherStats = async (type: 'receipt' | 'payment', filters: any) => {
    return voucherRepository.getVoucherStats(type, filters);
};
