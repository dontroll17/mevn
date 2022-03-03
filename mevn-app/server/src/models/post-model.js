const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String
    }
});

const PostModel = model('posts', PostSchema);

module.exports = PostModel;