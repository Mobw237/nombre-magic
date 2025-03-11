/**
 * Let's play a number guessing Game
 * You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number. You also need to show the number of attempts made by users to rich to this right guess.
 */

//Max number
//Min number
//Secret number is a random number between the Min and the Max number
//Get the prompt from the user as a guess
//Create a variable to store the number of attemps
//Write the logic to check if the guess and the secret number are same. If not continue a loop to ask again
//Inside loop check if the guess is less than the secret or greater than, accordingly tell if the guess it low or high
//Give the option to play again 

let playAgaintPrompt = ""
let playAgain = ""
const exit = ["yes", "no"]
let userNumber
let attemptNumber = 1

//Function estUnNombre() test if the value is a number or not
function estUnNombre(valeur) {
	return !isNaN(valeur);
  }
  
  //Function goodNumber() test if the value is a valid number 
  function goodNumber() {
	// Ensure that the user enters a good number
	let userNumber;
	do {
	  userNumber = Number(prompt("Please enter a number between 1 and 10"));
	  if (!estUnNombre(userNumber) || (userNumber < 1) || (userNumber > 10)) {
		console.log("Please enter a valid number between 1 and 10 !!!");
	  }
	} while (!estUnNombre(userNumber) || (userNumber < 1) || (userNumber > 10));
	return userNumber;
  }

  //Function testNumber() compare if the value of userNumber and randomNumber is equal
  function testNumber(){
	let userNumber
	const randomNumber = Math.floor(Math.random() * 10) + 1
	do { //Test the number the user enter with the random number
		userNumber = goodNumber()

		if (userNumber === randomNumber) {
			console.log("You Win !! You found the number !!!", userNumber)
			console.log("The number of attempts is : ", attemptNumber)
		}else if (userNumber > randomNumber) {
			console.log("The number you find is under")
		}else{
			console.log("The number you find is above")
		}
		attemptNumber += 1
	} while (userNumber !== randomNumber)
  }

  //Function playAgain1() test if you want to play again
  function playAgain1(){
	do{ //Ask if the user want to play again
		let test = testNumber()
		 playAgaintPrompt = prompt("Do you want to play again ? (yes/no)")
		 playAgain = playAgaintPrompt ? playAgaintPrompt.toLocaleLowerCase() : "no"
		 if (!exit.includes(playAgain)) {
			 console.log("Please enter the correct word !!!")
		 }
	}while(!exit.includes(playAgain))

	if (playAgain === "yes") {
		startSecretNumberGame()
	}else{
		console.log("***Thanks for playing! See you next time***")
	}
  }

  //Main function
 function startSecretNumberGame(){
	console.log("***Secret Number Guessing Game***")
	let play = playAgain1()
 } 


//Start the game
 startSecretNumberGame()