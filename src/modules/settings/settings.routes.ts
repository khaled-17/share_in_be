import { Router } from 'express';
import * as settingsController from './settings.controller.js';

const router = Router();

// Revenue Types
router.get('/revenue-types', settingsController.getAllRevenueTypes);
router.post('/revenue-types', settingsController.createRevenueType);
router.put('/revenue-types/:id', settingsController.updateRevenueType);
router.delete('/revenue-types/:id', settingsController.deleteRevenueType);

// Expense Types
router.get('/expense-types', settingsController.getAllExpenseTypes);
router.post('/expense-types', settingsController.createExpenseType);
router.put('/expense-types/:id', settingsController.updateExpenseType);
router.delete('/expense-types/:id', settingsController.deleteExpenseType);

// Project Types
router.get('/project-types', settingsController.getAllProjectTypes);
router.post('/project-types', settingsController.createProjectType);
router.put('/project-types/:id', settingsController.updateProjectType);
router.delete('/project-types/:id', settingsController.deleteProjectType);

export default router;
