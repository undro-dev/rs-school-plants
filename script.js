import { toCreateCards, DB_SERVICE } from './js/service.js';
import { Select } from './js/contact.js';
import toggleAccordion from './js/price.js';

const BURGER_BTN = document.querySelector('.burger');
const MENU_LINK = document.querySelectorAll('.menu__list');
const PRICE_BTN = document.querySelectorAll('.arrow-down');

const select = new Select('#select', '#selected-list', {
	placeholder: 'City',
	data: [
		{
			id: '1',
			value: 'Canandaigua, NY',
			phone: '+1	585	393 0001',
			address: '151 Charlotte Street',
		},
		{
			id: '2',
			value: 'New York City',
			phone: '+1	212	456 0002',
			address: '9 East 91st Street',
		},
		{
			id: '3',
			value: 'Yonkers, NY',
			phone: '+1	914	678 0003',
			address: '511 Warburton Ave',
		},
		{
			id: '4',
			value: 'Sherrill, NY',
			phone: '+1	315	908 0004',
			address: '14 WEST Noyes BLVD',
		},
	],
	onSelect(item) {
		console.log(item);
	},
});

document.addEventListener('DOMContentLoaded', () => {
	toCreateCards(DB_SERVICE);

	BURGER_BTN.addEventListener('click', () =>
		document.querySelector('.header').classList.toggle('open')
	);

	MENU_LINK.forEach(el => {
		el.addEventListener('click', () =>
			document.querySelector('.header').classList.toggle('open')
		);
	});

	PRICE_BTN.forEach(element => toggleAccordion(element));

	window.s = select;
});
