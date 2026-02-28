import * as reviewService from './review.service.js';
import { successResponse } from '../../utils/response.js';
export const getAllReviews = async (req, res, next) => {
    try {
        const reviews = await reviewService.getAllReviews();
        return successResponse(res, reviews, 'Reviews retrieved successfully');
    }
    catch (error) {
        next(error);
    }
};
export const createReview = async (req, res, next) => {
    try {
        const review = await reviewService.createReview(req.body);
        return successResponse(res, review, 'Review created successfully', 201);
    }
    catch (error) {
        next(error);
    }
};
