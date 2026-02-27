import { Router } from 'express';
import * as customerController from './customer.controller.js';
const router = Router();
/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: Customer management endpoints
 */
/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Get all customers
 *     tags: [Customers]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search by name, ID, phone, etc.
 *     responses:
 *       200:
 *         description: List of customers
 */
router.get('/', customerController.getAllCustomers);
/**
 * @swagger
 * /customers/{id}:
 *   get:
 *     summary: Get customer by ID
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Customer details
 *       404:
 *         description: Customer not found
 */
router.get('/:id', customerController.getCustomerById);
/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customer_id
 *               - name
 *               - contact_person
 *               - company_email
 *               - contact_email
 *               - phone
 *               - secondary_phone
 *               - address
 *             properties:
 *               customer_id:
 *                 type: string
 *               name:
 *                 type: string
 *               contact_person:
 *                 type: string
 *               company_email:
 *                 type: string
 *               contact_email:
 *                 type: string
 *               phone:
 *                 type: string
 *               secondary_phone:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       201:
 *         description: Customer created
 */
router.post('/', customerController.createCustomer);
/**
 * @swagger
 * /customers/{id}:
 *   put:
 *     summary: Update customer
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Customer updated
 */
router.put('/:id', customerController.updateCustomer);
/**
 * @swagger
 * /customers/{id}:
 *   delete:
 *     summary: Delete customer
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Customer deleted
 */
router.delete('/:id', customerController.deleteCustomer);
export default router;
