import * as voucherRepository from './voucher.repository.js';
// Receipt Vouchers
export const getAllReceiptVouchers = async (filters) => {
    return voucherRepository.getAllReceiptVouchers(filters);
};
export const getReceiptVoucherById = async (id) => {
    const voucher = await voucherRepository.getReceiptVoucherById(id);
    if (!voucher)
        throw new Error('Voucher not found');
    return voucher;
};
export const createReceiptVoucher = async (data) => {
    return voucherRepository.createReceiptVoucher(data);
};
export const deleteReceiptVoucher = async (id) => {
    return voucherRepository.deleteReceiptVoucher(id);
};
// Payment Vouchers
export const getAllPaymentVouchers = async (filters) => {
    return voucherRepository.getAllPaymentVouchers(filters);
};
export const getPaymentVoucherById = async (id) => {
    const voucher = await voucherRepository.getPaymentVoucherById(id);
    if (!voucher)
        throw new Error('Voucher not found');
    return voucher;
};
export const createPaymentVoucher = async (data) => {
    return voucherRepository.createPaymentVoucher(data);
};
export const deletePaymentVoucher = async (id) => {
    return voucherRepository.deletePaymentVoucher(id);
};
export const updateReceiptVoucher = async (id, data) => {
    return voucherRepository.updateReceiptVoucher(id, data);
};
export const updatePaymentVoucher = async (id, data) => {
    return voucherRepository.updatePaymentVoucher(id, data);
};
// Summary Stats
export const getVoucherStats = async (type, filters) => {
    return voucherRepository.getVoucherStats(type, filters);
};
