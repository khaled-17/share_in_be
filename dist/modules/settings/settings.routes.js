import { Router } from 'express';
import * as settingsController from './settings.controller.js';
const router = Router();
/**
 * @swagger
 * tags:
 *   name: Settings
 *   description: Global settings and type management
 */
// Revenue Types
/**
 * @swagger
 * /api/v1/settings/revenue-types:
 *   get:
 *     summary: Get all revenue types
 *     tags: [Settings]
 *     responses:
 *       200:
 *         description: List of revenue types
 */
router.get('/revenue-types', settingsController.getAllRevenueTypes);
/**
 * @swagger
 * /api/v1/settings/revenue-types:
 *   post:
 *     summary: Create revenue type
 *     tags: [Settings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - revtype_id
 *               - revtype_name
 *     responses:
+ *       201:
+ *         description: Revenue type created
+ */
router.post('/revenue-types', settingsController.createRevenueType);
/**
 * @swagger
 * /api/v1/settings/revenue-types/{id}:
 *   put:
 *     summary: Update revenue type
 *     tags: [Settings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Updated
 */
router.put('/revenue-types/:id', settingsController.updateRevenueType);
/**
 * @swagger
 * /api/v1/settings/revenue-types/{id}:
 *   delete:
 *     summary: Delete revenue type
 *     tags: [Settings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete('/revenue-types/:id', settingsController.deleteRevenueType);
// Expense Types
/**
 * @swagger
 * /api/v1/settings/expense-types:
 *   get:
 *     summary: Get all expense types
 *     tags: [Settings]
 *     responses:
 *       200:
 *         description: List of expense types
 */
router.get('/expense-types', settingsController.getAllExpenseTypes);
/**
 * @swagger
 * /api/v1/settings/expense-types:
 *   post:
 *     summary: Create expense type
 *     tags: [Settings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - exptype_id
 *               - exptype_name
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/expense-types', settingsController.createExpenseType);
/**
 * @swagger
 * /api/v1/settings/expense-types/{id}:
 *   put:
 *     summary: Update expense type
 *     tags: [Settings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Updated
 */
router.put('/expense-types/:id', settingsController.updateExpenseType);
/**
 * @swagger
 * /api/v1/settings/expense-types/{id}:
 *   delete:
 *     summary: Delete expense type
 *     tags: [Settings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete('/expense-types/:id', settingsController.deleteExpenseType);
// Project Types
/**
 * @swagger
 * /api/v1/settings/project-types:
 *   get:
 *     summary: Get all project types
 *     tags: [Settings]
 *     responses:
 *       200:
 *         description: List
 */
router.get('/project-types', settingsController.getAllProjectTypes);
/**
 * @swagger
 * /api/v1/settings/project-types:
 *   post:
 *     summary: Create project type
 *     tags: [Settings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - type_id
 *               - type_name
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/project-types', settingsController.createProjectType);
/**
 * @swagger
 * /api/v1/settings/project-types/{id}:
 *   put:
 *     summary: Update project type
 *     tags: [Settings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Updated
 */
router.put('/project-types/:id', settingsController.updateProjectType);
/**
 * @swagger
 * /api/v1/settings/project-types/{id}:
 *   delete:
 *     summary: Delete project type
 *     tags: [Settings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete('/project-types/:id', settingsController.deleteProjectType);
export default router;
