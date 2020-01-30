var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./Book.model');

var port = 8080;
const db = 'mongodb://localhost/book';
mongoose.connect(db);


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', function(req,res){
    res.send('Everything is going well !!!')
});

app.get('/books', function(req,res){
    Book.find({})
    .exec(function(err,books){
        if(err)
        {
            res.send("Error has occured")
        }
        else
        {
            res.json(books)
        }
    })
});


app.get('/book/:id', function(req,res){
    Book.findOne({
        _id: req.params.id
    })
    .exec(function(err,one_Book){
        if(err)
        {
            res.send("Error has occured")
        }
        else
        {
            res.json(one_Book);
        }
    })
});


app.post('/books', function(req, res){
    var newBook = new Book();

    newBook.title = req.body.title;
    newBook.author = req.body.author;
    newBook.category = req.body.category;

    newBook.save(function(err, book){
        if(err)
        {
            res.send("Error has occured");
        }
        else
        {
            res.send(book);
        }
    });
});


app.put('/book/:id', function(req, res){
    Book.findOneAndUpdate({
        _id: req.params.id
    }, 
    {$set: {title: req.body.title}},
    {upsert: true},
    function(err, newBook){
        if(err)
        {
            res.send("Error has occured");
        }
        else
        {
            res.send(newBook);
        }
    });
});

app.delete('/book/:id', function(req, res){
    Book.findByIdAndRemove({
        _id: req.params.id
    }, function(err, book){
        if(err)
        {
            res.send("Error has occured");
        }
        else
        {
            res.status(204);
        }
    });
});


app.listen(port, function(){
    console.log('app listening to port ' + port);
});