import { Request, Response } from 'express';
import * as savedModel from '../models/saved.model';

// Сохранить рецепт
export const saveRecipe = async (req: Request, res: Response) => {
  const { recipeId } = req.body;
  const userId = (req as any).user.id;

  try {
    await savedModel.saveRecipe(userId, recipeId);
    res.status(201).json({ message: 'Рецепт сохранен' });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при сохранении рецепта' });
  }
};

// Удалить из сохраненных
export const unsaveRecipe = async (req: Request, res: Response) => {
  const { recipeId } = req.params;
  const userId = (req as any).user.id;

  try {
    await savedModel.unsaveRecipe(userId, Number(recipeId));
    res.json({ message: 'Рецепт удален из сохраненных' });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при удалении рецепта' });
  }
};

// Получить сохраненные рецепты
export const getSavedRecipes = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const { type } = req.query;

  try {
    const recipes = await savedModel.getSavedRecipes(userId, { type: type as string });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении рецептов' });
  }
};
