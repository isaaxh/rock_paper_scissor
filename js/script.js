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
    console.log(compChoice)
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



    function updateScores(playerChoice, compChoice) {
        if (playerChoice === compChoice) {
        // return ‘its a draw. Show userScore and compScore’
        return;
        // else if playerChoice is ‘rock’ and compChoice is ‘paper’
        } else if (playerChoice === 'rock' && compChoice === 'paper') {
        // add one to the compScore
        compScore += 1;
        console.log('1 inside update function, compScore:',compScore);
        // return ‘You lose! Paper beats rock. Show userScore and compScore’
        return ;
        // else if playerChoice is ‘paper’ and compChoice is ‘rock’
        } else if (playerChoice === 'paper' && compChoice === 'rock') {
        // add one to the userScore
        userScore += 1;
        console.log('2 inside update function, userScore:',userScore);
        
        // return ‘You win! Paper beats rock. Show userScore and compScore’
        return;
        // else if playerChoice is ‘paper’ and compChoice is ‘scissors’
        } else if (playerChoice === 'paper' && compChoice === 'scissors') {
        // add one to the compScore
        compScore += 1;
        console.log('3 inside update function, compScore:',compScore);
        
        // return ‘You lose! scissors beats paper. Show userScore and compScore’
        return;
        // else if playerChoice is ‘scissors’ and compChoice is ‘paper’
        } else if (playerChoice === 'scissors' && compChoice === 'paper') {
        // add one to the userScore
        userScore += 1;
        console.log('4 inside update function, userScore:',userScore);
        
        // return ‘You win! scissors beats paper. Show userScore and compScore’
        return;
        // else if playerChoice is ‘scissors’ and compChoice is ‘rock’
        } else if (playerChoice === 'scissors' && compChoice === 'rock') {
        // add one to the compScore
        compScore += 1;
        console.log('5 inside update function, compScore:',compScore);
        
        // return ‘You lose! rock beats scissors. Show userScore and compScore’
        return;
        // else if playerChoice is ‘rock’ and compChoice is ‘scissors’
        } else if (playerChoice === 'rock' && compChoice === 'scissors') {
        // add one to the userScore
        userScore += 1; 
        console.log('6 inside update function, userScore:',userScore);
        // return ‘You win! rock beats scissors. Show userScore and compScore’
        return;
        }
        }

function game(){
    
    for (let i = 0; i < 5; i++) {
        userSelection = prompt ('Choose Rock Paper or Scissors: ').toLowerCase();
        console.log(playRound(userSelection, compSelection(randomNum())));
        updateScores(userSelection, compSelection(randomNum()));
        console.log(`User Score: ${userScore}`);
        console.log(`Computer Score: ${compScore}`);

    }
        
}

game();