import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Query,
    UseGuards,
    HttpCode,
    HttpStatus,
    ParseIntPipe,
} from '@nestjs/common';
import { VouchersService } from './vouchers.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('vouchers')
@UseGuards(JwtAuthGuard)
export class VouchersController {
    constructor(private vouchersService: VouchersService) { }

    // Receipt Vouchers
    @Get('receipt')
    async findAllReceipt(@Query() query: any) {
        const result = await this.vouchersService.findAllReceipt(query);
        return {
            success: true,
            message: 'Receipt vouchers retrieved successfully',
            data: result,
        };
    }

    @Get('receipt/stats')
    async getReceiptStats(@Query() query: any) {
        const result = await this.vouchersService.getStats('receipt', query);
        return {
            success: true,
            message: 'Receipt voucher stats retrieved successfully',
            data: result,
        };
    }

    @Get('receipt/:id')
    async findOneReceipt(@Param('id', ParseIntPipe) id: number) {
        const result = await this.vouchersService.findOneReceipt(id);
        return {
            success: true,
            message: 'Receipt voucher retrieved successfully',
            data: result,
        };
    }

    @Post('receipt')
    @HttpCode(HttpStatus.CREATED)
    async createReceipt(@Body() data: any) {
        const result = await this.vouchersService.createReceipt(data);
        return {
            success: true,
            message: 'Receipt voucher created successfully',
            data: result,
        };
    }

    @Put('receipt/:id')
    async updateReceipt(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
        const result = await this.vouchersService.updateReceipt(id, data);
        return {
            success: true,
            message: 'Receipt voucher updated successfully',
            data: result,
        };
    }

    @Delete('receipt/:id')
    async removeReceipt(@Param('id', ParseIntPipe) id: number) {
        await this.vouchersService.removeReceipt(id);
        return {
            success: true,
            message: 'Receipt voucher deleted successfully',
        };
    }

    // Payment Vouchers
    @Get('payment')
    async findAllPayment(@Query() query: any) {
        const result = await this.vouchersService.findAllPayment(query);
        return {
            success: true,
            message: 'Payment vouchers retrieved successfully',
            data: result,
        };
    }

    @Get('payment/stats')
    async getPaymentStats(@Query() query: any) {
        const result = await this.vouchersService.getStats('payment', query);
        return {
            success: true,
            message: 'Payment voucher stats retrieved successfully',
            data: result,
        };
    }

    @Get('payment/:id')
    async findOnePayment(@Param('id', ParseIntPipe) id: number) {
        const result = await this.vouchersService.findOnePayment(id);
        return {
            success: true,
            message: 'Payment voucher retrieved successfully',
            data: result,
        };
    }

    @Post('payment')
    @HttpCode(HttpStatus.CREATED)
    async createPayment(@Body() data: any) {
        const result = await this.vouchersService.createPayment(data);
        return {
            success: true,
            message: 'Payment voucher created successfully',
            data: result,
        };
    }

    @Put('payment/:id')
    async updatePayment(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
        const result = await this.vouchersService.updatePayment(id, data);
        return {
            success: true,
            message: 'Payment voucher updated successfully',
            data: result,
        };
    }

    @Delete('payment/:id')
    async removePayment(@Param('id', ParseIntPipe) id: number) {
        await this.vouchersService.removePayment(id);
        return {
            success: true,
            message: 'Payment voucher deleted successfully',
        };
    }
}
