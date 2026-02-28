import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error('Error:', err);

    // Default error
    let statusCode = 500;
    let message = 'Internal Server Error';

    // Handle specific error types
    if (err.message === 'User already exists') {
        statusCode = 409;
        message = err.message;
    } else if (err.message === 'Invalid credentials') {
        statusCode = 401;
        message = err.message;
    } else if (err.name === 'ValidationError') {
        statusCode = 400;
        message = err.message;
    } else if (err.code === 'P2002') {
        // Prisma unique constraint error
        statusCode = 409;
        message = 'Resource already exists';
    }

    res.status(statusCode).json({
        success: false,
        message: message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
};
