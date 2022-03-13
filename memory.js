
document.addEventListener('DOMContentLoaded', () => {
    // creating variable that takes an array 
    // using this to create our grid with all these images within it

// creating several objects within the array - need doubles to make matching cards
const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

// to sort these images in array randomly

// get the array and use the 'sort' method to sort everything in the array randomly 
// 'sort' works by comparing two values and then sorts through it 
// use the 'Math.random( )' method 
// 'math.random( )' returns a number between 0 and less than 1 
// checking if its either < or > 0.5 and will sort it based on that 

cardArray.sort(() => 0.5 - Math.random())

// looking though DOM and looking for this id element using the queryselector method 
// give this a variable name
const gridDisplay = document.querySelector('.grid')
  const displayResult = document.querySelector('#score')
  

// create cardsChosen array to add the chosen cards to this array 
let cardsChosen = []

// creating an array for the id of the chosen cards 
let cardsChosenId = []

// storing the cards that match in this array so we can know exactly how many cards have been one 
let cardsWon = []


// create function 
// want to create an element for each item in our array 
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      // creating the img element 
      const card = document.createElement('img') 
      // adding one of the images to this card variable 
      // set the src attribute to our image
      card.setAttribute('src', 'images/blank.png')
      // giving each card a unique id 
      card.setAttribute('data-id', i)
       // add js method that allows us to listen out for events 
        // only want to call the flipcard function if we hear a click 
      card.addEventListener('click', flipCard)
      // want to display the images in our grid
        // need to appeand the card to the 'gridDisplay'
      gridDisplay.appendChild(card)
    }
  }


  function checkForMatch() {
    // looking for every image within the entire document and storing it in variable
    const cards = document.querySelectorAll('img')
    // creating two varaibles 
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    // console.log(cards);
    // console.log('check for match!');

// if you click the same card twice 
    if(optionOneId == optionTwoId) {
        // going into the cards and pass though the cards chosen by their ids
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
      }
// if the two cards you picked are different but the same 
    else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!')
         // going into the cards and pass though the cards chosen by their ids
         // if both the chosen cards are the same then we will change the background color to white
         cards[optionOneId].setAttribute('src', 'images/white.png')
         cards[optionTwoId].setAttribute('src', 'images/white.png')
        // we also want to remove the event listener if they are a match and it will no longer listen out for a click
        // and want to remove the ability to do anything with the cards and so we pass the flipcard function 
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        // if they are a match we will add the chosen cards to the cards won array 
        cardsWon.push(cardsChosen)

        // if the cards are not a match
    } else {
        // we want to reset the images to the original background
    
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        // want to give users an alert 
        alert('Sorry try again!')
        // flipCard();

    }


// clearing the arrays if all the cards have been clicked so we can start the process again
    cardsChosen = []
    cardsChosenId = []
  
// add the score when we find a match - showing it after everytime we check for a match 
        displayResult.textContent = cardsWon.length
// if we get all the cards i.e. if this is equal to 6 matches then we want to show that they have won and got all the matches 
if  (cardsWon.length === cardArray.length/2) {
    displayResult.textContent = 'Congratulations! You found them all!'
  }
}

// want to flip the cards when we click them
function flipCard() {
    // creating a variable to get the cardId
    // 'this' keyword allows us to interact with whatever element we clicked in this case  get its id 
    // so variable cardId is equal to get the cards id
    let cardId = this.getAttribute('data-id')
    // were getting the card id so we know exactly which card we clicked and then we can pass it through our 'cardArray' and get the name 

    // adding to the 'cardChosen' array --> we are passing though the 'cardId' that was clicked and getting the name of this object from the cardArray 
    // then pushing this object name to our 'cardChosen' array 
    cardsChosen.push(cardArray[cardId].name)

    // also pushing the cards id into the array 'cardsChosenId' and we will use this in the checkMatch function 
    cardsChosenId.push(cardId)

    // want to add the image when we flip the card - pass through the cardId of the card clicked to our 'cardArray' and get the img
    this.setAttribute('src', cardArray[cardId].img)
    // if the length of the cardChosen array i.e. the cards we clicked is equal to two we will check for a match
    if (cardsChosen.length ===2) {
    // using setTimeout to do this after a bit of time - so we can see both cards first before it says whether its a match or not 
    // passing though the function 'checkMatch'
      setTimeout(checkForMatch, 500)
    }
  }

createBoard()
})









