var express = require('express');
var router = express.Router();
var multer = require('multer');

var upload = multer({dest: 'uploads/'});
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


/* GET upload page. */
router.get('/upload', function(req, res, next) {
  
  res.render('upload', {
  	title: 'Upload' 

  });

});


/* POST upload page */
router.post('/upload', upload.single('file'),function(req,res,next) {

  var name = req.body.name;
  var email = req.body.email;
  var code = req.body.code;
  var about_code = req.body.about_code;
  var fblink = req.body.fblink;
  var gitlink = req.body.gitlink;
  var about = req.body.about;
  console.log(req.file);
  console.log(req.body);
  req.flash('info', "sucessfully uploaded!!!");
  res.redirect('/');


  
});


/* GET Login page */
router.get('/login',function(req,res,next){

  res.render('login',{
    title: 'Login'
  });
});


/*GET Signup Page */

router.get('/signup', function(req,res,next){

  res.render('signup',{
    title: 'Signup'
  });
});

/*POST Signup page */
router.post('/signup',function(req,res,next){
  res.redirect('/');


})
module.exports = router;
