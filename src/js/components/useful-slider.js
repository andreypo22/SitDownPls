import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.useful__slider', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 32,
  effect: 'fade',
  speed: 500,
  navigation: {
    nextEl: '.useful__slider-next',
    prevEl: '.useful__slider-prev',
  },
  breakpoints: {
    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    969: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1221: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    }
  },
});
