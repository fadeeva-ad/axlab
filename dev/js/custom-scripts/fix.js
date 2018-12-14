import {
    axlab
} from '../mainJs'

axlab.fix = {
    fbBottom: function () {
        let height = $(".horizon .first-block__bottom").height()
        console.log(height);
        $(".first-block__bottom").css("height", height);
    },

    init: function () {
        // axlab.fix.fbBottom();
    }
}

$(function () {
    axlab.fix.init();
});