import { Router } from 'express';
import * as workOrderController from './workorder.controller.js';

const router = Router();

router.get('/', workOrderController.getAllWorkOrders);
router.post('/', workOrderController.createWorkOrder);
router.delete('/:id', workOrderController.deleteWorkOrder);

export default router;
