import {
    Controller,
    Get,
    Query,
    UseGuards,
    BadRequestException,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('reports')
@UseGuards(JwtAuthGuard)
export class ReportsController {
    constructor(private reportsService: ReportsService) { }

    @Get('ledger')
    async getLedgerReport(
        @Query('startDate') startDate: string,
        @Query('endDate') endDate: string,
    ) {
        if (!startDate || !endDate) {
            throw new BadRequestException('Both startDate and endDate are required');
        }

        const result = await this.reportsService.getLedgerReport(startDate, endDate);
        return {
            success: true,
            message: 'Ledger report retrieved successfully',
            data: result,
        };
    }
}
