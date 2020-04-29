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
