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
        arrows:false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        fade:true
    });








    $('.header_burger').on('click', function() {
        $('.menu').slideToggle(1000);
        $('.header_burger').toggleClass('burger_active');
    });

});