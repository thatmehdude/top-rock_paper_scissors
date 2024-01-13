let playerScore = 0;
let computerScore = 0;
const options = ["rock", "paper", "scissors"];
function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
};
console.log(getComputerChoice());

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
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));