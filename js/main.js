const cart = {
	products: [],
	count() {
		return this.products.length;
	},
	totalPrice() {
		let total = 0;
		this.products.forEach((p) => {
			total += p.price;
		});
		return total;
	},
};

class Product {
	constructor(name, url, price, description) {
		this.name = name;
		this.url = `https://source.unsplash.com/${url}/1000x1000`;
		this.price = price;
		this.description = description;
	}
}

const products = [
	new Product(
		'Yogurt Breakfast Bowl',
		'JjZ3Z6zXYI4',
		8.5,
		'A yogurt bowl with cereal, blueberries and strawberries'
	),
	new Product(
		'Pancakes',
		'fYLz20AyY1A',
		10.25,
		'Pancakes with rasperries, maple syrup and butter'
	),
	new Product(
		'Breakfast Toast',
		'FFqNATH27EM',
		7.75,
		'A delicious toast with fried egg and avocado'
	),
	new Product(
		'Lemonade',
		'wyLp_6cKqqs',
		2.5,
		'A refreshing and juicy lemonade made with fresh lemons'
	),
	new Product('Hot Coffee', 'f0cXTgaxysU', 7.75, 'A hot coffee cup with milk'),
	new Product('Cereal Bowl', 'Bnfo-UWJgB8', 5.35, 'A medium cereal bowl'),
];

// Adjust cart count
const cartCount = document.querySelector('.cart__count');
cartCount.textContent = cart.count() == 0 ? '' : cart.count();

const container = document.querySelector('.products .container');

// Add product to webshop page
products.forEach((p) => {
	// create card
	const card = document.createElement('div');
	card.classList.add('card');

	// -----------------------------------------------------

	// create card header
	const cardHeader = document.createElement('div');
	cardHeader.classList.add('card__header');

	// create image
	const img = document.createElement('img');
	img.classList.add('card__image');
	img.src = p.url;
	img.alt = p.name;

	//append image
	cardHeader.appendChild(img);

	// -----------------------------------------------------

	// create card body
	const cardBody = document.createElement('div');
	cardBody.classList.add('card__body');

	// -----------------------------------------------------

	// create card info
	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card__info');

	// create card title
	const cardTitle = document.createElement('h4');
	cardTitle.classList.add('card__title');
	cardTitle.textContent = p.name;

	// create card description
	const cardDescription = document.createElement('p');
	cardDescription.classList.add('card__description');
	cardDescription.textContent = p.description;

	// create card price
	const cardPrice = document.createElement('p');
	cardPrice.classList.add('card__price');
	cardPrice.textContent = `$${p.price.toFixed(2)}`;

	// append elements
	cardInfo.appendChild(cardTitle);
	cardInfo.appendChild(cardDescription);
	cardInfo.appendChild(cardPrice);

	cardBody.appendChild(cardInfo);

	// -----------------------------------------------------

	// create card options
	const cardOptions = document.createElement('div');
	cardOptions.classList.add('card__options');

	// create card options quickview
	const cardOptionsQuickview = document.createElement('p');
	cardOptionsQuickview.classList.add('card__options_quickview');

	// create quickview icon
	const quickviewIcon = document.createElement('i');
	quickviewIcon.className = 'far fa-question-circle';

	// append icon to option
	const quickview = document.createTextNode(' Quickview');
	cardOptionsQuickview.appendChild(quickviewIcon);
	cardOptionsQuickview.appendChild(quickview);

	// create card options add
	const cardOptionsAdd = document.createElement('a');
	cardOptionsAdd.classList.add('card__options__add');

	// create add icon
	const addIcon = document.createElement('i');
	addIcon.className = 'fas fa-plus-circle';

	// append icon to option
	cardOptionsAdd.textContent = 'Add to card ';
	cardOptionsAdd.appendChild(addIcon);

	// append elements
	cardOptions.appendChild(cardOptionsQuickview);
	cardOptions.appendChild(cardOptionsAdd);

	cardBody.appendChild(cardOptions);

	// -----------------------------------------------------
	// append to card
	card.appendChild(cardHeader);
	card.appendChild(cardBody);

	// append card to container
	container.appendChild(card);
});

// Event listeners
container.addEventListener('click', (e) => {
	let target = e.target;

	if (target.classList.contains('fa-plus-circle'))
		target = e.target.parentElement;

	if (target.classList.contains('card__options__add')) {
		const name =
			target.parentElement.previousElementSibling.children[0].textContent;
		const product = products.find((p) => p.name === name);

		cart.products.push(product);
		cartCount.textContent++;
	}
});
