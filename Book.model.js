'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var bookSchema = new schema({
    title: String,
    author: String,
    category: String
})

module.exports = mongoose.model('Book', bookSchema);