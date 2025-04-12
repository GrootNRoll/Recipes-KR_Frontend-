import pool from '../config/db';

// Создание шага
export const createStep = async (recipeId: number, stepNumber: number, text: string, note?: string) => {
  const result = await pool.query(
    'INSERT INTO steps (recipe_id, step_number, text, note) VALUES ($1, $2, $3, $4) RETURNING *',
    [recipeId, stepNumber, text, note]
  );
  return result.rows[0];
};

// Получение шагов рецепта
export const getStepsByRecipeId = async (recipeId: number) => {
  const result = await pool.query(
    'SELECT * FROM steps WHERE recipe_id = $1 ORDER BY step_number',
    [recipeId]
  );
  return result.rows;
};

// Обновление шага
export const updateStep = async (stepId: number, text: string, note?: string) => {
  const result = await pool.query(
    'UPDATE steps SET text = $1, note = $2 WHERE id = $3 RETURNING *',
    [text, note, stepId]
  );
  return result.rows[0];
};

// Удаление шага
export const deleteStep = async (stepId: number) => {
  await pool.query('DELETE FROM steps WHERE id = $1', [stepId]);
};
