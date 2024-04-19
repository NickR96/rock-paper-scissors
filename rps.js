//Create function generating random r/p/s selection

//add prompt to get user input

function playGame() {

    function getUserInput(input){
        if (input === 'rock')  {
        return 'rock'}
        else if (input === 'paper'){
            return 'paper'}
        else if (input === 'scissors'){
            return 'scissors'}
        else {
        return input + ' is not a valid option'}
        
    }

    let userChoiceInput = getUserInput((prompt(`enter choice`, "")))

    let choices = ['rock', 'paper', 'scissors']
    function getComputerChoice() {
        let randomChoice = choices[Math.floor(Math.random() * 3)]
        if (randomChoice === choices[0]) {return `rock`}
        else if (randomChoice === choices[1]) {return `paper`}
        else if (randomChoice === choices[2]) {return `scissors`}
        else {return `idk what happened`}
        
    }
    let computerChoiceInput = getComputerChoice(choices)
        
    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {return `it's a tie!`}
        else if (userChoice === 'rock' && computerChoice === 'paper') { 
            return `computer wins! paper beats rock!`}
        else if (userChoice === 'rock' && computerChoice === 'scissors') { return `you win! rock beats
        paper!`}
        else if (userChoice === 'paper' && computerChoice === 'rock') { return `you win! paper beats rock!`}
        else if (userChoice === 'paper' && computerChoice === 'scissors')
            {return `computer wins! scissors beats paper!` }
        else if (userChoice === 'scissors' && computerChoice === 'rock') {
            return `computer wins! rock beats scissors!`}
        else if (userChoice === 'scissors' && computerChoice === 'paper') { return `you win! scissors beats paper!`}
        else {return `something weird is going on`}
    }

    console.log(determineWinner(userChoiceInput, computerChoiceInput));
}

for (let i = 0; i < 5; i++) {
    playGame()
    
}
