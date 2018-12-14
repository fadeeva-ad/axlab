import Swiper from 'swiper';

var portfolioSlider = new Swiper (".portfolio__slider", {
  grabCursor: true,
  direction: 'vertical',
  slidesPerView: 1,
  centeredSlides: true,
  loop: false,
  speed: 500,
  autoplay: true,
  navigation: {
    nextEl: '.portfolio__arrow-next',
    prevEl: '.portfolio__arrow-prev',
  },
  on: {
    slideChange: function(){
      $(".portfolio__counter").text(this.activeIndex + 1);
      if(this.isEnd){
        $(".portfolio__arrow-next").css("opacity", "0");
      }else{
        $(".portfolio__arrow-next").css("opacity", "1");
      }
      if(this.isBeginning){
        $(".portfolio__arrow-prev").css("opacity", "0");
      }else{
        $(".portfolio__arrow-prev").css("opacity", "1");
      }
    }
  }
}) 


