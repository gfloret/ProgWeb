var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    playlist: {
        type: [String],
        required: true
    }
});
let User = mongoose.model('User', UserSchema);
module.exports = User;