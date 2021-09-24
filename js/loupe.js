var min = document.querySelector('.min'),
    max = document.querySelector('.max'),
    mask = document.querySelector('.mask'),
    bigImg = max.querySelector('img');
console.log(bigImg);
min.addEventListener('mouseover', function () {
    mask.style.display = 'block';
    max.style.display = 'block';

})
min.addEventListener('mousemove', function (e) {
    // 先计算出鼠标在盒子内的坐标:
    // 让鼠标一直在 mask 中间 那么需要分别减去 mask 长和宽的一半:
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    var maskX = x - mask.offsetWidth / 2;
    var maskY = y - mask.offsetHeight / 2;
    // 求出蒙版最大移动距离
    var maskMaxdisX = min.offsetWidth - mask.offsetWidth;
    var maskMaxdisY = min.offsetHeight - mask.offsetHeight;
    if (maskX <= 0) {
        maskX = 0;
    } else if (maskX >= maskMaxdisX) {
        maskX = maskMaxdisX;
    }
    if (maskY <= 0) {
        maskY = 0;
    } else if (maskY >= maskMaxdisY) {
        maskY = maskMaxdisY;
    }
    mask.style.left = maskX + 'px';
    mask.style.top = maskY + 'px';

    // 大图片的移动距离 = 蒙版的移动距离 * 大图片最大移动距离 / 蒙版最大移动距离
    var bigImgMaxX = max.offsetWidth - bigImg.offsetWidth;
    var bigImgMaxY = max.offsetHeight - bigImg.offsetHeight;

    var bigImgX = maskX * bigImgMaxX / maskMaxdisX;
    var bigImgY = maskY * bigImgMaxY / maskMaxdisY;
    bigImg.style.left = bigImgX + 'px';
    bigImg.style.top = bigImgY + 'px';
})



min.addEventListener('mouseout', function () {
    mask.style.display = 'none';
    max.style.display = 'none';
})



// 放大镜下方图片列表
console.log($('.spec-items').find('a'));
$('.spec-items').find('img').on('click', function () {
    var rel = $(this).attr('src');
    $('.min').find('img').attr('src', $(this).attr('src'));
    $('.max').find('img').attr('src', $(this).attr('src'));
})













//主页面区域
//tab栏切换制作（1）
var mca4 = document.querySelector('.mca4');
var lis = mca4.querySelectorAll('li');
var divs = document.querySelectorAll('.mca42');
for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].onclick = function () {
        for (var j = 0; j < lis.length; j++) {
            lis[j].className = "";
        }
        this.className = "current";

        //点击切换Tab栏，先进行排他
        for (var i = 0; i < divs.length; i++) {
            divs[i].style.display = 'none';
        }
        var index = this.getAttribute('index');
        divs[index].style.display = 'block';

    }
}
//tab栏切换制作（2）
var mcb = document.querySelector('.m_c_b');
var liss = mcb.querySelectorAll('li');
var divss = document.querySelectorAll('.mcb2');
for (var i = 0; i < liss.length; i++) {
    liss[i].setAttribute('index', i);
    liss[i].onclick = function () {
        for (var j = 0; j < liss.length; j++) {
            liss[j].className = "";
        }
        this.className = "current";

        //点击切换Tab栏，先进行排他
        for (var i = 0; i < divss.length; i++) {
            divss[i].style.display = 'none';
        }
        var index = this.getAttribute('index');
        divss[index].style.display = 'block';

    }
}