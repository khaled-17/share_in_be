import { Request, Response, NextFunction } from 'express';
import * as reportsService from './reports.service.js';
import { successResponse, errorResponse } from '../../utils/response.js';

export const getLedgerReport = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { startDate, endDate } = req.query;

        if (!startDate || !endDate) {
            return errorResponse(res, 'Both startDate and endDate are required', 400);
        }

        const result = await reportsService.getLedgerReport(startDate as string, endDate as string);
        return successResponse(res, result, 'Ledger report retrieved successfully');
    } catch (error) {
        next(error);
    }
};
