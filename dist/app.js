import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
// Import modules
import userRoutes from './modules/users/user.routes.js';
import authRoutes from './modules/auth/auth.routes.js';
import customerRoutes from './modules/customers/customer.routes.js';
import supplierRoutes from './modules/suppliers/supplier.routes.js';
import employeeRoutes from './modules/employees/employee.routes.js';
import partnerRoutes from './modules/partners/partner.routes.js';
import settingsRoutes from './modules/settings/settings.routes.js';
import revenueRoutes from './modules/revenue/revenue.routes.js';
import expenseRoutes from './modules/expenses/expense.routes.js';
import quotationRoutes from './modules/quotations/quotation.routes.js';
import workOrderRoutes from './modules/workorders/workorder.routes.js';
import checkRoutes from './modules/checks/check.routes.js';
import receiptVoucherRoutes from './modules/vouchers/receipt-vouchers.routes.js';
import paymentVoucherRoutes from './modules/vouchers/payment-vouchers.routes.js';
import shareenRoutes from './modules/shareen/shareen.routes.js';
import reviewRoutes from './modules/reviews/review.routes.js';
import companyRoutes from './modules/company/company.routes.js';
import reportsRoutes from './modules/reports/reports.routes.js';
// Import middlewares
import { errorHandler } from './middlewares/error.middleware.js';
// Import swagger
import swaggerSpec from './config/swagger.js';
dotenv.config();
const app = express();
// Middleware
app.use(cors());
app.use(express.json());
// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/customers', customerRoutes);
app.use('/api/v1/suppliers', supplierRoutes);
app.use('/api/v1/employees', employeeRoutes);
app.use('/api/v1/partners', partnerRoutes);
app.use('/api/v1/settings', settingsRoutes);
app.use('/api/v1/revenue', revenueRoutes);
app.use('/api/v1/expenses', expenseRoutes);
app.use('/api/v1/quotations', quotationRoutes);
app.use('/api/v1/work-orders', workOrderRoutes);
app.use('/api/v1/checks', checkRoutes);
app.use('/api/v1/receipt-vouchers', receiptVoucherRoutes);
app.use('/api/v1/payment-vouchers', paymentVoucherRoutes);
app.use('/api/v1/shareen', shareenRoutes);
app.use('/api/v1/reviews', reviewRoutes);
app.use('/api/v1/company', companyRoutes);
app.use('/api/v1/reports', reportsRoutes);
/**
 * @swagger
 * /:
 *   get:
 *     summary: API root endpoint
 *     description: Returns basic information about the API
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: API is running
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Welcome to the Share In Backend API
 *                 version:
 *                   type: string
 *                   example: 1.0.0
 *                 status:
 *                   type: string
 *                   example: Running
 */
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to the Share In Backend API',
        version: '1.0.0',
        status: 'Running',
        documentation: '/api-docs',
    });
});
/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check endpoint
 *     description: Check if the API is healthy and running
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: API is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: API is healthy
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: 2024-01-01T00:00:00.000Z
 */
app.get('/health', (req, res) => {
    res.json({
        success: true,
        message: 'API is healthy',
        timestamp: new Date().toISOString(),
    });
});
// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
    });
});
// Error handler
app.use(errorHandler);
export default app;
