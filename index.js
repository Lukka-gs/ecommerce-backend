require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

// Cria pool de conexões usando as variáveis do arquivo .env
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.get('/ping', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 AS result');
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
