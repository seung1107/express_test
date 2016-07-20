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

router.get('/login', function(req, res, next){
	  if(req.session.logined)
	    res.render('logout', {session: req.session})
	  else {
	    res.render('login', {session: req.session})
	  }
	 
	})


module.exports = router;
