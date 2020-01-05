var mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
    songs: {
        type: [String]
    }
});
let Playlist = mongoose.model('Playlist', PlaylistSchema);
module.exports.PlaylistModel = Playlist;
module.exports.PlaylistSchema = PlaylistSchema;
