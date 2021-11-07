$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
    });

    $('.photo_slider').slick({
        dots: true,
        arrows:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        fade:true
    });








    $('.burger').on('click', function() {
        $('.menu').toggleClass('show__menu');
        $('.burger').toggleClass('activ');
    });


});