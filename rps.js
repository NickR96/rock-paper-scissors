//Create function generating random r/p/s selection

//add prompt to get user input

function getUserInput(input) {
  if (input === "rock") {
    return "rock";
  } else if (input === "paper") {
    return "paper";
  } else if (input === "scissors") {
    return "scissors";
  } else {
    return input + " is not a valid option";
  }
}
let playerScore = 0;
let cpuScore = 0;

let userChoiceInput = getUserInput();

let choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let randomChoice = choices[Math.floor(Math.random() * 3)];
  if (randomChoice === choices[0]) {
    return `rock`;
  } else if (randomChoice === choices[1]) {
    return `paper`;
  } else if (randomChoice === choices[2]) {
    return `scissors`;
  } else {
    return `idk what happened`;
  }
}
let computerChoiceInput = getComputerChoice(choices);

function determineWinner(userChoice, computerChoice) {
  userChoice = userChoice.toLowerCase();
  if (userChoice === computerChoice) {
    return `it's a tie! SCORE: ${playerScore} - ${cpuScore}`;
  } else if (userChoice === "rock" && computerChoice === "paper") {
    cpuScore += 1;
    return `computer wins! paper beats rock! SCORE: ${playerScore} - ${cpuScore}`;
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    playerScore += 1;
    return `you win! rock beats
        paper! SCORE: ${playerScore} - ${cpuScore}`;
  } else if (userChoice === "paper" && computerChoice === "rock") {
    playerScore += 1;
    return `you win! paper beats rock! SCORE: ${playerScore} - ${cpuScore}`;
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    cpuScore += 1;
    return `computer wins! scissors beats paper! SCORE: ${playerScore} - ${cpuScore}`;
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    cpuScore += 1;
    return `computer wins! rock beats scissors! SCORE: ${playerScore} - ${cpuScore}`;
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    playerScore += 1;
    return `you win! scissors beats paper! SCORE: ${playerScore} - ${cpuScore}`;
  } else {
    return `something weird is going on SCORE: ${playerScore} - ${cpuScore}`;
  }
}

console.log(determineWinner(userChoiceInput, computerChoiceInput));

function playGame() {
  alert("Welcome! There are five rounds. Choose rock, paper, or scissors");
  for (let i = 1; i <= 5; i++) {
    userChoiceInput = prompt(`Round ${i}! Rock, Paper or Scissors`);
    computerChoiceInput = getComputerChoice();
    alert(determineWinner(userChoiceInput, computerChoiceInput));
  }
  if (playerScore > cpuScore) {
    alert("Well done! You won. Good game.");
  } else if (playerScore < cpuScore) {
    alert("OH NO! You lost");
  } else {
    alert("It is a tie");
  }
}
playGame();
