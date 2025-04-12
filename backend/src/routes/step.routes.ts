import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { addStep, getSteps } from '../controllers/step.controller';

const router = Router();

router.post('/', authMiddleware, addStep);
router.get('/:recipeId', getSteps);

export default router;

