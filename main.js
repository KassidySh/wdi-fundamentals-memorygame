console.log("Up and running!");

function createBoard(){
	for (var i = 0; i < cards.length; i+1) {


var cardElement = document.createElement('images/queen-of-hearts.png');
var cardElement = document.createElement('images/queen-of-diamonds.png');
var cardElement = document.createElement('images/king-of-hearts.png');
var cardElement = document.createElement('images/king-of-diamonds.png');

cardElement.setAttribute('src', "images/back.png");
cardElement.setAttribute('src', "images/back.png");
cardElement.setAttribute('src', "images/back.png");
cardElement.setAttribute('src', "images/back.png");

cardElement.setAttribute('data-id', i);
cardElement.setAttribute('data-id', i);
cardElement.setAttribute('data-id', i);
cardElement.setAttribute('data-id', i);

cardElement.addEventListener('click', flipCard);

appendChild(game-board);
}}

const cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{rank: 'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png"
},
{rank: 'king',
suit: 'hearts',
cardImage: "images/king-of-hearts.png"
},
{rank: 'king',
suit: 'diamonds',
cardImage: "images/king-of-diamonds.png"
}
]

const cardsInPlay = []

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}


function flipCard(){

this.getAttribute('data-id');
console.log("User flipped " + cardsId.rank)
cardsInPlay.push(cardsId.rank);

console.log(cardsId.cardImage)
console.log(cardsId.suit)

this.setAttribute(cards[cardId].cardImage)

if (cardsInPlay.length === 2){
checkForMatch();
}
else{
	console.log("Please pick another card.")
}
}


createBoard();