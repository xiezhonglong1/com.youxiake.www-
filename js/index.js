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
        // $('.zbdtyRight_toplistright ol li').eq(index).addClass('current').siblings().removeClass('current')
    }, 6000)
})

//特惠线路的thlx_topnva
$('.thlx_shlist ul li').eq(0).find("i").addClass('ihover')
$('.thlx_shlist ul li').eq(0).find("p").addClass('phover')
$('.thlx_shlist ul li').on('mousemove', function () {
    $('.thlx_shlist ul li').css({
        'width': 275,
        'transition': 1 + 's'
    }, 1500)
    $(this).css({
        'width': 675,
        'transition': 1.5 + 's',
        'background-color': 'none'
    }, 1500)
    $('.thlx_shlist ul li i').removeClass('ihover')
    $(this).find('i').addClass('ihover')
    $('.thlx_shlist ul li p').removeClass('phover')
    $(this).find('p').addClass('phover')
})
// 特惠线路的thlx_shlist
$('.thlx_topnva ul li').on('click', function () {
    let index = $(this).index()
    $('.thlx_topnva ul li').removeClass('lihover')
    $(this).addClass('lihover')
    $('.thlx_shlist').children().hide()
    $('.thlx_shlist ul').eq(index).show()
})


//周边短途游rightover
$(function () {
    let index = 0;
    $('.zbdtyRight_toplistright').on('mousemove', function () {
        $('.arrow').show()
    })
    $('.zbdtyRight_toplistright').on('mouseout', function () {
        $('.arrow').hide()
    })
    $('.zbdtyarrow-right').on('click', function () {
        index++;
        if (index > $('.zbdtyRight_toplistright>ul li').length - 1) {
            index = 0;
        }
        $('.zbdtyRight_toplistright>ul li').eq(index).fadeIn(500).siblings().fadeOut();
        $('.zbdtyRight_toplistright ol li').eq(index).addClass('current').siblings().removeClass('current')
    })
    $('.arrow-left').on('click', function () {
        index--;
        if (index < 0) {
            index = $('.zbdtyRight_toplistright>ul li').length - 1
        }
        $('.zbdtyRight_toplistright>ul li').eq(index).fadeIn(500).siblings().fadeOut();
        $('.zbdtyRight_toplistright ol li').eq(index).addClass('current').siblings().removeClass('current')
    })
    $('.zbdtyRight_toplistright>ul li').each(function (i, n) {
        $('.zbdtyRight_toplistright ol').append($('<li></li>'))
    })
    $('ol li').eq(0).addClass('current')
    $('.zbdtyRight_toplistright ol li').on('click', function () {
        $(this).addClass('current').siblings().removeClass('current')
        let sum = $(this).index()
        index = sum
        $('.zbdtyRight_toplistright>ul li').eq(sum).fadeIn(500).siblings().fadeOut();
    })
    setInterval(function () {
        $('.zbdtyarrow-right').click();
        // $('.zbdtyRight_toplistright ol li').eq(index).addClass('current').siblings().removeClass('current')
    }, 6000)
})

//国内长线游lefttover
$(function () {
    let index = 0;
    $('.glzxyRight_toplistright').on('mousemove', function () {
        $('.arrow').show()
    })
    $('.glzxyRight_toplistright').on('mouseout', function () {
        $('.arrow').hide()
    })
    $('.glzxyarrow-right').on('click', function () {
        index++;
        if (index > $('.glzxyRight_toplistright>ul li').length - 1) {
            index = 0;
        }
        $('.glzxyRight_toplistright>ul li').eq(index).fadeIn(500).siblings().fadeOut();
        $('.glzxyRight_toplistright ol li').eq(index).addClass('current').siblings().removeClass('current')
    })
    $('.arrow-left').on('click', function () {
        index--;
        if (index < 0) {
            index = $('.glzxyRight_toplistright>ul li').length - 1
        }
        $('.glzxyRight_toplistright>ul li').eq(index).fadeIn(500).siblings().fadeOut();
        $('.glzxyRight_toplistright ol li').eq(index).addClass('current').siblings().removeClass('current')
    })
    $('.glzxyRight_toplistright>ul li').each(function (i, n) {
        $('.glzxyRight_toplistright ol').append($('<li></li>'))
    })
    $('ol li').eq(0).addClass('current')
    $('.glzxyRight_toplistright ol li').on('click', function () {
        $(this).addClass('current').siblings().removeClass('current')
        let sum = $(this).index()
        index = sum
        $('.glzxyRight_toplistright>ul li').eq(sum).fadeIn(500).siblings().fadeOut();
    })
    setInterval(function () {
        $('.glzxyarrow-right').click();
        // $('.zbdtyRight_toplistright ol li').eq(index).addClass('current').siblings().removeClass('current')
    }, 6000)
})

//出境跨国游lefttover
$(function () {
    let index = 0;
    $('.cjkgyRight_toplistright').on('mousemove', function () {
        $('.arrow').show()
    })
    $('.cjkgyRight_toplistright').on('mouseout', function () {
        $('.arrow').hide()
    })
    $('.cjkgyarrow-right').on('click', function () {
        index++;
        if (index > $('.cjkgyRight_toplistright>ul li').length - 1) {
            index = 0;
        }
        $('.cjkgyRight_toplistright>ul li').eq(index).fadeIn(500).siblings().fadeOut();
        $('.cjkgyRight_toplistright ol li').eq(index).addClass('current').siblings().removeClass('current')
    })
    $('.arrow-left').on('click', function () {
        index--;
        if (index < 0) {
            index = $('.cjkgyRight_toplistright>ul li').length - 1
        }
        $('.cjkgyRight_toplistright>ul li').eq(index).fadeIn(500).siblings().fadeOut();
        $('.cjkgyRight_toplistright ol li').eq(index).addClass('current').siblings().removeClass('current')
    })
    $('.cjkgyRight_toplistright>ul li').each(function (i, n) {
        $('.cjkgyRight_toplistright ol').append($('<li></li>'))
    })
    $('ol li').eq(0).addClass('current')
    $('.cjkgyRight_toplistright ol li').on('click', function () {
        $(this).addClass('current').siblings().removeClass('current')
        let sum = $(this).index()
        index = sum
        $('.cjkgyRight_toplistright>ul li').eq(sum).fadeIn(500).siblings().fadeOut();
    })
    setInterval(function () {
        $('.cjkgyarrow-right').click();
        // $('.zbdtyRight_toplistright ol li').eq(index).addClass('current').siblings().removeClass('current')
    }, 5000)
})

//多彩主题游lefttover
$(function () {
    let index = 0;
    $('.dcztyRight_toplistright').on('mousemove', function () {
        $('.arrow').show()
    })
    $('.dcztyRight_toplistright').on('mouseout', function () {
        $('.arrow').hide()
    })
    $('.dcztyarrow-right').on('click', function () {
        index++;
        if (index > $('.dcztyRight_toplistright>ul li').length - 1) {
            index = 0;
        }
        $('.dcztyRight_toplistright>ul li').eq(index).fadeIn(500).siblings().fadeOut();
        $('.dcztyRight_toplistright ol li').eq(index).addClass('current').siblings().removeClass('current')
    })
    $('.arrow-left').on('click', function () {
        index--;
        if (index < 0) {
            index = $('.dcztyRight_toplistright>ul li').length - 1
        }
        $('.dcztyRight_toplistright>ul li').eq(index).fadeIn(500).siblings().fadeOut();
        $('.dcztyRight_toplistright ol li').eq(index).addClass('current').siblings().removeClass('current')
    })
    $('.dcztyRight_toplistright>ul li').each(function (i, n) {
        $('.dcztyRight_toplistright ol').append($('<li></li>'))
    })
    $('ol li').eq(0).addClass('current')
    $('.dcztyRight_toplistright ol li').on('click', function () {
        $(this).addClass('current').siblings().removeClass('current')
        let sum = $(this).index()
        index = sum
        $('.dcztyRight_toplistright>ul li').eq(sum).fadeIn(500).siblings().fadeOut();
    })
    setInterval(function () {
        $('.dcztyarrow-right').click();
        // $('.zbdtyRight_toplistright ol li').eq(index).addClass('current').siblings().removeClass('current')
    }, 5000)
})

//当地玩乐lefttover
$(function () {
    let index = 0;
    $('.ddwlRight_toplistright').on('mousemove', function () {
        $('.arrow').show()
    })
    $('.ddwlRight_toplistright').on('mouseout', function () {
        $('.arrow').hide()
    })
    $('.ddwlarrow-right').on('click', function () {
        index++;
        if (index > $('.ddwlRight_toplistright>ul li').length - 1) {
            index = 0;
        }
        $('.ddwlRight_toplistright>ul li').eq(index).fadeIn(500).siblings().fadeOut();
        $('.ddwlRight_toplistright ol li').eq(index).addClass('current').siblings().removeClass('current')
    })
    $('.arrow-left').on('click', function () {
        index--;
        if (index < 0) {
            index = $('.ddwlRight_toplistright>ul li').length - 1
        }
        $('.ddwlRight_toplistright>ul li').eq(index).fadeIn(500).siblings().fadeOut();
        $('.ddwlRight_toplistright ol li').eq(index).addClass('current').siblings().removeClass('current')
    })
    $('.ddwlRight_toplistright>ul li').each(function (i, n) {
        $('.ddwlRight_toplistright ol').append($('<li></li>'))
    })
    $('ol li').eq(0).addClass('current')
    $('.ddwlRight_toplistright ol li').on('click', function () {
        $(this).addClass('current').siblings().removeClass('current')
        let sum = $(this).index()
        index = sum
        $('.ddwlRight_toplistright>ul li').eq(sum).fadeIn(500).siblings().fadeOut();
    })
    setInterval(function () {
        $('.ddwlarrow-right').click();
        // $('.zbdtyRight_toplistright ol li').eq(index).addClass('current').siblings().removeClass('current')
    }, 5000)
})

//活动游记
$('.hdyjtopnav ul li').on('click', function () {
    $('.hdyjtopnav ul li').removeClass('ulhover')
    $(this).addClass('ulhover')
    let index = $(this).index()
    $('.hdyjlist').children().hide()
    $('.hdyjlist').children().eq(index).show()
})

//游侠客视频
$('.yxksptopnav ul li').on('click', function () {
    $('.yxksptopnav ul li').removeClass('ulhover')
    $(this).addClass('ulhover')
    let index = $(this).index()
    $('.yxksplist').children().hide()
    $('.yxksplist').children().eq(index).show()
})