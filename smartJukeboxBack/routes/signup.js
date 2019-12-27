var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

let User = require('./userModel.js');

router.post('/', function(req, res, next){
    console.log("début post");
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
        };
        mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
            if(err)
                console.log(err);
            else{
                User.create(userData, function (err, user) {
                    if (err) {
                        console.log(err);
                        res.statusMessage = err;
                        mongoose.connection.close();
                        return res.status(500).end();
                    } else {
                        console.log("user créé");
                        mongoose.connection.close();
                        return res.status(201).end();
                    }
                });
            }
        });
    }else {
        res.statusMessage = "champs manquants";
        return res.status(500).end();
    }
});

module.exports = router;
