
var list = [];

window.setTimeout(function(){

    var entry = prompt("What would you like to do?");
    while(entry != "quit")
    {
        if(entry == "new")
        {
            list.push(prompt("Enter new list item."));
        }
        if(entry == "list")
        {
            console.log("***********");
            list.forEach(function(todo, item){
                console.log(item + ": " +todo);
            });
            console.log("***********");

        }
        if(entry == "delete")
        {
            list.splice(prompt("Item to Delete"),1);
        }
    
        entry = prompt("WHat would you liek to do?")
    }


},500);
