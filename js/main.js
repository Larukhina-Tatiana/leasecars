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