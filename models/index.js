var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/microblog");

module.exports.Blogpost = require("./post.js");