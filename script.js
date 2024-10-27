const log = console.log;

playGame();

function playGame() {
    const humanSelection = getHumanChoice;
    const computerSelection = getComputerChoice;
    let round = 1;
    let humanScore = 0;
    let computerScore = 0;

    startRound();
    displayWinner(humanScore, computerScore);

    function startRound(){
        while (round <= 5) {
            console.group(`Round: ${round}`)
            playRound(humanSelection(), computerSelection());
            console.groupEnd(`Round: ${round}`)
            round++;
        }
    }    

    function displayWinner(humanScore, computerScore) {
        log("😇 Final score 😇");
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

    // testPlayRound();
    function testPlayRound() {
        playRound("rock", "rock");
        playRound("rock", "paper");
        playRound("rock", "scissors");

        playRound("paper", "rock");
        playRound("paper", "paper");
        playRound("paper", "scissors");

        playRound("scissors", "rock");
        playRound("scissors", "paper");
        playRound("scissors", "scissors");

        playRound(null, "rock");
        playRound(null, "paper");
        playRound(null, "scissors");

        playRound("rock", null);
        playRound("paper", null);
        playRound("scissors", null);
    }    

    function getComputerChoice() {
        const number = Math.random() * 100;
        // log("Random number is : " + number);

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

    // testComputerChoice();
    function testComputerChoice() {
        let count = 1;
        while (count <= 30) {
            log(getComputerChoice());
            count++;
        }
    }    

    // log(getHumanChoice());
    function getHumanChoice() {
        let humanChoice = prompt("Please choose from Rock, Paper, Scissors", '');
        
        if (isEmpty(humanChoice)) {
            log('You Input Empty, please Input again.');
            return getHumanChoice();
        }
        else if (isRock(humanChoice) ||
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
}