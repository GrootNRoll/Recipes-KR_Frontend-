import pool from '../config/db';

export const createRecipe = async (userId: number, title: string, type: string, image?: string) => {
  const result = await pool.query(
    'INSERT INTO recipes (user_id, title, type, image) VALUES ($1, $2, $3, $4) RETURNING *',
    [userId, title, type, image]
  );
  return result.rows[0];
};

export const getRecipes = async (filter?: { type?: string }) => {
  let query = 'SELECT * FROM recipes';
  const params = [];

  if (filter?.type) {
    query += ' WHERE type = $1';
    params.push(filter.type);
  }

  const result = await pool.query(query, params);
  return result.rows;
};

// Другие методы: getRecipeById, updateRecipe, deleteRecipe
