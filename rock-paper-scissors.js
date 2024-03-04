// let playerScore = 0;
// let computerScore = 0;
// const options = ["rock", "paper", "scissors"];
// function getComputerChoice(){
//     const randomIndex = Math.floor(Math.random() * options.length);
//     return options[randomIndex];
// };

// function playRound(playerSelection,computerSelection){
//     const normalizedPlayerSelection = playerSelection.toLowerCase();
//     if (normalizedPlayerSelection == computerSelection){
//         return "It's a tie";
//     }
//     else if ((normalizedPlayerSelection == "rock" && computerSelection == "scissors") || 
//             (normalizedPlayerSelection == "paper" && computerSelection == "rock") ||
//             (normalizedPlayerSelection == "scissors" && computerSelection == "paper")){
//             playerScore += 1;  
//             return `You win ${normalizedPlayerSelection} beats ${computerSelection}`;
//     }
//     else {
//         computerScore += 1
//         return `You lose ${computerSelection} beats ${normalizedPlayerSelection}`
//     }
// }

// function game(){
//     // for (let round = 1; round <= 5; round ++){
//         let play = true;
//         while(play){
//             const playerChoice = prompt("Choose rock, paper or scissors: ");
//             if (!options.includes(playerChoice.toLowerCase())) {
//                 alert("Invalid choice. Please choose rock, paper, or scissors.");
//                 continue;
//             }
//             const computerChoice = getComputerChoice();
//             let result = playRound(playerChoice, computerChoice);
//             displayResult(result);
//             play = confirm("Do you want to play another round?");
//         }
//         displayFinalResult();
// }



// function createButtons() {
//     options.forEach(selection => {
//         const button = document.createElement('button');
//         button.textContent = selection;
//         button.addEventListener('click', () => {
//             const computerChoice = getComputerChoice();
//             let result = playRound(selection, computerChoice);
//             displayResult(result);
//         });
//         document.body.appendChild(button);
//     });
// }

// function createResultsDiv(){
//     const resultsDiv = document.createElement('div');
//     resultsDiv.id = 'results';
//     document.body.appendChild(resultsDiv);
// }
// //Function to display the results in the DOM
// function displayResult(message){
//     const resultDiv = document.querySelector('#results');
//     const paragraph = document.createElement('p');
//     paragraph.textContent = message;
//     resultDiv.appendChild(paragraph);
// }

// function displayFinalResult() {
//     let finalResult;
//     if (playerScore > computerScore) {
//         finalResult = "Congratulations! You win the game!";
//     } else if (playerScore < computerScore) {
//         finalResult = "Sorry, you lose the game.";
//     } else {
//         finalResult = "The game is a tie.";
//     }
//     displayResult(finalResult);
// }

// createResultsDiv();
// createButtons();
// game();

let playerScore = 0;
let computerScore = 0;
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const normalizedPlayerSelection = playerSelection.toLowerCase();
    let result;
    if (normalizedPlayerSelection === computerSelection) {
        result = "It's a tie";
    } else if ((normalizedPlayerSelection === "rock" && computerSelection === "scissors") || 
               (normalizedPlayerSelection === "paper" && computerSelection === "rock") ||
               (normalizedPlayerSelection === "scissors" && computerSelection === "paper")) {
        playerScore += 1;  
        result = `You win ${normalizedPlayerSelection} beats ${computerSelection}`;
    } else {
        computerScore += 1;
        result = `You lose ${computerSelection} beats ${normalizedPlayerSelection}`;
    }
    displayResult(result);
    displayScore();
    return playerScore < 5 && computerScore < 5; // Return true if neither player has reached 5 points yet
}

function game() {
    let play = true;
    while (play) {
        const playerChoice = prompt("Choose rock, paper, or scissors: ");
        if (!options.includes(playerChoice.toLowerCase())) {
            alert("Invalid choice. Please choose rock, paper, or scissors.");
            continue;
        }
        const computerChoice = getComputerChoice();
        play = playRound(playerChoice, computerChoice);
    }
    displayFinalResult();
    // Check if either player has reached 5 points to restart the game
    if (playerScore === 5 || computerScore === 5) {
        restartGame();
    }
}

function createButtons() {
    options.forEach(selection => {
        const button = document.createElement('button');
        button.textContent = selection;
        button.addEventListener('click', () => {
            const computerChoice = getComputerChoice();
            const result = playRound(selection, computerChoice);
            if (!result) {
                displayFinalResult();
                // Check if either player has reached 5 points to restart the game
                if (playerScore === 5 || computerScore === 5) {
                    restartGame();
                }
            }
        });
        document.body.appendChild(button);
    });
}

function createResultsDiv() {
    const resultsDiv = document.createElement('div');
    resultsDiv.id = 'results';
    document.body.appendChild(resultsDiv);
}

function displayResult(message) {
    const resultDiv = document.querySelector('#results');
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    resultDiv.appendChild(paragraph);
}

function displayScore() {
    const resultDiv = document.querySelector('#results');
    const scoreParagraph = document.createElement('p');
    scoreParagraph.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    resultDiv.appendChild(scoreParagraph);
}

function displayFinalResult() {
    let finalResult;
    if (playerScore > computerScore) {
        finalResult = "Congratulations! You win the game!";
    } else if (playerScore < computerScore) {
        finalResult = "Sorry, you lose the game.";
    } else {
        finalResult = "The game is a tie.";
    }
    displayResult(finalResult);
}

function restartGame() {
    // Display final round score
    displayScore();
    // Prompt the user if they want to restart the game
    const restartConfirmed = confirm("Do you want to restart the game?");
    if (restartConfirmed) {
        // Reset scores
        playerScore = 0;
        computerScore = 0;
        // Clear results div
        const resultDiv = document.querySelector('#results');
        resultDiv.innerHTML = '';
        // Start a new game
        game();
    }
}

createResultsDiv();
createButtons();
game();
