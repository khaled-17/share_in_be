import { Router } from 'express';
import * as shareenController from './shareen.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Shareen
 */

/**
 * @swagger
 * /api/v1/shareen:
 *   get:
 *     summary: Get all
 *     tags: [Shareen]
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', shareenController.getAllShareen);

/**
 * @swagger
 * /api/v1/shareen:
 *   post:
 *     summary: Create
 *     tags: [Shareen]
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', shareenController.createShareen);

export default router;
