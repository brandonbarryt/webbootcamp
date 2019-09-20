var NumSquare = 6
var colors = [];
var pickedColor;
var h1  = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons "Easy" or "Hard"
    setupModeButtons();
    //setup squares based on colors in array
    setupSquares();
    //reset screen
    reset();
};



    resetButton.addEventListener("click", function(){
        reset();
    })

    function setupModeButtons(){
        for (var i = 0; i < modeButtons.length; i++){
            modeButtons[i].addEventListener("click", function(){
                modeButtons[0].classList.remove("selected");
                modeButtons[1].classList.remove("selected");
                this.classList.add("selected");
                this.textContent === "EASY" ? NumSquare = 3: NumSquare = 6;
                reset();
            });
        }

    }

    function setupSquares(){
        for (var i =0 ; i < squares.length; i++){
            //add click listeners
            squares[i].addEventListener("click",function(){
                //get color of clicked square
                var clickedColor = this.style.backgroundColor;
                if (clickedColor === pickedColor){
                    messageDisplay.textContent = "Correct!";
                    resetButton.textContent = "PLAY AGAIN?";
                    changeColors(clickedColor);
                    h1.style.backgroundColor = pickedColor;
                } else {
                    this.style.backgroundColor = "#232323";
                    messageDisplay.textContent = "Try Again!";
                }
             });
        }
        
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

   function reset(){
    colors = gernerateRandomColors(NumSquare);
    //pick a new random color
    pickedColor = pickColor();
    //change colors of squares
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent= "";
    //change color of squares
    for (var i = 0 ; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    };
    h1.style.backgroundColor = "steelblue";
   }


