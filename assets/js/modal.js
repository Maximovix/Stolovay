const modalLinks = document.querySelectorAll('.modal-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (modalLinks.length > 0) {
	for(let index = 0; index < modalLinks.length; index++) {
		const modalLink = modalLinks[index];
		modalLink.addEventListener("click", function (e) {
			const modalName = modalLink.getAttribute('href').replace('#','');
			const currentModal = document.getElementById(modalName);
			modalShow(currentModal);
			e.preventDefault();
		});
	}
}

const modalCloseIcon = document.querySelectorAll('.close-modal');
if (modalCloseIcon.length > 0) {
	for(let index = 0; index < modalCloseIcon.length; index++) {
		const el = modalCloseIcon[index];
		el.addEventListener("click", function (e) {
			modalClose(el.closest('.modal'));
			e.preventDefault();	
		})
	}
}

function modalShow(currentModal) {
	if (currentModal && unlock) {
		const modalActive = document.querySelector('.modal.show');
		if (modalActive) {
			modalClose(modalActive, false);
		} else {
			bodyLock();
		}

		currentModal.classList.add('show');
		currentModal.addEventListener("click", function (e) {
			if (!e.target.closest('.modal__content')) {
				modalClose(e.target.closest('.modal'));
			}
		})
	}
}

function modalClose(modalActive, doUnlock = true) {
	if (unlock) {
		modalActive.classList.remove('show');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
		const el = lockPadding[index];
		el.style.paddingRight = lockPaddingValue;
	}
	}

	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	console.log('1');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {

		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const modalActive = document.querySelector('.modal.show');
		modalClose(modalActive);
	}
})