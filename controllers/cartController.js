const Cart = require('../models/cartModel');

async function view(req, res) {
  try {
    const items = await Cart.getAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function add(req, res) {
  try {
    const { produto_id, quantidade } = req.body;
    await Cart.add(produto_id, quantidade);
    res.sendStatus(201);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function remove(req, res) {
  try {
    await Cart.remove(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  view,
  add,
  remove,
};
