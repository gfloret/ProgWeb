const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let Login = require('../models/userModel.js');

const MongoURL = 'mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority';

router.get('/', function(req, res, next) {
    
    mongoose.connect(MongoURL, {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if(err){
            console.log(err);
            res.statusMessage = err;
            return res.status(500).end();
        }
        else{
            Login.findOne({$or: [
                {'username': req.query.username},
                {'email': req.query.username}]}, function(err, account){
                if(err) {
                    console.log(err);
                    mongoose.connection.close();
                    return res.status(500).end();
                }
                else {
                    if (!account){
                        console.log("Account not found");
                        mongoose.connection.close();
                        return res.status(202).json({accountInfo: ""});
                        
                    }
                    else if(bcrypt.compareSync(req.query.password, account.password)) {
                        console.log("Connection successful");
                        mongoose.connection.close();
                        return res.status(200).json({accountInfo: account});
                    }
                    else{
                        console.log("Incorrect password");
                        mongoose.connection.close();
                        return res.status(201).json({accountInfo: ""});
                    }
                }
            });
        }
    });
});

module.exports = router;