let DB_SERVICE = [
	{
		img: './assets/img/garden.png',
		name: 'Garden care',
		desc: 'Lorem Ipsum has been the industry',
		blur: true,
	},
	{
		img: './assets/img/garden_1.png',
		name: 'Garden care',
		desc: 'Lorem Ipsum has been the industry',
		blur: true,
	},
	{
		img: './assets/img/planting.png',
		name: 'Planting',
		desc: 'Lorem Ipsum has been the industry',
		blur: true,
	},
	{
		img: './assets/img/planting_1.png',
		name: 'Planting',
		desc: 'Lorem Ipsum has been the industry',
		blur: true,
	},
	{
		img: './assets/img/planting_2.png',
		name: 'Planting',
		desc: 'Lorem Ipsum has been the industry',
		blur: true,
	},
	{
		img: './assets/img/lawn_care.png',
		name: 'Lawn care',
		desc: 'Lorem Ipsum has been the industry',
		blur: true,
	},
];
const CARDS_WRAPPER = document.querySelector('.service-cards');
const SERVICE_BUTTONS = document.querySelectorAll('.service-header__btn');

function toCreateCards(db) {
	let htmCatalog = '';

	db.forEach(element => {
		htmCatalog += `<div class="service-cards__item ${
			element.blur ? 'blur' : ''
		}">
						<img src=${element.img} alt=${element.name} class="service-cards__img"></img>
						<p class="service-cards__name">${element.name}</p>
						<span class="service-cards__desc">${element.desc}</span>
					</div>`;
	});

	CARDS_WRAPPER.innerHTML = htmCatalog;
}

SERVICE_BUTTONS.forEach(btn =>
	btn.addEventListener('click', () => {
		DB_SERVICE = DB_SERVICE.map(obj =>
			btn.dataset.name == obj.name ? { ...obj, blur: !obj.blur } : obj
		);

		btn.classList.toggle('active');
		toCreateCards(DB_SERVICE);
	})
);

export { toCreateCards, DB_SERVICE };
