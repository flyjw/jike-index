

// 幻灯片
$(function() {
    var bannerSlider = new Slider($('#banner_tabs'), {
        time: 5000,
        delay: 400,
        event: 'hover',
        auto: true,
        mode: 'fade',
        controller: $('#bannerCtrl'),
        activeControllerCls: 'active'
    });
    $('#banner_tabs .flex-prev').click(function() {
        bannerSlider.prev()
    });
    $('#banner_tabs .flex-next').click(function() {
        bannerSlider.next()
    });
})




// 热门推荐简介文字隐藏显示

$(function() {
    $('#lesson-infor p').hover(
        function() {
            var _this = $(this);
            $(this).animate({
                "height": "55px",
                "opacity": "1",
                "display": "display"

            }, 600);
        },
        function() {
            var _this = $(this);
            $(this).animate({
                "height": "2px",
                "opacity": "0",
                "display": "none"

            }, 600);
        }
    )
});




// 合作企业和媒体报道滚动

$(function() {
    var page = 1;
    var i = 6;

    var click_time = 0;


    $(".next").click(function() {
        var v_wrap = $(this).parents(".scroll");
        var v_show = v_wrap.find(".scroll_list");
        var v_cont = v_wrap.find(".box");
        var v_width = v_cont.width();
        var len = v_show.find("li").length;
        var page_count = Math.ceil(len / i);

        var move_width = v_width / i;
        click_time++;

        if (!v_show.is(":animated")) {
            if (page == page_count) {
                v_show.animate({
                    left: '0px'
                }, "slow");
                page = 1;
            } else {
                v_show.animate({
                    left: '-=' + move_width
                }, "slow");
                if (click_time == i) {
                    page++;
                    click_time = 0;
                }
            }
        }
    });

    $(".prev").click(function() {
        var v_wrap = $(this).parents(".scroll");
        var v_show = v_wrap.find(".scroll_list");
        var v_cont = v_wrap.find(".box");
        var v_width = v_cont.width();
        var len = v_show.find("li").length;
        var page_count = Math.ceil(len / i);
        if (!v_show.is(":animated")) {
            if (page == 1) {
                v_show.animate({
                    left: '-=' + v_width * (page_count - 1)
                }, "slow");
                page = page_count;
            } else {
                v_show.animate({
                    left: '+=' + v_width
                }, "slow");
                page--;
            }
        }
    });
});




// 合作院校滚动
$(function() {
    var page = 1;
    var i = 6;

    var click_time = 0;


    $(".next").click(function() {
        var v_wrap = $(this).parents(".scrollu");
        var v_show = v_wrap.find(".scroll_list");
        var v_cont = v_wrap.find(".box");
        var v_width = v_cont.width();
        var len = v_show.find("li").length;
        var page_count = Math.ceil(len / i);

        var move_width = v_width / i;
        click_time++;

        if (!v_show.is(":animated")) {
            if (page == page_count) {
                v_show.animate({
                    left: '0px'
                }, "slow");
                page = 1;
            } else {
                v_show.animate({
                    left: '-=' + move_width
                }, "slow");
                if (click_time == i) {
                    page++;
                    click_time = 0;
                }
            }
        }
    });
    $(".prev").click(function() {
        var v_wrap = $(this).parents(".scrollu");
        var v_show = v_wrap.find(".scroll_list");
        var v_cont = v_wrap.find(".box");
        var v_width = v_cont.width();
        var len = v_show.find("li").length;
        var page_count = Math.ceil(len / i);
        if (!v_show.is(":animated")) {
            if (page == 1) {
                v_show.animate({
                    left: '-=' + v_width * (page_count - 1)
                }, "slow");
                page = page_count;
            } else {
                v_show.animate({
                    left: '+=' + v_width
                }, "slow");
                page--;
            }
        }
    });
});
