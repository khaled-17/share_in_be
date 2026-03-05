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
import {
  VouchersService,
  ReceiptFilters,
  PaymentFilters,
} from './vouchers.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  CreateReceiptVoucherDto,
  CreatePaymentVoucherDto,
} from './dto/voucher.dto';

@ApiTags('ReceiptVouchers')
@ApiBearerAuth()
@Controller('receipt-vouchers')
@UseGuards(JwtAuthGuard)
export class ReceiptVouchersController {
  constructor(private vouchersService: VouchersService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all receipt vouchers' })
  @ApiResponse({ status: 200, description: 'List of receipt vouchers' })
  async findAll(@Query() query: ReceiptFilters) {
    const result = await this.vouchersService.findAllReceipt(query);
    return {
      success: true,
      message: 'Receipt vouchers retrieved successfully',
      data: result,
    };
  }

  @Get('stats/summary')
  @ApiOperation({ summary: 'Get receipt voucher statistics' })
  @ApiResponse({ status: 200, description: 'Receipt statistics' })
  async getStats(@Query() query: ReceiptFilters) {
    const result = await this.vouchersService.getStats('receipt', query);
    return {
      success: true,
      data: result,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a receipt voucher by ID' })
  @ApiParam({ name: 'id', description: 'Voucher ID', example: 1 })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.vouchersService.findOneReceipt(id);
    return {
      success: true,
      message: 'Receipt voucher retrieved successfully',
      data: result,
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new receipt voucher' })
  @ApiResponse({ status: 201, description: 'Receipt voucher created' })
  async create(@Body() data: CreateReceiptVoucherDto) {
    const result = await this.vouchersService.createReceipt(data);
    return {
      success: true,
      message: 'Receipt voucher created successfully',
      data: result,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a receipt voucher' })
  @ApiParam({ name: 'id', description: 'Voucher ID', example: 1 })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<CreateReceiptVoucherDto>,
  ) {
    const result = await this.vouchersService.updateReceipt(id, data);
    return {
      success: true,
      message: 'Receipt voucher updated successfully',
      data: result,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a receipt voucher' })
  @ApiParam({ name: 'id', description: 'Voucher ID', example: 1 })
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.vouchersService.removeReceipt(id);
    return {
      success: true,
      message: 'Receipt voucher deleted successfully',
    };
  }
}

@ApiTags('PaymentVouchers')
@ApiBearerAuth()
@Controller('payment-vouchers')
@UseGuards(JwtAuthGuard)
export class PaymentVouchersController {
  constructor(private vouchersService: VouchersService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all payment vouchers' })
  @ApiResponse({ status: 200, description: 'List of payment vouchers' })
  async findAll(@Query() query: PaymentFilters) {
    const result = await this.vouchersService.findAllPayment(query);
    return {
      success: true,
      message: 'Payment vouchers retrieved successfully',
      data: result,
    };
  }

  @Get('stats/summary')
  @ApiOperation({ summary: 'Get payment voucher statistics' })
  @ApiResponse({ status: 200, description: 'Payment statistics' })
  async getStats(@Query() query: PaymentFilters) {
    const result = await this.vouchersService.getStats('payment', query);
    return {
      success: true,
      data: result,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a payment voucher by ID' })
  @ApiParam({ name: 'id', description: 'Voucher ID', example: 1 })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.vouchersService.findOnePayment(id);
    return {
      success: true,
      message: 'Payment voucher retrieved successfully',
      data: result,
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new payment voucher' })
  @ApiResponse({ status: 201, description: 'Payment voucher created' })
  async create(@Body() data: CreatePaymentVoucherDto) {
    const result = await this.vouchersService.createPayment(data);
    return {
      success: true,
      message: 'Payment voucher created successfully',
      data: result,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a payment voucher' })
  @ApiParam({ name: 'id', description: 'Voucher ID', example: 1 })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<CreatePaymentVoucherDto>,
  ) {
    const result = await this.vouchersService.updatePayment(id, data);
    return {
      success: true,
      message: 'Payment voucher updated successfully',
      data: result,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a payment voucher' })
  @ApiParam({ name: 'id', description: 'Voucher ID', example: 1 })
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.vouchersService.removePayment(id);
    return {
      success: true,
      message: 'Payment voucher deleted successfully',
    };
  }
}
