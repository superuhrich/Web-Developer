

function isUniform(arr){
    var flag = "true" 

    for(var i = 1; i < arr.length; i++){
        if(arr[0] !== arr[i])
        {
            flag = false;
        }
    }
    console.log(flag);
}


function sumArray(arr){
    var sum = 0;
    arr.forEach(function(element){
        sum = sum + element;
    })
    console.log(sum);
}


function max(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++)
    {
        if(max < arr[i])
        {
            max = arr[i];
        }
    }
    console.log(max);
}

var array3 = [2,43,4,5,621,9]

console.log(Array.prototype.max(array3));