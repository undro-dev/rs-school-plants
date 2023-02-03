const BURGER_BTN = document.querySelector('.burger');
const MENU_LINK = document.querySelectorAll('.menu__list');

BURGER_BTN.addEventListener('click', () =>
	document.querySelector('.header').classList.toggle('open')
);

MENU_LINK.forEach(el => {
	el.addEventListener('click', () =>
		document.querySelector('.header').classList.toggle('open')
	);
});
