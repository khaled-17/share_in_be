import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ReportQueryDto } from './dto/report.dto';

@ApiTags('Reports')
@ApiBearerAuth()
@Controller('reports')
@UseGuards(JwtAuthGuard)
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Get('dashboard')
  @ApiOperation({ summary: 'Get main dashboard statistics' })
  @ApiResponse({ status: 200, description: 'Dashboard stats retrieved' })
  async getDashboardStats() {
    const stats = await this.reportsService.getDashboardStats();
    return {
      success: true,
      data: stats,
    };
  }

  @Get('financial')
  @ApiOperation({ summary: 'Get financial report' })
  @ApiResponse({ status: 200, description: 'Financial data retrieved' })
  async getFinancialReport(@Query() query: ReportQueryDto) {
    const data = await this.reportsService.getFinancialReport(
      query.start_date,
      query.end_date,
    );
    return {
      success: true,
      data,
    };
  }

  @Get('operational')
  @ApiOperation({ summary: 'Get operational report' })
  @ApiResponse({ status: 200, description: 'Operational data retrieved' })
  async getOperationalReport(@Query() query: ReportQueryDto) {
    const data = await this.reportsService.getOperationalReport(
      query.start_date,
      query.end_date,
    );
    return {
      success: true,
      data,
    };
  }
}
