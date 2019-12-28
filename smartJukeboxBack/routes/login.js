var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

let Login = require('./userModel.js');

router.get('/', function(req, res, next) {
    console.log("Début connexion");
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if(err){
            console.log(err);
            res.statusMessage = err;
            return res.status(500).end();
        }
        else{
            Login.findOne({'username': req.query.username}, function(err, account){
                if(err) {
                    console.log(err);
                    mongoose.connection.close();
                    return res.status(500).end();
                }
                else {
                    if (!account){
                        console.log("Compte inexistant");
                        mongoose.connection.close();
                        return res.json({accountInfo: ""});
                        
                    }
                    else if(bcrypt.compareSync(req.query.password, account.password)) {
                        console.log("Connexion réussie");
                        mongoose.connection.close();
                        return res.json({accountInfo: account});
                    }
                    else{
                        console.log("Mot de passe invalide");
                        mongoose.connection.close();
                        return res.json({accountInfo: ""});
                    }
                }
            });
        }
    });
});

module.exports = router;