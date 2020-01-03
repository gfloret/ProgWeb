var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

let Channel = require('../models/channelModel.js');

router.get('/', function(req,res,next){
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if (err){
            res.statusMessage = err;
            mongoose.connection.close();
            return res.status(500).end();
        }else{
            Channel.find().lean().exec(function (err, channels) {
                return res.json(channels);  
            });    
        }
    });
});

router.post('/', function(req, res, next){

    if (req.body.channelData.name){
        var channelData = {
            name: req.body.channelData.name,
            description: req.body.channelData.description,
            visibility: req.body.channelData.visibility,
            host: req.body.currentUser
        };
        mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
            if (err){
                res.statusMessage = err;
                mongoose.connection.close();
                return res.status(500).end();
            } else {
                Channel.findOne({'name': req.body.name}, function(err, channel){
                    if (channel){
                        console.log("Channel name already exists");
                        mongoose.connection.close();
                        return res.json({channel: "takenName"});
                    } else {
                        Channel.create(channelData, function(err, channel) {
                            if (err) {
                                res.statusMessage = "An error has occured during channel creation";
                                mongoose.connection.close();
                                return res.status(500).end();
                            } else {
                                console.log("Channel successfully created");
                                mongoose.connection.close();
                                return res.json({channel: "success"});
                            }
                        });
                    }
                });
            }
        });
    } else {
        res.statusMessage = "Missing fields";
        return res.status(500).end();
    }

});

module.exports = router;
