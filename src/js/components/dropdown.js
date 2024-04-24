document.querySelectorAll(".header__top-btn").forEach(item => {
  item.addEventListener("click", function() {
    let dropdown = this.parentElement.querySelector(".header__top-back");
    let svgArrow = this.parentElement.querySelector(".header__top-arrow");
    let btnActive = this.parentElement.querySelector(".header__top-btn");

    document.querySelectorAll(".header__top-back").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("header__top-back--active");
      };
    });
    document.querySelectorAll(".header__top-arrow").forEach(el => {
      if (el != svgArrow) {
        el.classList.remove("header__top-arrow--active");
      };
    });
    document.querySelectorAll(".header__top-btn").forEach(el => {
      if (el != btnActive) {
        el.classList.remove("header__top-btn--active");
      };
    });
    dropdown.classList.toggle("header__top-back--active");
    svgArrow.classList.toggle("header__top-arrow--active");
    btnActive.classList.toggle("header__top-btn--active");
  });
});


document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header__top-dropdown")) {
    document.querySelectorAll(".header__top-back").forEach(el => {
        el.classList.remove("header__top-back--active");
    });
    document.querySelectorAll(".header__top-arrow").forEach(el => {
      el.classList.remove("header__top-arrow--active");
    });
    document.querySelectorAll(".header__top-btn").forEach(el => {
      el.classList.remove("header__top-btn--active");
    });
  };
});

