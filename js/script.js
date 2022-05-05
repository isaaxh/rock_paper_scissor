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
    
    // for (let i = 0; i < 5; i++) {
    //     userSelection = prompt ('Choose Rock Paper or Scissors: ').toLowerCase();
    //     console.log(playRound(userSelection, compSelection(randomNum())));
    //     console.log(`User Score: ${userScore}`);
    //     console.log(`Computer Score: ${compScore}`);
        
    //     if (userScore === 3 || compScore === 3) {
    //         console.log(`GAME OVER!`)
    //     } 

    //     }
    //     if (userScore === compScore) {
    //         console.log(`GAME OVER!`)
    //         console.log(`IT'S A TIE!`)
    //     } else if (userScore < compScore) {
    //         console.log(`GAME OVER!`)
    //         console.log(`YOU LOST THE GAME!`)
    //     } else if (userScore > compScore){
        //         console.log(`GAME OVER!`)
        //         console.log(`YOU WON THE GAME!`)
        //     }
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