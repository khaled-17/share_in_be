import { Router } from 'express';
import * as voucherController from './voucher.controller.js';

const router = Router();

router.get('/', voucherController.getAllReceiptVouchers);
router.get('/stats/summary', voucherController.getReceiptVoucherStats);
router.get('/:id', voucherController.getReceiptVoucherById);
router.post('/', voucherController.createReceiptVoucher);
router.delete('/:id', voucherController.deleteReceiptVoucher);

export default router;
