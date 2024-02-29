const express = require('express')
const router = express.Router();
const demandsCtrl = require('../controllers/demands')

router.post('/products/:id/demands', demandsCtrl.create)

module.exports = router;
