const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_Key
        if (apiKey === 'adrian') {
            next()
        } else {
            res.status(403)
            res.send({
                error: "Wrong API Key"
            })
        }
    }
    catch (e) {
        res.status(403)
        res.send({ error: "Something went wrong on customHeader" })
    }

}

module.exports = customHeader;