// Перебор фильтров выделение активного
const filtersItem = document.querySelectorAll('.catalog__filters-btn');
const filtersContent = document.querySelectorAll('.catalog__car-list');

filtersItem.forEach(function (element) {
  element.addEventListener('click', open);
})

function open(evt) {
  const filtrTarget = evt.currentTarget;
  const button = filtrTarget.dataset.button;

  filtersItem.forEach(function (item) {
    item.classList.remove('catalog__filters-btn--active');
  })
  filtrTarget.classList.add('catalog__filters-btn--active');


  filtersContent.forEach(function (item) {
    item.classList.remove('catalog__car-list--active');
  });

  document.querySelector(`#${button}`).classList.add('catalog__car-list--active');

}
//

const lightbox = new SimpleLightbox(".catalog__car-img-link", {
  // closeText: "&#128514;",
  fadeSpeed: 300
});


AOS.init();