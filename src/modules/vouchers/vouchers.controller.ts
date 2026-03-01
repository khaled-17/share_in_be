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
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';
import { VouchersService } from './vouchers.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  CreateReceiptVoucherDto,
  CreatePaymentVoucherDto,
} from './dto/voucher.dto';

@ApiTags('Vouchers')
@ApiBearerAuth()
@Controller('vouchers')
@UseGuards(JwtAuthGuard)
export class VouchersController {
  constructor(private vouchersService: VouchersService) {}

  @Get('receipts')
  @ApiOperation({ summary: 'Retrieve all receipt vouchers' })
  @ApiResponse({ status: 200, description: 'List of receipt vouchers' })
  async findAllReceipt(@Query() query: any) {
    const result = await this.vouchersService.findAllReceipt(query);
    return {
      success: true,
      message: 'Receipt vouchers retrieved successfully',
      data: result,
    };
  }

  @Get('payments')
  @ApiOperation({ summary: 'Retrieve all payment vouchers' })
  @ApiResponse({ status: 200, description: 'List of payment vouchers' })
  async findAllPayment(@Query() query: any) {
    const result = await this.vouchersService.findAllPayment(query);
    return {
      success: true,
      message: 'Payment vouchers retrieved successfully',
      data: result,
    };
  }

  @Post('receipts')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new receipt voucher' })
  @ApiResponse({ status: 201, description: 'Receipt voucher created' })
  async createReceipt(@Body() data: CreateReceiptVoucherDto) {
    const result = await this.vouchersService.createReceipt(data);
    return {
      success: true,
      message: 'Receipt voucher created successfully',
      data: result,
    };
  }

  @Post('payments')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new payment voucher' })
  @ApiResponse({ status: 201, description: 'Payment voucher created' })
  async createPayment(@Body() data: CreatePaymentVoucherDto) {
    const result = await this.vouchersService.createPayment(data);
    return {
      success: true,
      message: 'Payment voucher created successfully',
      data: result,
    };
  }

  @Delete('receipts/:id')
  @ApiOperation({ summary: 'Delete a receipt voucher' })
  @ApiParam({ name: 'id', description: 'Voucher ID', example: 1 })
  async removeReceipt(@Param('id', ParseIntPipe) id: number) {
    await this.vouchersService.removeReceipt(id);
    return {
      success: true,
      message: 'Receipt voucher deleted successfully',
    };
  }

  @Delete('payments/:id')
  @ApiOperation({ summary: 'Delete a payment voucher' })
  @ApiParam({ name: 'id', description: 'Voucher ID', example: 1 })
  async removePayment(@Param('id', ParseIntPipe) id: number) {
    await this.vouchersService.removePayment(id);
    return {
      success: true,
      message: 'Payment voucher deleted successfully',
    };
  }
}
