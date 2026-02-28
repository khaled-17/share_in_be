import { Router } from 'express';
import * as reportsController from './reports.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Reports
 *   description: Reporting endpoints
 */

/**
 * @swagger
 * /api/v1/reports/ledger:
 *   get:
 *     summary: Get Ledger Report
 *     tags: [Reports]
 *     parameters:
 *       - in: query
 *         name: startDate
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: endDate
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ledger report details
 */
router.get('/ledger', reportsController.getLedgerReport);

export default router;
