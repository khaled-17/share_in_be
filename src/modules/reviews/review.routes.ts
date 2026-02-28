import { Router } from 'express';
import * as reviewController from './review.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Customer reviews management
 */

/**
 * @swagger
 * /api/v1/reviews:
 *   get:
 *     summary: Get all customer reviews
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: List of reviews
 */
router.get('/', reviewController.getAllReviews);

/**
 * @swagger
 * /api/v1/reviews:
 *   post:
 *     summary: Create a new customer review
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - review
 *               - rating
 *             properties:
 *               name:
 *                 type: string
 *               role:
 *                 type: string
 *               review:
 *                 type: string
 *               rating:
 *                 type: integer
 *               avatar:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *     responses:
 *       201:
 *         description: Review created
 */
router.post('/', reviewController.createReview);

export default router;
