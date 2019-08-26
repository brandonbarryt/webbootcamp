var  p1button = document.querySelector ("#p1");
var  p2button = document.getElementById ("p2");
var p1display = document.querySelector ("#p1display");
var p2display = document.querySelector ("#p2display");

var gameover = false;
var winningscore = 5;
var  p1Score = 0;
var  p2Score = 0;

p1button.addEventListener ("click", function(){
    if(!gameover){
        p1Score++;
        if(p1Score === winningscore){
            gameover = true;
        }
        p1display.textContent = p1Score;}
    
})
p2button.addEventListener ("click", function(){
    if(!gameover){
        p2Score++;
        if(p2Score === winningscore){
            gameover = true;
        }
        p2display.textContent = p2Score;}
})