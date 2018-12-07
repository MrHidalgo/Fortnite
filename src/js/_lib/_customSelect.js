

/**
 *
 * @type {{init(): void, change(): void, chooseVal(*): void, focusElem(*): void, blurElem(*): void}}
 * @private
 */
const _customSelect = {
	init() {
		const _select = document.querySelectorAll('select');

		for (let elem of _select) {
			elem.previousElementSibling.innerHTML = elem.options[elem.selectedIndex].text;
		}
	},
	change() {
		const _select = document.querySelectorAll('select');

		for (let elem of _select) {
			const _selectedOption= elem.options[elem.selectedIndex],
				_selectedValue = _selectedOption.value,
				_selectedText = _selectedOption.text;

			if(_selectedValue !== '') {
				this.chooseVal(elem);
			}

			elem.previousElementSibling.innerHTML = _selectedText;
			this.blurElem(elem);
		}
	},
	chooseVal (elem) {
		elem.closest('.c-form__select-wrapper').classList.add('is-choose');
	},
	focusElem (elem) {
		elem.closest('.c-form__select-wrapper').classList.add('is-focus');
	},
	blurElem (elem) {
		elem.closest('.c-form__select-wrapper').classList.remove('is-focus');
	}
};


/**
 * @name initCustomSelect
 *
 * @description
 */
const initCustomSelect = () => {
	const _select = document.querySelectorAll('select');

	_customSelect.init();

	for (let elem of _select) {
		elem.addEventListener('change', () => {
			_customSelect.change(elem);
		});
		elem.addEventListener('focus', () => {
			_customSelect.focusElem(elem);
		});
		elem.addEventListener('click', () => {
			_customSelect.focusElem(elem);
		});
		elem.addEventListener('blur', () => {
			_customSelect.blurElem(elem);
		});
	}
};
