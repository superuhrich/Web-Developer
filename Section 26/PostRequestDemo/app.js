var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ['Tony', 'Paul','Justin'];


app.get('/', function(req, res){
    res.render("home");
});

app.get('/friends', function(req,res){
    
    res.render("friends", {friends: friends});
});

app.post('/addFriend', function(req, res){
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect('/friends');
    // res.send("YOu have reached the post route.");
})


app.listen(3006, function () {
    console.log("listening on 3000");
});