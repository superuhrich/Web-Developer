function isEven(number)
{
    if(number%2===0)
    {
        return true;
    }
    else{
        return false;
    }
}

function factorial(n)
{
    if(n==0)
    {
        return 1;
    }
    return n * factorial(n-1);
}

function kebabToSnake(str)
{
    str = str.replace(/-/g , "_");
    return str;
}