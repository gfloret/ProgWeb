const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const playlists = require('./routes/playlists');
const signup = require('./routes/signup');
const login = require('./routes/login');
const channel = require('./routes/channel');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "access-control-allow-origin, Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/playlists', playlists);
app.use('/api/v1/signup', signup);
app.use('/api/v1/login', login);
app.use('/api/v1/channel', channel);

module.exports = app;
