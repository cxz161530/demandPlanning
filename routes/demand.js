var express = require('express');
var router = express.Router();
const demandCtrl = require('../controllers/demand')



// GET request to /demand
router.get('/', demandCtrl.index)





module.exports = router;
