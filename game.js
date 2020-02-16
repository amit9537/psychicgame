var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
"j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];
var randomLetter = Math.floor(Math.random()*alphabet.length);
var computerChoice = alphabet[randomLetter];

console.log("The computer choose " + computerChoice);
    

function reset(){
    guessesLeft = 10;
    guessedLetters = [];
}

document.onkeyup = function(event){
    
    var userChoice = event.key;
    
    var viableChoice = /[a-z]/gi;
    if (!viableChoice.test(userChoice)) {
    alert("please enter a letter");
    }
    else {
    console.log("guess the letter" + userChoice);
    }
    if(userChoice !== computerChoice){
        guessesLeft--;
        document.getElementById("guessesLeft").innerText = guessesLeft;
        document.getElementById("main-text").innerText = "Try again!";
        guessedLetters.push(userChoice);
        document.getElementById("guessedLetters").innerText = guessedLetters;


    } else if(userChoice === computerChoice){
        wins++;
        alert("You won!");
        document.getElementById("wins").innerText = wins;
        reset();
    }


    if(guessesLeft === 0){
        losses++;
        document.getElementById("main-text").innerText = "You lose! Try again";
        reset();
    }
}