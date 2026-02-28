import { Router } from 'express';
import * as voucherController from './voucher.controller.js';
const router = Router();
/**
 * @swagger
 * tags:
 *   name: Payment Vouchers
 *   description: Payment voucher management endpoints
 */
/**
 * @swagger
 * /api/v1/payment-vouchers:
 *   get:
 *     summary: Get all payment vouchers
 *     tags: [Payment Vouchers]
 *     parameters:
 *       - in: query
 *         name: start_date
 *         schema:
 *           type: string
 *       - in: query
 *         name: end_date
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of items
 */
router.get('/', voucherController.getAllPaymentVouchers);
/**
 * @swagger
 * /api/v1/payment-vouchers/stats/summary:
 *   get:
 *     summary: Get payment voucher summary stats
 *     tags: [Payment Vouchers]
 *     responses:
 *       200:
 *         description: Stats
 */
router.get('/stats/summary', voucherController.getPaymentVoucherStats);
/**
 * @swagger
 * /api/v1/payment-vouchers/{id}:
 *   get:
 *     summary: Get payment voucher by ID
 *     tags: [Payment Vouchers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Detail
 */
router.get('/:id', voucherController.getPaymentVoucherById);
/**
 * @swagger
 * /api/v1/payment-vouchers:
 *   post:
 *     summary: Create payment voucher
 *     tags: [Payment Vouchers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - voucher_number
 *               - voucher_date
 *               - amount
 *               - beneficiary_type
 *               - payment_method
 *               - paid_to
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', voucherController.createPaymentVoucher);
/**
 * @swagger
 * /api/v1/payment-vouchers/{id}:
 *   put:
 *     summary: Update payment voucher
 *     tags: [Payment Vouchers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Updated
 */
router.put('/:id', voucherController.updatePaymentVoucher);
/**
 * @swagger
 * /api/v1/payment-vouchers/{id}:
 *   delete:
 *     summary: Delete payment voucher
 *     tags: [Payment Vouchers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete('/:id', voucherController.deletePaymentVoucher);
export default router;
