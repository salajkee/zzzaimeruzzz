// Input mask tel
try {
	let phone = document.querySelector('#phone-wizard');

	IMask(phone, {
		mask: '00 000-00-00',
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

			sessionStorage.setItem('isLoggedIn', 'true');
			window.location.href = 'offer.html';

			// Сохраняем данные в LocalStorage
			// localStorage.setItem('offerInfo', JSON.stringify(userData));

			// Редирект на другую страницу
			// window.location.href = 'offer.html';

			// Ваша логика проверки имени пользователя и пароля
			// if (username === 'user' && password === 'password') {
			// 	// Используем сессию для сохранения информации о входе
			// 	sessionStorage.setItem('isLoggedIn', 'true');
			// 	window.location.href = 'offer.html'; // Перенаправление на страницу после успешной авторизации
			// } else {
			// 	// document.getElementById('error-message').innerText =
			// 	// 	'Неправильное имя пользователя или пароль';
			// }
		}
	});
} catch (e) {}

try {
	// document.addEventListener('DOMContentLoaded', function () {
	const section = document.querySelector('section.offer');
	// 	if (section) {
	// 		const offerInfo = localStorage.getItem('offerInfo');
	// 		if (offerInfo) {
	// 			const userData = JSON.parse(offerInfo);
	// 			if (userData.auth !== true) {
	// 				window.location.href = 'auth.html';
	// 			}
	// 		} else {
	// 			window.location.href = 'auth.html';
	// 		}
	// 	}
	// });

	// Проверяем, авторизован ли пользователь при загрузке страницы
	// window.addEventListener('DOMContentLoaded', function () {
	// 	if (!sessionStorage.getItem('isLoggedIn')) {
	// 		// Если пользователь не авторизован, перенаправляем его на страницу входа
	// 		window.location.href = 'auth.html';
	// 	}
	// 	// if (section) {

	// 	// }
	// });
} catch (e) {}
