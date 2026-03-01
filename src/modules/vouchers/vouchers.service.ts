import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateReceiptVoucherDto, CreatePaymentVoucherDto } from './dto/voucher.dto';

interface ReceiptFilters {
  start_date?: string;
  end_date?: string;
  source_type?: string;
  payment_method?: string;
}

interface PaymentFilters {
  start_date?: string;
  end_date?: string;
  beneficiary_type?: string;
  payment_method?: string;
}

@Injectable()
export class VouchersService {
  constructor(private prisma: PrismaService) { }

  // Receipt Vouchers
  async findAllReceipt(filters: ReceiptFilters) {
    const { start_date, end_date, source_type, payment_method } = filters;
    const where: any = {};
    if (start_date || end_date) {
      where.voucher_date = {};
      if (start_date) where.voucher_date.gte = start_date;
      if (end_date) where.voucher_date.lte = end_date;
    }
    if (source_type) where.source_type = source_type;
    if (payment_method) where.payment_method = payment_method;

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

  async findOneReceipt(id: number) {
    const voucher = await this.prisma.receiptVoucher.findUnique({
      where: { id },
      include: {
        customer: true,
        partner: true,
        check: true,
      },
    });
    if (!voucher) throw new NotFoundException('Voucher not found');
    return voucher;
  }

  async createReceipt(data: CreateReceiptVoucherDto) {
    const { check, ...voucherData } = data as any;

    return this.prisma.$transaction(async (tx) => {
      let checkId: number | null = null;
      if (voucherData.payment_method === 'check' && check) {
        const createdCheck = await tx.checkDetail.create({
          data: {
            ...check,
            amount: parseFloat(voucherData.amount),
            status: check.status || 'pending',
          },
        });
        checkId = createdCheck.id;
      }

      const voucher = await tx.receiptVoucher.create({
        data: {
          ...voucherData,
          amount: parseFloat(voucherData.amount),
          partner_id: voucherData.partner_id
            ? parseInt(voucherData.partner_id)
            : null,
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
    });
  }

  async updateReceipt(id: number, data: Partial<CreateReceiptVoucherDto>) {
    return this.prisma.$transaction(async (tx) => {
      const oldVoucher = await tx.receiptVoucher.findUnique({ where: { id } });
      if (!oldVoucher) throw new NotFoundException('Voucher not found');

      const { check, ...voucherData } = data as any;
      const amountDiff =
        (voucherData.amount
          ? parseFloat(voucherData.amount)
          : oldVoucher.amount) - oldVoucher.amount;

      const updatedVoucher = await tx.receiptVoucher.update({
        where: { id },
        data: {
          ...voucherData,
          amount: voucherData.amount
            ? parseFloat(voucherData.amount)
            : undefined,
          partner_id: voucherData.partner_id
            ? parseInt(voucherData.partner_id)
            : undefined,
        },
        include: { check: true },
      });

      if (
        updatedVoucher.source_type === 'partner_capital' &&
        updatedVoucher.partner_id &&
        amountDiff !== 0
      ) {
        await tx.partner.update({
          where: { id: updatedVoucher.partner_id },
          data: { current_capital: { increment: amountDiff } },
        });
      }

      return updatedVoucher;
    });
  }

  async removeReceipt(id: number) {
    return this.prisma.$transaction(async (tx) => {
      const voucher = await tx.receiptVoucher.findUnique({ where: { id } });
      if (!voucher) throw new NotFoundException('Voucher not found');

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

  // Payment Vouchers
  async findAllPayment(filters: PaymentFilters) {
    const { start_date, end_date, beneficiary_type, payment_method } = filters;
    const where: any = {};
    if (start_date || end_date) {
      where.voucher_date = {};
      if (start_date) where.voucher_date.gte = start_date;
      if (end_date) where.voucher_date.lte = end_date;
    }
    if (beneficiary_type) where.beneficiary_type = beneficiary_type;
    if (payment_method) where.payment_method = payment_method;

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

  async findOnePayment(id: number) {
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
    if (!voucher) throw new NotFoundException('Voucher not found');
    return voucher;
  }

  async createPayment(data: CreatePaymentVoucherDto) {
    const { check, ...voucherData } = data as any;

    return this.prisma.$transaction(async (tx) => {
      let checkId: number | null = null;
      if (voucherData.payment_method === 'check' && check) {
        const createdCheck = await tx.checkDetail.create({
          data: {
            ...check,
            amount: parseFloat(voucherData.amount),
            status: check.status || 'pending',
          },
        });
        checkId = createdCheck.id;
      }

      const voucher = await tx.paymentVoucher.create({
        data: {
          ...voucherData,
          amount: parseFloat(voucherData.amount),
          partner_id: voucherData.partner_id
            ? parseInt(voucherData.partner_id)
            : null,
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

      if (
        voucher.beneficiary_type === 'partner_withdrawal' &&
        voucher.partner_id
      ) {
        await tx.partner.update({
          where: { id: voucher.partner_id },
          data: {
            current_capital: { decrement: voucher.amount },
          },
        });
      }

      return voucher;
    });
  }

  async updatePayment(id: number, data: Partial<CreatePaymentVoucherDto>) {
    return this.prisma.$transaction(async (tx) => {
      const oldVoucher = await tx.paymentVoucher.findUnique({ where: { id } });
      if (!oldVoucher) throw new NotFoundException('Voucher not found');

      const { check, ...voucherData } = data as any;
      const amountDiff =
        (voucherData.amount
          ? parseFloat(voucherData.amount)
          : oldVoucher.amount) - oldVoucher.amount;

      const updatedVoucher = await tx.paymentVoucher.update({
        where: { id },
        data: {
          ...voucherData,
          amount: voucherData.amount
            ? parseFloat(voucherData.amount)
            : undefined,
          partner_id: voucherData.partner_id
            ? parseInt(voucherData.partner_id)
            : undefined,
        },
        include: { check: true },
      });

      if (
        updatedVoucher.beneficiary_type === 'partner_withdrawal' &&
        updatedVoucher.partner_id &&
        amountDiff !== 0
      ) {
        await tx.partner.update({
          where: { id: updatedVoucher.partner_id },
          data: { current_capital: { decrement: amountDiff } },
        });
      }

      return updatedVoucher;
    });
  }

  async removePayment(id: number) {
    return this.prisma.$transaction(async (tx) => {
      const voucher = await tx.paymentVoucher.findUnique({ where: { id } });
      if (!voucher) throw new NotFoundException('Voucher not found');

      if (
        voucher.beneficiary_type === 'partner_withdrawal' &&
        voucher.partner_id
      ) {
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

  async getStats(type: 'receipt' | 'payment', filters: ReceiptFilters & PaymentFilters) {
    const { start_date, end_date } = filters;
    const where: any = {};
    if (start_date || end_date) {
      where.voucher_date = {};
      if (start_date) where.voucher_date.gte = start_date;
      if (end_date) where.voucher_date.lte = end_date;
    }

    if (type === 'receipt') {
      const vouchers = await this.prisma.receiptVoucher.findMany({ where });
      const pendingChecks = await this.prisma.checkDetail.count({
        where: { status: 'pending', receipt_voucher_id: { not: null } },
      });

      return {
        total_amount: vouchers.reduce((sum, v) => sum + v.amount, 0),
        total_count: vouchers.length,
        by_source_type: vouchers.reduce((acc: Record<string, number>, v) => {
          const type = String(v.source_type);
          acc[type] = (acc[type] || 0) + v.amount;
          return acc;
        }, {}),
        by_payment_method: vouchers.reduce((acc: Record<string, number>, v) => {
          const method = String(v.payment_method);
          acc[method] = (acc[method] || 0) + v.amount;
          return acc;
        }, {}),
        pending_checks: pendingChecks,
      };
    } else {
      const vouchers = await this.prisma.paymentVoucher.findMany({ where });
      const pendingChecks = await this.prisma.checkDetail.count({
        where: { status: 'pending', payment_voucher_id: { not: null } },
      });

      return {
        total_amount: vouchers.reduce((sum, v) => sum + v.amount, 0),
        total_count: vouchers.length,
        by_beneficiary_type: vouchers.reduce((acc: Record<string, number>, v) => {
          acc[v.beneficiary_type] = (acc[v.beneficiary_type] || 0) + v.amount;
          return acc;
        }, {}),
        by_payment_method: vouchers.reduce((acc: any, v) => {
          acc[v.payment_method] = (acc[v.payment_method] || 0) + v.amount;
          return acc;
        }, {}),
        pending_checks: pendingChecks,
      };
    }
  }
}
