import { Router } from 'express';
import * as expenseController from './expense.controller.js';
const router = Router();
/**
 * @swagger
 * tags:
 *   name: Expenses
 *   description: Expense management endpoints
 */
/**
 * @swagger
 * /api/v1/expenses:
 *   get:
 *     summary: Get all expense records
 *     tags: [Expenses]
 *     responses:
 *       200:
 *         description: List of items
 */
router.get('/', expenseController.getAllExpenses);
/**
 * @swagger
 * /api/v1/expenses/{id}:
 *   get:
 *     summary: Get expense by ID
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/:id', expenseController.getExpenseById);
/**
 * @swagger
 * /api/v1/expenses:
 *   post:
 *     summary: Create expense
 *     tags: [Expenses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - exp_date
 *               - amount
 *               - supplier_id
 *               - exptype_id
+ *     responses:
+ *       201:
+ *         description: Created
+ */
router.post('/', expenseController.createExpense);
/**
 * @swagger
 * /api/v1/expenses/{id}:
 *   put:
 *     summary: Update expense
 *     tags: [Expenses]
 *     parameters:
+ *       - in: path
+ *         name: id
+ *         required: true
+ *     responses:
+ *       200:
+ *         description: Updated
+ */
router.put('/:id', expenseController.updateExpense);
/**
 * @swagger
 * /api/v1/expenses/{id}:
 *   delete:
 *     summary: Delete expense
 *     tags: [Expenses]
 *     parameters:
+ *       - in: path
+ *         name: id
+ *         required: true
+ *     responses:
+ *       200:
+ *         description: Deleted
+ */
router.delete('/:id', expenseController.deleteExpense);
export default router;
