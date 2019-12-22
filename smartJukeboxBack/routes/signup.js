var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }
});
let User = mongoose.model('User', UserSchema);
module.exports = User;

router.post('/signup', function(req, res, next){
    if(
        req.body.username &&
        req.body.email &&
        req.body.emailConf &&
        req.body.password &&
        req.body.passwordConf &&
        req.body.email === req.body.emailConf &&
        req.body.password === req.body.passwordConf
    ) {
        var userData = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }

        User.create(userData, function (err, user) {
            if (err) {
                return next(err)
            } else {
                return res.redirect('/');
            }
        })
    }
});
