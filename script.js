// Vars
const rock = "rock", paper = "paper", scissors = "scissors";
const choices = [rock, paper, scissors];

// Button Events
const rockBtn = document.querySelector('.rock-button');
rockBtn.addEventListener('click', () => {
  playRound(rock);
});
const paperBtn = document.querySelector('.paper-button');
paperBtn.addEventListener('click', () => {
  playRound(paper);
});
const scissorsBtn = document.querySelector('.scissors-button');
scissorsBtn.addEventListener('click', () => {
  playRound(scissors);
});

// Score Divs
const playerScoreDiv = document.querySelector('.player-score');
const computerScoreDiv = document.querySelector('.computer-score');
const resultDiv = document.querySelector('.result');

// Functions
let getComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
};

let playerScore = 0;
let computerScore = 0;

let playRound = (playerSelection) => {
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        resultDiv.innerHTML = "Tie game!";
    } else if ((playerSelection === rock && computerSelection === scissors) || 
                (playerSelection === paper && computerSelection === rock) ||
                (playerSelection === scissors && computerSelection === paper)) {
                    resultDiv.innerHTML = "You Won! " + playerSelection + " beats " + computerSelection;
                playerScore += 1;
                playerScoreDiv.innerHTML = "Player Score: " + playerScore;
                computerScoreDiv.innerHTML = "Computer Score: " + computerScore;
    } else {
        resultDiv.innerHTML = "You Lose! " + computerSelection + " beats " + playerSelection;
        computerScore += 1;
        playerScoreDiv.innerHTML = "Player Score: " + playerScore;
        computerScoreDiv.innerHTML = "Computer Score: " + computerScore;
    }

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            resultDiv.innerHTML = "You won the game!";
        } else {
            resultDiv.innerHTML = "You lose the game!";
        }
        playerScore = 0;
        computerScore = 0;
        return;
    }
};
