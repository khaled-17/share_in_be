import app from './app.js';
import prisma from './config/prisma.js';
import logger from './utils/logger.js';

const PORT: string | number = process.env.PORT || 3000;

const startServer = async (): Promise<void> => {
    try {
        await prisma.$connect();
        logger.info('✅ Connected to Database!');

        app.listen(PORT, () => {
            logger.info(`🚀 Server is running on http://localhost:${PORT}`);
            logger.info(`📚 API Documentation: http://localhost:${PORT}/api-docs`);
            logger.info(`🏥 Health Check: http://localhost:${PORT}/health`);
        });
    } catch (error) {
        logger.error('❌ Database connection failed:', error);
        process.exit(1);
    }
};

// Graceful shutdown
process.on('SIGTERM', async () => {
    logger.info('SIGTERM signal received: closing HTTP server');
    await prisma.$disconnect();
    process.exit(0);
});

process.on('SIGINT', async () => {
    logger.info('SIGINT signal received: closing HTTP server');
    await prisma.$disconnect();
    process.exit(0);
});

startServer();
