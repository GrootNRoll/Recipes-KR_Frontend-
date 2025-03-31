
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import pool from './config/db';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Тестовый маршрут
app.get('/api/test', (req, res) => {
  res.json({ message: 'API работает!' });
});

// Обработка 404
app.use((req, res) => {
  res.status(404).json({ error: 'Не найдено' });
});

// Глобальная обработка ошибок
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Ошибка сервера' });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});