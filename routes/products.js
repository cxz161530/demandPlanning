var express = require('express');
var router = express.Router();
const productsCtrl = require('../controllers/products')



// GET request to /products
router.get('/', productsCtrl.userShow)
//get index function show all prodycts
router.get('/showAll',productsCtrl.index)




module.exports = router;
