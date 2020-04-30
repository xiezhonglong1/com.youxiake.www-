$('.loginBox_nav span').eq(0).addClass('spHover')
$('.loginBox_nav span').on('click', function () {
    $('.loginBox_nav span').removeClass('spHover')
    $(this).addClass('spHover')
    let index = $(this).index()
    $('.loginBox_Ipt').children().hide()
    $('.loginBox_Ipt').children().eq(index).show()
})