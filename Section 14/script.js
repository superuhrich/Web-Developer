var movies = [
    {
        title: "In Bruges",
        viewed: true,
        rating: 5
    },
    {
        title: "Frozen",
        viewed: false,
        rating: 4.5
    },
    {
        title:"Mad Max Fury Road",
        viewed: true,
        rating: 5
    },
    {
        title: "Les Miserables",
        viewed: false,
        rating: 3.5
    }

]

movies.forEach(function(movie){
    var tense = "You have not seen ";
    if(movie.viewed === true)
    {
        tense = "You have seen ";
    }
    console.log(tense +  movie.title + "- " +  movie.rating);

    console.log(movie);
    
});


