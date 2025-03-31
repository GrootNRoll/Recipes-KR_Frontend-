-- Пользователи
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(127) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Рецепты
CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  type VARCHAR(50) NOT NULL, -- 'breakfast', 'lunch', 'dinner', 'other'
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(127) NOT NULL,
  image TEXT -- base64 или ссылка
);

-- Шаги рецепта
CREATE TABLE steps (
  id SERIAL PRIMARY KEY,
  recipe_id INTEGER REFERENCES recipes(id),
  step_number INTEGER NOT NULL,
  text TEXT NOT NULL,
  note TEXT
);

-- Сохраненные рецепты
CREATE TABLE saved_recipes (
  user_id INTEGER REFERENCES users(id),
  recipe_id INTEGER REFERENCES recipes(id),
  PRIMARY KEY (user_id, recipe_id)
);
