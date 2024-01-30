let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice;
    let selection = Math.floor(Math.random() * 3 + 1);
    switch (selection) {
        case 1:
            choice = "rock"
            break;

        case 2:
            choice = "paper"
            break;

        case 3:
            choice = "scissors"
            break;

        default:
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        playerScore++;
        computerScore++;
        return "We have a tie!"
    }
    else if (
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper"
    ) {
        playerScore++;
        return "The player's " + playerSelection + " beats the computer's " + computerSelection;
    } else {
        computerScore++;
        return "The computer's " + computerSelection + " beats the player's " + playerSelection;
    }
}

function checkScore() {
    if (playerScore == computerScore) {
        return "The player and computer are tied!"
    }
    else if (playerScore > computerScore) {
        return "The player is the winner!"
    }
    else {
        return "The computer is the winner!"
    }
}

function game() {
    for (let rounds = 0; rounds < 5; rounds++) {
        let playerSelection = prompt("Rock, paper or scissors?")
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(checkScore());
}

// game();
function weaponSelected(str) {
    let computerSelection = getComputerChoice();
    console.log(playRound(str, computerSelection));
}

const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {weaponSelected('rock')});

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {weaponSelected('paper')});

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {weaponSelected('scissors')});