(function($) {
    $(function() {
        $('.main-slider .bxslider').bxSlider({
            'pager': false,
            'auto': true,
            'stopAutoOnClick': true,
            'autoHover': true
        });
        new ZoomPic('service');
        $('.customer-feedback-slider .bxslider').bxSlider({
            'pager': false,
            'auto': true,
            'stopAutoOnClick': true,
            'autoHover': true,
            'nextSelector': $('#next_btn'),
            'nextText': ''
        });
        $('.lawyer-slider .bxslider').bxSlider({
            'pager': false,
            'stopAutoOnClick': true,
            'autoHover': true
        });
    });
})(jQuery);