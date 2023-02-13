var aparted = false;

$("#open").click(function () {

    if (!aparted) {
        var typed = new Typed('.letter', {
            strings: ["^1000小冰冰冰：",
                // "I^200cey<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;夜には^300いつも^200寒いよね、^600でも、^600手を^200繋いでいると、^600暖か^200くなるよ！<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;どんなに^300寒い夜も、^600君と^300二人でいれば、^600ちっとも^300寒くない！<br><br><p style='float:right; display:block; width:80px;'>^1000T^200iny</p>"],
                "小^200冰：<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在繁花似锦之中，我有幸见到了一朵冰花。初见时只觉有些特别，吸引着我靠近。在慢慢靠近的过程中，我愈发感受到她的与众不同。或许是与我神奇地投缘，又或许是因为相似的彼此更易于感知，我在小心翼翼的接近中，彷佛看到了冰花盛开的模样。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我想，我喜欢上了你。<br><br><p style='float:right; display:block; width:80px;'>^1000小^200小</p>"],
            typeSpeed: 100,
            backSpeed: 50
        });

        $('#open').find("span").eq(0).css('background-position', "0 -150px");

        aparted = true;
    }

});

window.onload = function () {
    var currentUrl = window.location.href;
    var firstIndex = currentUrl.indexOf("#");
    if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) event.preventDefault();
    });

    var lastTouchEnd = 0;

    document.addEventListener('touchend', function (event) {

        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) event.preventDefault();
        lastTouchEnd = now;

    }, false);

    document.addEventListener('gesturestart', function (event) {
        event.preventDefault();
    });

    $('body').css('opacity', '1');
    $('#jsi-cherry-container').css('z-index', '-99');

}
