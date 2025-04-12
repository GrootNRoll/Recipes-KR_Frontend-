import { Request, Response } from 'express';
import * as recipeModel from '../models/recipe.model';

export const createRecipe = async (req: Request, res: Response) => {
  const { title, type, image } = req.body;
  const userId = (req as any).user.id; // Из authMiddleware

  try {
    const recipe = await recipeModel.createRecipe(userId, title, type, image);
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при создании рецепта' });
  }
};

export const getRecipes = async (req: Request, res: Response) => {
  const { type } = req.query;

  try {
    const recipes = await recipeModel.getRecipes({ type: type as string });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении рецептов' });
  }
};
