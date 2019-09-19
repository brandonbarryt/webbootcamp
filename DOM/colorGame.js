var NumSquare = 6
var colors = gernerateRandomColors(6);
var h1  = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    NumSquare = 3;
    colors = gernerateRandomColors(NumSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i =0 ; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
         }
    }

});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    NumSquare = 6;
    colors = gernerateRandomColors(NumSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i =0 ; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } 
    

});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = gernerateRandomColors(NumSquare);
    //pick a new random color
    pickedColor = pickColor();
    //change colors of squares
    colorDisplay.textContent = pickedColor;
    //change color of squares
    for (var i =0 ; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    };
    h1.style.backgroundColor = "steelblue";

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



