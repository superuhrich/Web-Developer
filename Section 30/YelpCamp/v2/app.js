var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



mongoose.connect('mongodb+srv://paul:Snuffleupagus13!@uhrich-j7dfl.mongodb.net/yelp_camp?authSource=admin&replicaSet=uhrich-shard-0&readPreference=primary&ssl=true', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//SCHEMA SETUP

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model('Campground', campgroundSchema);

// Campground.create({ name: "Granate Hill", image: "https://images.unsplash.com/photo-1539183204366-63a0589187ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", description: "This is a huge granate hill,  no bathrooms, no water. beautiful granate." }, function (err, campground) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Newly created campground');
//         console.log(campground);
//     }
// })

var campgrounds = [

    { name: "Granate Hill", image: "https://images.unsplash.com/photo-1539183204366-63a0589187ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    { name: "Misty Mountain", image: "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" }
]

app.get('/', function (req, res) {
    res.render('landing');
});



//INdex route - show all campgrounds
app.get('/campgrounds', function (req, res) {

    Campground.find({}, function (err, allcampgrounds) {
        if (err) {
            console.log('Error');
        } else {
            res.render('index', { campgrounds: allcampgrounds });
        }
    });


});

//create - add new campground to database
app.post('/campgrounds', function (req, res) {


    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = { name: name, image: image, description: desc };
    // campgrounds.push(newCampground);

    Campground.create(newCampground, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/campgrounds');
        }
    });


    //get data from form and add to campground array
    //redirect back to campgrounds page
});


//new - show form to create new campground
app.get('/campgrounds/new', function (req, res) {
    res.render('new.ejs');
});


//show - shows more info about one campground
app.get('/campgrounds/:id', function(req, res){
    //find campground with provided Id
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            res.render('show', {campground: foundCampground});
        }
    })
    
    //render show template with that campground
    
    // res.send("This will be the show page one day");
});

app.listen(3000, function () {
    console.log("The YelpCamp Server has Started!");

});