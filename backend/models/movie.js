const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    title: {type: String},
    runningTime: {type: Number},
    genre: {type: String},
    rating: {type: String},
    director: {type: String},
    status: {type: String}
});

module.exports = mongoose.model('Video', videoSchema);
