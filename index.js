require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.use(express.json());

// Cria pool de conexões usando .env
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Exemplo de teste de conexão
app.get('/ping', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 AS result');
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Rotas da API
app.use('/produtos', productRoutes);
app.use('/carrinho', cartRoutes);

// Disponibiliza pool para usar nos controllers
app.set('pool', pool);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
