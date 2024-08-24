document.addEventListener("DOMContentLoaded", () => {

    // Counter variables
    let computerScore = 0;
    let humanScore = 0;

    // DOM elements
    const rockBtn = document.getElementById("rock-button");
    const paperBtn = document.getElementById("paper-button");
    const scissorsBtn = document.getElementById("scissors-button");
    const humanScoreCounter = document.getElementById("player-score");
    const computerScoreCounter = document.getElementById("computer-score");
    const commentary = document.getElementById("commentary");
    const resetBtn = document.getElementById("reset-button");

    // Event listeners for buttons
    rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
    resetBtn.addEventListener("click", () => resetGame());

    // Play round
    function playRound(humanChoice, computerChoice) {
        if (humanScore < 5 && computerScore < 5) {
            determineWinner(humanChoice, computerChoice);
        }
        checkForWinner();
    }

    // Get computer's choice
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const choice = Math.floor(Math.random() * choices.length);
        return choices[choice];
    }

    // Compare choices to determine winner
    function determineWinner(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            commentary.textContent = `You both selected ${humanChoice}. It's a draw!`;
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            commentary.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}. You win!`;
            humanScore++;
        } else {
            commentary.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}. You lose!`;
            computerScore++;
        }
        updateScores();
    }

    // Update scores on the screen
    function updateScores() {
        humanScoreCounter.textContent = `Player Score: ${humanScore}`;
        computerScoreCounter.textContent = `Computer Score: ${computerScore}`;
    }

    // Check if there's a winner
    function checkForWinner() {
        if (humanScore === 5) {
            commentary.textContent = "Congratulations! You won the game!";
            disableButtons();
        } else if (computerScore === 5) {
            commentary.textContent = "Game over! The computer won the game!";
            disableButtons();
        }
    }

    // Disable buttons after game ends
    function disableButtons() {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }

    // Reset the game
    function resetGame() {
        computerScore = 0;
        humanScore = 0;
        updateScores();
        commentary.textContent = "Game reset. Let's play again!";
        enableButtons();
    }

    // Enable buttons for a new game
    function enableButtons() {
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
    }

});
