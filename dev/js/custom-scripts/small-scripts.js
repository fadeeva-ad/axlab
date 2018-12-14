import * as FilePond from 'filepond';

const inputElement = document.querySelector('input[type="file"]');
const pond = FilePond.create( inputElement ); 


pond.setOptions({
    labelIdle: 'Перетащите файл или <span class="filepond--label-action"> Выберите </span>',
    labelFileLoading: 'Загрузка',
    labelFileLoadError: 'Во время загрузки произошла ошибка'
});


(function($) {
    let full = document.body.clientHeight;
	$.jInvertScroll(['.scroll'],        // массив с селекторами
		{               // высота прокрутки
		onScroll: function(percent) {   // колбэк
			// console.log(percent);
		}
	});
}(jQuery));  


function tabs() {
    $('[data-tab]').each(function () { // выбираем кнопки на странице доставки и проходимся по каждой

        $(this).click(function () { // прослушивваем "клик" по кнопке

            let target = $(this).attr('data-tab'); 

            $(this).hide(); 

            $("#" + target).fadeIn();

        })
    })

    $('[data-tab-close="close"]').on("click", function(){
        $(this).parent(".form__hide-input").fadeOut();
        let icon = $(this).parent(".form__hide-input").attr("id");
        $('[data-tab="'+icon+'"]').show();
    })
}


tabs();