const log = console.log;

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", chooseRock);
function chooseRock() {
    displayMessage("You choose: ✊🏻");
    playRound("rock");
}

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", choosePaper);
function choosePaper() {
    displayMessage("You choose: 🖐🏻");
    playRound("paper");
}

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", chooseScissors);
function chooseScissors() {
    displayMessage("You choose: ✌🏻");
    playRound("scissors");
}

let humanScore = 0;
let computerScore = 0;

const body = document.querySelector("body");
const div = document.createElement("div");

body.appendChild(div);

function displayMessage(msg = "") {
    const message = document.createElement("p");
    message.textContent = msg;
    div.appendChild(message);
}

function playRound(humanChoice, computerChoice = getComputerChoice()) {
    if (isEmpty(humanChoice) || isEmpty(computerChoice)) {
        displayMessage("Input is empty! Try again.");
    }
    else if (humanChoice === computerChoice) {
        displayMessage("It’s a tie; play again.");
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
                if (isGameOver()) {
                    closeEventListener();
                    displayWinner();
                }
                break;
            case false:
                showWinner("Computer win!", computerChoice, humanChoice);
                addScore("computer");
                showCurrentScore();
                if (isGameOver()) {
                    closeEventListener();
                    displayWinner();
                }
                break;
        }
    }
    function displayWinner() {
        console.group("😇 Final score 😇")
        displayMessage(`👶 Human: ${humanScore} vs 💻 Computer: ${computerScore}`);

        if (humanScore + computerScore === 5) {
            if (humanScore > computerScore) {
                displayMessage("🏆 The Winner is: Human! 🏆");
            }
            else if (computerScore > humanScore) {
                displayMessage("🏆 The Winner is: Computer! 🏆");
            }
        }
        else {
            displayMessage("What's going on? 😱 The total scores (human + computer) must equal 5...");
        }
        console.groupEnd("😇 Final score 😇");
    }

    function closeEventListener() {
        btnRock.removeEventListener("click", chooseRock);
        btnPaper.removeEventListener("click", choosePaper);
        btnScissors.removeEventListener("click", chooseScissors);
    }


    function isGameOver() {
        return (humanScore + computerScore === 5) ? true : false;
    }

    function showWinner(msgWinner, winnerChoice, loserChoice) {
        displayMessage(`${msgWinner} ${winnerChoice} bests ${loserChoice}`);
    }

    function showCurrentScore() {
        displayMessage(`Human: ${humanScore} vs Computer: ${computerScore}`);
    }

    function addScore(identity) {
        identity === "human" ? humanScore += 1 : computerScore += 1;
    }
}

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);

    switch (number) {
        case 0:
            displayMessage("Computer choose: ✊🏻");
            return "rock"
        case 1:
            displayMessage("Computer choose: 🖐🏻");
            return "paper"
        case 2:
            displayMessage("Computer choose: ✌🏻");
            return "scissors"
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