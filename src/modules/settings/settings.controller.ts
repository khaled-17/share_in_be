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
    ParseIntPipe,
} from '@nestjs/common';
import { SettingsService } from './settings.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('settings')
@UseGuards(JwtAuthGuard)
export class SettingsController {
    constructor(private settingsService: SettingsService) { }

    // Revenue Types
    @Get('revenue-types')
    async getAllRevenueTypes() {
        const result = await this.settingsService.getAllRevenueTypes();
        return {
            success: true,
            message: 'Revenue types retrieved successfully',
            data: result,
        };
    }

    @Post('revenue-types')
    @HttpCode(HttpStatus.CREATED)
    async createRevenueType(@Body() data: any) {
        const result = await this.settingsService.createRevenueType(data);
        return {
            success: true,
            message: 'Revenue type created successfully',
            data: result,
        };
    }

    @Put('revenue-types/:id')
    async updateRevenueType(
        @Param('id', ParseIntPipe) id: number,
        @Body() data: any,
    ) {
        const result = await this.settingsService.updateRevenueType(id, data);
        return {
            success: true,
            message: 'Revenue type updated successfully',
            data: result,
        };
    }

    @Delete('revenue-types/:id')
    async deleteRevenueType(@Param('id', ParseIntPipe) id: number) {
        await this.settingsService.deleteRevenueType(id);
        return {
            success: true,
            message: 'Revenue type deleted successfully',
        };
    }

    // Expense Types
    @Get('expense-types')
    async getAllExpenseTypes() {
        const result = await this.settingsService.getAllExpenseTypes();
        return {
            success: true,
            message: 'Expense types retrieved successfully',
            data: result,
        };
    }

    @Post('expense-types')
    @HttpCode(HttpStatus.CREATED)
    async createExpenseType(@Body() data: any) {
        const result = await this.settingsService.createExpenseType(data);
        return {
            success: true,
            message: 'Expense type created successfully',
            data: result,
        };
    }

    @Put('expense-types/:id')
    async updateExpenseType(
        @Param('id', ParseIntPipe) id: number,
        @Body() data: any,
    ) {
        const result = await this.settingsService.updateExpenseType(id, data);
        return {
            success: true,
            message: 'Expense type updated successfully',
            data: result,
        };
    }

    @Delete('expense-types/:id')
    async deleteExpenseType(@Param('id', ParseIntPipe) id: number) {
        await this.settingsService.deleteExpenseType(id);
        return {
            success: true,
            message: 'Expense type deleted successfully',
        };
    }

    // Project Types
    @Get('project-types')
    async getAllProjectTypes() {
        const result = await this.settingsService.getAllProjectTypes();
        return {
            success: true,
            message: 'Project types retrieved successfully',
            data: result,
        };
    }

    @Post('project-types')
    @HttpCode(HttpStatus.CREATED)
    async createProjectType(@Body() data: any) {
        const result = await this.settingsService.createProjectType(data);
        return {
            success: true,
            message: 'Project type created successfully',
            data: result,
        };
    }

    @Put('project-types/:id')
    async updateProjectType(
        @Param('id', ParseIntPipe) id: number,
        @Body() data: any,
    ) {
        const result = await this.settingsService.updateProjectType(id, data);
        return {
            success: true,
            message: 'Project type updated successfully',
            data: result,
        };
    }

    @Delete('project-types/:id')
    async deleteProjectType(@Param('id', ParseIntPipe) id: number) {
        await this.settingsService.deleteProjectType(id);
        return {
            success: true,
            message: 'Project type deleted successfully',
        };
    }
}
