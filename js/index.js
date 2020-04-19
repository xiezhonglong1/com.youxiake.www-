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


//游侠客攻略right
$('.yxkgl_rightnav ul li').on('click', function () {
    let index = $(this).index()
    $('.yxkgl_rightnav ul li').removeClass('lihover')
    $(this).addClass('lihover')
    $('.yxkgl_rightninerbox').children().hide()
    $('.yxkgl_rightninerbox ul').eq(index).show()
})

//游侠客攻略left
$(function () {
    let index = 0;
    $('.yxkgl_ltftover').on('mousemove', function () {
        $('.arrow').show()
    })
    $('.yxkgl_ltftover').on('mouseout', function () {
        $('.arrow').hide()
    })
    $('.arrow-right').on('click', function () {
        index++;
        if (index > $('.yxkgl_ltftover>ul li').length - 1) {
            index = 0;
        }
        $('.yxkgl_ltftover>ul li').eq(index).fadeIn(500).siblings().fadeOut();
        $('.yxkgl_ltftover ol li').eq(index).addClass('current').siblings().removeClass('current')
    })
    $('.arrow-left').on('click', function () {
        index--;
        if (index < 0) {
            index = $('.yxkgl_ltftover>ul li').length - 1
        }
        $('.yxkgl_ltftover>ul li').eq(index).fadeIn(500).siblings().fadeOut();
        $('.yxkgl_ltftover ol li').eq(index).addClass('current').siblings().removeClass('current')
    })
    $('.yxkgl_ltftover>ul li').each(function (i, n) {
        $('.yxkgl_ltftover ol').append($('<li></li>'))
    })
    $('ol li').eq(0).addClass('current')
    $('.yxkgl_ltftover ol li').on('click', function () {
        $(this).addClass('current').siblings().removeClass('current')
        let sum = $(this).index()
        index = sum
        $('.yxkgl_ltftover>ul li').eq(sum).fadeIn(500).siblings().fadeOut();
    })
    setInterval(function () {
        $('.arrow-right').click();
        // $('.yxkgl_ltftover ol li').eq(index).addClass('current').siblings().removeClass('current')
    }, 6000)
})