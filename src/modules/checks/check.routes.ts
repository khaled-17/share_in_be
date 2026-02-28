import { Router } from 'express';
import * as checkController from './check.controller.js';

const router = Router();

router.get('/', checkController.getAllChecks);
router.get('/pending/due-soon', checkController.getDueSoonChecks);
router.get('/stats/summary', checkController.getCheckStatsSummary);
router.get('/:id', checkController.getCheckById);
router.put('/:id/status', checkController.updateCheckStatus);

export default router;
