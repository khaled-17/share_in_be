import {
    Controller,
    Get,
    Put,
    Body,
    UseGuards,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('company')
@UseGuards(JwtAuthGuard)
export class CompanyController {
    constructor(private companyService: CompanyService) { }

    @Get('settings')
    async getSettings() {
        const result = await this.companyService.getSettings();
        return {
            success: true,
            message: 'Company settings retrieved successfully',
            data: result || {},
        };
    }

    @Put('settings')
    async updateSettings(@Body() data: any) {
        const result = await this.companyService.updateSettings(data);
        return {
            success: true,
            message: 'Company settings updated successfully',
            data: result,
        };
    }
}
