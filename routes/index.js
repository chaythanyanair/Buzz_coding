var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var drinks = [
  	{name: 'Bloody Mary', drunkness:3},
  	{name: 'Martini', drunkness:5},
  	{name: 'Scotch', drunkness:10}

  ];
  var tagline = "Get your code rated!"

 

  res.render('index', { 

  	drinks:drinks,
  	title: 'Home',
  	tagline: tagline,
  	res: res
  });

});


/* GET about page. */
router.get('/about', function(req, res, next) {
  
  res.render('about', {
  	title: 'About' 

  });

});


/* POST upload page. */
router.get('/upload', function(req, res, next) {
  
  res.render('upload', {
  	title: 'Upload' 

  });

});

module.exports = router;
