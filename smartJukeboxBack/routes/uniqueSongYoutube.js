var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var uniqueSongSchema = new mongoose.Schema({
    ID_Video : { type: String, required: true}
});
var uniqueSongModel = mongoose.model('uniqueSongYoutube', uniqueSongSchema, 'uniqueSongYoutube');

var archivesYoutubeSchema = new mongoose.Schema({
    ID_Video : { type: String, unique : true, required: true}
});
var archivesYoutubeModel = mongoose.model('archivesYoutube', archivesYoutubeSchema, 'archivesYoutube');

router.get('/', function(req, res, next) {
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if(err)
            console.log(err);
        else{
            uniqueSongModel.findOne(null, function(err, ids){
                if(err)
                    console.log(err);
                else {
                    if (ids != null)
                        return res.json({id_video: ids.ID_Video});
                    else
                        return res.json({id_video: ""});
                }
                mongoose.connection.close();
            });
        }
    });
});

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
                        return res.status(201).json({id_video: id});
                        mongoose.connection.close();
                    })
                }
            });
        }
    });
});

module.exports = router;
