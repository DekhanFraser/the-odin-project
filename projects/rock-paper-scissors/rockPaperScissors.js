let playerScore = 0;
let computerScore = 0;
let maxScore = 5;
let gameWon = false;

// UI Variables
const gamelog = document.querySelector('#gameoutput');
const docPlayerScore = document.querySelector('#playerscore');
const docComputerScore = document.querySelector('#computerscore');

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
    if (playerScore == maxScore || computerScore == maxScore) {
        if (playerScore == computerScore) {
            updateGameLog("The player and computer are tied!");
        }
        else if (playerScore > computerScore) {
            updateGameLog("The player is the winner!");
        }
        else {
            updateGameLog("The computer is the winner!");
        }
        gameWon = true;
    }
}

function updateGameLog(str) {
    let content = document.createElement('p');
    content.textContent = str;
    gamelog.appendChild(content);
}

function weaponSelected(str) {
    if (!gameWon) {
        let computerSelection = getComputerChoice();
        updateGameLog(playRound(str, computerSelection));
        docPlayerScore.textContent = playerScore;
        docComputerScore.textContent = computerScore;
        checkScore();
    }
}

function restartGame() {
    gameWon = false;
    playerScore = 0;
    computerScore = 0;
    docPlayerScore.textContent = playerScore;
    docComputerScore.textContent = computerScore;
    gamelog.textContent = '';
}

const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {weaponSelected('rock')});

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {weaponSelected('paper')});

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {weaponSelected('scissors')});

const btnRestart = document.querySelector('#restart');
btnRestart.addEventListener('click', () => restartGame());