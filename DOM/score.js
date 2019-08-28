var  p1button = document.querySelector ("#p1");
var  p2button = document.getElementById ("p2");
var p1display = document.querySelector ("#p1display");
var p2display = document.querySelector ("#p2display");
var resetbutton = document.getElementById("reset");
var numInput = document.getElementById ("input");
var winningscoredisplay = document.querySelector("p span");
var gameover = false;
var winningscore = 5;
var  p1Score = 0;
var  p2Score = 0;


numInput.addEventListener("change", function(){
        winningscore = Number(numInput.value);
    winningscoredisplay.textContent = numInput.value;
    reset();
})

p1button.addEventListener ("click", function(){
    if(!gameover){
        p1Score++;
        if(p1Score === winningscore){
            p1display.classList.add("winner");
            gameover = true;
        }
        p1display.textContent = p1Score;}
    
})
p2button.addEventListener ("click", function(){
    if(!gameover){
        p2Score++;
        if(p2Score === winningscore){
            p2display.classList.add("winner");
            gameover = true;
        }
        p2display.textContent = p2Score;}
})

resetbutton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameover = false; 
};

