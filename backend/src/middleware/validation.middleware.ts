import { Request, Response, NextFunction } from 'express';

// Проверка типа блюда
export const validateRecipeType = (req: Request, res: Response, next: NextFunction) => {
  const validTypes = ['breakfast', 'lunch', 'dinner', 'other'];
  const { type } = req.body;

  if (!validTypes.includes(type)) {
    return res.status(400).json({ error: 'Недопустимый тип блюда' });
  }

  next();
};
