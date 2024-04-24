import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.product__slider', {
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 16,
  effect: 'fade',
  speed: 500,
  navigation: {
    nextEl: '.product__slider-next',
    prevEl: '.product__slider-prev',
  },
  breakpoints: {
    577: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    969: {
      slidesPerView: 3,
    },
    1221: {
      slidesPerView: 4,
    }
  },
});
