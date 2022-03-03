const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('posts', PostSchema);

