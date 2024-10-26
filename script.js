// console.log("Hello World");
const log = console.log;

function getComputerChoice(){
    const number = Math.random() * 100;
    log(number);

    if (number <= 33){
        return "rock"
    }
    else if (number <= 66){
        return "paper"
    }
    else{
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
    log("Before change: " + humanSelection);

    humanSelection = (humanSelection === null) ? getHumanChoice() : 
                    humanSelection.toLowerCase();
    log("After change: " + humanSelection);    
    
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
