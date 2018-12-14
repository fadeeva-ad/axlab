import {
    axlab
} from '../mainJs'

axlab.sidebar = {

    // Нажатие на кнопку в категориях (первая страница)
    callSidebar: function () {
        $("[data-sidebar=\"call\"]").on("click", function () {
            axlab.sidebar.open();
            axlab.sidebar.loadContent(this);
        });

        $("[data-sidebar=\"close\"]").on("click", function () {
            axlab.sidebar.close();
        });

        
    },
    
    open: function () {
        $(".modals").fadeIn(250)
        window.setTimeout(() => {
            $(".modals .sidebar").addClass("sidebar_active");
        }, 250);
        $("html, body").css("overflow-y", "hidden");
    },

    close: function () {
        $(".modals .sidebar").removeClass("sidebar_active")
        window.setTimeout(() => {
            $(".modals").fadeOut(250)
        }, 250);
        $("html, body").css("overflow-y", "visible");
    },

    anotherClose: function () {
        $(".sidebar").mouseup(function (e) {
            var container = $(".sidebar__wrapper");
            if (!container.is(e.target) && (container.has(e.target).length === 0)) {
                axlab.sidebar.close();
            }
        });

    },

    loadContent: function(page){
        let $page = $(page).attr("data-sidebar-content");
        console.log($page);
        $(".sidebar__bottom").load($page + ".php");
    }
}

$(function () {
    axlab.sidebar.callSidebar();
    axlab.sidebar.anotherClose();
})