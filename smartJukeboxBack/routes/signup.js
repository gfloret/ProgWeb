const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let User = require('../models/userModel.js');

const MongoURL = 'mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority';

router.post('/', function(req, res, next){

    if (req.body.username && req.body.email && req.body.emailConf && req.body.password && req.body.passwordConf){
        if (req.body.email === req.body.emailConf && req.body.password === req.body.passwordConf){
            const userData = {
                username: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                playlist: []
            };
            mongoose.connect(MongoURL, {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
                if (err){
                    console.log("An error has occured during the connection to the database");
                    mongoose.connection.close();
                    return res.status(500).json({signup: "error"});
                }
                else {
                    User.findOne({'username': req.body.username}, function(err, user){
                        if (user){
                            console.log("Username already exists");
                            mongoose.connection.close();
                            return res.status(201).json({signup: "takenUsername"});
                        }else{
                            User.findOne({'email': req.body.email}, function(err, user){
                                if (user){
                                    console.log("Email already used");
                                    mongoose.connection.close();
                                    return res.status(202).json({signup: "takenEmail"});
                                }else{
                                    User.create(userData, function (err, user) {
                                        if (err) {
                                            console.log("An error has occured during user creation");
                                            mongoose.connection.close();
                                            return res.status(500).json({signup: "error"});
                                        } else {
                                            console.log("User successfully created");
                                            mongoose.connection.close();
                                            return res.status(200).json({signup: "success"});
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
            return res.status(203).end();
        }
    } else {
        res.statusMessage = "Missing fields";
        return res.status(204).end();
    }
});

module.exports = router;
