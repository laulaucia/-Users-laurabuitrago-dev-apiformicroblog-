var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PostSchema = new Schema({
    text: String,
});

var Blogpost = mongoose.model('Blogpost', PostSchema);
module.exports = Blogpost;