// require('flexmenu2/index');


// $(document).ready(function() {
//     $('.header__menu .header__list').flexMenu();
// });

import {
    axlab
} from '../mainJs'

axlab.menu = {

    // Открыть меню
    open: function () {
        $(".menu-popup").fadeIn(250)
        $(".menu-btn").addClass("menu-btn_active");
        window.setTimeout(() => {
            $(".menu-popup .menu").addClass("menu_active");
        }, 250);
        $("html, body").css("overflow-y", "hidden");
        axlab.menu.minWidth()
        axlab.menu.minWidth = ()=>{return false;};
    },
    
    minWidth: function (){
        let cWidth = $(".container").offset().left;
        let mWidth = $(".menu").outerWidth();
        $(".menu").css("min-width", cWidth + mWidth);
        
    },

    //Закрыть меню
    close: function () {
        $(".menu-popup .menu").removeClass("menu_active")
        window.setTimeout(() => {
            $(".menu-popup").fadeOut(250)
            $(".menu-btn").removeClass("menu-btn_active")
        }, 250);
        $("html, body").css("overflow-y", "visible");
    },

    anotherClose: function () {
        $(".menu-popup").mouseup(function (e) {
            var container = $(".menu");
            if (!container.is(e.target) && (container.has(e.target).length === 0)) {
                axlab.menu.close();
            }
        });

    },

    // Вызов меню (в шапке)
    call: function () {
        $("[data-menu=\"call\"]").on("click", function () {
            if (($(".menu-popup").css("display")) == 'none') {
                axlab.menu.open();
            } else {
                axlab.menu.close();
            }
        })
    },

    reachPageEnd: function () {
        $(window).on("scroll", function () {
            let PageWidth = $("body").height() - window.innerHeight - 20;
            let scroll = $(window).scrollTop();
            if (scroll >= PageWidth) {
                console.log($(window).scrollTop())
                axlab.menu.open()
            } else {
                axlab.menu.close();
            }
        });
    }
}

$(function () {
    axlab.menu.call();
    // axlab.menu.reachPageEnd();
    axlab.menu.anotherClose();
})