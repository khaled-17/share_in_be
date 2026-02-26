import { Response } from 'express';

export const successResponse = (res: Response, data: any, message: string = 'Success', statusCode: number = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};

export const errorResponse = (res: Response, message: string = 'Error', statusCode: number = 500, errors: any = null) => {
    return res.status(statusCode).json({
        success: false,
        message,
        ...(errors && { errors }),
    });
};

export const paginatedResponse = (res: Response, data: any, pagination: any, message: string = 'Success') => {
    return res.status(200).json({
        success: true,
        message,
        data,
        pagination: {
            page: pagination.page,
            limit: pagination.limit,
            total: pagination.total,
            totalPages: Math.ceil(pagination.total / pagination.limit),
        },
    });
};
