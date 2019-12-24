var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var uniqueSongYoutube = require('./routes/uniqueSongYoutube');
var signup = require('./routes/signup');
var login = require('./routes/login');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/uniqueSongYoutube', uniqueSongYoutube);
app.use('/api/v1/signup', signup);
app.use('/api/v1/login', login);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

module.exports = app;
