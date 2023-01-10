const express = require('express');
const router = express.Router();
const { getItems, getItem } = require('../controllers/tracks');
//TODO: http://localhost/tracks GET, POST, PUT, DELETE

router.get('/', getItems)
router.get('/:id', getItem)

module.exports = router;