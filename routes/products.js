var express = require('express');
var router = express.Router();
const productsCtrl = require('../controllers/products')



// GET request to /demand
router.get('/', productsCtrl.index)





module.exports = router;
