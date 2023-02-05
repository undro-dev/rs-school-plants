const getTemplate = (data = [], placeholder = 'Select city') => {
	const items = data.map(item => {
		return `<li class="select__item" data-type="item" data-id="${item.id}">${item.value}</li>`;
	});

	return `<div class="select__backdrop" data-type='backdrop'></div>
	
	<div class="select__input" data-type="input"><span data-type="value" class='select__input-title'>${placeholder}</span> <div class="select__input-btn"></div></div>
							<div class="select__dropdown"><ul class='select__list'>
								${items.join('')}
							</ul></div>`;
};

const getTemplateSelectedItem = ({ value, phone, address }) => {
	return `<div class="selected-list__item">
							<span class="selected-list__item-id">City:</span>
							<span class="selected-list__item-value">${value}</span>
						</div>
						<div class="selected-list__item">
							<span class="selected-list__item-id">Phone:</span>
							<span class="selected-list__item-value">${phone}</span>
						</div>
						<div class="selected-list__item">
							<span class="selected-list__item-id">Office adress:</span>
							<span class="selected-list__item-value">${address}</span>
						</div>
						<button class='selected-list__item-btn'>Call us</button>`;
};

export class Select {
	constructor(selector, selectedList, options) {
		this.$el = document.querySelector(selector);
		this.$selectedItem = document.querySelector(selectedList);
		this.options = options;
		this.selectedId = null;

		this.#render();
		this.#setup();
	}

	#render() {
		const { placeholder, data } = this.options;
		this.$el.classList.add('select');
		this.$el.innerHTML = getTemplate(data, placeholder);
	}

	#setup() {
		this.clickHandler = this.clickHandler.bind(this);
		this.$el.addEventListener('click', this.clickHandler);
		this.$value = this.$el.querySelector('[data-type = "value"]');
	}

	renderSelectedItem(item) {
		this.$selectedItem.classList.add('open');
		this.$selectedItem.innerHTML = getTemplateSelectedItem(item);
	}

	clickHandler(event) {
		const { type } = event.target.dataset;

		if (type === 'input') {
			this.toggle();
		} else if (type === 'item') {
			const id = event.target.dataset.id;
			this.select(id);
		} else if (type === 'backdrop') {
			this.close();
		}
	}

	get isOPen() {
		return this.$el.classList.contains('open');
	}

	get current() {
		return this.options.data.find(item => item.id === this.selectedId);
	}

	select(id) {
		this.selectedId = id;
		this.$value.textContent = this.current.value;

		if (this.selectedId) {
			this.$el.querySelector('[data-type = "input"]').classList.add('selected');
			this.renderSelectedItem(this.current);
		}

		if (document.documentElement.clientWidth < 560 && this.selectedId) {
			document.querySelector('.contact__body__img').style.display = 'none';
		}

		this.options.onSelect ? this.options.onSelect(this.current) : null;
		this.close();
	}

	toggle() {
		this.isOPen ? this.close() : this.open();
	}

	open() {
		this.$el.classList.add('open');
	}

	close() {
		this.$el.classList.remove('open');
	}

	destroy() {
		this.$el.removeEventListener('click', this.clickHandler);
		this.$el.innerHTML = '';
	}
}
