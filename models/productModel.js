const db = require('../config/db');

async function getAll() {
  const [rows] = await db.query('SELECT * FROM produtos');
  return rows;
}

async function getById(id) {
  const [rows] = await db.query('SELECT * FROM produtos WHERE id = ?', [id]);
  return rows[0];
}

async function create(product) {
  const { nome, preco, descricao, estoque } = product;
  const [result] = await db.query(
    'INSERT INTO produtos (nome, preco, descricao, estoque) VALUES (?, ?, ?, ?)',
    [nome, preco, descricao, estoque]
  );
  return result.insertId;
}

async function update(id, product) {
  const { nome, preco, descricao, estoque } = product;
  await db.query(
    'UPDATE produtos SET nome = ?, preco = ?, descricao = ?, estoque = ? WHERE id = ?',
    [nome, preco, descricao, estoque, id]
  );
}

async function remove(id) {
  await db.query('DELETE FROM produtos WHERE id = ?', [id]);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
