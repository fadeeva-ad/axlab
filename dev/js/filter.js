var filterTabs = function(number) {
    $('[data-filter-title="' + number + '"]').click(function(){
        $('.filter__list-item').css("color","#929092"); 
        $(this).css("color","#FFF");
        $('.filter__hidden-block-wrapper').slideUp("fast", function(){});
        if(($('[data-filter-content="' + number + '"]').css("display"))!= "none"){
            $('[data-filter-content="' + number + '"]').slideUp( "fast", function() {});
            $(this).css("color","#929092");
        }else{
            $('[data-filter-content="' + number + '"]').slideDown( "fast", function() {});
        }
    })
}


filterTabs(0);
filterTabs(1);
filterTabs(2);
filterTabs(3);
filterTabs(4);
