import Swiper, { Navigation, Pagination, Thumbs, watchSlidesProgress, freeMode } from 'swiper';
Swiper.use([Navigation, Pagination, Thumbs, watchSlidesProgress, freeMode]);
const swiper = new Swiper('.swiper-bottom', {
  slidesPerView: 1,
  spaceBetween: 78,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    577: {
      slidesPerView: 2,
      spaceBetween: 78,
    },
    969: {
      slidesPerView: 3,
      spaceBetween: 78,
    },
    1221: {
      slidesPerView: 4,
      spaceBetween: 78,
    }
  }
});

const swiper2 = new Swiper('.swiper-top', {
  spaceBetween: 108,
  thumbs: {
    swiper: swiper,
  },
  navigation: {
    nextEl: '.modal__slider-next',
    prevEl: '.modal__slider-prev',
  },
});
