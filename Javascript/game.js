//Create a secret Number
var secretNumber = 4;
//ask user to guess
var stringGuess = prompt ("Guess a number");
var number = Number(stringGuess);
//check if guess is right

if (guess === secretNumber) {alert("You got it right!") ;
}
//got it wrong
else if (guess  > secretNumber)  {alert ("Too high. Guess again!");
}
else  {alert ("Too low. Guess again!");
}
