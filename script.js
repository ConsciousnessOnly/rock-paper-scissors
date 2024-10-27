const log = console.log;

function playGame() {
    const humanSelection = getHumanChoice;
    const computerSelection = getComputerChoice;
    let round = 1;
    let humanScore = 0;
    let computerScore = 0; 

    while (round <= 5) {
        console.group(`Round: ${round}`)
        playRound(humanSelection(), computerSelection());
        console.groupEnd(`Round: ${round}`)
        round++;
    }

    displayWinner(humanScore, computerScore);
    
    function displayWinner(humanScore, computerScore){
        log("Final score");
        log(`Human: ${humanScore} vs Computer: ${computerScore}`);

        if (humanScore + computerScore === 5){
            if (humanScore > computerScore){
                log("The Winner is: Human!");
            }
            else if (computerScore > humanScore){
                log("The Winner is: Computer!");
            }
        }
        else{
            log("What's going on? The total scores (human + computer) must equal 5...");
        }        
    }
    // displayWinner(3, 2);
    // displayWinner(2, 3);
    // displayWinner(3, 3);
    // displayWinner(2, 2);

    function playRound(humanChoice, computerChoice) {
        const computerWin = "Computer win! ";
        const humanWin = "You win! "
        const rockWin = "Rock beats Scissors";
        const paperWin = "Paper beats Rock";
        const scissorsWin = "Scissors beats Paper";

        if (humanChoice === computerChoice) {
            log("It’s a tie; play again.");
            playRound(humanSelection(), computerSelection());
        }
        else if (humanChoice === "rock") {
            switch (computerChoice) {
                case "paper":
                    showWinner(computerWin, paperWin);
                    addComputerScore();
                    showCurrentScore();
                    break;
                case "scissors":
                    showWinner(humanWin, rockWin);
                    addHumanScore();
                    showCurrentScore();
                    break;
            }
        }
        else if (humanChoice === "paper") {
            switch (computerChoice) {
                case "scissors":
                    showWinner(computerWin, scissorsWin);
                    addComputerScore();
                    showCurrentScore();
                    break;
                case "rock":
                    showWinner(humanWin, paperWin);
                    addHumanScore();
                    showCurrentScore();
                    break;
            }
        }
        else if (humanChoice === "scissors") {
            switch (computerChoice) {
                case "rock":
                    showWinner(computerWin, rockWin);
                    addComputerScore();
                    showCurrentScore();
                    break;
                case "paper":
                    showWinner(humanWin, paperWin);
                    addHumanScore();
                    showCurrentScore();
                    break;
            }
        }

        function showWinner(msgWinner, msgSelection) {
            log(msgWinner + msgSelection);
        }
    
        function showCurrentScore() {
            log(`Human: ${humanScore} vs Computer: ${computerScore}`);
        }
    
        function addComputerScore() {
            computerScore += 1;
        }
    
        function addHumanScore() {
            humanScore += 1;
        }
    }
    // playRound("scissors", "paper");

    function getComputerChoice() {
        const number = Math.random() * 100;
        log("Random number is : " + number);

        if (number <= 33) {
            log("Computer choose: rock");
            return "rock"
        }
        else if (number <= 66) {
            log("Computer choose: paper");
            return "paper"
        }
        else {
            log("Computer choose: scissors");
            return "scissors"
        }
    }

    function testComputerChoice() {
        let count = 1;
        while (count <= 30) {
            log(getComputerChoice());
            count++;
        }
    }
    // testComputerChoice();
    // log(getComputerChoice());

    function getHumanChoice() {
        let humanSelection = prompt("Please choose from Rock, Paper, Scissors", '');
        log("You choose(before change): " + humanSelection);

        humanSelection = (humanSelection === null) ? getHumanChoice() :
            humanSelection.toLowerCase();
        log("You choose(after change): " + humanSelection);

        switch (humanSelection) {
            case "rock":
            case "paper":
            case "scissors":
                return humanSelection;

            default: getHumanChoice();
        }
    }
    // getHumanChoice();
    // log("You choose: " + getHumanChoice()); 
}

playGame();