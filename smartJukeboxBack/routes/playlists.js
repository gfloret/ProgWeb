const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = require('../models/userModel');
const Channels = require('../models/channelModel.js');

const MongoURL = 'mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority';

router.get('/playlist', function(req, res, next) {
    mongoose.connect(MongoURL, {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if (err) {
            res.statusMessage = err;
            mongoose.connection.close();
            return res.status(500).end();
        } else {
            user.findOne({username: req.query.host}, function(err, us){
                if (err) {
                    res.statusMessage = err;
                    mongoose.connection.close();
                    return res.status(500).end();
                } else if (us) {
                    mongoose.connection.close();
                    return res.status(200).json({ids: us.playlist});
                }
            });
        }
    });
});

router.get('/channelplaylist', function(req, res, next) {
    mongoose.connect(MongoURL, {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if (err) {
            res.statusMessage = err;
            mongoose.connection.close();
            return res.status(500).end();
        } else {
            Channels.findOne({name: req.query.channelName}, function(err, channel){
                if (err) {
                    res.statusMessage = err;
                    mongoose.connection.close();
                    return res.status(500).end();
                } else {
                    if (channel){
                        mongoose.connection.close();
                        return res.status(200).json({playlist: channel.playlist});
                    } else {
                        res.statusMessage = "Can't get playlist from unknown channel";
                        mongoose.connection.close();
                        return res.status(201).end();
                    }
                }
            });
        }
    });
});

router.put('/playlist', function(req, res, next) {
    mongoose.connect(MongoURL, {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if(err){
            res.statusMessage = err;
            mongoose.connection.close();
            return res.status(500).end();
        }
        else{
            user.findOne({username: req.body.host}, function(err, us){
                if(err)
                    console.log(err);
                else if(us){
                    us.playlist.push(req.body.songID);
                    us.save(function(err, songID){
                        mongoose.connection.close();
                        return res.status(200).end();
                    });
                }
            });
        }
    });
});

router.delete('/playlist', function(req, res, next) {
    mongoose.connect(MongoURL, {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if(err){
            res.statusMessage = err;
            mongoose.connection.close();
            return res.status(500).end();
        }
        else{
            user.findOne({username: req.query.host}, function(err, us){
                if(err){
                    res.statusMessage = err;
                    mongoose.connection.close();
                    return res.status(500).end();
                }else if(us){
					us.playlist.remove(req.query.songID);
                    us.save(function(err, songID){
                        if(err){
                            res.statusMessage = err;
                            mongoose.connection.close();
                            return res.status(500).end();
                        } else{
                            mongoose.connection.close();
                            return res.status(200).end();
                        }
                    });
                } else {
                    res.statusMessage = "Can't delete song from unknown user's playlist";
                    mongoose.connection.close();
                    return res.status(500).end();
                }    
            });
        }
    });
});

router.delete('/channelplaylist', function(req, res, next) {
    mongoose.connect(MongoURL, {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if (err) {
            res.statusMessage = err;
            mongoose.connection.close();
            return res.status(500).end();
        } else {
            Channels.findOne({name: req.query.channelName}, function(err, channel){
                if (err) {
                    res.statusMessage = err;
                    mongoose.connection.close();
                    return res.status(500).end();
                }
                else if(channel){
					channel.playlist.remove(req.query.songID);
                    channel.save(function(err, songID){
                        if(err){
                            res.statusMessage = err;
                            mongoose.connection.close();
                            return res.status(500).end();
                        } else{
                            mongoose.connection.close();
                            return res.status(200).end();
                        }
                    });
                } else {
                    res.statusMessage = "Can't delete song from unknown channel";
                    mongoose.connection.close();
                    return res.status(500).end();
                }    
            });
        }
    });
});

module.exports = router;
