$(function() {
	let scrollOld = 0,
		windowWidht = $(window).outerWidth();

	/* Scroll */
	$('[data-scroll]').click(function(event) {
		event.preventDefault();

		let blockID = $(this).data('scroll'),
			blockOffSet = $(blockID).offset().top,
			heightHeader = $('.header').outerHeight();

		$('.header__footer,.mobile__arrow').removeClass('active');
		$('.nav__burger,.header__nav').removeClass('active');
		$('body').removeClass('lock');

		$('html,body').animate({
			scrollTop: blockOffSet - heightHeader,
		}, 700);
	})

	/* Active Header Body */
	$(window).scroll(function(event) {
		event.preventDefault();

		let scrollNew = $(this).scrollTop(),
			windowWidht = $(window).outerWidth();

		if (windowWidht > 750) {
			if ((scrollNew > scrollOld)) {
				$('.header__footer').addClass('hide');
			} else {
				$('.header__footer').removeClass('hide');
			}
		}

		if (windowWidht <= 750) {
			if ((scrollNew > scrollOld)) {
				$('.mobile__bottom').addClass('hide');
			} else {
				$('.mobile__bottom').removeClass('hide');
			}
		}

		scrollOld = scrollNew;
	});

	/* Nav-Toggle */
	$('.nav__burger').click(function(event) {

		if (($('.header__footer').hasClass('active')) || (!($('.nav__burger').hasClass('active')))) {
			$('body').addClass('lock');
			$('.mobile__bottom').removeClass('hide');
		} else {
			$('body').removeClass('lock');
		}

		$('.nav__burger,.header__nav').toggleClass('active');
		$('.header__footer,.mobile__arrow').removeClass('active');
	});

	$('.mobile__bottom').click(function(event) {

		if (($('.nav__burger').hasClass('active')) || (!($('.header__footer').hasClass('active'))))  {
			$('body').addClass('lock');
		} else {
			$('body').removeClass('lock');
		}

		$('.header__footer,.mobile__arrow').toggleClass('active');
		$('.nav__burger,.header__nav').removeClass('active');
	})

	$('.nav__link').click(function(event) {
		if (windowWidht < 750) {
			$('.nav__burger,.header__nav').removeClass('active');
			$('.header__footer,.mobile__arrow').removeClass('active');
			$('body').removeClass('lock');
		}
		
	})

	/* Spoiler */
	$('.contact__header').click(function(event) {
		event.preventDefault();

		if ($('.contact__inner').hasClass('spoiler')) {
			$('.contact__header').not($(this)).removeClass('active');
			$('.contact__list').not($(this).next()).slideUp(300);
		}

		$(this).toggleClass('active').next().slideToggle(300);
	});
})