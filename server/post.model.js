const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Post = new Schema({
    title: String,
    content: String
});

module.exports = mongoose.model('Post', Post);