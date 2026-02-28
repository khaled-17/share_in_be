import * as reportsService from './reports.service.js';
import { successResponse, errorResponse } from '../../utils/response.js';
export const getLedgerReport = async (req, res, next) => {
    try {
        const { startDate, endDate } = req.query;
        if (!startDate || !endDate) {
            return errorResponse(res, 'Both startDate and endDate are required', 400);
        }
        const result = await reportsService.getLedgerReport(startDate, endDate);
        return successResponse(res, result, 'Ledger report retrieved successfully');
    }
    catch (error) {
        next(error);
    }
};
