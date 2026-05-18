let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let tieScore = 0;

const choices = document.querySelectorAll('.choice')
choices.forEach(choice => {
    choice.addEventListener('click', () => playRound(choice.id, computerChoice()))
});
const win_score = document.getElementById('win'); 
const tie_score = document.getElementById('tie');
const lose_score = document.getElementById('lose');
const msg = document.querySelector('.msgcontainer p')
const rst = document.querySelector('.resetbuttons button')
rst.addEventListener('click', reset);

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "paper") computerWin(playerSelection, computerSelection);
    if (playerSelection == "rock" && computerSelection == "scissors") playerWin(playerSelection, computerSelection);
    if (playerSelection == "rock" && computerSelection == "rock") tie(playerSelection, computerSelection);
    if (playerSelection == "paper" && computerSelection == "paper") tie(playerSelection, computerSelection);
    if (playerSelection == "paper" && computerSelection == "rock") playerWin(playerSelection, computerSelection);
    if (playerSelection == "paper" && computerSelection == "scissors") computerWin(playerSelection, computerSelection);
    if (playerSelection == "scissors" && computerSelection == "scissors") tie(playerSelection, computerSelection);
    if (playerSelection == "scissors" && computerSelection == "paper") playerWin(playerSelection, computerSelection);
    if (playerSelection == "scissors" && computerSelection == "rock") computerWin(playerSelection, computerSelection);
}

function playerWin(playerSelection, computerSelection){
msg.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. You win!`;
playerScore += 1;
win_score.textContent = playerScore;
}

function computerWin(playerSelection, computerSelection){
msg.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. You lose!`;
computerScore += 1;
lose_score.textContent = computerScore;

}
function tie(playerSelection, computerSelection){
msg.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. Tie!`;
tieScore += 1;
tie_score.textContent = tieScore;
}

function computerChoice(){
    let array = ["rock", "paper", "scissors"];
    let item = array[Math.floor(Math.random() * array.length)];
    return item;
}

function reset(){
    playerScore = 0;
    tieScore = 0;
    computerScore = 0;
    win_score.textContent = playerScore;
    lose_score.textContent = computerScore;
    tie_score.textContent = tieScore;
    msg.textContent = "";
}