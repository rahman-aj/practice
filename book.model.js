'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var bookSchema = new schema({
    title: String,
    published: {
        type: Date,
        default: Date.now
    },
    keywords: Array,
    published: Boolean,
    author: {
        type: schema.type.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('book', bookSchema);