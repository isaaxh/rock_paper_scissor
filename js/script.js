let userSelection;
const gameOptions = ['rock', 'paper', 'scissors'];

let userScore = 0;
let compScore = 0;

userSelection = prompt ('Choose Rock Paper or Scissors: ').toLowerCase();

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
    // else if playerChoice is ‘rock’ and compChoice is ‘paper’
    } else if (playerChoice === 'rock' && compChoice === 'paper') {
    // add one to the compScore
    // return ‘You lose! Paper beats rock. Show userScore and compScore’
    return `You lose! Computer chose ${compChoice}.`
    // else if playerChoice is ‘paper’ and compChoice is ‘rock’
    } else if (playerChoice === 'paper' && compChoice === 'rock') {
    // add one to the userScore
    // return ‘You win! Paper beats rock. Show userScore and compScore’
    return `You win! Computer chose ${compChoice}.`
    // else if playerChoice is ‘paper’ and compChoice is ‘scissors’
    } else if (playerChoice === 'paper' && compChoice === 'scissors') {
    // add one to the compScore
    // return ‘You lose! scissors beats paper. Show userScore and compScore’
    return `You lose! Computer chose ${compChoice}.`
    // else if playerChoice is ‘scissors’ and compChoice is ‘paper’
    } else if (playerChoice === 'scissors' && compChoice === 'paper') {
    // add one to the userScore
    // return ‘You win! scissors beats paper. Show userScore and compScore’
    return `You win! Computer chose ${compChoice}.`
    // else if playerChoice is ‘scissors’ and compChoice is ‘rock’
    } else if (playerChoice === 'scissors' && compChoice === 'rock') {
    // add one to the compScore
    // return ‘You lose! rock beats scissors. Show userScore and compScore’
    return `You lose! Computer chose ${compChoice}.`
    // else if playerChoice is ‘rock’ and compChoice is ‘scissors’
    } else if (playerChoice === 'rock' && compChoice === 'scissors') {
    // add one to the userScore
    // return ‘You win! rock beats scissors. Show userScore and compScore’
    return `You win! Computer chose ${compChoice}.`
    }
    }

console.log(playRound(userSelection, compSelection(randomNum())))
