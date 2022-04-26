// create a let variable userChoice;

let userChoice;
// create an array gameOptions [];
// add ‘rock’, ‘paper’, ‘scissors’ to the gameOptions [] array
const gameOptions = ['rock', 'paper', 'scissors'];
// create a let variable compChoice;
let compChoice;
// create a let variable userScore and initialize;

// create a let variable compScore and initialize;



// prompt user with “Choose rock, paper or scissors:” and assign it to userChoice;
// make the input to be lowercase always;

// assign the returned value to a new const variable randomNum;
// create a function generateRandomNum();
function generateRandomNum() {
    // 	create a let variable randomInt;
    // 	create a random number from 0 to 1;
    // 	multiply it by 3;
    // 	assign the two above to steps to randomInt;
    // 	return the value
    let randomInt = Math.floor(Math.random() * 3);
    return randomInt;
}



// note: argument for this function is randomNum
// create a function computerPlay(randomVal);
function computerPlay(randomInt) {
    // 	put the randomVal in the index position of the gameOption [];
    // 	create const variable compSelection and assign the above step to it;
    let compSelection = gameOptions[randomInt];
    // 	return compSelection 
    return compSelection;
}

// console.log(computerPlay(generateRandomNum()));






// // game rules:
// rock x paper = paper winner 
// paper x rock = paper winner
// paper x scissors = scissors winner
// scissors x paper = scissors winner
// scissors x rock = rock winner 
// rock x scissors = rock winner

// paper x paper = draw
// rock x rock = draw 
// scissors x scissors = draw

// note: arguments for this function are userChoice and compChoice
// create function playRound(playerChoice, compChoice);
function playRound(playerChoice, compChoice) {
    // 	if playerChoice and compChoice are equal
    if (playerChoice === compChoice) {
        // 		return ‘its a draw. Show userScore and compScore’
        return `It's a draw, both chose ${playerChoice}`
        // 	else if playerChoice is ‘rock’ and compChoice is ‘paper’
    } else if (playerChoice === 'rock' && compChoice === 'paper') {
        // 		add one to the compScore
        // 	return ‘You lose! Paper beats rock. Show userScore and compScore’
        return `You lose! Computer chose ${compChoice}.`
        // 	else if playerChoice is ‘paper’ and compChoice is ‘rock’
    } else if (playerChoice === 'paper' && compChoice === 'rock') {
        // 		add one to the userScore
        // 		return ‘You win! Paper beats rock. Show userScore and compScore’
        return `You win! Computer chose ${compChoice}.`
        // 	else if playerChoice is ‘paper’ and compChoice is ‘scissors’
    } else if (playerChoice === 'paper' && compChoice === 'scissors') {
        // 		add one to the compScore
        // 		return ‘You lose! scissors beats paper. Show userScore and compScore’
        return `You lose! Computer chose ${compChoice}.`
        // 	else if playerChoice is ‘scissors’ and compChoice is ‘paper’
    } else if (playerChoice === 'scissors' && compChoice === 'paper') {
        // 		add one to the userScore
        // 		return ‘You win! scissors beats paper. Show userScore and compScore’
        return `You win! Computer chose ${compChoice}.`
        // 	else if playerChoice is ‘scissors’ and compChoice is ‘rock’
    } else if (playerChoice === 'scissors' && compChoice === 'rock') {
        // 		add one to the compScore
        // 		return ‘You lose! rock beats scissors. Show userScore and compScore’
        return `You lose! Computer chose ${compChoice}.`
        // 	else if playerChoice is ‘rock’ and compChoice is ‘scissors’
    } else if (playerChoice === 'rock' && compChoice === 'scissors') {
        // 		add one to the userScore
        // 		return ‘You win! rock beats scissors. Show userScore and compScore’
        return `You win! Computer chose ${compChoice}.`
    }
}

function updateScores(playerChoice, compChoice, userRoundScore, compRoundScore) {
    if (playerChoice === compChoice) {
        // 		return ‘its a draw. Show userScore and compScore’
        return;
        // 	else if playerChoice is ‘rock’ and compChoice is ‘paper’
    } else if (playerChoice === 'rock' && compChoice === 'paper') {
        // 		add one to the compScore
            compRoundScore += 1;
            console.log('inside update function, compScore:',compRoundScore);
        // 	return ‘You lose! Paper beats rock. Show userScore and compScore’
        return compRoundScore;
        // 	else if playerChoice is ‘paper’ and compChoice is ‘rock’
    } else if (playerChoice === 'paper' && compChoice === 'rock') {
        // 		add one to the userScore
            userRoundScore += 1;
            console.log('inside update function, userScore:',userRoundScore);

        // 		return ‘You win! Paper beats rock. Show userScore and compScore’
        return userRoundScore;
        // 	else if playerChoice is ‘paper’ and compChoice is ‘scissors’
    } else if (playerChoice === 'paper' && compChoice === 'scissors') {
        // 		add one to the compScore
            compRoundScore += 1;
            console.log('inside update function, compScore:',compRoundScore);

        // 		return ‘You lose! scissors beats paper. Show userScore and compScore’
        return compRoundScore;
        // 	else if playerChoice is ‘scissors’ and compChoice is ‘paper’
    } else if (playerChoice === 'scissors' && compChoice === 'paper') {
        // 		add one to the userScore
            userRoundScore += 1;
            console.log('inside update function, userScore:',userRoundScore);

        // 		return ‘You win! scissors beats paper. Show userScore and compScore’
        return userRoundScore;
        // 	else if playerChoice is ‘scissors’ and compChoice is ‘rock’
    } else if (playerChoice === 'scissors' && compChoice === 'rock') {
        // 		add one to the compScore
            compRoundScore += 1;
            console.log('inside update function, compScore:',compRoundScore);

        // 		return ‘You lose! rock beats scissors. Show userScore and compScore’
        return compRoundScore;
        // 	else if playerChoice is ‘rock’ and compChoice is ‘scissors’
    } else if (playerChoice === 'rock' && compChoice === 'scissors') {
        // 		add one to the userScore
            userRoundScore += 1;
            console.log('inside update function, userScore:',userRoundScore);
        // 		return ‘You win! rock beats scissors. Show userScore and compScore’
        return userRoundScore;
    }
}


// create a function game();
function game() {
    // create a let variable userScore and initialize;
    let userScore = 0;
    // create a let variable compScore and initialize;
    let compScore = 0;
    
    // 	loop this function 3 times;
    for (let i = 0; i < 5; i++) {
        userChoice = prompt('Choose rock, paper or scissors:').toLowerCase();
        console.log(playRound(userChoice,computerPlay(generateRandomNum())));
        console.log("inside game",updateScores(userChoice,computerPlay(generateRandomNum()),userScore, compScore));
        console.log(`User won ${userScore}.`)
        console.log(`Computer won ${compScore}.`)

    }
    // 		call the function():
    
}

game();

// 		display the return value of the function above

// 		if the userScore or compScore is equals to 2
// 			break out of loop

// 	if the userScore is 2
// 		display ‘congratulation! You have won the game!’
// 	else if the compScore is 2
// 		display ‘You have lost the game…’