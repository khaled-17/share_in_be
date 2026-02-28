import * as reviewRepository from './review.repository.js';

export const getAllReviews = async () => {
    return reviewRepository.getAllReviews();
};

export const createReview = async (data: any) => {
    return reviewRepository.createReview(data);
};
