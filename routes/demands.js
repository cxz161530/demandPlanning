const express = require('express')
const router = express.Router();
const demandsCtrl = require('../controllers/demands')

router.post('/products/:id/demand', demandsCtrl.create)

module.exports = router;
