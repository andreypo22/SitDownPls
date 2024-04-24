const showMore = document.querySelector('.show-more');
const productsLength = document.querySelectorAll('.rating__item').length;
let items = 8;

showMore.addEventListener('click', () => {
  items += 4;
  const array = Array.from(document.querySelector('.rating__list').children);
  const visItems = array.slice(0, items);

  visItems.forEach(el => el.classList.add('is-visible'));

  if (visItems.length === productsLength) {
    showMore.style.display = 'none';
  }
});

