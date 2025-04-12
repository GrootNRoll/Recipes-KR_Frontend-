import { Request, Response } from 'express';
import * as stepModel from '../models/step.model';

// Добавление шага
export const addStep = async (req: Request, res: Response) => {
  const { recipeId, stepNumber, text, note } = req.body;

  try {
    const step = await stepModel.createStep(recipeId, stepNumber, text, note);
    res.status(201).json(step);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при добавлении шага' });
  }
};

// Получение шагов рецепта
export const getSteps = async (req: Request, res: Response) => {
  const { recipeId } = req.params;

  try {
    const steps = await stepModel.getStepsByRecipeId(Number(recipeId));
    res.json(steps);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении шагов' });
  }
};
