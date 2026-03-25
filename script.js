const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const final = document.querySelector("#final");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let result = "";
    if (Math.random() < 0.3) { result = ROCK; }
    else if (Math.random() >= 0.3 && Math.random() < 0.6) {
        result = PAPER;
    }
    else { result = SCISSORS; }
    return result;
}

function playRound(event) {
    if (humanScore == 5 || computerScore == 5){
        rock.setAttribute("disabled", true)
        scissors.setAttribute("disabled", true)
        paper.setAttribute("disabled", true)
        return;
    }
    const humanChoice = event.target.id;
    const computerChoice = getComputerChoice().toLowerCase();
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
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}, 
        your score is ${humanScore} and computer score is ${computerScore}`;
    }
    else if (win == false) {
        computerScore += 1;
        result.textContent = `You lose ${computerChoice} beats ${humanChoice},
         your score is ${humanScore} and computer score is ${computerScore}`;
    }
    else { result.textContent = `Both choose same, try again, 
        score board is you: ${humanScore} and computer: ${computerScore}`}

    if (humanScore == 5) {
        final.textContent = `Winner is Human with score ${humanScore}`;
    }
    else if (computerScore == 5){
        final.textContent = `Winner is Computer  with score ${computerScore}`;
    }
        
}

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);
