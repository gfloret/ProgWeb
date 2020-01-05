var mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    content: {
        type: String,
        unique: false,
        required: true,
        trim: true
    },
    datetime: {
        type: Date,
        unique: false,
        required: true
    },
    author: {
        type: String,
        unique: false,
        required: true
    },
    channelName: {
        type: String,
        unique: false,
        required: true
    }
});
const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
