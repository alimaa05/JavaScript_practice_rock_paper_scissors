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

// create function that calls on the possibleChoices variable 
// for each 'buttonChoice' we want to listen out for a click (doing this using the addEventListener)
// for each time it clicks want to run a function
possibleChoices.forEach(buttonChoice => buttonChoice.addEventListener('click', (event) => {
   // passing though a function so when you click on the buttons then this function will run
   // 'event' is the name of the function
   // want to get the target id for whatever button you click
   // saving this globally so we can access the variable wherever 
   userChoice = event.target.id

   // using the property of innerHTML and assigning it to 'userChoice'
   userChoiceDisplay.innerHTML = userChoice

}))
