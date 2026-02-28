import { Router } from 'express';
import * as workOrderController from './workorder.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: WorkOrders
 *   description: Work order management endpoints
 */

/**
 * @swagger
 * /api/v1/work-orders:
 *   get:
 *     summary: Get all work orders
 *     tags: [WorkOrders]
 *     responses:
 *       200:
+ *         description: List of items
+ */
router.get('/', workOrderController.getAllWorkOrders);

/**
 * @swagger
 * /api/v1/work-orders:
 *   post:
 *     summary: Create new work order
 *     tags: [WorkOrders]
 *     responses:
 *       201:
+ *         description: Created
+ */
router.post('/', workOrderController.createWorkOrder);

/**
 * @swagger
 * /api/v1/work-orders/{id}:
 *   delete:
 *     summary: Delete work order
 *     tags: [WorkOrders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
+ *         description: Deleted
+ */
router.delete('/:id', workOrderController.deleteWorkOrder);

export default router;
