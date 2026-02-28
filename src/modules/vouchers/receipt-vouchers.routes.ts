import { Router } from 'express';
import * as voucherController from './voucher.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Receipt Vouchers
 *   description: Receipt voucher management endpoints
 */

/**
 * @swagger
 * /api/v1/receipt-vouchers:
 *   get:
 *     summary: Get all receipt vouchers
 *     tags: [Receipt Vouchers]
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
router.get('/', voucherController.getAllReceiptVouchers);

/**
 * @swagger
 * /api/v1/receipt-vouchers/stats/summary:
 *   get:
 *     summary: Get receipt voucher summary stats
 *     tags: [Receipt Vouchers]
 *     responses:
 *       200:
 *         description: Stats
 */
router.get('/stats/summary', voucherController.getReceiptVoucherStats);

/**
 * @swagger
 * /api/v1/receipt-vouchers/{id}:
 *   get:
 *     summary: Get receipt voucher by ID
 *     tags: [Receipt Vouchers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Detail
 */
router.get('/:id', voucherController.getReceiptVoucherById);

/**
 * @swagger
 * /api/v1/receipt-vouchers:
 *   post:
 *     summary: Create receipt voucher
 *     tags: [Receipt Vouchers]
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
 *               - source_type
 *               - payment_method
 *               - received_from
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', voucherController.createReceiptVoucher);

/**
 * @swagger
 * /api/v1/receipt-vouchers/{id}:
 *   put:
 *     summary: Update receipt voucher
 *     tags: [Receipt Vouchers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Updated
 */
router.put('/:id', voucherController.updateReceiptVoucher);

/**
 * @swagger
 * /api/v1/receipt-vouchers/{id}:
 *   delete:
 *     summary: Delete receipt voucher
 *     tags: [Receipt Vouchers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete('/:id', voucherController.deleteReceiptVoucher);

export default router;
