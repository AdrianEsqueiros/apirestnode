const { tracksModel } = require('../models')
/*
* Obtener lista de la base de datos!
* @param {*} req
* @param {*} res
*/

const getItems = async (req, res) => {
    const data = await tracksModel.find({})
    res.send({ data });
};


const getItem = (req, res) => { };
const createItem = (req, res) => { };
const updateItem = (req, res) => { };
const deleteItem = (req, res) => { };

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }