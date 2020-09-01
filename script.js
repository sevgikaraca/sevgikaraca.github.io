$(document).ready(function() {
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    let flag = true;
    let x = true;
    const cars = ['./assets/image_05.png', './assets/image_06.png'];

    var audio = new Audio('music.mp3');

    $('.night').click(function() {
        $($surface).toggleClass('moveRight');
        $($car).toggleClass('suspension');
        if (x) {
            x = false;
            audio.play();
        } else {
            x = true
            audio.pause()
        }

    })

    $('#lights').click(function(e) {
        if (flag) {
            flag = false;
            $img.attr('src', cars[0])
        } else {
            flag = true;
            $img.attr('src', cars[1])
        }
        e.stopPropagation()
    })


});