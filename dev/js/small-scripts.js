// import * as FilePond from 'filepond';
// import WOW from "wow.js";
import Swiper from 'swiper';
import flexMenu from 'flexmenu2';



var tabsSlider = new Swiper('.block-1__tabs-slider', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    allowTouchMove: false,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    mousewheel: {
        sensitivity: 0.2
    },
    breakpoints: {
        1023: {
            allowTouchMove: true,

        }
    }
});


var brandsSlider = new Swiper (".mobile-brands-filter .swiper-container", {
    slidesPerView: 'auto',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.main-slider__arrow-next',
      prevEl: '.main-slider__arrow-prev',
    },
  })


function footerHeight() {
    console.log(document.body.clientWidth )
    if (document.body.clientWidth > 1000) {
        let height = $(".footer__top").height();
        $(".footer__top").css("height", height);
    }
}


function tabs() {
    $('[data-tab]').each(function () { // выбираем кнопки на странице доставки и проходимся по каждой

        $(this).click(function () { // прослушивваем "клик" по кнопке

            let buttonClass = $(this).attr('class').split(' ')[0]; // получаем класс кнопки       

            let target = $(this).attr('data-tab'); // находим "цель" кнопки

            let targetClass = $("#" + target).attr('class').split(' ')[0]; // получаем класс "цели"

            $(this).parents().find("." + buttonClass).removeClass(buttonClass + "_active"); // ищем родителя и удаляем активный класс у всех кнопок

            $(this).parents().find("." + targetClass).removeClass(targetClass + "_active"); // ищем ее родителя и скрывавем все "цели" кнопок

            $(this).addClass(buttonClass + "_active"); // добавляем кнопке активный класс

            $("#" + target).addClass(targetClass + "_active"); // добавляем "цели" активный класс

            if ($("#" + target).hasClass("block-1__tabs-slider")) {
                var tabsSlider = new Swiper($("#" + target), { // вновь инициализируем слайдер 
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    freeMode: true,
                    allowTouchMove: false,
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        draggable: true

                    },
                    mousewheel: {
                        sensitivity: 0.3
                    },
                    breakpoints: {
                        1023: {
                            allowTouchMove: true,

                        }
                    }
                });
            }

        })
    })
}

function slideList() {
    $('[data-slide]').each(function () { // выбираем кнопки на странице доставки и проходимся по каждой

        $(this).click(function () { // прослушивваем "клик" по кнопке

            let buttonClass = $(this).attr('class').split(' ')[0]; // получаем класс кнопки       

            let target = $(this).attr('data-slide'); // находим "цель" кнопки

            $(this).toggleClass(buttonClass + "_active"); // добавляем кнопке активный класс

            let targetClass = $("#" + target).attr('class').split(' ')[0]; // получаем класс "цели"

            $("#" + target).slideToggle(); // показываем "цель"

        })
    })
}

function counter() {
    $(".counter__arrow_next").click(function () {
        let value = Number($(this).siblings(".counter__text").val()) + 1;
        $(this).siblings(".counter__text").val(value);
        console.log(value);
    })
    $(".counter__arrow_prev").click(function () {
        if (Number($(this).siblings(".counter__text").val()) > 0) {
            let value = Number($(this).siblings(".counter__text").val()) - 1;
            $(this).siblings(".counter__text").val(value);
        }
    })
}

function fabricsOffset() {
    $('.search__list-item').each(function () {
        var offset = $(this).offset();
        if (offset.left <= window.innerWidth / 3) {
            $(this).addClass('search__list-item_left');
        } else if (offset.left >= window.innerWidth - window.innerWidth / 3) {
            $(this).addClass('search__list-item_right');
        } else {
            $(this).addClass('search__list-item_center');
        }
    });

    $('.search__list-item').click(function () {
        $('.search__list-item').not(this).find('.search__list-hidden').hide();
        $('.search__list-item').not(this).removeClass('search__list-item_active');
        $(this).addClass('search__list-item_active');
        $(this).find('.search__list-hidden').show();
    });

    $(document).click(function (e){
        let div = $(".search__list-item"); 
        let target = $(".search__list-hidden"); 
        if (!div.is(e.target)  && div.has(e.target).length === 0) { 
            target.slideUp(); // скрываем его
            div.removeClass("search__list-item_active")
        }
    });
};


function AroundClickClose(div){
    $(document).click(function (e){ 
        if (!div.is(e.target)  && div.has(e.target).length === 0) { 
            div.slideUp(); // скрываем его
        }
    });

}


function showMenu (){
    $('[data-menu="show"]').click(function(){
        $(".filter").slideUp();
        $(".main-banner__mobile-filter-popup").slideUp();
        $(".header__list").slideDown();
        $(".mask").fadeIn()
        $("html, body").css("overflow", "hidden");
    })
    $('[data-menu="hide"]').click(function(){
        $(".header__list").slideUp();
        $(".mask").fadeOut()
        $("html, body").css("overflow", "visible");
    })

    // AroundClickClose($(".filter"))
}

function showFilter (){
    $('[data-filter="show"]').click(function(){
        $(".header__list").slideUp();
        $(".filter").slideDown();
        $(".mask").fadeIn()
        $("html, body").css("overflow", "hidden");
    })
    $('[data-filter="hide"]').click(function(){
        $(".filter").slideUp();
        $(".mask").fadeOut()
        $("html, body").css("overflow", "visible");
    })

    // AroundClickClose($(".header__list"))
}


function showBrandsFilter (){
    $('[data-brands="show"]').click(function(){
        $(".header__list").slideUp();
        $(".mobile-brands-filter__popup").slideDown();
        $(".mask").fadeIn()
        $("html, body").css("overflow", "hidden");
        brandsSlider.update()
    })
    $('[data-brands="hide"]').click(function(){
        $(".mobile-brands-filter__popup").slideUp();
        $(".mask").fadeOut()
        $("html, body").css("overflow", "visible");
    })

    // AroundClickClose($(".header__list"))
}


$(document).ready(function () {
    slideList();
    counter();
    var defaultTabs = new tabs();
    footerHeight();
    fabricsOffset();
    showMenu ();
    showFilter ();
    showBrandsFilter ();
})