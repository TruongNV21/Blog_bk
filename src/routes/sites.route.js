var express = require('express');
var router = express.Router();

const sitesController = require('../app/controllers/SitesController.js')
//Config path cho từng route
router.use('/search', sitesController.search)
router.use('/', sitesController.home);


module.exports = router;