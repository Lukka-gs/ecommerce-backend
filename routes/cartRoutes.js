const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/', cartController.view);
router.post('/', cartController.add);
router.delete('/:id', cartController.remove);

module.exports = router;
