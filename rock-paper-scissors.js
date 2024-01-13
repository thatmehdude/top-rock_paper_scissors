const options = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
};
console.log(getComputerChoice());