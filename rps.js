//Create function generating random r/p/s selection

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor((Math.random) * 3)]


}
console.log(getComputerChoice)








function playRound(playerSelection, computerSelection){
    return computerSelection

}

console.log(playRound)

const playerSelection = prompt("enter choice", "");
console.log(playerSelection.toLowerCase())
const computerSelection = getComputerChoice();

/*console.log(playRound(playerSelection.toLowerCase(), computerSelection))



*/

/*function playGame(params) {
    function playRound(playerSelection, computerSelection) {

    };
    
    
}

*/

    





