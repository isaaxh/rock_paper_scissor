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
const gameWinner = document.querySelector('#message3');
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

// generate a random number
const randomNum = function generateRandomNum() {
    return Math.floor(Math.random() * 3);
};

// computer makes a random choice
function compSelection() {
    return gameOptions[randomNum()];
}

// how a round of the game plays- game rules
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

// disables game options and shows end game message when either player reaches score 5
const checkGameState = () => {
    
    if (userScore >= 5 || compScore >= 5) {
        disableGameOptions();
        showEndGameMessage ();
        btnRestart.style.display = 'block';
        return 
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
 
// determines the game winner
const isWinner = () => {
    if (userScore >= 5) {
        gameWinner.innerText = ('PLAYER WINS!');
    } else if (compScore >= 5) {
        gameWinner.innerText = ('COMPUTER WINS!');
    }
}

// what happens when a game option button is clicked
const handleChoiceClicked = (choice) => {
    userSelection = choice;
    compSelection(randomNum());
    roundWinner.innerText = playRound(userSelection, compSelection());
    roundWinner.style.display = 'flex';
    checkGameState();
    isWinner();
};

// starts the game and plays as many rounds as needed until there is a winner
function beginGame() {
    displayContent.style.display = "flex";
    menuOptions.style.display = "none";
    btnRock.addEventListener('click', () => handleChoiceClicked('rock'));
    btnPaper.addEventListener('click', () => handleChoiceClicked('paper'));
    btnScissors.addEventListener('click', () => handleChoiceClicked('scissors'));
}

btnStart.addEventListener('click', beginGame);