//Counter variables
let computerScore = 0;
let humanScore = 0;
let computerRoundsWon = 0;
let humanRoundsWon = 0;
let roundsDrawn = 0;

//Get human's choice
function getHumanChoice(){
    const choices = ["rock", "paper", "scissors"];
    let choice = prompt("Please choose either 'rock', 'paper' or 'scissors':").toLowerCase();
    while (!choices.includes(choice)) {
        choice = prompt("Invalid input. Pleast enter either 'rock', 'paper' or 'scissors':").toLowerCase();
    }
    return choice;
}

//Get computer's choice
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];;
    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

 //Play round
function playRound(){
    const computer = getComputerChoice();
    const human = getHumanChoice();
    determineWinner(human, computer);  
}
//Compare choices to determine winner
function determineWinner(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log(`You both selected ${humanChoice}. It's a draw!`);
        roundsDrawn++
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") 
    ){
        console.log(`You chose ${humanChoice} and the comptuer chose ${computerChoice}. You win!`);
        humanScore++;
        humanRoundsWon++;

    } else {
        console.log(`You chose ${humanChoice} and the comptuer chose ${computerChoice}. You lose!`);
        computerScore++;
        computerRoundsWon++;
    }
    console.log(`Your score is ${humanScore} and the computer's score is ${computerScore}.`);
}

//Play game
function playGame(){
    for (let i = 0; i < 5; i++){
        console.log(`Round ${i+1}:`);
        playRound();
    }

    if (humanScore > computerScore) {
        console.log(`Game summary:`);
        console.log(`After 5 rounds, you won the game!`);
        console.log(`You won ${humanRoundsWon} round(s), the computer won ${computerRoundsWon} round(s) and ${roundsDrawn} round(s) were a draw.`);
        console.log(`Thanks for playing!`);
    } else if (computerScore > humanScore) {
        console.log(`Game summary:`);
        console.log(`After 5 rounds, the computer won the game!`);
        console.log(`You won ${humanRoundsWon} round(s), the computer won ${computerRoundsWon} round(s) and ${roundsDrawn} round(s) were a draw.`);
        console.log(`Thanks for playing!`);
    } else {
        console.log(`Game summary:`);
        console.log(`After 5 rounds, it's a tie game!`);
        console.log(`You won ${humanRoundsWon} round(s), the computer won ${computerRoundsWon} round(s) and ${roundsDrawn} round(s) were a draw.`);
        console.log(`Thanks for playing!`);
    }
}

// playGame()  