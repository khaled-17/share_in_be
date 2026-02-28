import { Router } from 'express';
import * as voucherController from './voucher.controller.js';

const router = Router();

router.get('/', voucherController.getAllPaymentVouchers);
router.get('/stats/summary', voucherController.getPaymentVoucherStats);
router.get('/:id', voucherController.getPaymentVoucherById);
router.post('/', voucherController.createPaymentVoucher);
router.delete('/:id', voucherController.deletePaymentVoucher);

export default router;
