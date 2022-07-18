const btnRock = document.querySelector('#rockBtn');
const btnPaper = document.querySelector('#paperBtn');
const btnScissors = document.querySelector('#scissorsBtn');
const btnStart = document.querySelector('#startBtn');
const btnRestart = document.querySelector('#restartBtn');
const divDisplayResults = document.querySelector('#displayResults')
const displayContent = document.querySelector('.container');
const menuOptions = document.querySelector('.menu-options');
const endGameMessage = document.querySelector('#message1');
const roundWinner = document.querySelector('#message2');
const playerScoreTracker = document.querySelector('#userScore');
const compScoreTracker = document.querySelector('#compScore')
const modal = document.querySelector('.modal');
const span = document.getElementsByClassName("close")[0];
const gameOptions = ['rock', 'paper', 'scissors'];

// setting default values 
let userSelection;
let userScore = 0;
let compScore = 0;
btnRestart.style.display = 'none';
roundWinner.style.display = 'none';


// Functions

const randomNum = function generateRandomNum() {
    return Math.floor(Math.random() * 3);
};

function compSelection() {
    return gameOptions[randomNum()];
}

function playRound(playerChoice, compChoice) {
    if (playerChoice === compChoice) {
        return `It's a DRAW, both chose ${playerChoice}...`;
    }

    if (
        (playerChoice === 'rock' && compChoice === 'paper') ||
        (playerChoice === 'paper' && compChoice === 'scissors') ||
        (playerChoice === 'scissors' && compChoice === 'rock')
    ) {
        compScore += 1;
        compScoreTracker.innerText = compScore
        return `You LOSE this round! Computer chose ${compChoice}...`;
    } else {
        userScore += 1;
        playerScoreTracker.innerText = userScore
        return `You WIN this round! Computer chose ${compChoice}...`;
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
        disableGameOptions();
        showEndGameMessage ();
        btnRestart.style.display = 'block';
        return 
    } else {
        console.log('CONTINUE');
    }
}



const showEndGameMessage = () => {
    endGameMessage.innerText = 'GAME OVER! Click Restart to play again'
}

const disableGameOptions = () => {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
}
 
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
    roundWinner.innerText = playRound(userSelection, compSelection());
    roundWinner.style.display = 'flex';
    scoreTracker();
    checkGameState();
    isWinner();
};

function beginGame() {
    let i = 0;
    console.log('game has begun');
    displayContent.style.display = "flex";
    menuOptions.style.display = "none";
    btnRock.addEventListener('click', () => handleChoiceClicked('rock'));
    btnPaper.addEventListener('click', () => handleChoiceClicked('paper'));
    btnScissors.addEventListener('click', () => handleChoiceClicked('scissors'));

}

btnStart.addEventListener('click', beginGame);