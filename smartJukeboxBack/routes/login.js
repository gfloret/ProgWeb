var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});
let Login = mongoose.model('Login', LoginSchema);
module.exports = Login;

router.get('/', function(req, res, next) {
    console.log("Début connexion");
    mongoose.connect("mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/progWeb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if(err){
            console.log(err);
            res.statusMessage = err;
            return res.status(500).end();
        }
        else{
            Login.findOne({email: req.query.email, password:req.query.password}, function(err, account){
                if(err) {
                    console.log(err);
                    mongoose.connection.close();
                    return res.status(500).end();
                }
                else {
                    if (account != null){
                        console.log("Connexion réussie");
                        mongoose.connection.close();
                        return res.json({accountInfo: account.email});
                    }
                    else{
                        console.log("Compte inexistant");
                        mongoose.connection.close();
                        return res.json({accountInfo: ""});
                    }
                }
            });
        }
    });
});

module.exports = router;