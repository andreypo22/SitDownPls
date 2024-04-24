const modalContainer = document.querySelector('.graph-modal__container');
const modalWindow = document.querySelector('.graph-modal');
const btnClose = document.querySelectorAll('.graph-modal__close');
const disScroll = document.querySelector('.page__body');

if (btnClose.length > 0) {
  for (let index = 0; index < btnClose.length; index++) {
    const el = btnClose[index];
    el.addEventListener('click', function (e) {
        setTimeout(function() {
        modalContainer.classList.remove('graph-modal-open');
        modalWindow.classList.remove('is-open');
        disScroll.classList.remove('disable-scroll');
        disScroll.style.top = "";
        disScroll.removeAttribute("data-position");
      }, 300);
    });
  };
};
