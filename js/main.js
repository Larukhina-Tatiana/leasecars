

const menuBtn = document.querySelector('.nav__menu-btn');
const menu = document.querySelector('.nav__list');
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('nav__list--active');
});


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


AOS.init();