import $ from 'jquery';

const modals = () => {

    $('.js-btn').on('click', function (e) {
        e.preventDefault();
        $('html').addClass('stop');

        const href = $(this).attr('href');

        $(href).fadeIn(300);
    });

    $('.modal-close').on('click', function (e) {
        e.preventDefault();
        $('html').removeClass('stop');
        $('.modal-overlay').fadeOut(300);
    });

    $('.modal-overlay').mouseup(function (e) {
        var container = $('.modal');
        if (container.has(e.target).length === 0 && !container.is(e.target)) {
            $('html').removeClass('stop');
            $('.modal-overlay').fadeOut();
        }
    });

    $('.menu-burger').on('click', function () {
        $('.header-menu').addClass('active');
    });

    $('.header-menu__close').on('click', function () {
        $('.header-menu').removeClass('active');
    });
};

export default modals;