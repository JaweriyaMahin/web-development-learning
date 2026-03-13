let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess(){

let userGuess = document.getElementById("guessInput").value;
let message = document.getElementById("message");

attempts++;
document.getElementById("attempts").textContent = attempts;

if(userGuess == randomNumber){
message.textContent = "🎉 Correct! You guessed it!";
}
else if(userGuess > randomNumber){
message.textContent = "Too High! Try again.";
}
else{
message.textContent = "Too Low! Try again.";
}

}

function restartGame(){
randomNumber = Math.floor(Math.random() * 100) + 1;
attempts = 0;

document.getElementById("attempts").textContent = 0;
document.getElementById("message").textContent = "";
document.getElementById("guessInput").value = "";
}
