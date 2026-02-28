import { Router } from 'express';
import * as revenueController from './revenue.controller.js';

const router = Router();

router.get('/', revenueController.getAllRevenue);
router.get('/:id', revenueController.getRevenueById);
router.post('/', revenueController.createRevenue);
router.put('/:id', revenueController.updateRevenue);
router.delete('/:id', revenueController.deleteRevenue);

export default router;
