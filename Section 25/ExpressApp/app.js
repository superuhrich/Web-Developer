var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get('/speak/:animal', function (req, res) {
    var animal = req.params.animal;
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "I hate you human"
    }
    res.send(sounds[animal])
});

app.get('/repeat/:word/:count/', function(req, res){
    var word = req.params.word;
    var count = parseInt(req.params.count);
    var string = "";

    for(var i =0; i < count; i++){
        string += word + " ";
    }

    res.send(string);
});

app.get('*', function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3001, function () {
    console.log("listening on port 3001");
})