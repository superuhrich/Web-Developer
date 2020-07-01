var mongoose = require('mongoose');
const { isBuffer } = require('util');
const { connect } = require('http2');
mongoose.connect('mongodb+srv://paul:Snuffleupagus13!@uhrich-j7dfl.mongodb.net/cat_app?authSource=admin&replicaSet=uhrich-shard-0&readPreference=primary&ssl=true', {useNewUrlParser: true, useUnifiedTopology: true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model('Cat', catSchema);



//add a new cat to DB

// var george = new Cat({
//     name: 'Mrs. Norris',
//     age: 11,
//     temperament: 'Evil'
// });

// george.save(function(err, cat){
//     if(err){
//         console.log('Something went wrong!');
//     }else{
//         console.log('We just saved a cat to db!');
//         console.log(cat);
//     }
// });

Cat.create({
    name: 'Snow White',
    age: 15,
    temperament: 'Bland'
}, function(err, cat){
    if(err){
        console.log('error');
    }else{
        console.log(cat);
    }
});

// retrieve all cats from teh db and console.log each one

Cat.find({}, function(err, cats){
    if(err){
        console.log('OH NO, ERROR!');
        console.log(err);
    } else{
        console.log('All the Cats');
        console.log(cats);
    }
});;