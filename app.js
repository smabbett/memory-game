document.addEventListener('DOMContentLoaded', () => {
	const cardArray = [
		{
			name: 'cabin',
			img: 'images/cabin.jpg',
		},
		{
			name: 'cabin',
			img: 'images/cabin.jpg',
		},
		{
			name: 'bathtime',
			img: 'images/bathtime.jpg',
		},
		{
			name: 'bathtime',
			img: 'images/bathtime.jpg',
		},
		{
			name: 'birthday',
			img: 'images/birthday.jpg',
		},
		{
			name: 'birthday',
			img: 'images/birthday.jpg',
		},
		{
			name: 'butterfly',
			img: 'images/butterfly.jpg',
		},
		{
			name: 'butterfly',
			img: 'images/butterfly.jpg',
		},
		{
			name: 'dillon',
			img: 'images/dillon.jpg',
		},
		{
			name: 'dillon',
			img: 'images/dillon.jpg',
		},
		{
			name: 'harley',
			img: 'images/harley.jpg',
		},
		{
			name: 'harley',
			img: 'images/harley.jpg',
		},
		{
			name: 'lucy',
			img: 'images/lucy.jpg',
		},
		{
			name: 'lucy',
			img: 'images/lucy.jpg',
		},
		{
			name: 'momson',
			img: 'images/momson.jpg',
		},
		{
			name: 'momson',
			img: 'images/momson.jpg',
		},
		{
			name: 'paris',
			img: 'images/paris.jpg',
		},
		{
			name: 'paris',
			img: 'images/paris.jpg',
		},
	];

	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	var cardsChosen = [];
	var cardsChosenId = [];
	var cardsWon = [];

	//create your board

	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			var card = document.createElement('img');
			card.setAttribute('src', 'images/flowers.jpg');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	function checkForMatch() {
		var cards = document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];
		if (cardsChosen[0] === cardsChosen[1]) {
			alert('You found a match!');
			cards[optionOneId].setAttribute('src', 'images/blank.png');
			cards[optionTwoId].setAttribute('src', 'images/blank.png');
			cardsWon.push(cardsChosen);
		} else {
			cards[optionOneId].setAttribute('src', 'images/flowers.jpg');
			cards[optionTwoId].setAttribute('src', 'images/flowers.jpg');
			alert('Try Again!');
		}
		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length === cardArray.length / 2) {
			resultDisplay.textContent = 'Congratulations! You found all the matches!';
		}
	}

	function flipCard() {
		var cardId = this.getAttribute('data-id');
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	createBoard();
});
