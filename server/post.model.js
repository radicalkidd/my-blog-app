const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Post = new Schema({
    post_title: String,
    post_content: String
});

module.exports = mongoose.model('Post', Post);