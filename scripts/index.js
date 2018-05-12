(function($) {
    $(function() {
        initFont();
        mainSlider();
        //服务轮播
        new ZoomPic('service');
        customerSlider();
        lawyerSlider()
        complexTab();
    });

    function initFont() {
        var _html = $('html'),
            view_width = _html.width();
        view_width > 768 ? _html.css('font-size', view_width / 19.2 + 'px') : null;
    }
    //主轮播
    function mainSlider() {
        $('.main-slider .bxslider').bxSlider({
            'pager': false,
            'auto': true,
            'stopAutoOnClick': true,
            'autoHover': true
        });
    }
    //客户反馈轮播
    function customerSlider() {
        $('.customer-feedback-slider .bxslider').bxSlider({
            'pager': false,
            'auto': true,
            'stopAutoOnClick': true,
            'autoHover': true,
            'nextSelector': $('#next_btn'),
            'nextText': ''
        });
    }
    //律师轮播
    function lawyerSlider() {
        $('.lawyer-slider .bxslider').bxSlider({
            'pager': false,
            'stopAutoOnClick': true,
            'autoHover': true
        });
    }
    //底部综合tab切换
    function complexTab() {
        var contentItem = $('.complex .complex-content .complex-content-item');
        $('.complex .complex-title a').mouseenter(function(e) {
            var index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            contentItem.eq(index).show().siblings().hide();
        })
    }
})(jQuery);