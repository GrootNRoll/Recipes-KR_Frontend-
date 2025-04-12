import pool from '../config/db';

// Добавление рецепта в сохраненные
export const saveRecipe = async (userId: number, recipeId: number) => {
  const result = await pool.query(
    'INSERT INTO saved_recipes (user_id, recipe_id) VALUES ($1, $2) RETURNING *',
    [userId, recipeId]
  );
  return result.rows[0];
};

// Удаление рецепта из сохраненных
export const unsaveRecipe = async (userId: number, recipeId: number) => {
  await pool.query(
    'DELETE FROM saved_recipes WHERE user_id = $1 AND recipe_id = $2',
    [userId, recipeId]
  );
};

// Получение всех сохраненных рецептов пользователя
export const getSavedRecipes = async (userId: number, filter?: { type?: string }) => {
  let query = `
    SELECT r.* FROM recipes r
    JOIN saved_recipes sr ON r.id = sr.recipe_id
    WHERE sr.user_id = $1
  `;
  const params: any[] = [userId];

  if (filter?.type) {
    query += ' AND r.type = $2';
    params.push(filter.type);
  }

  const result = await pool.query(query, params);
  return result.rows;
};
