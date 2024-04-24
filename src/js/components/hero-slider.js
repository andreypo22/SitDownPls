import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.hero__slider', {
  centeredSlides: true,
  spaceBetween: 48,
  loop: true,
  effect: 'fade',
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
});

