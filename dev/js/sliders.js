import Swiper from 'swiper';

var mainSlider = new Swiper (".main-slider .swiper-container", {
  grabCursor: true,
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.main-slider__arrow-next',
    prevEl: '.main-slider__arrow-prev',
  },
})


var collectionSlider = new Swiper (".collection__slider .swiper-container", {
  grabCursor: true,
  loop: true,
  autoplay: true,
})



// СЛАДЙЕР С ПОПУЛЯРНЫМИ ТОВАРАМИ
var popSlider = new Swiper('.product-slider .swiper-container', {  
  slidesPerView: 4,
  spaceBetween: 29,
  grabCursor: true,
  loop: true,
  navigation: {
      nextEl: '.product-slider__arrow_next',
      prevEl: '.product-slider__arrow_prev',
    },
  breakpoints: {
    1023: {
      slidesPerView: 'auto',
    },
    660:{
      spaceBetween: 6,
      slidesPerView: 'auto',
    }
  }
});

var ppSlider = new Swiper('.product-page__slider .swiper-container', {  
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  navigation: {
      nextEl: '.product-page__slider-arrow_next',
      prevEl: '.product-page__slider-arrow_prev',
    },
});




function createAnalogsSlider (){
  if(window.innerWidth  < 1023){
    var analogsSlider = new Swiper('.product-page__analogs', {  
      slidesPerView: 'auto',
      grabCursor: true,
      spaceBetween: 12,
      loop: true
    });
  }
} 

$(window).resize(createAnalogsSlider());

createAnalogsSlider ()
