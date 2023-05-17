const swiper = new Swiper(".swiper", {
  // effect: "coverflow",
  effect: 'fade',
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  }
});

const menuBtn = document.querySelector('.nav__menu-btn');
const menu = document.querySelector('.nav__list');
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list-active');
});


AOS.init();