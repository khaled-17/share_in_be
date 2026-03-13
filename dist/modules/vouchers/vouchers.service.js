"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VouchersService = exports.PaymentFilters = exports.ReceiptFilters = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const code_generator_1 = require("../../common/utils/code-generator");
class ReceiptFilters {
    start_date;
    end_date;
    source_type;
    payment_method;
}
exports.ReceiptFilters = ReceiptFilters;
class PaymentFilters {
    start_date;
    end_date;
    beneficiary_type;
    payment_method;
}
exports.PaymentFilters = PaymentFilters;
let VouchersService = class VouchersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generateVoucherNumber(type) {
        const prefix = type === 'receipt'
            ? code_generator_1.CODE_PREFIX.receiptVoucher
            : code_generator_1.CODE_PREFIX.paymentVoucher;
        const latestVoucher = type === 'receipt'
            ? await this.prisma.receiptVoucher.findFirst({
                where: { voucher_number: { startsWith: prefix } },
                orderBy: { id: 'desc' },
                select: { voucher_number: true },
            })
            : await this.prisma.paymentVoucher.findFirst({
                where: { voucher_number: { startsWith: prefix } },
                orderBy: { id: 'desc' },
                select: { voucher_number: true },
            });
        return (0, code_generator_1.getNextCode)(prefix, latestVoucher?.voucher_number);
    }
    async findAllReceipt(filters) {
        const { start_date, end_date, source_type, payment_method } = filters;
        const where = {};
        if (start_date || end_date) {
            where.voucher_date = {
                gte: start_date || undefined,
                lte: end_date || undefined,
            };
        }
        if (source_type)
            where.source_type = source_type;
        if (payment_method)
            where.payment_method = payment_method;
        return this.prisma.receiptVoucher.findMany({
            where,
            include: {
                customer: true,
                partner: true,
                check: true,
            },
            orderBy: { voucher_date: 'desc' },
        });
    }
    async findOneReceipt(id) {
        const voucher = await this.prisma.receiptVoucher.findUnique({
            where: { id },
            include: {
                customer: true,
                partner: true,
                check: true,
            },
        });
        if (!voucher)
            throw new common_1.NotFoundException('Voucher not found');
        return voucher;
    }
    async createReceipt(data) {
        const { check, ...voucherData } = data;
        return (0, code_generator_1.createWithGeneratedCode)({
            generateCode: () => this.generateVoucherNumber('receipt'),
            createRecord: (voucher_number) => this.prisma.$transaction(async (tx) => {
                let checkId = null;
                if (voucherData.payment_method === 'check' && check) {
                    const createdCheck = await tx.checkDetail.create({
                        data: {
                            ...check,
                            check_number: check.check_number || '',
                            bank_name: check.bank_name || '',
                            check_date: check.check_date || new Date().toISOString(),
                            amount: voucherData.amount,
                            status: check.status || 'pending',
                            beneficiary_name: 'ShareIn',
                        },
                    });
                    checkId = createdCheck.id;
                }
                const voucher = await tx.receiptVoucher.create({
                    data: {
                        voucher_number,
                        voucher_date: voucherData.voucher_date,
                        amount: voucherData.amount,
                        source_type: voucherData.source_type,
                        customer_id: voucherData.customer_id,
                        payment_method: voucherData.payment_method,
                        description: voucherData.description,
                        received_from: voucherData.received_from,
                        partner_id: voucherData.partner_id ?? null,
                        check_id: checkId,
                    },
                    include: {
                        customer: true,
                        partner: true,
                        check: true,
                    },
                });
                if (voucher.source_type === 'partner_capital' && voucher.partner_id) {
                    await tx.partner.update({
                        where: { id: voucher.partner_id },
                        data: {
                            current_capital: { increment: voucher.amount },
                        },
                    });
                }
                return voucher;
            }),
            uniqueField: 'voucher_number',
            entityLabel: 'receipt voucher',
        });
    }
    async updateReceipt(id, data) {
        return this.prisma.$transaction(async (tx) => {
            const oldVoucher = await tx.receiptVoucher.findUnique({ where: { id } });
            if (!oldVoucher)
                throw new common_1.NotFoundException('Voucher not found');
            const voucherData = { ...data };
            delete voucherData.voucher_number;
            const amountDiff = (voucherData.amount !== undefined
                ? voucherData.amount
                : oldVoucher.amount) - oldVoucher.amount;
            const updatedVoucher = await tx.receiptVoucher.update({
                where: { id },
                data: {
                    voucher_date: voucherData.voucher_date,
                    amount: voucherData.amount,
                    source_type: voucherData.source_type,
                    customer_id: voucherData.customer_id,
                    payment_method: voucherData.payment_method,
                    description: voucherData.description,
                    received_from: voucherData.received_from,
                    partner_id: voucherData.partner_id,
                },
                include: { check: true },
            });
            if (updatedVoucher.source_type === 'partner_capital' &&
                updatedVoucher.partner_id &&
                amountDiff !== 0) {
                await tx.partner.update({
                    where: { id: updatedVoucher.partner_id },
                    data: { current_capital: { increment: amountDiff } },
                });
            }
            return updatedVoucher;
        });
    }
    async removeReceipt(id) {
        return this.prisma.$transaction(async (tx) => {
            const voucher = await tx.receiptVoucher.findUnique({ where: { id } });
            if (!voucher)
                throw new common_1.NotFoundException('Voucher not found');
            if (voucher.source_type === 'partner_capital' && voucher.partner_id) {
                await tx.partner.update({
                    where: { id: voucher.partner_id },
                    data: {
                        current_capital: { decrement: voucher.amount },
                    },
                });
            }
            if (voucher.check_id) {
                await tx.checkDetail.delete({ where: { id: voucher.check_id } });
            }
            return tx.receiptVoucher.delete({ where: { id } });
        });
    }
    async findAllPayment(filters) {
        const { start_date, end_date, beneficiary_type, payment_method } = filters;
        const where = {};
        if (start_date || end_date) {
            where.voucher_date = {
                gte: start_date || undefined,
                lte: end_date || undefined,
            };
        }
        if (beneficiary_type)
            where.beneficiary_type = beneficiary_type;
        if (payment_method)
            where.payment_method = payment_method;
        return this.prisma.paymentVoucher.findMany({
            where,
            include: {
                supplier: true,
                employee: true,
                partner: true,
                expense_type: true,
                check: true,
            },
            orderBy: { voucher_date: 'desc' },
        });
    }
    async findOnePayment(id) {
        const voucher = await this.prisma.paymentVoucher.findUnique({
            where: { id },
            include: {
                supplier: true,
                employee: true,
                partner: true,
                expense_type: true,
                check: true,
            },
        });
        if (!voucher)
            throw new common_1.NotFoundException('Voucher not found');
        return voucher;
    }
    async createPayment(data) {
        const { check, ...voucherData } = data;
        return (0, code_generator_1.createWithGeneratedCode)({
            generateCode: () => this.generateVoucherNumber('payment'),
            createRecord: (voucher_number) => this.prisma.$transaction(async (tx) => {
                let checkId = null;
                if (voucherData.payment_method === 'check' && check) {
                    const createdCheck = await tx.checkDetail.create({
                        data: {
                            ...check,
                            check_number: check.check_number || '',
                            bank_name: check.bank_name || '',
                            check_date: check.check_date || new Date().toISOString(),
                            amount: voucherData.amount,
                            status: check.status || 'pending',
                            beneficiary_name: voucherData.paid_to,
                        },
                    });
                    checkId = createdCheck.id;
                }
                const voucher = await tx.paymentVoucher.create({
                    data: {
                        voucher_number,
                        voucher_date: voucherData.voucher_date,
                        amount: voucherData.amount,
                        beneficiary_type: voucherData.beneficiary_type || 'other',
                        supplier_id: voucherData.supplier_id,
                        employee_id: voucherData.employee_id,
                        partner_id: voucherData.partner_id ?? null,
                        expense_type_id: voucherData.expense_type_id,
                        payment_method: voucherData.payment_method,
                        description: voucherData.description,
                        paid_to: voucherData.paid_to,
                        check_id: checkId,
                    },
                    include: {
                        supplier: true,
                        employee: true,
                        partner: true,
                        expense_type: true,
                        check: true,
                    },
                });
                if (voucher.beneficiary_type === 'partner_withdrawal' &&
                    voucher.partner_id) {
                    await tx.partner.update({
                        where: { id: voucher.partner_id },
                        data: {
                            current_capital: { decrement: voucher.amount },
                        },
                    });
                }
                return voucher;
            }),
            uniqueField: 'voucher_number',
            entityLabel: 'payment voucher',
        });
    }
    async updatePayment(id, data) {
        return this.prisma.$transaction(async (tx) => {
            const oldVoucher = await tx.paymentVoucher.findUnique({ where: { id } });
            if (!oldVoucher)
                throw new common_1.NotFoundException('Voucher not found');
            const voucherData = { ...data };
            delete voucherData.voucher_number;
            const amountDiff = (voucherData.amount !== undefined
                ? voucherData.amount
                : oldVoucher.amount) - oldVoucher.amount;
            const updatedVoucher = await tx.paymentVoucher.update({
                where: { id },
                data: {
                    voucher_date: voucherData.voucher_date,
                    amount: voucherData.amount,
                    beneficiary_type: voucherData.beneficiary_type,
                    supplier_id: voucherData.supplier_id,
                    employee_id: voucherData.employee_id,
                    partner_id: voucherData.partner_id,
                    expense_type_id: voucherData.expense_type_id,
                    payment_method: voucherData.payment_method,
                    description: voucherData.description,
                    paid_to: voucherData.paid_to,
                },
                include: { check: true },
            });
            if (updatedVoucher.beneficiary_type === 'partner_withdrawal' &&
                updatedVoucher.partner_id &&
                amountDiff !== 0) {
                await tx.partner.update({
                    where: { id: updatedVoucher.partner_id },
                    data: { current_capital: { decrement: amountDiff } },
                });
            }
            return updatedVoucher;
        });
    }
    async removePayment(id) {
        return this.prisma.$transaction(async (tx) => {
            const voucher = await tx.paymentVoucher.findUnique({ where: { id } });
            if (!voucher)
                throw new common_1.NotFoundException('Voucher not found');
            if (voucher.beneficiary_type === 'partner_withdrawal' &&
                voucher.partner_id) {
                await tx.partner.update({
                    where: { id: voucher.partner_id },
                    data: {
                        current_capital: { increment: voucher.amount },
                    },
                });
            }
            if (voucher.check_id) {
                await tx.checkDetail.delete({ where: { id: voucher.check_id } });
            }
            return tx.paymentVoucher.delete({ where: { id } });
        });
    }
    async getStats(type, filters) {
        const { start_date, end_date } = filters;
        const where = {};
        if (start_date || end_date) {
            where.voucher_date = {
                gte: start_date || undefined,
                lte: end_date || undefined,
            };
        }
        if (type === 'receipt') {
            const vouchers = await this.prisma.receiptVoucher.findMany({ where });
            const pendingChecks = await this.prisma.checkDetail.count({
                where: { status: 'pending', receipt_voucher_id: { not: null } },
            });
            return {
                total_amount: vouchers.reduce((sum, v) => sum + v.amount, 0),
                total_count: vouchers.length,
                by_source_type: vouchers.reduce((acc, v) => {
                    const type = String(v.source_type);
                    acc[type] = (acc[type] || 0) + v.amount;
                    return acc;
                }, {}),
                by_payment_method: vouchers.reduce((acc, v) => {
                    const method = String(v.payment_method);
                    acc[method] = (acc[method] || 0) + v.amount;
                    return acc;
                }, {}),
                pending_checks: pendingChecks,
            };
        }
        else {
            const vouchers = await this.prisma.paymentVoucher.findMany({ where });
            const pendingChecks = await this.prisma.checkDetail.count({
                where: { status: 'pending', payment_voucher_id: { not: null } },
            });
            return {
                total_amount: vouchers.reduce((sum, v) => sum + v.amount, 0),
                total_count: vouchers.length,
                by_beneficiary_type: vouchers.reduce((acc, v) => {
                    acc[v.beneficiary_type] = (acc[v.beneficiary_type] || 0) + v.amount;
                    return acc;
                }, {}),
                by_payment_method: vouchers.reduce((acc, v) => {
                    acc[v.payment_method] = (acc[v.payment_method] || 0) + v.amount;
                    return acc;
                }, {}),
                pending_checks: pendingChecks,
            };
        }
    }
};
exports.VouchersService = VouchersService;
exports.VouchersService = VouchersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VouchersService);
//# sourceMappingURL=vouchers.service.js.map