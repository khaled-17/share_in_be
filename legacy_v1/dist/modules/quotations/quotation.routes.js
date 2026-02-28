import { Router } from 'express';
import * as quotationController from './quotation.controller.js';
const router = Router();
/**
 * @swagger
 * tags:
 *   name: Quotations
 *   description: Quotation management endpoints
 */
/**
 * @swagger
 * /api/v1/quotations:
 *   get:
 *     summary: Get all quotations
 *     tags: [Quotations]
 *     responses:
 *       200:
 *         description: List of quotations
 */
router.get('/', quotationController.getAllQuotations);
/**
 * @swagger
 * /api/v1/quotations/{id}:
 *   get:
 *     summary: Get quotation by ID
 *     tags: [Quotations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Quotation details
 *       404:
 *         description: Quotation not found
 */
router.get('/:id', quotationController.getQuotationById);
/**
 * @swagger
 * /api/v1/quotations:
 *   post:
 *     summary: Create a new quotation
 *     tags: [Quotations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customer_id
 *               - totalamount
 *               - status
 *             properties:
 *               customer_id:
 *                 type: string
 *               project_type_id:
 *                 type: string
 *               project_manager:
 *                 type: string
 *               project_name:
 *                 type: string
 *               quote_date:
 *                 type: string
 *               delivery_date:
 *                 type: string
 *               totalamount:
 *                 type: number
 *               paid_adv:
 *                 type: number
 *               adv_date:
 *                 type: string
 *               receipt_no:
 *                 type: string
 *               status:
 *                 type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     description:
 *                       type: string
 *                     unit_price:
 *                       type: number
 *                     quantity:
 *                       type: number
 *                     total:
 *                       type: number
 *     responses:
 *       201:
 *         description: Quotation created
 */
router.post('/', quotationController.createQuotation);
/**
 * @swagger
 * /api/v1/quotations/{id}:
 *   put:
 *     summary: Update quotation
 *     tags: [Quotations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Quotation updated
 */
router.put('/:id', quotationController.updateQuotation);
/**
 * @swagger
 * /api/v1/quotations/{id}:
 *   delete:
 *     summary: Delete quotation
 *     tags: [Quotations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Quotation deleted
 */
router.delete('/:id', quotationController.deleteQuotation);
export default router;
