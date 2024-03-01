const express = require('express')
const router = express.Router();
const demandsCtrl = require('../controllers/demands')

router.post('/products/:id/demand', demandsCtrl.create)
router.get('/demands/:id/edit', demandsCtrl.edit)
router.put('/demands/:id', demandsCtrl.update)

router.delete('/demands/:id', demandsCtrl.delete)

module.exports = router;
