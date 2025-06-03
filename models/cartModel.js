const db = require('../config/db');

async function getAll() {
  const [rows] = await db.query(
    'SELECT c.id, c.produto_id, c.quantidade, p.nome, p.preco FROM carrinho c JOIN produtos p ON c.produto_id = p.id'
  );
  return rows;
}

async function add(produtoId, quantidade) {
  const [rows] = await db.query('SELECT id FROM carrinho WHERE produto_id = ?', [produtoId]);
  if (rows.length > 0) {
    await db.query('UPDATE carrinho SET quantidade = quantidade + ? WHERE produto_id = ?', [quantidade, produtoId]);
  } else {
    await db.query('INSERT INTO carrinho (produto_id, quantidade) VALUES (?, ?)', [produtoId, quantidade]);
  }
}

async function remove(id) {
  await db.query('DELETE FROM carrinho WHERE id = ?', [id]);
}

module.exports = {
  getAll,
  add,
  remove,
};
