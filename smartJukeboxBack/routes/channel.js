var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

let Channels = require('../models/channelModel.js');

router.get('/publicchannels', function(req,res,next){
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if (err){
            res.statusMessage = err;
            mongoose.connection.close();
            return res.status(500).end();
        }else{
            Channels.find({ 'host': { $ne: req.query.host } }).lean().exec(function (err, channels) {
                return res.json(channels);  
            });    
        }
    });
});

router.get('/userchannels', function(req, res, next){
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if (err){
            res.statusMessage = err;
            mongoose.connection.close();
            return res.status(500).end();
        } else {
            Channels.find({'host': req.query.host}).lean().exec(function (err, channels) {
                return res.json(channels);
            });
        }
    });
});

router.get('/search', function(req, res, next){
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if (err){
            res.statusMessage = err;
            mongoose.connection.close();
            return res.status(500).end();
        } else {
            Channels.find({'host': req.query.keywords}).lean().exec(function (err, channels) {
                return res.json(channels);
            });
        }
    });
});

router.get('/ismemberofchannel', function(req, res, next){
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if (err){
            res.statusMessage = err;
            mongoose.connection.close();
            return res.status(500).end();
        } else {
            Channels.findOne({$and: [
                {'name': req.query.channel},
                {'members': req.query.user}
            ]}, function(err, member){
                if(err) {
                    console.log(err);
                    mongoose.connection.close();
                    return res.status(500).end();
                } else {
                    if (!member){
                        return res.json({member: false});
                    }else{
                        return res.json({member: true});
                    }
                }
            });
        }
    });
});

router.post('/create', function(req, res, next){
    if (req.body.channelData.name){
        var channelData = {
            name: req.body.channelData.name,
            description: req.body.channelData.description,
            visibility: req.body.channelData.visibility,
            host: req.body.currentUser,
            toSearch: req.body.toSearch
        };
        mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
            if (err){
                res.statusMessage = err;
                mongoose.connection.close();
                return res.status(500).end();
            } else {
                Channels.findOne({'name': req.body.name}, function(err, channel){
                    if (channel){
                        console.log("Channel name already exists");
                        mongoose.connection.close();
                        return res.json({channel: "takenName"});
                    } else {
                        Channels.create(channelData, function(err, channel) {
                            if (err) {
                                res.statusMessage = "An error has occured during channel creation";
                                mongoose.connection.close();
                                return res.status(500).end();
                            } else {
                                console.log("Channel successfully created");
                                mongoose.connection.close();
                                return res.json({channel: channel});
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

router.put('/addmember', function(req, res, next){
    if (req.body.userToAdd && req.body.currentChannel){
        mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
            if (err){
                res.statusMessage = err;
                mongoose.connection.close();
                return res.status(500).end();
            } else {
                Channels.findOne({'name': req.body.currentChannel.name}, function(err, channel){
                    if (channel){
                        channel.members.push(req.body.userToAdd);
                        channel.save(function(err, member){
                            console.log("Member " + req.body.userToAdd + " successfully added to channel " + req.body.currentChannel.name);
                            mongoose.connection.close();
                            return res.json({channel: channel});
                        });
                    } else {
                        res.statusMessage = "Can't add member to unknown channel";
                        mongoose.connection.close();
                        return res.status(500).end();
                    }
                });    
            }
        });
    } else {
        res.statusMessage = "Must specify member and channel to add a member to a channel";
        return res.status(500).end();
    }
});

router.delete('/deletechannel', function(req, res, next){
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if (err){
            res.statusMessage = err;
            mongoose.connection.close();
            return res.status(500).end();
        } else {
            Channels.deleteOne({name: req.query.channelToDelete}, function(err){
                if (err){
                    res.statusMessage = err;
                    mongoose.connection.close();
                    return res.status(500).end();
                }
            });
        }
    });
});

module.exports = router;
