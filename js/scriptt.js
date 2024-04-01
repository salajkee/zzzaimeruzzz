// Sticky header
try {
	const header = document.querySelector('.header');
	const main = document.querySelector('.main');

	if (main.classList.contains('homepage')) {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) {
				header.classList.add('sticky');
			} else {
				header.classList.remove('sticky');
			}
		});
	} else {
		header.classList.add('sticky');
	}
} catch (e) {}

// Hamburger menu
try {
	const hamburger = document.querySelector('.hamburger');
	const headerMenu = document.querySelector('.nav');

	hamburger.addEventListener('click', () => {
		if (!headerMenu.classList.contains('nav--active')) {
			hamburger.classList.add('hamburger--active');
			headerMenu.classList.add('nav--active');
			document.body.classList.add('no-scroll');
		} else {
			hamburger.classList.remove('hamburger--active');
			headerMenu.classList.remove('nav--active');
			document.body.classList.remove('no-scroll');
		}
	});
} catch (e) {}

// Posts slider
try {
	const postsSlider = new Swiper('.useful__slider', {
		breakpoints: {
			320: {
				slidesPerView: 'auto',
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1300: {
				slidesPerView: 3,
				spaceBetween: 42,
			},
		},
	});
} catch (e) {}

// Article Interested slider
try {
	const interestedSlider = new Swiper('.interested__slider', {
		breakpoints: {
			320: {
				slidesPerView: 'auto',
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 32,
			},
		},
	});
} catch (e) {}

// Reviews slider
try {
	const reviewsSlider = new Swiper('.reviews__slider', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.reviews__slider-next',
			prevEl: '.reviews__slider-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 32,
			},
		},
	});
} catch (e) {}

// Yandex map
try {
	function init() {
		let map = new ymaps.Map('geography__map', {
			center: [40.46309593119886, 65.73796878124996],
			zoom: 5.5,
		});

		let tashkent = new ymaps.Placemark(
			[41.31130457688333, 69.27981401361907],
			{},
			{}
		);

		let nukus = new ymaps.Placemark(
			[42.465024792604794, 59.61262295151407],
			{},
			{}
		);

		let urgench = new ymaps.Placemark(
			[41.55675425205604, 60.631246500000024],
			{},
			{}
		);

		let buxara = new ymaps.Placemark(
			[39.77358815587073, 64.41988319561759],
			{},
			{}
		);

		let navoi = new ymaps.Placemark(
			[40.09959904091245, 65.37858249999998],
			{},
			{}
		);

		let karshi = new ymaps.Placemark(
			[38.84451424217624, 65.79595350000002],
			{},
			{}
		);

		let termez = new ymaps.Placemark(
			[37.225272599724235, 67.28161849999996],
			{},
			{}
		);

		let samarkand = new ymaps.Placemark(
			[39.67113633968636, 66.96891949999997],
			{},
			{}
		);

		let jizakh = new ymaps.Placemark(
			[40.119078816951905, 67.82987055273435],
			{},
			{}
		);

		let gulistan = new ymaps.Placemark(
			[40.50081203200777, 68.78573099999994],
			{},
			{}
		);

		let nurafshon = new ymaps.Placemark(
			[41.02793109634531, 69.35471000000001],
			{},
			{}
		);

		let namangan = new ymaps.Placemark(
			[41.054895218275895, 71.63607150000003],
			{},
			{}
		);

		let fergana = new ymaps.Placemark(
			[40.39356909320465, 71.79390099999995],
			{},
			{}
		);

		let andijan = new ymaps.Placemark(
			[40.7672101174422, 72.35248699999991],
			{},
			{}
		);

		map.behaviors.disable(['scrollZoom']);
		map.geoObjects.add(tashkent);
		map.geoObjects.add(nukus);
		map.geoObjects.add(urgench);
		map.geoObjects.add(buxara);
		map.geoObjects.add(navoi);
		map.geoObjects.add(karshi);
		map.geoObjects.add(termez);
		map.geoObjects.add(samarkand);
		map.geoObjects.add(jizakh);
		map.geoObjects.add(gulistan);
		map.geoObjects.add(nurafshon);
		map.geoObjects.add(namangan);
		map.geoObjects.add(fergana);
		map.geoObjects.add(andijan);

		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			)
		) {
			map.behaviors.disable(['drag']);
		}
	}

	ymaps.ready(init);
} catch (e) {}

// Modal
try {
	const modal = document.querySelector('.modal');
	const modalClose = document.querySelector('.modal__close');
	const modalBody = document.querySelector('.modal__body');
	const modalContent = document.querySelector('.modal__content');
	const modalThnks = document.querySelector('.modal__thnks');

	document.body.addEventListener('click', e => {
		if (
			e.target.classList.contains('modal__btn') &&
			e.target.tagName === 'BUTTON'
		) {
			modal.classList.add('modal--active');
			document.body.classList.add('no-scroll');
		}
	});

	modalClose.addEventListener('click', () => {
		modal.classList.remove('modal--active');
		document.body.classList.remove('no-scroll');
		setTimeout(() => {
			modalBody.classList.remove('modal__body--active');
			modalContent.classList.remove('hidden');
			modalThnks.classList.add('hidden');
		}, 300);
	});
} catch (e) {}

// Input mask (min: 500 000, max: 500 000 000)
try {
	const sum = document.querySelectorAll('.sum');

	sum.forEach(item => {
		new IMask(item, {
			mask: Number,
			min: 5000000,
			max: 500000000,
			thousandsSeparator: ' ',
		});
	});
} catch (e) {}

// Input mask term (min: 0, max: 60)
try {
	const term = document.querySelectorAll('.term');

	term.forEach(item => {
		new IMask(item, {
			mask: Number,
			min: 0,
			max: 60,
			thousandsSeparator: ' ',
		});
	});
} catch (e) {}

// Input mask percent (min: 0, max: 100)
try {
	const percent = document.querySelector('.percent');

	new IMask(percent, {
		mask: Number,
		min: 0,
		max: 100,
		thousandsSeparator: ' ',
	});
} catch (e) {}

// Accordion Calculate
try {
	const calc = document.querySelector('.selection__calc');
	const calcTop = calc.querySelector('.calc__top');
	const calcContent = calc.querySelector('.calc__content');

	calcTop.addEventListener('click', () => {
		calcTop.classList.toggle('calc__top--active');
		calcContent.classList.toggle('calc__content--active');

		if (calcTop.classList.contains('calc__top--active')) {
			calcContent.style.height = `${calcContent.scrollHeight}px`;
			calcContent.style.marginTop = `11px`;
		} else {
			calcContent.style.height = `0px`;
			calcContent.style.marginTop = `0`;
		}
	});
} catch (e) {}

// Calculation of overpayment
try {
	const calc = document.querySelector('.selection__calc');
	const sum = calc.querySelector('.item__input-sum');
	const period = calc.querySelector('.item__input-period');
	const percent = calc.querySelector('.item__input-percent');
	const btn = calc.querySelector('.calc__form-btn');
	const result = calc.querySelector('.calc__result');
	const resultSpan = result.querySelector('span');

	btn.addEventListener('click', () => {
		let sumValue = sum.value.split(' ').join('');

		sum.addEventListener('change', e => {
			if (e.target.value.length > 0) {
				e.target.classList.remove('error');
			} else {
				e.target.classList.add('error');
			}
		});
		period.addEventListener('change', e => {
			if (e.target.value.length > 0) {
				e.target.parentNode.classList.remove('error');
			} else {
				e.target.parentNode.classList.add('error');
			}
		});
		percent.addEventListener('change', e => {
			if (e.target.value.length > 0) {
				e.target.classList.remove('error');
			} else {
				e.target.classList.add('error');
			}
		});

		if (
			sumValue.length > 0 &&
			period.value.length > 0 &&
			percent.value.length > 0
		) {
			sum.classList.remove('error');
			period.parentNode.classList.remove('error');
			percent.classList.remove('error');

			let resultValue = Math.ceil(
				(percent.value / 100 / 365) * sumValue * (period.value * 30)
			).toLocaleString('ru');

			resultSpan.textContent = resultValue;
			result.classList.add('calc__result--active');
		} else {
			result.classList.remove('calc__result--active');
			period.value.length <= 0
				? period.parentNode.classList.add('error')
				: period.parentNode.classList.remove('error');
			percent.value.length <= 0
				? percent.classList.add('error')
				: percent.classList.remove('error');
			sumValue.length <= 0
				? sum.classList.add('error')
				: sum.classList.remove('error');
		}
	});
} catch (e) {}

// Count animation
try {
	const valueDisplays = document.querySelectorAll('.num');
	const interval = 3000;

	valueDisplays.forEach(valueDisplay => {
		let startValue = 0;
		let endValue = parseInt(valueDisplay.getAttribute('data-val'));

		let duration = Math.floor(interval / endValue);
		let counter = setInterval(() => {
			startValue += 1;
			valueDisplay.textContent = startValue;
			if (startValue == endValue) {
				clearInterval(counter);
			}
		}, duration);
	});
} catch (e) {}

// Faq accordion
try {
	const faqTop = document.querySelectorAll('.faq__top');

	faqTop.forEach(item => {
		item.addEventListener('click', () => {
			const faqContent = item.nextElementSibling;
			if (!item.classList.contains('faq__top--active')) {
				item.classList.add('faq__top--active');
				faqContent.style.marginTop = `15px`;
				faqContent.style.height = `${faqContent.scrollHeight}px`;
			} else {
				faqContent.style.height = `0px`;
				faqContent.style.marginTop = `0`;
				item.classList.remove('faq__top--active');
			}
		});
	});
} catch (e) {}

// Deposit Calculator
try {
	const sumRangeInput = document.querySelector('.sum__range-input');
	const sumResultInput = document.querySelector('.sum__input');
	const termRangeInput = document.querySelector('.term__range-input');
	const termResultInput = document.querySelector('.term__input');
	const result = document.querySelector('.item__result');

	function calculate(sum, term) {
		let monthlyInterestRate = 0.049999999999999996;
		let monthlyPayment =
			(sum * monthlyInterestRate) /
			(1 - Math.pow(1 + monthlyInterestRate, -term));

		return monthlyPayment;
	}

	sumRangeInput.addEventListener('input', e => {
		sumResultInput.value = Number(e.target.value).toLocaleString();
		sumResultInput.classList.remove('error');

		let sum = parseInt(sumResultInput.value.replace(/\s/g, ''));

		result.value = Math.floor(
			calculate(sum, parseInt(termResultInput.value))
		).toLocaleString();

		const progress = (e.target.value / e.target.max) * 100;

		e.target.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
	});

	sumResultInput.value = Number(sumRangeInput.value).toLocaleString();

	sumResultInput.addEventListener('input', e => {
		const arr = e.target.value.split('');
		if (arr[0] !== '0') {
			let value = parseInt(e.target.value.replace(/\s/g, ''));
			if (value < 5000000 || value > 150000000) {
				e.target.classList.add('error');
			} else if (e.target.value.length < 1) {
				e.target.classList.add('error');
			} else {
				e.target.classList.remove('error');

				sumRangeInput.value = value;

				result.value = Math.floor(
					calculate(value, parseInt(termResultInput.value))
				).toLocaleString();

				const progress = (value / sumRangeInput.max) * 100;

				sumRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			}
		}
	});

	termRangeInput.addEventListener('input', e => {
		termResultInput.value = Number(e.target.value) + 3;
		termRangeInput.classList.remove('error');

		let sum = parseInt(sumResultInput.value.replace(/\s/g, ''));

		result.value = Math.floor(
			calculate(sum, parseInt(termResultInput.value))
		).toLocaleString();

		const progress = (e.target.value / e.target.max) * 100;

		e.target.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
	});

	termResultInput.value = Number(termRangeInput.value) + 3;

	termResultInput.addEventListener('input', e => {
		const arr = e.target.value.split('');

		if (arr[0] !== '0') {
			let value = parseInt(e.target.value.replace(/\s/g, ''));
			if (value < 3 || value > 24) {
				e.target.classList.add('error');
			} else if (e.target.value.length < 1) {
				e.target.classList.add('error');
			} else if (value === 3) {
				e.target.classList.remove('error');
				e.target.value = 3;
				value = 3;
				termRangeInput.value = value - 3;

				result.value = Math.floor(
					calculate(
						parseInt(sumResultInput.value.replace(/\s/g, '')),
						parseInt(value)
					)
				).toLocaleString();

				const progress = ((value - 3) / termRangeInput.max) * 100;

				termRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 4 || value === 5 || value === 6) {
				e.target.classList.remove('error');
				e.target.value = 6;
				value = 6;
				termRangeInput.value = value - 3;

				result.value = Math.floor(
					calculate(
						parseInt(sumResultInput.value.replace(/\s/g, '')),
						parseInt(value)
					)
				).toLocaleString();

				const progress = ((value - 3) / termRangeInput.max) * 100;

				termRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 7 || value === 8 || value === 9) {
				e.target.classList.remove('error');
				e.target.value = 9;
				value = 9;
				termRangeInput.value = value - 3;

				result.value = Math.floor(
					calculate(
						parseInt(sumResultInput.value.replace(/\s/g, '')),
						parseInt(value)
					)
				).toLocaleString();

				const progress = ((value - 3) / termRangeInput.max) * 100;

				termRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 10 || value === 11 || value === 12) {
				e.target.classList.remove('error');
				e.target.value = 12;
				value = 12;
				termRangeInput.value = value - 3;

				result.value = Math.floor(
					calculate(
						parseInt(sumResultInput.value.replace(/\s/g, '')),
						parseInt(value)
					)
				).toLocaleString();

				const progress = ((value - 3) / termRangeInput.max) * 100;

				termRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 13 || value === 14 || value === 15) {
				e.target.classList.remove('error');
				e.target.value = 15;
				value = 15;
				termRangeInput.value = value - 3;

				result.value = Math.floor(
					calculate(
						parseInt(sumResultInput.value.replace(/\s/g, '')),
						parseInt(value)
					)
				).toLocaleString();

				const progress = ((value - 3) / termRangeInput.max) * 100;

				termRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 16 || value === 17 || value === 18) {
				e.target.classList.remove('error');
				e.target.value = 18;
				value = 18;
				termRangeInput.value = value - 3;

				result.value = Math.floor(
					calculate(
						parseInt(sumResultInput.value.replace(/\s/g, '')),
						parseInt(value)
					)
				).toLocaleString();

				const progress = ((value - 3) / termRangeInput.max) * 100;

				termRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 19 || value === 20 || value === 21) {
				e.target.classList.remove('error');
				e.target.value = 21;
				value = 21;
				termRangeInput.value = value - 3;

				result.value = Math.floor(
					calculate(
						parseInt(sumResultInput.value.replace(/\s/g, '')),
						parseInt(value)
					)
				).toLocaleString();

				const progress = ((value - 3) / termRangeInput.max) * 100;

				termRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 22 || value === 23 || value === 24) {
				e.target.classList.remove('error');
				e.target.value = 24;
				value = 24;
				termRangeInput.value = value - 3;

				result.value = Math.floor(
					calculate(
						parseInt(sumResultInput.value.replace(/\s/g, '')),
						parseInt(value)
					)
				).toLocaleString();

				const progress = ((value - 3) / termRangeInput.max) * 100;

				termRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			}
		}
	});

	let sum = parseInt(sumResultInput.value.replace(/\s/g, ''));
	result.value = Math.floor(
		calculate(sum, parseInt(termResultInput.value))
	).toLocaleString();

	new IMask(sumResultInput, {
		mask: Number,
		thousandsSeparator: ' ',
	});

	new IMask(termResultInput, {
		mask: Number,
	});
} catch (e) {}

// Custom Select
try {
	const select = document.querySelectorAll('.select');

	select.forEach(sel => {
		customSelect(sel);
	});

	function customSelect(select) {
		const selectTop = select.querySelector('.select__top');
		const selectTopText = select.querySelector('.select__top-text');
		const options = select.querySelector('.options');
		const optionsItem = select.querySelectorAll('.options__item');

		selectTop.addEventListener('click', () => {
			const windowHeight = window.innerHeight;
			const selectRect = select.getBoundingClientRect();

			if (!selectTop.classList.contains('select__top--active')) {
				if (selectRect.top < windowHeight - selectRect.bottom) {
					// Если свободного места сверху достаточно, открываем вниз
					selectTop.classList.add('select__top--active');
					options.classList.add('options--active');
				} else {
					// Если сверху мало места, открываем вверх
					selectTop.classList.add('select__top--active');
					options.classList.add('open-up');
					options.classList.add('options--active');
				}
			} else {
				selectTop.classList.remove('select__top--active');
				options.classList.remove('open-up');
				options.classList.remove('options--active');
			}
		});

		document.addEventListener('click', e => {
			if (!select.contains(e.target)) {
				selectTop.classList.remove('select__top--active');
				options.classList.remove('options--active');
			}
		});

		options.addEventListener('click', e => {
			if (
				e.target.classList.contains('options__item') ||
				e.target.tagName === 'SPAN'
			) {
				optionsItem.forEach(item => item.classList.remove('selected'));
				if (e.target.tagName === 'SPAN') {
					e.target.parentNode.classList.add('selected');
					selectTopText.textContent = e.target.textContent;
					selectTop.classList.remove('select__top--active');
					options.classList.remove('options--active');

					if (selectTopText.hasAttribute('data-val')) {
						if (e.target.hasAttribute('data-val')) {
							selectTopText.setAttribute(
								'data-val',
								e.target.getAttribute('data-val')
							);
						}
					}
				} else {
					e.target.classList.add('selected');
					selectTopText.textContent = e.target.firstElementChild.textContent;
					selectTop.classList.remove('select__top--active');
					options.classList.remove('options--active');

					if (selectTopText.hasAttribute('data-val')) {
						if (e.target.firstElementChild.hasAttribute('data-val')) {
							selectTopText.setAttribute(
								'data-val',
								e.target.firstElementChild.getAttribute('data-val')
							);
						}
					}
				}
			}
		});
	}
} catch (e) {}

// Credit online Range slider
try {
	const rangeInput = document.querySelector('.credit__range-input input');
	const result = document.querySelector('.credit-online .top__result');
	const stages = document.querySelectorAll('.credit-online .stages__item span');

	rangeInput.addEventListener('input', e => {
		const progress = (e.target.value / e.target.max) * 100;

		rangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

		result.textContent = (parseInt(e.target.value) + 1000000).toLocaleString();
	});

	const progress = (rangeInput.value / rangeInput.max) * 100;
	rangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

	result.textContent = (parseInt(rangeInput.min) + 1000000).toLocaleString();

	stages.forEach(item => {
		item.textContent = parseInt(item.textContent).toLocaleString();
	});
} catch (e) {}

// Отправка формы Modal
try {
	const modalBody = document.querySelector('.modal__body');
	const modalFormBtn = document.querySelector('.modal__form-btn');
	const modalContent = document.querySelector('.modal__content');
	const modalThnks = document.querySelector('.modal__thnks');

	let name = document.querySelector('.name-input');
	let phone = document.querySelector('.phone-input');
	let sum = document.querySelector('.sum-input');
	let region = document.querySelector('.region-input');
	let provision = document.querySelector('.provision-input');

	name.addEventListener('change', e => {
		if (e.target.value.length >= 2) {
			name.classList.remove('error');
		} else {
			name.classList.add('error');
		}
	});

	phone.addEventListener('change', e => {
		if (e.target.value.length === 12) {
			phone.parentNode.classList.remove('error');
		} else {
			phone.parentNode.classList.add('error');
		}
	});

	sum.addEventListener('change', e => {
		if (e.target.value.length > 0) {
			sum.classList.remove('error');
		} else {
			sum.classList.add('error');
		}
	});

	region.parentNode.nextElementSibling.addEventListener('click', e => {
		if (
			e.target.classList.contains('options__item') ||
			e.target.tagName === 'SPAN'
		) {
			region.parentNode.classList.remove('error');
		}
	});

	async function sendForm(data) {
		const res = await fetch('/feedback.php', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(data),
		});
	}

	modalFormBtn.addEventListener('click', e => {
		e.preventDefault();

		if (
			name.value.length >= 2 &&
			phone.value.length === 12 &&
			sum.value.length > 0 &&
			region.textContent !== 'Выберите город' &&
			region.textContent !== 'Shaharni tanlang'
		) {
			// Отправляем данные на Bitrix24
			var bitrixData = {
				fields: {
					TITLE: 'MODAL',
					NAME: name.value,
					PHONE: [{ VALUE: phone.value, VALUE_TYPE: 'WORK' }],
					OPPORTUNITY: sum.value,
					ADDRESS_CITY: region.textContent,
					COMMENTS: provision.textContent,
					// Дополнительные поля формы, если нужно
				},
			};
			fetch(
				'https://summagroup.bitrix24.ru/rest/88/wj5kdqhivkz90rxv/crm.lead.add.json',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(bitrixData),
				}
			)
				.then(response => {
					modalBody.classList.add('modal__body--active');
					modalContent.classList.add('hidden');
					modalThnks.classList.remove('hidden');
					name.value = '';
					phone.value = '';
					sum.value = '';
					if (sum.previousElementSibling.textContent === 'Сумма кредита') {
						region.textContent = 'Выберите город';
						provision.textContent = 'Без обеспечения';
					} else {
						region.textContent = 'Shaharni tanlang';
						provision.textContent = 'Garovsiz';
					}

					// try {
					// 	gtag('event', 'conversion', {
					// 		send_to: 'AW-10956881405/hLM0CIGgxd8YEP370ugo',
					// 		event_callback: function () {},
					// 	})
					// 	console.log('GA sent')
					// } catch (e) {}

					return response.json();
				})
				.then(bitrixResult => {
					console.log('Bitrix24 Response:', bitrixResult);
					// Обработка ответа от Bitrix24, если нужно
				})
				.then()
				.catch(error => {
					console.error('Bitrix24 Error:', error);
				});

			const data = {
				name: name.value,
				phone: phone.value,
				sum: sum.value,
				region: region.textContent,
				provision: provision.textContent,
			};

			sendForm(data);
		} else {
			name.value.length > 2
				? name.classList.remove('error')
				: name.classList.add('error');
			phone.value.length === 12
				? phone.classList.remove('error')
				: phone.classList.add('error');
			sum.value.length > 0
				? sum.classList.remove('error')
				: sum.classList.add('error');
			region.textContent === 'Выберите город' ||
			region.textContent === 'Shaharni tanlang'
				? region.parentNode.classList.add('error')
				: region.parentNode.classList.remove('error');
		}
	});
} catch (e) {}

// Отправка формы Feedback
try {
	const feedbackBtn = document.querySelector('.feedback__form-btn');
	const feedbackInner = document.querySelector('.feedback__inner');
	const feedbackThnks = document.querySelector('.feedback__thnks');

	let name = document.querySelector('.name-input');
	let phone = document.querySelector('.phone-input');
	let sum = document.querySelector('.sum-input');
	let region = document.querySelector('.region-input');
	let provision = document.querySelector('.provision-input');

	name.addEventListener('change', e => {
		if (e.target.value.length >= 2) {
			name.classList.remove('error');
		} else {
			name.classList.add('error');
		}
	});

	phone.addEventListener('change', e => {
		if (e.target.value.length === 12) {
			phone.classList.remove('error');
		} else {
			phone.classList.add('error');
		}
	});

	sum.addEventListener('change', e => {
		if (e.target.value.length > 0) {
			sum.classList.remove('error');
		} else {
			sum.classList.add('error');
		}
	});

	region.parentNode.nextElementSibling.addEventListener('click', e => {
		if (
			e.target.classList.contains('options__item') ||
			e.target.tagName === 'SPAN'
		) {
			region.parentNode.classList.remove('error');
		}
	});

	async function sendForm(data) {
		const res = await fetch('/feedback.php', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(data),
		});
	}

	feedbackBtn.addEventListener('click', e => {
		e.preventDefault();

		if (
			name.value.length > 2 &&
			phone.value.length === 12 &&
			sum.value.length > 0 &&
			region.textContent !== 'Выберите город' &&
			region.textContent !== 'Shaharni tanlang'
		) {
			// Отправляем данные на Bitrix24
			var bitrixData = {
				fields: {
					TITLE: 'FEEDBACK',
					NAME: name.value,
					PHONE: [{ VALUE: phone.value, VALUE_TYPE: 'WORK' }],
					OPPORTUNITY: sum.value,
					ADDRESS_CITY: region.textContent,
					COMMENTS: provision.textContent,
					// Дополнительные поля формы, если нужно
				},
			};
			fetch(
				'https://summagroup.bitrix24.ru/rest/88/wj5kdqhivkz90rxv/crm.lead.add.json',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(bitrixData),
				}
			)
				.then(response => {
					feedbackInner.classList.add('hidden');
					feedbackThnks.classList.remove('hidden');
					name.value = '';
					phone.value = '';
					sum.value = '';
					if (sum.previousElementSibling.textContent === 'Сумма кредита') {
						region.textContent = 'Выберите город';
						provision.textContent = 'Без обеспечения';
					} else {
						region.textContent = 'Shaharni tanlang';
						provision.textContent = 'Garovsiz';
					}

					// try {
					// 	gtag('event', 'conversion', {
					// 		send_to: 'AW-10956881405/hLM0CIGgxd8YEP370ugo',
					// 		event_callback: function () {},
					// 	})
					// 	console.log('GA sent')
					// } catch (e) {}

					return response.json();
				})
				.then(bitrixResult => {
					console.log('Bitrix24 Response:', bitrixResult);
					// Обработка ответа от Bitrix24, если нужно
				})
				.then()
				.catch(error => {
					console.error('Bitrix24 Error:', error);
				});

			const data = {
				name: name.value,
				phone: phone.value,
				sum: sum.value,
				region: region.textContent,
				provision: provision.textContent,
			};

			sendForm(data);
		} else {
			name.value.length > 2
				? name.classList.remove('error')
				: name.classList.add('error');
			phone.value.length === 12
				? phone.classList.remove('error')
				: phone.classList.add('error');
			sum.value.length > 0
				? sum.classList.remove('error')
				: sum.classList.add('error');
			region.textContent === 'Выберите город' ||
			region.textContent === 'Shaharni tanlang'
				? region.parentNode.classList.add('error')
				: region.parentNode.classList.remove('error');
		}
	});
} catch (e) {}

// Filter
try {
	const filterBtn = document.querySelector('.filter__btn');
	const filterSum = document.querySelector('.filter__sum');
	const filterTerm = document.querySelector('.filter__term');
	const modal = document.querySelector('.modal');

	filterBtn.addEventListener('click', () => {
		modal.classList.add('modal--active');
		document.body.classList.add('no-scroll');
	});

	// function filterLoans() {
	// 	// Get input values
	// 	let loanAmount = parseFloat(
	// 		document
	// 			.querySelector('.filter__sum')
	// 			.value.toString()
	// 			.replace(/\s/g, '') || 0
	// 	)

	// 	let loanTerm = parseInt(document.querySelector('.filter__term').value) || 0

	// 	// Get all offer items
	// 	let loanItems = document.querySelectorAll('.offer__item')

	// 	// Loop through each item and check if it meets the criteria
	// 	for (let i = 0; i < loanItems.length; i++) {
	// 		let item = loanItems[i]
	// 		let itemAmount = parseFloat(item.getAttribute('sum')) || 0
	// 		let itemTerm = parseInt(item.getAttribute('term')) || 0

	// 		// Compare with the filter criteria
	// 		let amountCondition = itemAmount >= loanAmount
	// 		let termCondition = itemTerm >= loanTerm

	// 		// Show or hide the item based on the conditions
	// 		item.style.display = amountCondition && termCondition ? 'flex' : 'none'
	// 	}
	// }

	// filterBtn.addEventListener('click', () => {
	// 	function checkScreenWidth() {
	// 		var screenWidth =
	// 			window.innerWidth ||
	// 			document.documentElement.clientWidth ||
	// 			document.body.clientWidth
	// 		if (screenWidth <= 992) {
	// 			if (filterSum.value.length > 0 && filterTerm.value.length > 0) {
	// 				filterLoans()
	// 				modal.classList.add('modal--active')
	// 				document.body.classList.add('no-scroll')
	// 			} else {
	// 				filterSum.value.length > 0
	// 					? filterSum.classList.remove('error')
	// 					: filterSum.classList.add('error')
	// 				filterTerm.value.length > 0
	// 					? filterTerm.parentNode.classList.remove('error')
	// 					: filterTerm.parentNode.classList.add('error')
	// 			}
	// 		} else {
	// 			if (filterSum.value.length > 0 && filterTerm.value.length > 0) {
	// 				filterLoans()
	// 			} else {
	// 				filterSum.value.length > 0
	// 					? filterSum.classList.remove('error')
	// 					: filterSum.classList.add('error')
	// 				filterTerm.value.length > 0
	// 					? filterTerm.parentNode.classList.remove('error')
	// 					: filterTerm.parentNode.classList.add('error')
	// 			}
	// 		}
	// 	}
	// 	checkScreenWidth()
	// })
} catch (e) {}

// Save data localStorage
try {
	const introFormBtn = document.querySelector('.intro__form-btn');
	const sum = document.querySelector('.intro__form-item .sum');
	const term = document.querySelector('.intro__form-item .term');

	sum.addEventListener('change', e => {
		if (e.target.value.length > 0) {
			e.target.classList.remove('error');
		} else {
			e.target.classList.add('error');
		}
	});

	term.addEventListener('change', e => {
		if (e.target.value.length > 0) {
			e.target.parentNode.classList.remove('error');
		} else {
			e.target.parentNode.classList.add('error');
		}
	});

	introFormBtn.addEventListener('click', e => {
		if (sum.value.length > 0 && term.value.length > 0) {
			const data = {
				sum: sum.value,
				term: term.value,
			};

			sum.classList.remove('error');
			term.parentNode.classList.remove('error');

			return localStorage.setItem('data', JSON.stringify(data));
		} else {
			sum.value.length > 0
				? sum.classList.remove('error')
				: sum.classList.add('error');
			term.value.length > 0
				? term.parentNode.classList.remove('error')
				: term.parentNode.classList.add('error');
			return e.preventDefault();
		}
	});

	const data = JSON.parse(localStorage.getItem('data'));

	sum.value = data.sum;
	term.value = data.term;
} catch (e) {}

// Auto save input values
try {
	const filter = document.querySelector('.filter');
	const sum = filter.querySelector('.filter__sum');
	const term = filter.querySelector('.filter__term');
	const btn = filter.querySelector('.filter__btn');
	const sumInputs = document.querySelectorAll('.sum-input');

	sum.addEventListener('change', e => {
		if (e.target.value.length > 0) {
			e.target.classList.remove('error');
		} else {
			e.target.classList.add('error');
		}
	});

	term.addEventListener('change', e => {
		if (e.target.value.length > 0) {
			e.target.parentNode.classList.remove('error');
		} else {
			e.target.parentNode.classList.add('error');
		}
	});

	const data = JSON.parse(localStorage.getItem('data'));

	sum.value = data.sum;
	term.value = data.term;

	sumInputs.forEach(sum => {
		sum.value = data.sum;
	});

	btn.addEventListener('click', e => {
		const data = {
			sum: sum.value,
			term: term.value,
		};

		return localStorage.setItem('data', JSON.stringify(data));
	});
} catch (e) {}

// Тег конверсии на телефон
// try {
// 	const tel = document.querySelectorAll('.tel__link')

// 	tel.forEach(link => {
// 		link.addEventListener('click', function () {
// 			try {
// 				gtag('event', 'conversion', {
// 					send_to: 'AW-10956881405/qV8FCK-9xt8YEP370ugo',
// 					event_callback: function () {},
// 				})
// 				console.log('GA ph sent')
// 			} catch (e) {}
// 			return true
// 		})
// 	})
// } catch (e) {}

// Авто вставка суммы Feedback
try {
	const feedbackSum = document.querySelector('.feedback__sum');

	const data = JSON.parse(localStorage.getItem('data'));

	feedbackSum.value = data.sum;
} catch (e) {}

// Wizard
try {
	const steps = document.querySelectorAll('.steps__item');
	const wizardStep = document.querySelectorAll('.wizard__step');
	const wizardPrev = document.querySelectorAll('.wizard__prev');
	const wizardNext = document.querySelectorAll('.wizard__next');
	const wizardSbmt = document.querySelector('.wizard__sbmt');
	const wizardTopInfo = document.querySelectorAll('.wizard__top-info');
	const wizardSumTopInput = document.querySelector('.wizard__sum .top__input');
	const wizardTermTopInput = document.querySelector(
		'.wizard__term .top__input'
	);

	const wizardCreditStory = document.getElementsByName('step2');
	const wizardCreditDeposit = document.getElementsByName('step3');

	const pinfl = document.querySelector('.pinfl');
	const pinflInput = document.querySelector('.pinfl__input input');

	const wizardForm = document.querySelector('.wizard__form');
	const name = wizardForm.querySelector('.input__name');
	const telephone = wizardForm.querySelector('.input__tel');
	const checkbox = wizardForm.querySelector('.check__input');

	let currentStep = 0;

	let wizardData = {
		name: '',
		telephone: '',
		amount: '5000000',
		term: '3',
		story: '',
		deposit: '',
		pinfl: '',
	};

	// Wizard sum
	const wizardSumResult = document.querySelector(
		'.wizard__sum .top__input input'
	);
	const wizardSumRangeInput = document.querySelector(
		'.wizard__sum .range__input input'
	);
	const wizardTermResult = document.querySelector(
		'.wizard__term .top__input input'
	);
	const wizardTermRangeInput = document.querySelector(
		'.wizard__term .range__input input'
	);
	const wizardSumIncrement = document.querySelector(
		'.wizard__sum-top .top__input-increment'
	);
	const wizardSumDecrement = document.querySelector(
		'.wizard__sum-top .top__input-decrement'
	);
	const wizardTermIncrement = document.querySelector(
		'.wizard__term-top .top__input-increment'
	);
	const wizardTermDecrement = document.querySelector(
		'.wizard__term-top .top__input-decrement'
	);

	const wizardThnks = document.querySelector('.wizard__thnks');
	const wizardClose = document.querySelector('.wizard__thnks-close');

	wizardClose.addEventListener('click', () => {
		wizardThnks.classList.remove('wizard__thnks--active');
	});

	wizardSumRangeInput.addEventListener('input', e => {
		const progress = (e.target.value / e.target.max) * 100;
		wizardSumRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

		wizardSumResult.value = (
			parseInt(e.target.value) + 5000000
		).toLocaleString();
		wizardData.amount = parseInt(e.target.value) + 5000000;

		let data = JSON.parse(localStorage.getItem('data'));
		data.sum = (parseInt(e.target.value) + 5000000).toLocaleString();
		localStorage.setItem('data', JSON.stringify(data));
	});

	function sumAutoValue() {
		if (localStorage.getItem('data')) {
			const data = JSON.parse(localStorage.getItem('data'));
			const value = parseInt(data.sum.replace(/\s/g, ''));
			wizardSumResult.value = value.toLocaleString();
			wizardSumRangeInput.value = value - 5000000;
			const progress = ((value - 5000000) / wizardSumRangeInput.max) * 100;
			wizardSumRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
		} else {
			wizardSumResult.value = '5 000 000';
			wizardSumRangeInput.value = 0;
			const progress = (0 / wizardSumRangeInput.max) * 100;
			wizardSumRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
		}
	}

	sumAutoValue();

	function termAutoValue() {
		if (localStorage.getItem('data')) {
			const data = JSON.parse(localStorage.getItem('data'));
			const value = parseInt(data.term.replace(/\s/g, ''));
			if (value <= 3) {
				wizardTermResult.value = 3;
			} else if (value === 3) {
				wizardTermResult.value = 3;
				wizardTermRangeInput.value = 0;
				const progress = (0 / wizardTermRangeInput.max) * 100;
				wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 4 || value === 5 || value === 6) {
				wizardTermResult.value = 6;
				wizardTermRangeInput.value = 3;
				const progress = (3 / wizardTermRangeInput.max) * 100;
				wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 7 || value === 8 || value === 9) {
				wizardTermResult.value = 9;
				wizardTermRangeInput.value = 6;
				const progress = (6 / wizardTermRangeInput.max) * 100;
				wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 10 || value === 11 || value === 12) {
				wizardTermResult.value = 12;
				wizardTermRangeInput.value = 9;
				const progress = (9 / wizardTermRangeInput.max) * 100;
				wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 13 || value === 14 || value === 15) {
				wizardTermResult.value = 15;
				wizardTermRangeInput.value = 12;
				const progress = (12 / wizardTermRangeInput.max) * 100;
				wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 16 || value === 17 || value === 18) {
				wizardTermResult.value = 18;
				wizardTermRangeInput.value = 15;
				const progress = (15 / wizardTermRangeInput.max) * 100;
				wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 19 || value === 20 || value === 21) {
				wizardTermResult.value = 21;
				wizardTermRangeInput.value = 18;
				const progress = (18 / wizardTermRangeInput.max) * 100;
				wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 22 || value === 23 || value === 24) {
				wizardTermResult.value = 24;
				wizardTermRangeInput.value = 21;
				const progress = (21 / wizardTermRangeInput.max) * 100;
				wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			}
		} else {
			wizardTermResult.value = 3;
			wizardTermRangeInput.value = 0;
			const progress = (0 / wizardTermRangeInput.max) * 100;
			wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
		}
	}

	termAutoValue();

	wizardTermRangeInput.addEventListener('input', e => {
		const progress = (e.target.value / e.target.max) * 100;
		wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

		wizardTermResult.value = (parseInt(e.target.value) + 3).toLocaleString();
		wizardData.term = (parseInt(e.target.value) + 3).toLocaleString();

		let data = JSON.parse(localStorage.getItem('data'));
		data.term = (parseInt(e.target.value) + 3).toLocaleString();
		localStorage.setItem('data', JSON.stringify(data));
	});

	wizardSumResult.addEventListener('input', e => {
		let value = parseInt(e.target.value.replace(/\s/g, ''));

		if (value < 5000000 || value > 150000000) {
			e.target.parentNode.classList.add('error');
		} else if (e.target.value.length < 1) {
			e.target.parentNode.classList.add('error');
		} else {
			e.target.parentNode.classList.remove('error');
			wizardSumRangeInput.value = value - 5000000;
			wizardData.amount = value;
			const progress = ((value - 5000000) / wizardSumRangeInput.max) * 100;
			wizardSumRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

			let data = JSON.parse(localStorage.getItem('data'));
			data.sum = value.toLocaleString();
			localStorage.setItem('data', JSON.stringify(data));
		}
	});

	wizardTermResult.addEventListener('input', e => {
		let value = parseInt(e.target.value.replace(/\s/g, ''));
		let data = JSON.parse(localStorage.getItem('data'));
		if (value < 3 || value > 24) {
			e.target.parentNode.classList.add('error');
		} else if (e.target.value.length < 1) {
			e.target.parentNode.classList.add('error');
		} else if (value === 3) {
			e.target.parentNode.classList.remove('error');

			wizardData.term = 3;
			wizardTermRangeInput.value = value - 3;
			const progress = ((value - 3) / wizardTermRangeInput.max) * 100;
			wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

			data.term = '3';
			localStorage.setItem('data', JSON.stringify(data));
		} else if (value === 4 || value === 5 || value === 6) {
			e.target.parentNode.classList.remove('error');

			e.target.value = 6;

			wizardData.term = 6;
			wizardTermRangeInput.value = 6 - 3;
			const progress = ((6 - 3) / wizardTermRangeInput.max) * 100;
			wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

			data.term = '6';
			localStorage.setItem('data', JSON.stringify(data));
		} else if (value === 7 || value === 8 || value === 9) {
			e.target.parentNode.classList.remove('error');

			e.target.value = 9;

			wizardData.term = 9;
			wizardTermRangeInput.value = 9 - 3;
			const progress = ((9 - 3) / wizardTermRangeInput.max) * 100;
			wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

			data.term = '9';
			localStorage.setItem('data', JSON.stringify(data));
		} else if (value === 10 || value === 11 || value === 12) {
			e.target.parentNode.classList.remove('error');

			e.target.value = 12;

			wizardData.term = 12;
			wizardTermRangeInput.value = 12 - 3;
			const progress = ((12 - 3) / wizardTermRangeInput.max) * 100;
			wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
		} else if (value === 13 || value === 14 || value === 15) {
			e.target.parentNode.classList.remove('error');

			e.target.value = 15;

			wizardData.term = 15;
			wizardTermRangeInput.value = 15 - 3;
			const progress = ((15 - 3) / wizardTermRangeInput.max) * 100;
			wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

			data.term = '12';
			localStorage.setItem('data', JSON.stringify(data));
		} else if (value === 16 || value === 17 || value === 18) {
			e.target.parentNode.classList.remove('error');

			e.target.value = 18;

			wizardData.term = 18;
			wizardTermRangeInput.value = 18 - 3;
			const progress = ((18 - 3) / wizardTermRangeInput.max) * 100;
			wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

			data.term = '18';
			localStorage.setItem('data', JSON.stringify(data));
		} else if (value === 19 || value === 20 || value === 21) {
			e.target.parentNode.classList.remove('error');

			e.target.value = 21;

			wizardData.term = 21;
			wizardTermRangeInput.value = 21 - 3;
			const progress = ((21 - 3) / wizardTermRangeInput.max) * 100;
			wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

			data.term = '21';
			localStorage.setItem('data', JSON.stringify(data));
		} else if (value === 22 || value === 23 || value === 24) {
			e.target.parentNode.classList.remove('error');

			e.target.value = 24;

			wizardData.term = 24;
			wizardTermRangeInput.value = 24 - 3;
			const progress = ((24 - 3) / wizardTermRangeInput.max) * 100;
			wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

			data.term = '24';
			localStorage.setItem('data', JSON.stringify(data));
		}
	});

	new IMask(wizardSumResult, {
		mask: Number,
		thousandsSeparator: ' ',
	});

	new IMask(wizardTermResult, {
		mask: Number,
	});

	wizardSumIncrement.addEventListener('click', () => {
		let value = parseInt(wizardSumResult.value.replace(/\s/g, ''));

		if (value >= 5000000 && value < 150000000) {
			wizardSumResult.value = (value + 1000000).toLocaleString();
			wizardSumResult.parentNode.classList.remove('error');

			wizardData.amount = value + 1000000;
			wizardSumRangeInput.value = value - 4000000;

			const progress = ((value - 4000000) / wizardSumRangeInput.max) * 100;
			wizardSumRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

			let data = JSON.parse(localStorage.getItem('data'));
			data.sum = (value + 1000000).toLocaleString();
			localStorage.setItem('data', JSON.stringify(data));
		}

		if (value < 5000000) {
			wizardSumResult.value = '5 000 000';
			wizardSumResult.parentNode.classList.remove('error');

			wizardData.amount = 5000000;

			wizardSumRangeInput.value = 0;

			const progress = (0 / wizardSumRangeInput.max) * 100;
			wizardSumRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

			let data = JSON.parse(localStorage.getItem('data'));
			data.sum = (5000000).toLocaleString();
			localStorage.setItem('data', JSON.stringify(data));
		}

		if (wizardSumResult.value.trim() === '') {
			wizardSumResult.value = '5 000 000';
			wizardSumResult.parentNode.classList.remove('error');
		}
	});

	wizardSumDecrement.addEventListener('click', () => {
		let value = parseInt(wizardSumResult.value.replace(/\s/g, ''));

		if (value > 5000000 && value < 152000000) {
			wizardSumResult.value = (value - 1000000).toLocaleString();
			wizardSumResult.parentNode.classList.remove('error');

			wizardData.amount = value - 1000000;
			wizardSumRangeInput.value = value - 6000000;

			const progress = ((value - 6000000) / wizardSumRangeInput.max) * 100;
			wizardSumRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

			let data = JSON.parse(localStorage.getItem('data'));
			data.sum = (value - 1000000).toLocaleString();
			localStorage.setItem('data', JSON.stringify(data));
		}

		if (value > 150000000) {
			wizardSumResult.value = '150 000 000';
			wizardSumResult.parentNode.classList.remove('error');

			wizardData.amount = 150000000;

			wizardSumRangeInput.value = 150000000;

			const progress = (145000000 / wizardSumRangeInput.max) * 100;
			wizardSumRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

			let data = JSON.parse(localStorage.getItem('data'));
			data.sum = (150000000).toLocaleString();
			localStorage.setItem('data', JSON.stringify(data));
		}
	});

	wizardTermIncrement.addEventListener('click', () => {
		let value = parseInt(wizardTermResult.value.replace(/\s/g, ''));
		let data = JSON.parse(localStorage.getItem('data'));

		if (value < 24 && value >= 3) {
			wizardTermResult.value = (value + 3).toLocaleString();

			wizardData.term = wizardTermResult.value;
			wizardTermRangeInput.value = wizardTermResult.value - 3;

			const progress =
				((wizardTermResult.value - 3) / wizardTermRangeInput.max) * 100;
			wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

			data.term = wizardTermResult.value.toLocaleString();
			localStorage.setItem('data', JSON.stringify(data));
		}

		if (value < 3) {
			wizardTermResult.value = 3;
			wizardTermResult.parentNode.classList.remove('error');

			wizardTermRangeInput.value = 0;

			const progress = (0 / wizardTermRangeInput.max) * 100;
			wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
		}

		if (wizardTermResult.value.trim() === '') {
			wizardTermResult.value = '3';
			wizardTermResult.parentNode.classList.remove('error');
		}
	});

	wizardTermDecrement.addEventListener('click', () => {
		let value = parseInt(wizardTermResult.value.replace(/\s/g, ''));
		let data = JSON.parse(localStorage.getItem('data'));

		if (value > 3 && value <= 24) {
			wizardTermResult.value = (value - 3).toLocaleString();

			wizardData.term = wizardTermResult.value;
			wizardTermRangeInput.value = value - 6;

			const progress = ((value - 6) / wizardTermRangeInput.max) * 100;
			wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

			data.term = wizardTermResult.value.toLocaleString();
			localStorage.setItem('data', JSON.stringify(data));
		}

		if (value > 24) {
			wizardTermResult.value = '24';
			wizardTermResult.parentNode.classList.remove('error');

			wizardTermRangeInput.value = 24;

			const progress = (24 / wizardTermRangeInput.max) * 100;

			wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
		}
	});

	// Wizard NextBtn, PrevBtn

	wizardNext.forEach(next => {
		next.addEventListener('click', () => {
			if (
				!wizardSumTopInput.classList.contains('error') &&
				!wizardTermTopInput.classList.contains('error')
			) {
				currentStep++;

				wizardTopInfo[currentStep - 1].classList.remove(
					'wizard__top-info--active'
				);
				wizardTopInfo[currentStep].classList.add('wizard__top-info--active');

				wizardStep.forEach(item => {
					if (item.classList.contains('wizard__step--active')) {
						item.classList.remove('wizard__step--active');
					}
				});

				if (currentStep == 1) {
					wizardNext[0].classList.add('hide');

					wizardPrev[1].classList.remove('hide');
					wizardNext[1].classList.remove('hide');
				}

				if (currentStep == 2) {
					wizardPrev[1].classList.add('hide');
					wizardNext[1].classList.add('hide');

					wizardNext[2].classList.remove('hide');
					wizardPrev[2].classList.remove('hide');
				}

				if (currentStep == 3) {
					wizardPrev[2].classList.add('hide');
					wizardNext[2].classList.add('hide');

					wizardSbmt.classList.remove('hide');
					wizardPrev[3].classList.remove('hide');
				}

				steps[currentStep].classList.add('steps__item--active');
				if (steps[currentStep].nextElementSibling) {
					steps[currentStep].nextElementSibling.classList.add(
						'steps__icon--active'
					);
				}
				wizardStep[currentStep].classList.add('wizard__step--active');
			}
		});
	});

	wizardPrev.forEach(prev => {
		prev.addEventListener('click', () => {
			currentStep--;

			console.log(currentStep);

			if (currentStep == 0) {
				wizardPrev[1].classList.add('hide');
				wizardNext[1].classList.add('hide');

				wizardNext[0].classList.remove('hide');
			}

			if (currentStep == 1) {
				wizardPrev[2].classList.add('hide');
				wizardNext[2].classList.add('hide');

				wizardPrev[1].classList.remove('hide');
				wizardNext[1].classList.remove('hide');
			}

			if (currentStep == 2) {
				wizardPrev[3].classList.add('hide');
				wizardSbmt.classList.add('hide');

				wizardNext[2].classList.remove('hide');
				wizardPrev[2].classList.remove('hide');
			}

			wizardTopInfo[currentStep].classList.add('wizard__top-info--active');
			wizardTopInfo[currentStep + 1].classList.remove(
				'wizard__top-info--active'
			);

			wizardStep.forEach(item => {
				if (item.classList.contains('wizard__step--active')) {
					item.classList.remove('wizard__step--active');
				}
			});

			steps[currentStep + 1].classList.remove('steps__item--active');
			if (steps[currentStep + 1].nextElementSibling) {
				steps[currentStep + 1].nextElementSibling.classList.remove(
					'steps__icon--active'
				);
			}
			wizardStep[currentStep].classList.add('wizard__step--active');
		});
	});

	// Pinfl api
	new IMask(pinflInput, {
		mask: Number,
	});

	function makeApiRequest(inputNumber) {
		const apiUrl = `https://api.goodsign.biz/v1/profile/${inputNumber}`;

		fetch(apiUrl)
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then(data => {
				if (data.name != '' && data.inn !== null) {
					pinfl.classList.add('entered');
					pinfl.classList.remove('error');
					pinfl.classList.remove('info');
				} else {
					pinfl.classList.remove('entered');
					pinfl.classList.remove('info');
					pinfl.classList.add('error');
				}
			})
			.catch(error => {
				pinfl.classList.remove('entered');
				pinfl.classList.add('error');
			});
	}

	pinflInput.addEventListener('input', e => {
		if (e.target.value.length === 14 && /^\d+$/.test(e.target.value)) {
			makeApiRequest(e.target.value);
		} else {
			pinfl.classList.remove('entered');
			pinfl.classList.remove('error');
			pinfl.classList.add('info');
		}
	});

	async function sendForm(data) {
		const res = await fetch('/wizard.php', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(data),
		});
	}

	// Wizard form validate
	wizardSbmt.addEventListener('click', () => {
		console.log('qwe');
		if (
			name.value.length >= 2 &&
			telephone.value.length === 12 &&
			checkbox.checked
		) {
			let selectedStory = '';

			for (var i = 0; i < wizardCreditStory.length; i++) {
				if (wizardCreditStory[i].checked) {
					selectedStory = wizardCreditStory[i].value;
					break;
				}
			}
			wizardData.story = selectedStory;

			let selectedDeposit = '';

			for (var i = 0; i < wizardCreditDeposit.length; i++) {
				if (wizardCreditDeposit[i].checked) {
					selectedDeposit = wizardCreditDeposit[i].value;
					break;
				}
			}
			wizardData.deposit = selectedDeposit;

			wizardData.name = name.value;
			wizardData.telephone = telephone.value;
			if (
				pinflInput.value.length === 14 &&
				pinfl.classList.contains('entered')
			) {
				wizardData.pinfl = pinflInput.value;
			} else {
				wizardData.pinfl = '';
			}

			var bitrixData = {
				fields: {
					TITLE: 'Wizard',
					NAME: wizardData.name,
					PHONE: [{ VALUE: wizardData.telephone, VALUE_TYPE: 'WORK' }],
					OPPORTUNITY: wizardData.amount,
					ADDRESS_CITY: wizardData.region,
					COMMENTS: `Срок кредита ${wizardData.term},
							   Кредитная история: ${wizardData.story},
							   Залог: ${wizardData.deposit},
							   ПИНФЛ: ${wizardData.pinfl}`,
					// Дополнительные поля формы, если нужно
				},
			};
			fetch(
				'https://summagroup.bitrix24.ru/rest/88/wj5kdqhivkz90rxv/crm.lead.add.json',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(bitrixData),
				}
			)
				.then(response => {
					wizardThnks.classList.add('wizard__thnks--active');
					name.value = '';
					name.parentNode.classList.remove('entered');
					telephone.value = '';
					telephone.parentNode.classList.remove('entered');
					pinflInput.value = '';
					pinfl.classList.remove('entered');
					pinfl.classList.remove('error');

					// try {
					// 	gtag('event', 'conversion', {
					// 		send_to: 'AW-10956881405/hLM0CIGgxd8YEP370ugo',
					// 		event_callback: function () {},
					// 	})
					// 	console.log('GA sent')
					// } catch (e) {}

					return response.json();
				})
				.then(bitrixResult => {
					console.log('Bitrix24 Response:', bitrixResult);
					// Обработка ответа от Bitrix24, если нужно
				})
				.then()
				.catch(error => {
					console.error('Bitrix24 Error:', error);
				});

			const data = {
				name: wizardData.name,
				phone: wizardData.telephone,
				amount: wizardData.amount,
				term: wizardData.term,
				story: wizardData.story,
				deposit: wizardData.deposit,
				pinfl: wizardData.pinfl,
			};

			sendForm(data);
		}

		if (name.value.length >= 2) {
			name.parentNode.classList.remove('error');
			name.parentNode.classList.add('entered');
		} else {
			name.parentNode.classList.remove('entered');
			name.parentNode.classList.add('error');

			name.addEventListener('input', e => {
				if (e.target.value.length >= 2) {
					name.parentNode.classList.remove('error');
					name.parentNode.classList.add('entered');
				} else {
					name.parentNode.classList.add('error');
					name.parentNode.classList.remove('entered');
				}
			});
		}

		if (telephone.value.length === 12) {
			telephone.parentNode.classList.remove('error');
			telephone.parentNode.classList.add('entered');
		} else {
			telephone.parentNode.classList.add('error');
			telephone.parentNode.classList.remove('entered');

			telephone.addEventListener('input', e => {
				if (e.target.value.length === 12) {
					telephone.parentNode.classList.remove('error');
					telephone.parentNode.classList.add('entered');
				} else {
					telephone.parentNode.classList.add('error');
					telephone.parentNode.classList.remove('entered');
				}
			});
		}

		if (checkbox.checked) {
			checkbox.classList.remove('error');

			checkbox.addEventListener('change', () => {
				checkbox.classList.remove('error');
			});
		} else {
			checkbox.classList.add('error');
		}
	});

	if (checkbox.checked) {
		checkbox.classList.remove('error');

		checkbox.addEventListener('change', () => {
			checkbox.classList.remove('error');
		});
	} else {
		checkbox.classList.add('error');
	}
} catch (e) {}

// Input mask tel
try {
	let phone = document.querySelector('#phone-wizard');

	IMask(phone, {
		mask: '00 000-00-00',
	});
} catch (e) {}

// Popup pinfl
try {
	const popupBtn = document.querySelector('.pinfl__label svg');
	const popupClose = document.querySelector('.popup__close');
	const popup = document.querySelector('.popup');

	popupBtn.addEventListener('click', () => {
		popup.classList.add('popup--active');
	});

	popup.addEventListener('click', e => {
		if (e.target.classList.contains('popup__bg')) {
			popup.classList.remove('popup--active');
		}
	});

	popupClose.addEventListener('click', () => {
		popup.classList.remove('popup--active');
	});
} catch (e) {}

// Offer sum 2 %
try {
	const offer = document.querySelector('.offer');
	const offerSum = offer.querySelector('.item__input');
	const offerText = offer.querySelector('.offer__form-text span');

	offerSum.addEventListener('input', e => {
		let sum = parseInt(e.target.value.replace(/\s/g, ''));

		if (!e.target.value.length) {
			offerText.textContent = 0;
			return;
		}

		offerText.textContent = (sum * 0.02).toLocaleString();
	});
} catch (e) {}

// Auth
try {
	const auth = document.querySelector('.auth');
	const authForm = auth.querySelector('.auth__form');
	const phone = auth.querySelector('.phone-input');
	const name = auth.querySelector('.name-input');
	const lastName = auth.querySelector('.lastname-input');
	const btn = auth.querySelector('.auth__form-btn');

	name.addEventListener('change', e => {
		if (e.target.value.length >= 2) {
			name.classList.remove('error');
		} else {
			name.classList.add('error');
		}
	});

	lastName.addEventListener('change', e => {
		if (e.target.value.length >= 2) {
			lastName.classList.remove('error');
		} else {
			lastName.classList.add('error');
		}
	});

	phone.addEventListener('change', e => {
		if (e.target.value.length === 12) {
			phone.parentNode.classList.remove('error');
		} else {
			phone.parentNode.classList.add('error');
		}
	});

	authForm.addEventListener('submit', e => {
		e.preventDefault();

		let isValid = {
			phone: true,
			name: true,
			lastName: true,
		};

		if (phone.value.length === 12) {
			phone.parentNode.classList.remove('error');
			isValid.phone = true;
		} else {
			phone.parentNode.classList.add('error');
			isValid.phone = false;
		}
		if (name.value.length >= 2) {
			name.classList.remove('error');
			isValid.name = true;
		} else {
			name.classList.add('error');
			isValid.name = false;
		}
		if (lastName.value.length >= 2) {
			lastName.classList.remove('error');
			isValid.lastName = true;
		} else {
			lastName.classList.add('error');
			isValid.lastName = false;
		}

		if (isValid.phone && isValid.name && isValid.lastName) {
			let userData = {
				firstName: name.value,
				lastName: lastName.value,
				phoneNumber: phone.value,
				auth: true,
			};

			// Сохраняем данные в LocalStorage
			localStorage.setItem('offerInfo', JSON.stringify(userData));

			// Редирект на другую страницу
			window.location.href = 'offer.html';
		}
	});
} catch (e) {}

try {
	document.addEventListener('DOMContentLoaded', function () {
		const section = document.querySelector('section.offer');
		if (section) {
			const offerInfo = localStorage.getItem('offerInfo');
			if (offerInfo) {
				const userData = JSON.parse(offerInfo);
				if (userData.auth !== true) {
					window.location.href = 'auth.html';
				}
			} else {
				window.location.href = 'auth.html';
			}
		}
	});
} catch (e) {}
