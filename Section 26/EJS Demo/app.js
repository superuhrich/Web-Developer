
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render("home");
});

app.get('/fallinlovewith/:thing', function(req, res){
    var thing = req.params.thing;
    res.render('love', {thingVar: thing});
})

app.get('/posts', function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "Adorable Bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Colt"}
    ];
    res.render('posts', {posts: posts});
});



app.listen(3005, function(){
    console.log("server is listening on 3005");
})