//declaring constant for each choice
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors"

// to generate random choice between rock, paper and scissor by Computer
function getComputerChoice() {
    let result = "";
    if (Math.random() < 0.3) { result = ROCK; }
    else if (Math.random() >= 0.3 && Math.random() < 0.6) {
        result = PAPER;
    }
    else { result = SCISSORS; }
    return result;
}

//getComputerChoice();

//to generate choice based on human entered prompt message
function getHumanChoice() {
    let choice = window.prompt("Choose Rock or paper or scissors");
    return choice;
}

//getHumanChoice(Number(choice))

//play game for 5 rounds
function playGame() {
    //tracking human score and computer score
    let humanScore = 0;
    let computerScore = 0;

    //logic for playing single round
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = getComputerChoice().toLowerCase();
        let win = true;
        if ((humanChoice == ROCK && computerChoice == PAPER) ||
            (humanChoice == PAPER && computerChoice == SCISSORS) ||
            (humanChoice == SCISSORS && computerChoice == ROCK)) {
            win = false;
        }
        else if (humanChoice == computerChoice) {
            win = null;
        }
        if (win == true) {
            humanScore += 1;
            console.log(`"You win! ${humanChoice} beats ${computerChoice}"`);
        }
        else if (win == false) {
            computerScore += 1;
            console.log(`"You lose ${computerChoice} beats ${humanChoice}"`)
        }
        else {console.log("Both choose same, try again")}
    }

    for (let i =1;i<=5;i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);   
    }

    if (humanScore > computerScore) {console.log("You win!!")}
    else if (humanScore == computerScore){console.log("Game tied!!")}
    else {console.log("You lose!!")}    
}
playGame();