// create a let variable userChoice;
// create an array gameOptions [];
// create a let variable compChoice;
// create a let variable userScore and initialize;
// create a let variable compScore and initialize;


// prompt user with “Choose rock, paper or scissors:” and assign it to userChoice;
// make the input to be lowercase always;

// add ‘rock’, ‘paper’, ‘scissors’ to the gameOptions [] array

// create a function generateRandomNum();
// 	create a let variable randomInt;
// 	create a random number from 0 to 1;
// 	multiply it by 2;
// 	assign the two above to steps to randomInt;
// 	return the value
// assign the returned value to a new const variable randomNum;

// note: argument for this fucntion is randomNum
// create a function computerPlay(randomVal);
// 	put the randomVal in the index position of the gameOption [];
// 	create const variable choice and assign the above step to it;
// 	return choice 
	
// assign choice to compChoice;




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
// create function playRound(playerChoice, aiChoice);
// 	if playerChoice and compChoice are equal
// 		return ‘its a draw. Show userScore and compScore’
// 	else if playerChoice is ‘rock’ and aiChoice is ‘paper’
// 		add one to the compScore
// 		return ‘You lose! Paper beats rock. Show userScore and compScore’
// 	else if playerChoice is ‘paper’ and aiChoice is ‘rock’
// 		add one to the userScore
// 		return ‘You win! Paper beats rock. Show userScore and compScore’
// 	else if playerChoice is ‘paper’ and aiChoice is ‘scissors’
// 		add one to the compScore
// 		return ‘You lose! scissors beats paper. Show userScore and compScore’
// 	else if playerChoice is ‘scissors’ and aiChoice is ‘paper’
// 		add one to the userScore
// 		return ‘You win! scissors beats paper. Show userScore and compScore’
// 	else if playerChoice is ‘scissors’ and aiChoice is ‘rock’
// 		add one to the compScore
// 		return ‘You lose! rock beats scissors. Show userScore and compScore’
// 	else if playerChoice is ‘rock’ and aiChoice is ‘scissors’
// 		add one to the userScore
// 		return ‘You win! rock beats scissors. Show userScore and compScore’


// create a function game();
	
// 	loop this function 3 times;
// 		call the function():
// 		display the return value of the function above
		
// 		if the userScore or compScore is equals to 2
// 			break out of loop

// 	if the userScore is 2
// 		display ‘congratulation! You have won the game!’
// 	else if the compScore is 2
// 		display ‘You have lost the game…’