var colors = gernerateRandomColors(6);
var h1  = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = gernerateRandomColors(6);
    //pick a new random color
    pickedColor = pickColor();
    //change colors of squares
    colorDisplay.textContent = pickedColor;
    //change color of squares
    for (var i =0 ; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    };
    h1.style.backgroundColor = "#232323";
    resetButton.textContent = "NEW COLORS";

})

for (var i =0 ; i < squares.length; i++){
    //add initial colors
    squares[i].style.backgroundColor = colors[i];
    //add click listeners
    squares[i].addEventListener("click",function(){
        //get color of clicked square
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "PLAY AGAIN?";
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
        //compare color to picked color
    });

    }
    function changeColors(color){
        for (var i =0 ; i < squares.length; i++){
            squares[i].style.backgroundColor = color;
        }
    }

    function pickColor(){
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

   function gernerateRandomColors(num){
        //make an array
        var arr = []
        //repeat num times
        for (var i = 0; i < num; i++){
        //get random colors and push
        arr.push(randomColor());    
        }

        return arr;
   }

   function randomColor(){
        //pick a red
        var r = Math.floor(Math.random() * 256);
        //pick a green
        var g = Math.floor(Math.random() * 256);
        //pick a blue
        var b = Math.floor(Math.random() * 256);

        return "rgb(" + r + ", " + g + ", " + b + ")";

   }



