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

const randomNum = function generateRandomNum() {
    return Math.floor(Math.random() * 3);
};

function compSelection() {
    return gameOptions[randomNum()];
}

function playRound(playerChoice, compChoice) {
    if (playerChoice === compChoice) {
        return `It's a draw, both chose ${playerChoice}`;
    }

    if (
        (playerChoice === 'rock' && compChoice === 'paper') ||
        (playerChoice === 'paper' && compChoice === 'scissors') ||
        (playerChoice === 'scissors' && compChoice === 'rock')
    ) {
        compScore += 1;
        return `You lose this round! Computer chose ${compChoice}.`;
    } else {
        userScore += 1;
        return `You win this round! Computer chose ${compChoice}.`;
    }
}

function displayResults() {
    console.log(`User Score: ${userScore}`);
    console.log(`Computer Score: ${compScore}`);
}

function restart() {
    userScore = 0;
    compScore = 0;
    beginGame();
}

function scoreTracker() {
    return console.log(`User Score: ${userScore}\nComputer Score: ${compScore}`);
}

const checkGameState = () => {
    
    if (userScore >= 5 || compScore >= 5) {
        console.log('GAME OVER');
    } else {
        console.log('CONTINUE');
    }
};

const isWinner = () => {
    if (userScore >= 5) {
        console.log('Player Wins!!!');
    } else if (compScore >= 5) {
        console.log('Computer Wins!!!');
    }
}

const handleChoiceClicked = (choice) => {
    userSelection = choice;
    console.log(userSelection);
    compSelection(randomNum());
    console.log(playRound(userSelection, compSelection()));
    scoreTracker();
    checkGameState();
    isWinner();
};

btnRock.addEventListener('click', () => handleChoiceClicked('rock'));
btnPaper.addEventListener('click', () => handleChoiceClicked('paper'));
btnScissors.addEventListener('click', () => handleChoiceClicked('scissors'));
// Calling the main loop

function beginGame() {
    let i = 0;
    console.log('game has begun');
    // while (userScore < 5 && compScore < 5) {
    // }
}
// document.addEventListener('DOMContentLoaded', beginGame);

btnStart.addEventListener('click', beginGame);