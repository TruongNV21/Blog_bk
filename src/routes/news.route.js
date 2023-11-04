var express = require('express');
var router = express.Router();

const newsController = require('../app/controllers/NewsController')
//Config path cho từng route
router.use('/:detail', newsController.detail)
router.use('/',newsController.index)

module.exports = router;