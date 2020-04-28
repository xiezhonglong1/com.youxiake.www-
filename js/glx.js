//topnav图片
$('.topnav_right li').on('mousemove', function () {
    $('.topnav_right li').find('img').hide()
    $(this).find('img').show()
})
$('.topnav_right li').on('mouseout', function () {
    $('.topnav_right li').find('img').hide()
})

//top城市站下拉链
$('#topseach_right_pj').on('mousemove', function () {
    $(this).find('ul').show()
    $('#topseach_right_pj ul li').on('click', function () {
        let text = $(this).text()
        $('#topseach_right_pj').find('a').text(text)
    })
})
$('#topseach_right_pj').on('mouseout', function () {
    $(this).find('ul').hide()
})


//topseach下拉链
$('#topseach_right_zh').on('mousemove', function () {
    $(this).find('ul').show()
    $('#topseach_right_zh ul li').on('click', function () {
        let text = $(this).text()
        $('#topseach_right_zh').find('a').text(text)
    })
})
$('#topseach_right_zh').on('mouseout', function () {
    $(this).find('ul').hide()
})


//topseach搜索
$('#topseach_right_zh').siblings('button').on('click', function () {
    $(this).siblings('input').val('')
})

//topseach搜索focus
$('#topseach_right_input').focus(function () {
    $('.topseach_right_focus').show()
})
$('#topseach_right_input').blur(function () {
    $('.topseach_right_focus').hide()
})

//topnavlist头部导航栏list
$(function () {
    $('ul.nav li.nav-item').hover(function () {
        $(this).children('div.subMenu').stop().slideToggle(100);
    })
})

//大轮播图
$(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: true,
        autoplay: {
            delay: 3000,//1秒切换一次
        },
    });
    //鼠标覆盖停止自动切换
    swiper.el.onmouseover = function () {
        swiper.autoplay.stop();
    }
    //鼠标离开开始自动切换
    swiper.el.onmouseout = function () {
        swiper.autoplay.start();
    }

    $('.top_overright').hover(function () {
        $('.swiper-button-prev').toggle()
        $('.swiper-button-next').toggle()
    })
})

//input日期表
$(function () {
    laydate.render({
        elem: '#test1'
    });
    laydate.render({
        elem: '#test2'
    });
})

//mains_rightlistNav
$('.mains_rightlistNav ul li').eq(1).addClass('ulhover')
$('.mains_rightlistNav ul li').on('mouseover', function () {
    $('.mains_rightlistNav ul li').removeClass('ulhover')
    $(this).addClass('ulhover')
    let index = $(this).index() - 1
    $('.mains_rightlistBox').children().hide()
    $('.mains_rightlistBox').children().eq(index).show()
})



//还回顶部
$('.right_flex ol .topon').on('click', function () {
    $(document).scrollTop(0)
})

//页面底部弹出栏
$('.botton_new_hidehover').on('click', function () {
    $('.botton_new').animate({
        left: -100 + '%'
    }, 500)
})
$('.left_loge').on('click', function () {
    $('.botton_new').animate({
        left: 0
    }, 500)
})
$('#gaincode').on('click', function () {
    let Number = $('#number').text().length
    if (Number <= 0) {
        $('.botton_new_out').show().text("请输入手机号码！")
        setTimeout(function () {
            $('.botton_new_out').hide()
        }, 1000)
    }
})
$('#draw').on('click', function () {
    let Code = $('#code').val()
    if (Code <= 0) {
        $('.botton_new_out').show().text("请输入验证码！")
        setTimeout(function () {
            $('.botton_new_out').hide()
        }, 1000)
    }
})
