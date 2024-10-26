// console.log("Hello World");
const log = console.log;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const number = Math.random() * 100;
    log("Random number is : " + number);

    if (number <= 33){
        log("Computer choose: rock");
        return "rock"
    }
    else if (number <= 66){
        log("Computer choose: paper");
        return "paper"
    }
    else{
        log("Computer choose: scissors");
        return "scissors"
    }
}

function testComputerChoice(){
    let count = 1;
    while(count <= 30){
        log(getComputerChoice());
        count++;
    }
}
// testComputerChoice();
// log(getComputerChoice());

function getHumanChoice(){
    let humanSelection = prompt("Please choose from Rock, Paper, Scissors",'');
    log("You choose(before change): " + humanSelection);

    humanSelection = (humanSelection === null) ? getHumanChoice() : 
                    humanSelection.toLowerCase();
    log("You choose(after change): " + humanSelection);
    
    switch (humanSelection){
         case "rock":
         case "paper":
         case "scissors":
             return humanSelection;
        
         default : getHumanChoice();
    }
}
// getHumanChoice();
// log("You choose: " + getHumanChoice());

function playRound(humanChoice, computerChoice){
    const computerWin = "Computer win! ";
    const humanWin = "You win! "
    const rockWin = "Rock beats Scissors";
    const paperWin = "Paper beats Rock";
    const scissorsWin = "Scissors beats Paper";    

    if (humanChoice === computerChoice){
        log("It’s a tie; play again.");
        playRound(getHumanChoice(), getComputerChoice());
    }
    else if (humanChoice === "rock"){
        switch (computerChoice){
            case "paper":
                log(computerWin + paperWin);
                break;
            case "scissors":
                log(humanWin + rockWin);
                break;
        }
    }
    else if (humanChoice === "paper"){
        switch (computerChoice){
            case "scissors":
                log(computerWin + scissorsWin);
                break;
            case "rock":
                log(humanWin + paperWin);
                break;
        }
    }
    else if (humanChoice === "scissors"){
        switch (computerChoice){
            case "rock":
                log(computerWin + rockWin);
                break;
            case "paper":
                log(humanWin + paperWin);
                break;
        }
    }
}
// playRound("paper", "paper");
