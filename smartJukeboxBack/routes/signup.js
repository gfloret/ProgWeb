var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

let User = require('./userModel.js');

router.post('/', function(req, res, next){
    console.log("début post");

    if (req.body.username && req.body.email && req.body.emailConf && req.body.password && req.body.passwordConf){
        if (req.body.email === req.body.emailConf && req.body.password === req.body.passwordConf){
            var userData = {
                username: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10)
            };
            mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
                if (err)
                    console.log(err);
                else {
                    User.create(userData, function (err, user) {
                        if (err) {
                            res.statusMessage = err;
                            mongoose.connection.close();
                            return res.status(500).end();
                        } else {
                            res.statusMessage = "User successfully created";
                            mongoose.connection.close();
                            return res.status(201).end();
                        }
                    });
                }
            });
        } else {
            res.statusMessage = "Confirmation password or email incorrect";
            return res.status(500).end();
        }
    } else {
        res.statusMessage = "Missing fields";
    }
});

module.exports = router;
