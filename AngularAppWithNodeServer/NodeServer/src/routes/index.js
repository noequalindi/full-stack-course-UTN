const { Router } = require('express')
const router = Router();

var productos = require('../productos.json')

router.get('/', (req, res) => {
    res.json(productos)
})
module.exports = router;