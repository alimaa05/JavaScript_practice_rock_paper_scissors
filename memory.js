
// creating variable that takes an array 
// using this to create our grid with all these images within it
const cardArray = [

// creating several objects within the array 
    {
        name: 'dolphin',
        img: 'images/dophin.jpeg'
    },

    {
        name: 'elephant',
        img: 'images/elephant.png'
    },

    {
        name: 'giraff',
        img: 'images/giraff.png'
    },

    {
        name: 'lion',
        img: 'images/lion.png'
    },

    {
        name: 'monkey',
        img: 'images/monkey.png'
    },

    {
        name: 'tiger',
        img: 'images/tiger.png'
    },
// need 12 cards so need another set of them 
    {
        name: 'dolphin',
        img: 'images/dophin.jpeg'
    },

    {
        name: 'elephant',
        img: 'images/elephant.png'
    },

    {
        name: 'giraff',
        img: 'images/giraff.png'
    },

    {
        name: 'lion',
        img: 'images/lion.png'
    },

    {
        name: 'monkey',
        img: 'images/monkey.png'
    },

    {
        name: 'tiger',
        img: 'images/tiger.png'
    },

]

// to sort these images in array randomly

// get the array and use the 'sort' method to sort everything in the array randomly 
// 'sort' works by comparing two values and then sorts through it 
// use the 'Math.random( )' method 
// 'math.random( )' returns a number between 0 and less than -1 
// checking if its either < or > 0.5 and will sort it based on that 

cardArray.sort(()=> 0.5 - Math.random())

// looking though DOM and looking for this id element using the queryselector method 
// give this a variable name
const gridDisplay = document.querySelector('#grid')

let cardChosen = []

let cardsChosenIds = []

const cardsWon = []


// create function 
// want to create an element for each item in our array 
function createBoard() {

    for (let i = 0; i < cardArray.length; i++) {
        // creating the img element 
        const card = document.createElement('img');
        // adding one of the images to this card variable 
        // set the src attribute to our image
        card.setAttribute('src', 'images/cover.jpeg')
        // giving each card a unique id 
        card.setAttribute('data-id', i)
        // add js method that allows us to listen out for events 
        card.addEventListener('click', flipCard)
        // want to display the images in our grid
        // need to appeand the card to the 'gridDisplay'
        gridDisplay.appendChild(card)
    }

}

createBoard();

function checkMatch(){
    // looking for every image within the entire document and storing it in variable
    const cards = document.querySelectorAll('img')

    console.log('check for a match');

    if (cardChosen[0] == cardChosen[1]){
        alert('You found a match!')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/whitebackground.webp')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/whitebackground.webp')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)


    }

    cardsChosen = []

    cardsChosenIds = []

}

function flipCard() {
    // this keyword allows us to interact with whatever element we clicked and get its id 
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    // if the length of the cardChosen array is equal to two we will check for a mathc
    if (cardChosen.length === 2){
        // using setTimeout to do this after a bit of time
        setTimeout(checkMatch, 500)
    }

}

















