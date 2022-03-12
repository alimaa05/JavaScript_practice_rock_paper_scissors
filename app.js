

// create logic so when you click the different buttons, they will appear on the screen and a computer choice can be generated

// create variables that takes the element id computer-choice, user-choice and result
// using the getElementById method to get the specific ids
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

// create a function to get all the possible choices - using querySelectorAll to get all the button chocies 
const possibleChoices = document.querySelectorAll('button');

// making 'userChoice' variable global 
let userChoice;
// make 'computerChoice' variable global
let computerChoice

// making 'result' global
let result


// EVERY TIME USER CLICKS, ALL OF THIS HAPPENS
// calling on the possibleChoices variable (i.e. the buttons) and create function for this 
// for each 'buttonChoice' we want to listen out for a click (doing this using the addEventListener)
// for each time it clicks want to run a function
possibleChoices.forEach(buttonChoice => 
    buttonChoice.addEventListener('click', (event) => {
   
    // passing though a function so when you click on the buttons then this function will run
   // 'event' is the name of the function
   // want to get the target id for whatever button you click
   // saving this globally so we can access the variable wherever 
   userChoice = event.target.id

   // using the property of innerHTML and assigning it to 'userChoice'
   userChoiceDisplay.innerHTML = userChoice

// calling the computer generated choice function here 
   generateComputerChoice()

// calling the get result function here
    getResult()

}))


    

  // create function for computerChoice
  function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
// if conditions for the different button clicks 
    if (randomNumber === 1){
        computerChoice = 'rock'
    }

    if (randomNumber === 2){
        computerChoice = 'scissors'
    }

    if (randomNumber === 3){
        computerChoice = 'paper'
    }
// want the comptuter choice display to display the computers choice based on the random number
    computerChoiceDisplay.innerHTML = computerChoice;
}


// create function to get the result 
function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    }

    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "You win!"
    }

    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "You Lose!"
    }

    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "You win!"
    }

    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "You Lose!"
    }

    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "You win!"
    }

    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "You Lose!"
    }
    
    resultDisplay.innerHTML = result

}