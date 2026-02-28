import { Router } from 'express';
import * as companyController from './company.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Company
 *   description: Company settings management
 */

/**
 * @swagger
 * /api/v1/company:
 *   get:
 *     summary: Get company settings
 *     tags: [Company]
 *     responses:
 *       200:
 *         description: Company settings
 */
router.get('/', companyController.getSettings);

/**
 * @swagger
 * /api/v1/company:
 *   put:
 *     summary: Update company settings
 *     tags: [Company]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               about:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               website:
 *                 type: string
 *     responses:
 *       200:
 *         description: Company settings updated
 */
router.put('/', companyController.updateSettings);

export default router;
