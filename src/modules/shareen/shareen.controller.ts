import {
    Controller,
    Get,
    Post,
    Body,
    UseGuards,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { ShareenService } from './shareen.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('shareen')
@UseGuards(JwtAuthGuard)
export class ShareenController {
    constructor(private shareenService: ShareenService) { }

    @Get()
    async findAll() {
        const result = await this.shareenService.findAll();
        return {
            success: true,
            message: 'Shareen logs retrieved successfully',
            data: result,
        };
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() data: any) {
        const result = await this.shareenService.create(data);
        return {
            success: true,
            message: 'Shareen log created successfully',
            data: result,
        };
    }
}
