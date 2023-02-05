export default function toggleAccordion(element) {
	element.addEventListener('click', () => {
		let content = element.closest('.price-variant__btn');

		if (content.clientHeight > 50) {
			document.querySelectorAll('.price-variant__btn').forEach(el => {
				el.style.height = '50px';
				el.style.backgroundColor = '#EDF2EC';
				el.querySelector('.arrow-down').style.transform = 'rotate(0)';
			});
		} else {
			document.querySelectorAll('.price-variant__btn').forEach(el => {
				el.style.height = '50px';
				el.style.backgroundColor = '#EDF2EC';
				el.querySelector('.arrow-down').style.transform = 'rotate(0)';
			});

			content.style.height = 'max-content';
			content.querySelector('.arrow-down').style.transform = 'rotate(185deg)';

			content.style.backgroundColor = '#D6E7D2';
		}
	});
}
