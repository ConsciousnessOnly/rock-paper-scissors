const log = console.log;

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
    log("You choose: ✊🏻");
    playRound("rock");
});

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
    log("You choose: 🖐🏻");
    playRound("paper");
});

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", () => {
    log("You choose: ✌🏻");
    playRound("scissors");
});

let humanScore = 0;
let computerScore = 0;

function displayWinner(humanScore, computerScore) {
    console.group("😇 Final score 😇")
    log(`👶 Human: ${humanScore} vs 💻 Computer: ${computerScore}`);

    if (humanScore + computerScore === 5) {
        if (humanScore > computerScore) {
            log("🏆 The Winner is: Human! 🏆");
        }
        else if (computerScore > humanScore) {
            log("🏆 The Winner is: Computer! 🏆");
        }
    }
    else {
        log("What's going on? 😱 The total scores (human + computer) must equal 5...");
    }
    console.groupEnd("😇 Final score 😇");
} 

function playRound(humanChoice, computerChoice = getComputerChoice()) {
    if (isEmpty(humanChoice) || isEmpty(computerChoice)) {
        log("Input is empty! Try again.");
        // playRound();            
    }
    else if (humanChoice === computerChoice) {
        log("It’s a tie; play again.");
        // playRound();
    }
    else {
        switch (
        isRock(humanChoice) && isScissors(computerChoice) ||
        isPaper(humanChoice) && isRock(computerChoice) ||
        isScissors(humanChoice) && isPaper(computerChoice)) {
            case true:
                showWinner("You win!", humanChoice, computerChoice);
                addScore("human");
                showCurrentScore();
                break;
            case false:
                showWinner("Computer win!", computerChoice, humanChoice);
                addScore("computer");
                showCurrentScore();
        }
    }

    function showWinner(msgWinner, winnerChoice, loserChoice) {
        log(`${msgWinner} ${winnerChoice} bests ${loserChoice}`);
    }

    function showCurrentScore() {
        log(`Human: ${humanScore} vs Computer: ${computerScore}`);
    }

    function addScore(identity) {
        identity === "human" ? humanScore += 1 : computerScore += 1;
    }
}

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    // log("Random number is : " + number);

    switch (number) {
        case 0:
            log("Computer choose: ✊🏻");
            return "rock"
        case 1:
            log("Computer choose: 🖐🏻");
            return "paper"
        case 2:
            log("Computer choose: ✌🏻");
            return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please choose from Rock, Paper, Scissors", '');

    if (isEmpty(humanChoice)) {
        log('You Input Empty, please Input again.');
        // return getHumanChoice();
    }
    else if (
        isRock(humanChoice) ||
        isPaper(humanChoice) ||
        isScissors(humanChoice)) {
        log(`You Input ${humanChoice}.`);
        return humanChoice.toLowerCase();
    }
    else {
        log("Input again!");
        return getHumanChoice();
    }
}

function isEmpty(string) {
    return !string
}

function isRock(string) {
    return (string.toLowerCase() === 'rock') ? true : false;
}

function isPaper(string) {
    return (string.toLowerCase() === 'paper') ? true : false;
}

function isScissors(string) {
    return (string.toLowerCase() === 'scissors') ? true : false;
}