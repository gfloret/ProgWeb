var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Channels = require('../models/channelModel.js');
const Messages = require('../models/messageModel.js');


// Channels
router.get('/publicchannels', function(req,res,next){
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if (err){
            res.statusMessage = err;
            mongoose.connection.close();
            return res.status(500).end();
        }else{
            Channels.find(
                {$and: [
                    {'host': { $ne: req.query.user }}, 
                    { 'members': { $ne: req.query.user }}
                ]}
                ).lean().exec(function(err, channels){
                    if (err) {
                        res.statusMessage = err;
                        mongoose.connection.close();
                        return res.status(500).end();
                    } else {
                        mongoose.connection.close();
                        return res.json(channels);
                    }
                }
            );
        }
    });
});

router.get('/hostchannels', function(req, res, next){
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if (err){
            res.statusMessage = err;
            mongoose.connection.close();
            return res.status(500).end();
        } else {
            Channels.find(
                {$and: [
                    {'host': req.query.host},
                    {'members': { $ne: req.query.host }}
                ]}).lean().exec(function(err, channels){
                    if (err) {
                        res.statusMessage = err;
                        mongoose.connection.close();
                        return res.status(500).end();
                    } else {
                        mongoose.connection.close();
                        return res.json(channels);
                    }
                }
            );
        }
    });
});

router.get('/memberchannels', function(req, res, next){
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if (err){
            res.statusMessage = err;
            mongoose.connection.close();
            return res.status(500).end();
        } else {
            Channels.find(
                {$and: [
                    {'members': req.query.member},
                    {'host': { $ne: req.query.member }}
                ]}).lean().exec(function(err, channels){
                    if (err) {
                        res.statusMessage = err;
                        mongoose.connection.close();
                        return res.status(500).end();
                    } else {
                        mongoose.connection.close();
                        return res.json(channels);
                    }
                }
            );
        }
    });
});

router.get('/checkPassword', function(req, res, next){
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if (err){
            res.statusMessage = err;
            mongoose.connection.close();
            return res.status(500).end();
        } else {
            Channels.findOne(
                {$and: [
                    {'name': req.query.name},
                    {'password': req.query.password }
                ]},function(err, channel){
                    if (err) {
                        res.statusMessage = err;
                        mongoose.connection.close();
                        return res.status(500).end();
                    } else {
                        mongoose.connection.close();
                        return res.json(channel);
                    }
                }
            );
        }
    });
});

router.get('/publicSearch', function(req, res, next){
    search(true,req,res);
});

router.get('/privateSearch', function(req, res, next){
    search(false,req,res);
});

function search(public, req, res){
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if (err){
            res.statusMessage = err;
            mongoose.connection.close();
            return res.status(500).end();
        }else{
            str = req.query.keywords;
            let keywords = str.split(" ");
            let regex = "";
            for(let i = 0; i<keywords.length;i++){
                if (regex === ""){
                    regex = keywords[i];
                }
                else{
                    regex = regex + "|" + keywords[i];
                }  
            }
            if(public) {
                Channels.find(
                {$and: [
                    {'host': { $ne: req.query.user }}, 
                    { 'members': { $ne: req.query.user }},
                    {'toSearch':{ $regex : regex }}
                ]}
                ).lean().exec(function (err, channels) {
                    mongoose.connection.close();
                    return res.json(channels);
                });
            }
            else{
                Channels.find(
                {$and: [
                    {$or : [
                        {'host': req.query.user }, 
                        { 'members': req.query.user }
                    ]},
                    {'toSearch':{ $regex : regex }}
                ]}
                ).lean().exec(function (err, channels) {
                    mongoose.connection.close();
                    return res.json(channels);
                });
            }
        } 
    });
}

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
                        mongoose.connection.close();
                        return res.json({member: false});
                    }else{
                        mongoose.connection.close();
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
            password: req.body.channelData.password,
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

router.put('/addSong', function(req, res, next){
    if (req.body.songID && req.body.channel && req.body.host){
        mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
            if (err){
                res.statusMessage = err;
                mongoose.connection.close();
                return res.status(500).end();
            } else {
                console.log(req.body);
                Channels.findOne({'name': req.body.channel}, function(err, channel){
                    if (channel){
                        channel.playlist.push(req.body.songID);
                        channel.save(function(err, member){
                            console.log("Song " + req.body.songID + " successfully added to channel " + req.body.channel);
                            mongoose.connection.close();
                            return res.status(201).end();
                        });
                    } else {
                        res.statusMessage = "Can't add song to unknown channel";
                        mongoose.connection.close();
                        return res.status(500).end();
                    }
                });
            }
        });
    } else {
        res.statusMessage = "Must specify host, channel and song id to add a song to a channel";
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

router.put('/leavechannel', function(req, res, next){
    if (req.body.channel && req.body.member){
        mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
            if (err){
                res.statusMessage = err;
                mongoose.connection.close();
                return res.status(500).end();
            } else {
                Channels.findOne({'name': req.body.channel}, function(err, channel){
                    if (channel){
                        channel.members.pull(req.body.member);
                        channel.save(function(err, member){
                            console.log("Member " + req.body.member + " successfully left channel " + req.body.channel);
                            mongoose.connection.close();
                            return res.json({channel: channel});
                        });
                    } else {
                        res.statusMessage = "Can't leave unknown channel";
                        mongoose.connection.close();
                        return res.status(500).end();
                    }
                });
            }
        });        
    } else {
        res.statusMessage = "Must specify member and channel to make a member leave a channel";
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


// Messages

router.post('/message', function(req, res, next){
    if (req.body.messageContent && req.body.author && req.body.channelName){
        const datetime = new Date().toString();
        const messageData = {
            content: req.body.messageContent,
            datetime: datetime,
            author: req.body.author,
            channelName: req.body.channelName
        };
        mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
            if (err){
                res.statusMessage = err;
                mongoose.connection.close();
                return res.status(500).end();
            } else {
                Messages.create(messageData, function(err, message) {
                    if (err) {
                        res.statusMessage = err;
                        mongoose.connection.close();
                        return res.status(500).end();
                    } else {
                        mongoose.connection.close();
                        return res.json({message: message});
                    }
                });
            }
        });
    } else {
        res.statusMessage = "Missing fields";
        return res.status(500).end();
    }
});

router.get('/messages', function(req, res, next){
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if (err){
            res.statusMessage = err;
            mongoose.connection.close();
            return res.status(500).end();
        } else {
            Messages.find({'channelName': req.query.channel}).lean().exec(function(err, messages){
                if (err) {
                    res.statusMessage = err;
                    mongoose.connection.close();
                    return res.status(500).end();
                } else {
                    mongoose.connection.close();
                    return res.json({messages: messages});
                }
            });
        }
    });
});

module.exports = router;
