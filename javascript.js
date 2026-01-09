let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    let choice = String;   
    let randomizer = Math.random();
    if (randomizer < 0.33) choice = "rock"; 
    else if (randomizer > 0.66) choice = "paper";
    else choice = "scissors";
    return choice
}

function getHumanChoice() {
    let choice = String;
    let decider = prompt("[1] rock, [2] paper, [3] scissors?");
    if (decider == 1) choice = "rock";
    if (decider == 2) choice = "paper";
    if (decider == 3) choice = "scissors"; 
    return choice;
}


function playRound(humanChoice, computerChoice){
if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose!");
    computerScore++;
}
if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win!");
    humanScore++;
}
if (humanChoice == "rock" && computerChoice == "rock") {
    console.log("It's a tie!");
}

if (humanChoice == "paper" && computerChoice == "paper") {
    console.log("It's a tie");
}
if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You win!");
    humanScoreScore++;
}
if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You lose!");
    computerScore++;
}

if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win!");
    humanScore++;
}
if (humanChoice == "scissors" && computerChoice == "scissors") {
    console.log("It's a tie!");
}
if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose!");
    computerScore++;
}
}



function playGame(){
    for(let i = 0; i<=5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
}

playGame();