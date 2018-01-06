var express             = require('express');
var app                 = express();
var bodyParse           = require('body-parser');
var cookieParser        = require('cookie-parser');
var ejs = require('ejs');

app.use(cookieParser()) ;
app.use(bodyParse.urlencoded({extended:false})) ;
app.engine('html', ejs.renderFile);
app.set("view engine", "html");

app.get('/gan',function(req,res){
    res.sendfile('gan.html');
    console.log('gan page is required ');
});

app.get('/me',function(req,res){
    res.sendfile('home.html');
    console.log('main page is required ');
});

app.get('/red/:userid',function(req,res){
    new_url = "https://qr.alipay.com/" + req.params.userid;
    // var text = ejs.render("template", {new_url : new_url});
    // console.log('template page is  ' + new_url);
    // console.log(text);
    res.redirect(new_url);

app.get('/wuya',function(req,res){
    res.sendfile('wuya.html') ;
    console.log('wuya page is required ');
});

var server=app.listen(80) ;
