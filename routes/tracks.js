const express = require('express');
const router = express.Router();

//TODO: http://localhost/tracks GET, POST, PUT, DELETE

router.get('', (req, res) => {
    const data = ['data', 'mundo']
    res.send({ data });
})

module.exports = router;