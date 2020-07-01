//all the requiredz
var express = require('express');
var app = express();
bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
methodOverride = require('method-override');
expressSanitizer = require('express-sanitizer')


//connectionz
mongoose.connect('mongodb+srv://paul:Snuffleupagus13!@uhrich-j7dfl.mongodb.net/restful_blog_app?authSource=admin&replicaSet=uhrich-shard-0&readPreference=primary&ssl=true', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });


//view enginez
app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(expressSanitizer());

//schemaz
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});

var Blog = mongoose.model("Blog", blogSchema);

//Restful routez

// Blog.create({
//     title: 'Test dog',
//     image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
//     body: ' This is a blog post'

// });

app.get('/', function (req, res) {
    res.redirect('/blogs');
})

//index routz
app.get('/blogs', function (req, res) {
    Blog.find({}, function (err, blogs) {
        if (err) {
            console.log(err);
        } else {
            res.render('index', { blogs: blogs })
        }
    });
});

//create routz
app.post('/blogs', function (req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function (err, newBLog) {
        if (err) {
            res.render('new');
        } else {
            res.redirect('/blogs');
        }
    });
});

//show routez

app.get('/blogs/new', function (req, res) {
    res.render('new');
});




app.get('/blogs/:id', function (req, res) {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect('/blogs');
        } else {
            res.render('show', { blog: foundBlog });
        }
    });

});


//edit routez

app.get('/blogs/:id/edit', function (req, res) {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect('/blogs');
        } else {
            res.render('edit', { blog: foundBlog });

        }
    });

});

//update route

app.put('/blogs/:id', function (req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err, updatedBlog) {
        if (err) {
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs/' + req.params.id)
        }
    })
});

//DESTROYZZZZ

app.delete('/blogs/:id', function (req, res) {
    Blog.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs');
        }
    });
});




//servzzz!!!!

app.listen(5000, function () {
    console.log('Server is running on 5000');
});

