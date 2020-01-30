var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var book = require('./Book.model');

var port = 8080;
const db = 'mongodb://localhost/book';
mongoose.connect(db);

app.get('/', function(req,res){
    res.send('Everything is going well !!!')
});

app.listen(port, function(){
    console.log('app listening to port ' + port);
});