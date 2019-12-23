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
let Login = mongoose.model('User', LoginSchema);
module.exports = Login;

router.get('/', function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    RegisterModel.findOne({email: email}).then(user => {
        if (!user) {
            return res.status(400).json(vm.ApiResponse(false, 400, "Incorrect email"));
        }
        if (password != user.password) {
            return res.status(400).json(vm.ApiResponse(false, 400, "Incorrect password"));
        }
        else{
            return res.status(200).json(vm.ApiResponse(true, 200, "Login correct"));
        }
    });

});
