alert ("CONNECTED!");

var button = document.querySelector("button");
var isPurple = false

button.addEventListener("click", changebackcolor);


function changebackcolor () { 
            if  (isPurple) {
                document.body.style.background = "white";
                isPurple = false;}
            else { 
                document.body.style.background = "purple";
                isPurple = true;}
            
};