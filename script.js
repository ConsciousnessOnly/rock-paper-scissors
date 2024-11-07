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

function playRound(humanChoice, computerChoice = getComputerChoice()) {
    if (humanChoice === computerChoice) {
        displayMessage("It’s a tie; play again.");
    }
    else {
        switch (isHumanWin()) {
            case true:
                showWinner("You win!", humanChoice, computerChoice);
                addScore("human");
                showCurrentScore();
                determineGameOver();
                break;
            case false:
                showWinner("Computer win!", computerChoice, humanChoice);
                addScore("computer");
                showCurrentScore();
                determineGameOver();               
                break;
        }
    }
    function isHumanWin() {
        if (isRock(humanChoice) && isScissors(computerChoice) ||
            isPaper(humanChoice) && isRock(computerChoice) ||
            isScissors(humanChoice) && isPaper(computerChoice)){
                return true;
            }
        else {
            return false;
        }
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

function displayMessage(msg = "") {
    const message = document.createElement("p");
    message.textContent = msg;
    div.appendChild(message);
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

function showWinner(msgWinner, winnerChoice, loserChoice) {
    displayMessage(`${msgWinner} ${winnerChoice} bests ${loserChoice}`);
}

function addScore(identity) {
    identity === "human" ? humanScore += 1 : computerScore += 1;
}

function showCurrentScore() {
    displayMessage(`Human: ${humanScore} vs Computer: ${computerScore}`);
}

function determineGameOver() {
    if (isGameOver()) {
        closeEventListener();
        displayWinner();
    }
}
function isGameOver() {
    return (humanScore + computerScore === 5) ? true : false;
}
function closeEventListener() {
    btnRock.removeEventListener("click", chooseRock);
    btnPaper.removeEventListener("click", choosePaper);
    btnScissors.removeEventListener("click", chooseScissors);
}
function displayWinner() {
    displayMessage(`👶 Human: ${humanScore} vs 💻 Computer: ${computerScore}`);
    
    (humanScore > computerScore) ? 
    displayMessage("🏆 The Winner is: Human! 🏆") :
    displayMessage("🏆 The Winner is: Computer! 🏆");    
}