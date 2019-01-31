//is Even

function isEven(num) {
    //return true if Even
    if(num % 2 === 0) { return true;}
       //return false otherwise
        else { return false}

}

function factorial(fact) {
    var result =1;
    //return factorial(fact);
    //calculate factorial
    for (var i = 2; i <= fact; i++) {
        result *= i;
    }
    //return factorial of a number
    return result
}

//kebabToSnake
function kebabToSnake(KebabStr) {
    //Replace all dashes "-" with "_"
    var SnakeStr = KebabStr.replace(/-/g, "_");
return SnakeStr
}

    


