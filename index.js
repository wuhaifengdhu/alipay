var express             = require('express');
var app                 = express();
var bodyParse           = require('body-parser')
var cookieParser        = require('cookie-parser') ;
app.use(cookieParser()) ;
app.use(bodyParse.urlencoded({extended:false})) ;

app.get('/me',function(req,res){
    res.sendfile('home.html') ;
    console.log('main page is required ');
});


app.get('/gan',function(req,res){
    res.sendfile('agan.html') ;
    console.log('main page is required ');
});

var server=app.listen(80) ;
