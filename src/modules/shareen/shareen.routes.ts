import { Router } from 'express';
import * as shareenController from './shareen.controller.js';

const router = Router();

router.get('/', shareenController.getAllShareen);
router.post('/', shareenController.createShareen);

export default router;
