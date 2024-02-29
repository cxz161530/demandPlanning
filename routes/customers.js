const express = require('express');
const router = express.Router();
const customersCtrl = require('../controllers/customers');

router.get('/customers/new', customersCtrl.new);
router.post('/customers', customersCtrl.create);
router.post('/products/:productId/customers', customersCtrl.addToCust);

module.exports = router;