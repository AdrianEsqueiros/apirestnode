const { matchedData } = require('express-validator')
const { tracksModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')
/*
 * Obtener lista de la base de datos!
 * @param {*} req
 * @param {*} res
 */

const getItems = async (req, res) => {
  try {
    const user = req.user
    const data = await tracksModel.find({})
    res.send({ data, user })
  } catch (e) {
    handleHttpError(res, 'ERROR_GET_ITEMS')
  }
}
const getItem = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    const data = await tracksModel.findById(id)
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_GET_ITEMS')
  }
}
const createItem = async (req, res) => {
  try {
    const body = matchedData(req)
    const data = await tracksModel.create(body)
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_CREATE_ITEMS')
  }
}
const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req)
    const data = await tracksModel.findOneAndUpdate(id, body)
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_UPDATE_ITEMS')
  }
}
const deleteItem = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    const data = await tracksModel.delete({ _id: id })
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_DELETE_ITEMS')
  }
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
