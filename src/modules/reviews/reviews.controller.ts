import {
    Controller,
    Get,
    Post,
    Body,
    UseGuards,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('reviews')
@UseGuards(JwtAuthGuard)
export class ReviewsController {
    constructor(private reviewsService: ReviewsService) { }

    @Get()
    async findAll() {
        const result = await this.reviewsService.findAll();
        return {
            success: true,
            message: 'Reviews retrieved successfully',
            data: result,
        };
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() data: any) {
        const result = await this.reviewsService.create(data);
        return {
            success: true,
            message: 'Review created successfully',
            data: result,
        };
    }
}
