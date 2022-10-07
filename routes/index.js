var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flights')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/flights')
});

module.exports = router;
