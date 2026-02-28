import * as voucherService from './voucher.service.js';
import { successResponse, errorResponse } from '../../utils/response.js';
// Receipt Vouchers
export const getAllReceiptVouchers = async (req, res, next) => {
    try {
        const result = await voucherService.getAllReceiptVouchers(req.query);
        return successResponse(res, result, 'Receipt vouchers retrieved successfully');
    }
    catch (error) {
        next(error);
    }
};
export const getReceiptVoucherById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id))
            return errorResponse(res, 'Invalid ID', 400);
        const result = await voucherService.getReceiptVoucherById(id);
        return successResponse(res, result, 'Receipt voucher retrieved successfully');
    }
    catch (error) {
        if (error.message === 'Voucher not found')
            return errorResponse(res, error.message, 404);
        next(error);
    }
};
export const createReceiptVoucher = async (req, res, next) => {
    try {
        const result = await voucherService.createReceiptVoucher(req.body);
        return successResponse(res, result, 'Receipt voucher created successfully', 201);
    }
    catch (error) {
        next(error);
    }
};
export const deleteReceiptVoucher = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id))
            return errorResponse(res, 'Invalid ID', 400);
        await voucherService.deleteReceiptVoucher(id);
        return successResponse(res, null, 'Receipt voucher deleted successfully');
    }
    catch (error) {
        if (error.message === 'Voucher not found')
            return errorResponse(res, error.message, 404);
        next(error);
    }
};
export const getReceiptVoucherStats = async (req, res, next) => {
    try {
        const result = await voucherService.getVoucherStats('receipt', req.query);
        return successResponse(res, result, 'Receipt voucher stats retrieved successfully');
    }
    catch (error) {
        next(error);
    }
};
// Payment Vouchers
export const getAllPaymentVouchers = async (req, res, next) => {
    try {
        const result = await voucherService.getAllPaymentVouchers(req.query);
        return successResponse(res, result, 'Payment vouchers retrieved successfully');
    }
    catch (error) {
        next(error);
    }
};
export const getPaymentVoucherById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id))
            return errorResponse(res, 'Invalid ID', 400);
        const result = await voucherService.getPaymentVoucherById(id);
        return successResponse(res, result, 'Payment voucher retrieved successfully');
    }
    catch (error) {
        if (error.message === 'Voucher not found')
            return errorResponse(res, error.message, 404);
        next(error);
    }
};
export const createPaymentVoucher = async (req, res, next) => {
    try {
        const result = await voucherService.createPaymentVoucher(req.body);
        return successResponse(res, result, 'Payment voucher created successfully', 201);
    }
    catch (error) {
        next(error);
    }
};
export const deletePaymentVoucher = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id))
            return errorResponse(res, 'Invalid ID', 400);
        await voucherService.deletePaymentVoucher(id);
        return successResponse(res, null, 'Payment voucher deleted successfully');
    }
    catch (error) {
        if (error.message === 'Voucher not found')
            return errorResponse(res, error.message, 404);
        next(error);
    }
};
export const getPaymentVoucherStats = async (req, res, next) => {
    try {
        const result = await voucherService.getVoucherStats('payment', req.query);
        return successResponse(res, result, 'Payment voucher stats retrieved successfully');
    }
    catch (error) {
        next(error);
    }
};
export const updateReceiptVoucher = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const result = await voucherService.updateReceiptVoucher(id, req.body);
        return successResponse(res, result, 'Receipt voucher updated successfully');
    }
    catch (error) {
        next(error);
    }
};
export const updatePaymentVoucher = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const result = await voucherService.updatePaymentVoucher(id, req.body);
        return successResponse(res, result, 'Payment voucher updated successfully');
    }
    catch (error) {
        next(error);
    }
};
