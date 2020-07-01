var express = require('express');
var app = express();


app.get("/", function(req, res){
    res.send("Hi There");
});

app.get("/bye", function(req, res){
    res.send("goodbye");
})

app.get("/dog", function(req, res){
    console.log("someone made a request");
    res.send("meow");
});

app.get("*", function(req, res){
    res.send("You are a star");
})

app.listen(3000, function(){
    console.log("Listening on port 3000");
})