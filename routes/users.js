var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next){
	res.send('respond with a resource2');
});

router.get('/dor', function(req, res, next){
	res.send('ㅅㅂㄻ');
});

module.exports = router;
