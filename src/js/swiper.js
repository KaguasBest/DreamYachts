// var swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: 'auto',
//     spaceBetween: 16,
//     freeMode: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
  
//   });
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  // spaceBetween: 16,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});