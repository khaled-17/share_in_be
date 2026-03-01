import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    UseGuards,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import {
    ApiTags,
    ApiOperation,
    ApiResponse,
    ApiBearerAuth,
    ApiParam,
} from '@nestjs/swagger';
import { ReviewsService } from './reviews.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateReviewDto, UpdateReviewDto } from './dto/review.dto';

@ApiTags('Reviews')
@ApiBearerAuth()
@Controller('reviews')
@UseGuards(JwtAuthGuard)
export class ReviewsController {
    constructor(private reviewsService: ReviewsService) { }

    @Get()
    @ApiOperation({ summary: 'Retrieve all reviews' })
    @ApiResponse({ status: 200, description: 'List of reviews retrieved' })
    async findAll() {
        const reviews = await this.reviewsService.findAll();
        return {
            success: true,
            message: 'Reviews retrieved successfully',
            data: reviews,
        };
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a review by ID' })
    @ApiParam({ name: 'id', description: 'Review UUID', example: 'uuid-string' })
    @ApiResponse({ status: 200, description: 'Review found' })
    async findOne(@Param('id') id: string) {
        const review = await this.reviewsService.findOne(id);
        return {
            success: true,
            message: 'Review retrieved successfully',
            data: review,
        };
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new review' })
    @ApiResponse({ status: 201, description: 'Review created successfully' })
    async create(@Body() createReviewDto: CreateReviewDto) {
        const review = await this.reviewsService.create(createReviewDto);
        return {
            success: true,
            message: 'Review created successfully',
            data: review,
        };
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a review' })
    @ApiParam({ name: 'id', description: 'Review UUID', example: 'uuid-string' })
    @ApiResponse({ status: 200, description: 'Review updated successfully' })
    async update(
        @Param('id') id: string,
        @Body() updateReviewDto: UpdateReviewDto,
    ) {
        const review = await this.reviewsService.update(id, updateReviewDto);
        return {
            success: true,
            message: 'Review updated successfully',
            data: review,
        };
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a review' })
    @ApiParam({ name: 'id', description: 'Review UUID', example: 'uuid-string' })
    @ApiResponse({ status: 200, description: 'Review deleted successfully' })
    async remove(@Param('id') id: string) {
        await this.reviewsService.remove(id);
        return {
            success: true,
            message: 'Review deleted successfully',
        };
    }
}
