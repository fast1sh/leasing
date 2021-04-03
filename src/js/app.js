import $ from 'jquery';
import slider from './modules/slider';
import ranges from './modules/ranges';
import forms from './modules/forms';
import modals from './modules/modals';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    $(window).on("load scroll", function() {
        $(this).scrollTop() > 1 ? $(".header").addClass("is-fixed") : $(".header").removeClass("is-fixed")
    })

    slider();
    ranges();
    forms();
    modals();
});