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


    const scrollHidden = () => {
        showMenu();
        $('body').off('click', scrollHidden);
    }

    const showMenu = () => {
        $('.header_inner .menu').slideToggle(1000);
        $('.header_burger').toggleClass('burger_active');
        if ($('.header_burger').hasClass('burger_active')) {
            $('html').css('overflow-y', 'hidden')
        } else {
            $('html').css('overflow-y', 'scroll')
        }

        $('body').on('click',scrollHidden);
    };


    $('.header_burger').on('click', showMenu);

    $('header').on('click', (ev) => ev.stopPropagation());
    $('.header_inner .menu_item').on('click', () => {
        if ($('body').width() < 750) showMenu()
    });
    $(window).on('resize', () => {
        if ($('body').width() > 750) {
            if ($('.header_inner .menu').css('display') == 'none') {
                $('.header_inner .menu').slideDown(1000);
                $('.header_burger').addClass('burger_active');
            }
            ;
        }
    })
});