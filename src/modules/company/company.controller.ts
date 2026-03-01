import {
    Controller,
    Get,
    Put,
    Body,
    UseGuards,
} from '@nestjs/common';
import {
    ApiTags,
    ApiOperation,
    ApiResponse,
    ApiBearerAuth,
} from '@nestjs/swagger';
import { CompanyService } from './company.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateCompanyDto } from './dto/company.dto';

@ApiTags('Company')
@ApiBearerAuth()
@Controller('company')
@UseGuards(JwtAuthGuard)
export class CompanyController {
    constructor(private companyService: CompanyService) { }

    @Get()
    @ApiOperation({ summary: 'Get company profile information' })
    @ApiResponse({ status: 200, description: 'Company data retrieved' })
    async getCompany() {
        const company = await this.companyService.getCompany();
        return {
            success: true,
            data: company,
        };
    }

    @Put()
    @ApiOperation({ summary: 'Update company profile' })
    @ApiResponse({ status: 200, description: 'Company updated successfully' })
    async update(@Body() updateCompanyDto: UpdateCompanyDto) {
        const company = await this.companyService.update(updateCompanyDto);
        return {
            success: true,
            message: 'Company updated successfully',
            data: company,
        };
    }
}
