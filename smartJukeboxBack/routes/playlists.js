var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../models/userModel');

router.get('/playlist', function(req, res, next) {
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if(err)
            console.log(err);
        else{
            user.findOne({username: req.query.host}, function(err, us){
                if(err)
                    console.log(err);
                else if(us){
                    mongoose.connection.close();
                    return res.json({ids: us.playlist});
                }
            });
        }
    });
});

router.put('/playlist', function(req, res, next) {
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if(err)
            console.log(err);
        else{
            user.findOne({username: req.body.host}, function(err, us){
                if(err)
                    console.log(err);
                else if(us){
                    us.playlist.push(req.body.songID);
                    us.save(function(err, songID){
                        mongoose.connection.close();
                        return res.status(201).end();
                    });
                }
            });
        }
    });
});

router.delete('/playlist', function(req, res, next) {
    console.log('delete');
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if(err)
            console.log(err);
        else{
            console.log("co ok");
            console.log(req.query.host);
            user.findOne({username: req.query.host}, function(err, us){
                if(err)
                    console.log(err);
                else if(us){
                    console.log("user found");
                    us.playlist.splice(us.playlist.indexOf(req.query.songID), 1);
                    us.save(function(err, songID){
                        if(err)
                            console.log(err);
                        else
                            console.log("save ok");
                        mongoose.connection.close();
                        return res.status(200).end();
                    });
                }else
                    console.log("user not found");
            });
        }
    });
});

module.exports = router;
