var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../models/userModel');

var uniqueSongSchema = new mongoose.Schema({
    ID_Video : { type: String, required: true}
});
var uniqueSongModel = mongoose.model('uniqueSongYoutube', uniqueSongSchema, 'uniqueSongYoutube');

var archivesYoutubeSchema = new mongoose.Schema({
    ID_Video : { type: String, unique : true, required: true}
});
var archivesYoutubeModel = mongoose.model('archivesYoutube', archivesYoutubeSchema, 'archivesYoutube');

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


/*
router.delete('/', function(req, res, next) {
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if(err)
            console.log(err);
        else{
            uniqueSongModel.deleteMany({}, function(err, ids){
                if(err)
                    console.log(err);
                mongoose.connection.close();
            });
        }
    });
});

router.post('/', function(req, res, next) {
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if(err)
            console.log(err);
        else{
            const id = req.body.id_video;
            var uniqueSong = new uniqueSongModel({ID_Video: id});
            uniqueSong.save(function (err) {
                if(err)
                    console.log(err);
                else {
                    var archivesYoutube = new archivesYoutubeModel({ID_Video: id});
                    archivesYoutube.save(function (err) {
                        if(err)
                            console.log(err);
                        mongoose.connection.close();
                        return res.status(201).json({id_video: id});
                    })
                }
            });
        }
    });
});*/

module.exports = router;