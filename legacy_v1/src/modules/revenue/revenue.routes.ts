import { Router } from 'express';
import * as revenueController from './revenue.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Revenue
 *   description: Revenue management endpoints
 */

/**
 * @swagger
 * /api/v1/revenue:
 *   get:
 *     summary: Get all revenue records
 *     tags: [Revenue]
 *     responses:
 *       200:
 *         description: List of revenue items
 */
router.get('/', revenueController.getAllRevenue);

/**
 * @swagger
 * /api/v1/revenue/{id}:
 *   get:
 *     summary: Get revenue by ID
 *     tags: [Revenue]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Detail
 */
router.get('/:id', revenueController.getRevenueById);

/**
 * @swagger
 * /api/v1/revenue:
 *   post:
 *     summary: Create revenue
 *     tags: [Revenue]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - rev_date
 *               - amount
 *               - customer_id
 *               - revtype_id
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', revenueController.createRevenue);

/**
 * @swagger
 * /api/v1/revenue/{id}:
 *   put:
 *     summary: Update revenue
 *     tags: [Revenue]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Updated
 */
router.put('/:id', revenueController.updateRevenue);

/**
 * @swagger
 * /api/v1/revenue/{id}:
 *   delete:
 *     summary: Delete revenue
 *     tags: [Revenue]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete('/:id', revenueController.deleteRevenue);

export default router;
