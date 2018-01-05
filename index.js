var express             = require('express');
var app                 = express();
var bodyParse           = require('body-parser')
var cookieParser        = require('cookie-parser') ;
app.use(cookieParser()) ;
app.use(bodyParse.urlencoded({extended:false})) ;

app.get('/',function(req,res){
    res.sendfile('home.html') ;
    console.log('main page is required ');
}) ;

var server=app.listen(3000) ;
