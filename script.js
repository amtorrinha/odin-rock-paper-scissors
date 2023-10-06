const rock = "rock", paper = "paper", scissors = "scissors";
const choices = [rock, paper, scissors];

let getComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
};

let playRound = (playerSelection, computerSelection) => {
    let playerSelectionLower = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Tie game!";
    } else if ((playerSelectionLower === rock && computerSelection === scissors) || 
                (playerSelectionLower === paper && computerSelection === rock) ||
                (playerSelectionLower === scissors && computerSelection === paper)) {
        return "You Won! " + playerSelectionLower + " beats " + computerSelection;
    } else {
        return "You Lose! " + computerSelection + " beats " + playerSelectionLower;
    }
};

let game = () => {
    let playerScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Input your choice");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        
        if (result.startsWith("You Won")) {
            playerScore++;
        } else if (result.startsWith("You Lose")) {
            computerScore++;
        }
        console.log(result);
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    }
    if (playerScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > playerScore){
        console.log("You lose the game!");
    } else {
        console.log("You draw!");
    }
};

game();
