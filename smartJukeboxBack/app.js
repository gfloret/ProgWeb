var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var playlists = require('./routes/playlists');
var signup = require('./routes/signup');
var login = require('./routes/login');
var channel = require('./routes/channel');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/playlists', playlists);
app.use('/api/v1/signup', signup);
app.use('/api/v1/login', login);
app.use('/api/v1/channel', channel);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

module.exports = app;
