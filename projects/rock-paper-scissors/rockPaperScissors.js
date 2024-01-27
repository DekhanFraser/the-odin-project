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
        return "We have a tie!"
    }
    else if (
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper"
    ) {
        return "The player's " + playerSelection + " beats the computer's " + computerSelection;
    } else {
        return "The computer's " + computerSelection + " beats the player's " + playerSelection;
    }
}

for (let rounds = 0; rounds < 3; rounds++) {
    let playerSelection = prompt("Rock, paper or scissors?")
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}