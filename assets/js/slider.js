var mySwiper = new Swiper('.swiper-container', {

  direction: 'horizontal',
  loop: true,
  autoplay: true,
  speed: 700,
  effect: 'ease',

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})