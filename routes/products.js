var express = require('express');
var router = express.Router();
const productsCtrl = require('../controllers/products')



// GET request to /products
router.get('/', productsCtrl.userShow)
//get index function show all prodycts
router.get('/showAll',productsCtrl.index)
//get/products/new 
router.get('/new', productsCtrl.newProduct)
// post/ products
router.post('/',productsCtrl.create)




module.exports = router;
