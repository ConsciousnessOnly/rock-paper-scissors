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

