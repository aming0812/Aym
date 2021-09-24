// 城市定位hover
$('.c-city-site').hover(function () {
    $(this).find('.city-site-hover').show();
}, function () {
    $(this).find('.city-site-hover').hide();
})

// 网址导航hover
$('.site-nav').hover(function () {
    $(this).find('.last-hover').show();
}, function () {
    $(this).find('.last-hover').hide();
})

// 搜索框获取焦点清除 value
$('.c-search').find('input[type=text]').on('focus', function () {
    $(this).val('');
})
$('.c-search').find('input[type=text]').on('blur', function () {
    $(this).val('手机');
})

// 购物车hover
$('.shopCart').hover(function () {
    $(this).find('.shopCart-hover').show()
    $(this).css('border-bottom', '1px solid #fff')
}, function () {
    $(this).find('.shopCart-hover').hide()
    $(this).css('border-bottom', '1px solid #d2d2d2')
})


// 底部图标
var footer_arr = $('.c-footer-top').find('.c-f-icon').toArray();
for (var i = 0; i < footer_arr.length; i++) {
    var bgsStep = i * 34;
    footer_arr[i].style.backgroundPosition = '-' + bgsStep + 'px 0';
}


// 返回顶部按钮
var secDisTop = $('.main').offset().top;
console.log(secDisTop);
console.log($(window).scrollTop());
$(window).on('scroll', function () {
    if ($(window).scrollTop() >= secDisTop) {
        $('.c-lift-list').fadeIn();
    } else {
        $('.c-lift-list').fadeOut();
    }
})
$('.lift-top').on('click', function () {
    $('html').animate({
        scrollTop: 0
    }, 500)
})



// 右侧购物车
var flag = 1;
$('.shop-cart').children().on('click', function () {
    if (flag === 1) {
        $(this).parents('.c-sidebar').animate({
            width: '320px'
        }, 300);
        flag = 2;
    } else if (flag === 2) {
        $(this).parents('.c-sidebar').animate({
            width: '40px'
        }, 300);
        flag = 1;
    }
})

// 右侧购物车关闭按钮:
$('.pop-top-btn').on('click', function () {
    $(this).parents('.c-sidebar').animate({
        width: '40px'
    }, 300);
    flag = 1;
})




// 右侧所有的精灵图
// var panel_arr = $('.c-panel').find('i').toArray();
// console.log(panel_arr);
// for (var i = 0; i < panel_arr.length; i++) {
//     var bgsStep = i * 34;
//     panel_arr[i].style.backgroundPosition = '5px -' + bgsStep + 'px';
// }


// 右侧返回顶部
console.log($(window).scrollTop());
$(window).on('scroll', function () {
    if ($(window).scrollTop() >= secDisTop) {
        $('.get-top').fadeIn();
    } else {
        $('.get-top').fadeOut();
    }
})
$('.get-top').on('click', function () {
    $('html').animate({
        scrollTop: 0
    }, 500)
})


// 右侧所有小li hover事件
console.log($('.c-panel').find('li'));
$('.c-panel').find('li').hover(function () {
    $(this).addClass('bg-red').siblings().removeClass('bg-red');
    $(this).find('.none-box').show();
    $(this).find('.none-box').stop().animate({
        right: '40px'
    })
}, function () {
    $(this).removeClass('bg-red');
    $(this).find('.none-box').hide();
    $(this).find('.none-box').stop().animate({
        right: '70px'
    })
})