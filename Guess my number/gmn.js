let secretNumber = generateSecretNumber();
let score = 10;
let highScore = 0;

function generateSecretNumber() {
    return Math.floor(Math.random() * 100) + 1;

}
function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const scoreDisplay = document.getElementById("score");
    const highScoreDisplay = document.getElementById("highScore");

    const userGuess = parseInt(guessInput.value);

    // Check if the input is a valid number
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "You can only enter numbers between 1 and 100.";
        return;

    }
        // Check if the guess is correct
        if (userGuess === secretNumber) {
            message.textContent = "Congratulations! You guessed the correct number!";
         

            if (score > highScore) {
                highScore = score;
                highScoreDisplay.textContent = highScore;
            }
            document.body.classList.remove("correct-guess");
        } else {
            // Update score and provide feedback
            score--;
            scoreDisplay.textContent = score;

            if (userGuess < secretNumber) {
                message.textContent = "Your Guess is too low!";
            } else {
                message.textContent = "Your number is high!";
            }

            // Check if the game is over
            if (score === 0) {
                message.textContent = "Sorry, game over. The correct number was " + secretNumber;
            }
        }
    }


    function resetGame() {
        secretNumber = generateSecretNumber();
        score = 10;
    
     document.getElementById("guessInput");
     guessInput.value = "";
        
     document.getElementById("message");
     message.textContent = "";
    
     document.getElementById("score");
     scoreDisplay.textContent = score;
    
     document.body.classList.remove("correct-guess");
    }
