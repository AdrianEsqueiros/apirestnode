const { check } = require('express-validator')
const validateResult = require('../utils/handleValidator')

const validatorRegister = [
  check('name').exists().notEmpty().isLength({ min: 3, max: 20 }),
  check('age').exists().notEmpty().isNumeric(),
  check('email').exists().notEmpty().isEmail(),
  check('password').exists().notEmpty().isLength({ min: 6, max: 20 }),

  (req, res, next) => {
    return validateResult(req, res, next)
  },
]
const validatorLogin = [
  check('email').exists().notEmpty().isEmail(),
  check('password').exists().notEmpty().isLength({ min: 6, max: 20 }),

  (req, res, next) => {
    return validateResult(req, res, next)
  },
]
module.exports = { validatorRegister, validatorLogin }
