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






    const scrollToggle = () => {
        if ($('html').css('overflow-y') == 'scroll') {
            $('html').css({ 'overflow-y': 'hidden' })
        } else {
            $('html').css({ 'overflow-y': 'scroll' })
        }
    };

    const offMenu = () => {
        $('.header_inner .menu').slideUp(1000, scrollToggle);
        $('.header_inner .header_burger').removeClass('burger_active');

        $('body').off('click', offMenu);

    };
    $('.header_inner .header_burger').on('click', function (e) {
        $('.header_inner .menu').slideToggle(1000, scrollToggle);
        $('.header_inner .header_burger').toggleClass('burger_active');

        $('body').on('click', offMenu);
        e.stopPropagation();
    });
    $('.header_inner .menu').on('click', ev => {
        ev.stopPropagation();
    });
    $('.header_inner .menu_item a').on('click', () => {
        offMenu();
    });

});