const handleHttpError = (res, message = 'Something happen', code = 403) => {
    res.status(code)
    res.send({ error: message })
}

module.exports = { handleHttpError }