var faker = require("faker");




for(var i=0; i < 10; i++){

    var product = faker.commerce.product();
    var cost = faker.commerce.price();
    console.log(product + " - " + cost);
}