const express = require('express')
const router = express.Router()
const customHeader = require('../middleware/customHeader')
const authMiddleware = require('../middleware/session')
const {
  validatorCreateItem,
  validatorGetItem,
} = require('../validators/tracks')
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/tracks')
//TODO: http://localhost/tracks GET, POST, PUT, DELETE

router.get('/', authMiddleware, getItems)
router.get('/:id', validatorGetItem, getItem)
router.post('/', validatorCreateItem, createItem)
router.put('/:id', validatorGetItem, validatorCreateItem, updateItem)
router.delete('/:id', validatorGetItem, deleteItem)

module.exports = router
