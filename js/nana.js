/**
 * Nana Bootstrap 5 Template
 * Template Bootstrap yang modern, intuitif dan atraktif untuk semua aplikasi berbasis website.
 * Hak Cipta (c) 2020 Adi Komputer
 * Hak Cipta (c) 2020 Shimaside Digital
 */

(function ($) {
    "use strict";

    $('.sidebar-toggler').click(() => {
        $('body').toggleClass('toggled');
    });

    $('.toggled .sidebar .nav-link[data-toggle="collapse"]').on('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        var self = $(this);
        $(self.attr('data-target')).collapse('hide');
    });

    $('.sidebar .nav-link[data-toggle="collapse"], [data-toggle="collapse"]').click((e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();

        $('.sidebar .collapse .collapse').collapse('hide');
    });

    var $btt = $(".btn-btt");
    $btt.hide();
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $btt.fadeIn();
        } else {
            $btt.fadeOut();
        }
    });

    $btt.on('click', function (e) {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    });

})(jQuery);