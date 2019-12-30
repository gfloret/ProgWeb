var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

let User = require('./userModel.js');

router.post('/', function(req, res, next){

    if (req.body.username && req.body.email && req.body.emailConf && req.body.password && req.body.passwordConf){
        if (req.body.email === req.body.emailConf && req.body.password === req.body.passwordConf){
            var userData = {
                username: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10)
            };
            mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
                if (err){
                    console.log("An error has occured during the connection to the database");
                    mongoose.connection.close();
                    return res.json({signup: "error"});
                }
                else {
                    User.findOne({'username': req.body.username}, function(err, user){
                        if (user){
                            console.log("Username already exists");
                            mongoose.connection.close();
                            return res.json({signup: "takenUsername"});
                        }else{
                            User.findOne({'email': req.body.email}, function(err, user){
                                if (user){
                                    console.log("Email already used");
                                    mongoose.connection.close();
                                    return res.json({signup: "takenEmail"});
                                }else{
                                    User.create(userData, function (err, user) {
                                        if (err) {
                                            console.log("An error has occured during user creation");
                                            mongoose.connection.close();
                                            return res.json({signup: "error"});
                                        } else {
                                            console.log("User successfully created");
                                            mongoose.connection.close();
                                            return res.json({signup: "success"});
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        } else {
            res.statusMessage = "Incorrect password or email confirmation";
            return res.status(500).end();
        }
    } else {
        res.statusMessage = "Missing fields";
        return res.status(500).end();
    }
});

module.exports = router;
