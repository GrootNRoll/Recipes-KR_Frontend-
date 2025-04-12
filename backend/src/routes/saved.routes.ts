import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { saveRecipe, unsaveRecipe, getSavedRecipes } from '../controllers/saved.controller';

const router = Router();

router.post('/', authMiddleware, saveRecipe);
router.delete('/:recipeId', authMiddleware, unsaveRecipe);
router.get('/', authMiddleware, getSavedRecipes);

export default router;
