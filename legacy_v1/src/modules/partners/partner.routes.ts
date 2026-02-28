import { Router } from 'express';
import * as partnerController from './partner.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Partners
 *   description: Partner management endpoints
 */

/**
 * @swagger
 * /api/v1/partners:
 *   get:
 *     summary: Get all partners
 *     tags: [Partners]
 *     responses:
 *       200:
 *         description: List of partners
 */
router.get('/', partnerController.getAllPartners);

/**
 * @swagger
 * /api/v1/partners/{id}:
 *   get:
 *     summary: Get partner by ID
 *     tags: [Partners]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Partner details
 */
router.get('/:id', partnerController.getPartnerById);

/**
 * @swagger
 * /api/v1/partners/{id}/summary:
 *   get:
 *     summary: Get partner summary including financial details
 *     tags: [Partners]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Partner summary
 */
router.get('/:id/summary', partnerController.getPartnerSummary);

/**
 * @swagger
 * /api/v1/partners:
 *   post:
 *     summary: Create a new partner
 *     tags: [Partners]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Partner created
 */
router.post('/', partnerController.createPartner);

/**
 * @swagger
 * /api/v1/partners/{id}:
 *   put:
 *     summary: Update a partner
 *     tags: [Partners]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Partner updated
 */
router.put('/:id', partnerController.updatePartner);

/**
 * @swagger
 * /api/v1/partners/{id}:
 *   delete:
 *     summary: Delete a partner
 *     tags: [Partners]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Partner deleted
 */
router.delete('/:id', partnerController.deletePartner);

export default router;
