let playerScore = 0;
let computerScore = 0;
const options = ["rock", "paper", "scissors"];
function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
};

function playRound(playerSelection,computerSelection){
    const normalizedPlayerSelection = playerSelection.toLowerCase();
    if (normalizedPlayerSelection == computerSelection){
        return "It's a tie";
    }
    else if ((normalizedPlayerSelection == "rock" && computerSelection == "scissors") || 
            (normalizedPlayerSelection == "paper" && computerSelection == "rock") ||
            (normalizedPlayerSelection == "scissors" && computerSelection == "paper")){
            playerScore += 1;  
            return `You win ${normalizedPlayerSelection} beats ${computerSelection}`;
    }
    else {
        computerScore += 1
        return `You lose ${computerSelection} beats ${normalizedPlayerSelection}`
    }
}

function game(){
    for (let round = 1; round <= 5; round ++){
        const playerChoice = prompt("Choose rock, paper or scissors: ");
        const computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        console.log(`Round ${round}: ${result}`);
    }
    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lose the game.");
    } else {
        console.log("The game is a tie.");
    }
}

game();
