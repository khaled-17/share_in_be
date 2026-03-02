import { ReviewsService } from './reviews.service';
import { CreateReviewDto, UpdateReviewDto } from './dto/review.dto';
export declare class ReviewsController {
    private reviewsService;
    constructor(reviewsService: ReviewsService);
    findAll(): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            name: string;
            role: string | null;
            review: string;
            rating: number;
            avatar: string | null;
            phoneNumber: string | null;
            createdAt: Date;
        }[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            name: string;
            role: string | null;
            review: string;
            rating: number;
            avatar: string | null;
            phoneNumber: string | null;
            createdAt: Date;
        } | null;
    }>;
    create(createReviewDto: CreateReviewDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            name: string;
            role: string | null;
            review: string;
            rating: number;
            avatar: string | null;
            phoneNumber: string | null;
            createdAt: Date;
        };
    }>;
    update(id: string, updateReviewDto: UpdateReviewDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            name: string;
            role: string | null;
            review: string;
            rating: number;
            avatar: string | null;
            phoneNumber: string | null;
            createdAt: Date;
        };
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
