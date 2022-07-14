const btnRock = document.querySelector('#rockBtn');
const btnPaper = document.querySelector('#paperBtn');
const btnScissors = document.querySelector('#scissorsBtn');
const btnStart = document.querySelector('#startBtn');
const btnRestart = document.querySelector('#restartBtn');
const divDisplayResults = document.querySelector('#displayResults')

const gameOptions = ['rock', 'paper', 'scissors'];
let userSelection;
let userScore = 0;
let compScore = 0;

// Functions

let randomNum = function generateRandomNum () {
    return Math.floor(Math.random() * 3);
}
let compSelection = function pcPlay(randomNum){
    return gameOptions[randomNum];
}

function playRound(playerChoice, compChoice) {

    if (playerChoice === compChoice) {
    return `It's a draw, both chose ${playerChoice}`
    }

    if (
        (playerChoice === 'rock' && compChoice === 'paper') || 
        (playerChoice === 'paper' && compChoice === 'scissors') ||
        (playerChoice === 'scissors' && compChoice === 'rock')
    )   
        {
            compScore += 1;
            return `You lose this round! Computer chose ${compChoice}.`
        } else if (
        (playerChoice === 'paper' && compChoice === 'rock') ||
        (playerChoice === 'scissors' && compChoice === 'paper') ||
        (playerChoice === 'rock' && compChoice === 'scissors')

    )  {
            userScore += 1;
            return `You win this round! Computer chose ${compChoice}.`
        }

}

function displayResults() {
    console.log(`User Score: ${userScore}`);
    console.log(`Computer Score: ${compScore}`);
}

function beginGame(){
    
//     let i = 0;
        
    btnRock.addEventListener("click", () => userSelection = 'rock')
    btnPaper.addEventListener("click", () => userSelection = 'paper')
    btnScissors.addEventListener("click", () => userSelection = 'scissors')

    console.log(userSelection)


//     while (i === 0) {     

//         userSelection =  prompt('First to 5 wins! \nChoose Rock Paper or Scissors: ').toLowerCase();
//         console.log(playRound(userSelection, compSelection(randomNum())));
        

//         if ((compScore === 1) || (userScore === 1)) {
//             displayResults ();
//             console.log(`GAME OVER!`);
//             if (userScore === 5) {
//                 console.log(`YOU WON THE GAME!`);
//             } else {
//                 console.log(`YOU LOST THE GAME!`);
//             }
//             i = 1;           
//         } else {
//             displayResults ();
//         }
//     } 
}

function restart () {
    userScore = 0;
    compScore = 0;
    beginGame ();
}

// Using event listeners

btnStart.addEventListener("click", beginGame)






// Calling the main loop