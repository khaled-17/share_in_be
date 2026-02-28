import * as partnerService from './partner.service.js';
import { successResponse, errorResponse } from '../../utils/response.js';
export const getAllPartners = async (req, res, next) => {
    try {
        const result = await partnerService.getAllPartners();
        return successResponse(res, result, 'Partners retrieved successfully');
    }
    catch (error) {
        next(error);
    }
};
export const getPartnerById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id))
            return errorResponse(res, 'Invalid ID', 400);
        const partner = await partnerService.getPartnerById(id);
        return successResponse(res, partner, 'Partner retrieved successfully');
    }
    catch (error) {
        if (error.message === 'Partner not found')
            return errorResponse(res, error.message, 404);
        next(error);
    }
};
export const getPartnerSummary = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id))
            return errorResponse(res, 'Invalid ID', 400);
        const summary = await partnerService.getPartnerSummary(id);
        return successResponse(res, summary, 'Partner summary retrieved successfully');
    }
    catch (error) {
        if (error.message === 'Partner not found')
            return errorResponse(res, error.message, 404);
        next(error);
    }
};
export const createPartner = async (req, res, next) => {
    try {
        const partner = await partnerService.createPartner(req.body);
        return successResponse(res, partner, 'Partner created successfully', 201);
    }
    catch (error) {
        if (error.message === 'Partner Code already exists')
            return errorResponse(res, error.message, 400);
        next(error);
    }
};
export const updatePartner = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id))
            return errorResponse(res, 'Invalid ID', 400);
        const partner = await partnerService.updatePartner(id, req.body);
        return successResponse(res, partner, 'Partner updated successfully');
    }
    catch (error) {
        if (error.message === 'Partner not found')
            return errorResponse(res, error.message, 404);
        if (error.message === 'Partner Code already exists')
            return errorResponse(res, error.message, 400);
        next(error);
    }
};
export const deletePartner = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id))
            return errorResponse(res, 'Invalid ID', 400);
        await partnerService.deletePartner(id);
        return successResponse(res, null, 'Partner deleted successfully');
    }
    catch (error) {
        if (error.message === 'Partner not found')
            return errorResponse(res, error.message, 404);
        next(error);
    }
};
