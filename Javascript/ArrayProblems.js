var array = [];

var input = prompt ("What can I do for you today?");





function max(array) {
    var maximum = array[0];
    for( var i = 1; i < array.length; i ++){
        if(array[i] > maximum){ 
            maximum = array[i];}
    }
    return maximum;
}


function isUniform() {
    var first = array[0]
    for (var i = 1 ; i < array.length; i ++){
        if(array[i] !== first) {
            return false;
        }
    }  
        return true;
}

function printReverse() {
    for (var i = array.length -1; i >= 0; i--){
        console.log(arr[i]);
    }
}

function sumArray(array) {
    var sum = 0;
    array.forEach(function(number) {
        sum += number;
    });
    return sum;
   
}


