import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
// Import modules
import userRoutes from './modules/users/user.routes.js';
import authRoutes from './modules/auth/auth.routes.js';
import customerRoutes from './modules/customers/customer.routes.js';
import supplierRoutes from './modules/suppliers/supplier.routes.js';
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
