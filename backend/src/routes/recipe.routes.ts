import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { createRecipe, getRecipes } from '../controllers/recipe.controller';
import { validateRecipeType } from '../middleware/validation.middleware';

const router = Router();

router.post('/', authMiddleware, validateRecipeType, createRecipe);
router.get('/', getRecipes);

export default router;
