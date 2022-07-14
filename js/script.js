const btnRock = document.querySelector('#rockBtn');
const btnPaper = document.querySelector('#paperBtn');
const btnScissors = document.querySelector('#scissorsBtn');
const btnRestart = document.querySelector('#restartBtn');

btnRock.addEventListener('click', playRound(userSelection, compSelection(randomNum())));






let userSelection;
const gameOptions = ['rock', 'paper', 'scissors'];

let userScore = 0;
let compScore = 0;


let randomNum = function generateRandomNum () {
    return Math.floor(Math.random() * 3);
}
let compSelection = function pcPlay(randomNum){
    return gameOptions[randomNum];
}

function playRound(playerChoice, compChoice) {
    // if playerChoice and compChoice are equal
    if (playerChoice === compChoice) {
    // return ‘its a draw. Show userScore and compScore’
    return `It's a draw, both chose ${playerChoice}`
    }

    if (
        (playerChoice === 'rock' && compChoice === 'paper') || 
        (playerChoice === 'paper' && compChoice === 'scissors') ||
        (playerChoice === 'scissors' && compChoice === 'rock')
    )   {
            compScore += 1;
            return `You lose! Computer chose ${compChoice}.`
        } else if (
        (playerChoice === 'paper' && compChoice === 'rock') ||
        (playerChoice === 'scissors' && compChoice === 'paper') ||
        (playerChoice === 'rock' && compChoice === 'scissors')

    )  {
            userScore += 1;
            return `You win! Computer chose ${compChoice}.`
        }

}


function game(){
    
    let i = 0;
        
    while (i === 0) {     

        userSelection = prompt ('First to 5 wins! \nChoose Rock Paper or Scissors: ').toLowerCase();
        console.log(playRound(userSelection, compSelection(randomNum())));
        

        if ((compScore === 5) || (userScore === 5)) {
            displayResults ();
            console.log(`GAME OVER!`);
            if (userScore === 5) {
                console.log(`YOU WON THE GAME!`);
            } else {
                console.log(`YOU LOST THE GAME!`);
            }
            i = 1;           
        } else {
            displayResults ();
        }
    } 
}


function displayResults() {
    console.log(`User Score: ${userScore}`);
    console.log(`Computer Score: ${compScore}`);
}

game();