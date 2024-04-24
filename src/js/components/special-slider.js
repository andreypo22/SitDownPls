import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.special__slider', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 32,
  effect: 'fade',
  speed: 500,
  navigation: {
    nextEl: '.special__slider-next',
    prevEl: '.special__slider-prev',
  },
  breakpoints: {
    740: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1024: {
      slidesPerView: 'auto',
      slidesPerGroup: 3,
    }
  },

  // a11y: true,
  //   prevSlideMessage: 'Предыдущий слайд',
  //   nextSlideMessage: 'Следующий слайд',
  //   firstSlideMessage: 'Первый слайд',
  //   lastSlideMessage: 'Последний слайд',
  //   // paginationBulletMessage: 'Перейти к слайду {{index}}',

  //   watchSlidesProgress: true,
  //   watchSlidesVisibility: true,
  //   slideVisibleClass: "slide-visible",

  //   on: {
  //     init: function () {
  //       this.slides.forEach((slide) => {
  //         if (!slide.classList.contains("slide-visible")) {
  //           slide.tabIndex = "-1";
  //         } else {
  //           slide.tabIndex = "";
  //         }
  //       });
  //     },
  //     slideChange: function () {
  //       this.slides.forEach((slide) => {
  //         if (!slide.classList.contains("slide-visible")) {
  //           slide.tabIndex = "-1";
  //         } else {
  //           slide.tabIndex = "";
  //         }
  //       });
  //     }
  //   },

});

