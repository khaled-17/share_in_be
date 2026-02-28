import { Router } from 'express';
import * as checkController from './check.controller.js';
const router = Router();
/**
 * @swagger
 * tags:
 *   name: Checks
 *   description: Check / Cheque management endpoints
 */
/**
 * @swagger
 * /api/v1/checks:
 *   get:
 *     summary: Get all checks
 *     tags: [Checks]
 *     responses:
 *       200:
 *         description: List of items
 */
router.get('/', checkController.getAllChecks);
/**
 * @swagger
 * /api/v1/checks/pending/due-soon:
 *   get:
 *     summary: Get checks due soon (next 7 days)
 *     tags: [Checks]
 *     responses:
 *       200:
 *         description: List
 */
router.get('/pending/due-soon', checkController.getDueSoonChecks);
/**
 * @swagger
 * /api/v1/checks/stats/summary:
 *   get:
 *     summary: Get check statistics summary
 *     tags: [Checks]
 *     responses:
 *       200:
 *         description: Stats
 */
router.get('/stats/summary', checkController.getCheckStatsSummary);
/**
 * @swagger
 * /api/v1/checks/{id}:
 *   get:
 *     summary: Get check by ID
 *     tags: [Checks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/:id', checkController.getCheckById);
/**
 * @swagger
 * /api/v1/checks/{id}/status:
 *   put:
 *     summary: Update check status
 *     tags: [Checks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *     responses:
 *       200:
 *         description: Updated
 */
router.put('/:id/status', checkController.updateCheckStatus);
export default router;
