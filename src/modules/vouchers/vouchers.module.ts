import { Module } from '@nestjs/common';
import { VouchersService } from './vouchers.service';
import {
  ReceiptVouchersController,
  PaymentVouchersController,
} from './vouchers.controller';

@Module({
  providers: [VouchersService],
  controllers: [ReceiptVouchersController, PaymentVouchersController],
})
export class VouchersModule {}
