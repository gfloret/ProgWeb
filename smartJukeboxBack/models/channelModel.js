var mongoose = require('mongoose');

const ChannelSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    description: {
        type: String,
        unique: false,
        required: false
    },
    visibility: {
        type: Boolean,
        unique: false,
        required: false
    },
    host: {
        type: String,
    },
    members: {
        type: [String],
        unique: false
    },
    toSearch: {
        type: String,
        unique: false
    },
    playlist: {
        type: [String]
 }
});
let Channel = mongoose.model('Channel', ChannelSchema);
module.exports = Channel;
