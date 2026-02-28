import * as companyService from './company.service.js';
import { successResponse } from '../../utils/response.js';
export const getSettings = async (req, res, next) => {
    try {
        const settings = await companyService.getSettings();
        return successResponse(res, settings || {}, 'Company settings retrieved successfully');
    }
    catch (error) {
        next(error);
    }
};
export const updateSettings = async (req, res, next) => {
    try {
        const settings = await companyService.updateSettings(req.body);
        return successResponse(res, settings, 'Company settings updated successfully');
    }
    catch (error) {
        next(error);
    }
};
