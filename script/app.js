$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
    });

    $('.photo_slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        fade: true
    });







    const offMenu = () => {
        $('.menu').slideUp(1000);
        $('.header_burger').removeClass('burger_active');
        $('body').off('click', offMenu);
    };
    $('.header_burger').on('click', function (e) {
        $('.menu').slideToggle(1000);
        $('.header_burger').toggleClass('burger_active');
        $('body').on('click', offMenu);
        e.stopPropagation();
    });
    $('.menu').on('click', ev => {
        ev.stopPropagation();
    });
    $('.menu_item a').on('click', () => {
        offMenu();
    });

});