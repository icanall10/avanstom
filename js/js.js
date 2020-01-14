(function ($) {

    function behaviors() {

        $('[data-ui-dialog]')
            .once()
            .on('dialogOpen', function () {
                var $this = $(this);

                var code = $this.attr('data-ui-dialog');
                var width = parseInt($this.attr('data-ui-dialog-width'));
                var title = $this.attr('data-ui-dialog-title');
                var dialogClass = $this.attr('data-ui-dialog-class');

                $this.dialog({
                    modal: true,
                    width: width,
                    title: title,
                    dialogClass: dialogClass
                });
            });


        $('[data-ui-dialog-link]')
            .once()
            .click(function () {
                var value = $(this).data('ui-dialog-link');

                $('[data-ui-dialog="' + value + '"]').trigger('dialogOpen');

                return false;
            });


        $('.find-doctor-block .toggle')
            .once()
            .click(function () {
                var $this = $(this);
                var wrapper = $this.closest('.find-doctor-block');

                wrapper.find('.form').stop().slideToggle('fast');

                wrapper.toggleClass('open');

                return false;
            });


        $('.slider-block .owl-carousel')
            .once()
            .owlCarousel({
                items: 1,
                dots: true,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayHoverPause: true
            });


        $('.about-page .advantages .item .name')
            .once()
            .click(function () {
                var $this = $(this);
                var wrapper = $this.closest('.item');

                wrapper.toggleClass('open');

                wrapper.find('.content').stop().slideToggle('fast');

                return false;
            });


        $('.prices-page .items .item .name')
            .once()
            .click(function () {
                var $this = $(this);
                var wrapper = $this.closest('.item');

                wrapper.toggleClass('open');

                wrapper.find('.content').stop().slideToggle('fast');

                return false;
            });


        $('.about-page .gallery .slider .owl-carousel')
            .once()
            .owlCarousel({
                items: 1,
                nav: true,
                dots: false,
                loop: true
            });


        $('.about-page .gallery .slider .controls .play')
            .once()
            .click(function () {
                var wrapper = $(this).closest('.slider');

                wrapper.toggleClass('autoplay');

                var $carousel = wrapper.find('.owl-carousel');
                var carouselData = $carousel.data();
                var carouselOptions = carouselData['owl.carousel'].options;

                carouselOptions.autoplay = wrapper.hasClass('autoplay');

                $carousel.trigger('refresh.owl.carousel');

                return false;
            });


        $('.about-page .gallery .slider .controls .info')
            .once()
            .click(function () {
                var wrapper = $(this).closest('.slider');

                wrapper.toggleClass('open-info');

                return false;
            });


        $('.about-page .gallery .slider .controls .full-screen')
            .once()
            .click(function () {
                var wrapper = $(this).closest('.slider');

                wrapper.toggleClass('open-full-screen');

                if (wrapper.hasClass('open-full-screen')) {
                    openFullscreen();
                } else {
                    closeFullscreen();
                }

                return false;
            });


        $('.about-page .gallery .slider .close')
            .once()
            .click(function () {
                var slider = $(this).closest('.slider');

                slider.removeClass('open');

                $('body').removeClass('is-gallery-slider-open');

                return false;
            });


        $('.about-page .gallery .items .item')
            .once()
            .click(function () {
                var $this = $(this);
                var wrapper = $this.closest('.gallery');
                var slider = wrapper.find('.slider');
                var slide = parseInt($this.attr('data-slide'));
                var owl = slider.find('.owl-carousel');

                slider.addClass('open');

                $('body').addClass('is-gallery-slider-open');

                owl.trigger('to.owl.carousel', slide);

                return false;
            });


        $('.colorbox')
            .once()
            .colorbox({
                maxWidth: '100%',
                maxHeight: '100%'
            });


        $('.doctors-list .item')
            .once()
            .click(function (e) {
                if ($(e.target).hasClass('order-link')) {
                    e.stopPropagation();
                    return;
                }

                top.location.href = $(this).closest('.item').find('.name a').attr('href');
            });


        $('.doctor-page .certificates .owl-carousel')
            .once()
            .owlCarousel({
                dots: false,
                nav: false,
                margin: 28,
                loop: true,

                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2,
                    },
                    1070: {
                        items: 4,
                    }
                }
            });


        $('.owl-nav-custom .prev')
            .once()
            .click(function () {
                $(this).closest('.owl-wrapper').find('.owl-carousel').trigger('prev.owl');

                return false;
            });


        $('.owl-nav-custom .next')
            .once()
            .click(function () {
                $(this).closest('.owl-wrapper').find('.owl-carousel').trigger('next.owl');

                return false;
            });


        $('.work-page .item .slider .controls a')
            .once()
            .click(function () {
                var $this = $(this);
                var wrapper = $this.closest('.slider');
                var slides = wrapper.find('.slide');
                var key = $this.attr('data-key');

                slides.removeClass('active');
                slides.filter('[data-key="' + key + '"]').addClass('active');

                wrapper.find('.controls a').removeClass('active');
                $this.addClass('active');

                return false;
            });


        $('.mobile-menu')
            .once()
            .click(function () {
                var $this = $(this);
                var menu = $this.closest('.menu').find('ul');

                menu.stop().slideToggle('fast');

                return false;
            });


        $('.doctors-list.owl-carousel')
            .once()
            .owlCarousel({
                dots: false,
                nav: false,
                loop: true,

                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2,
                    },
                    1070: {
                        items: 4,
                    }
                }
            });


        $('[data-services-dropdown-link]')
            .once()
            .click(function () {
                $('[data-services-dropdown]').toggleClass('open');

                return false;
            });

    }


    $(document).click(function (event) {
        let selector = '[data-services-dropdown]';

        $target = $(event.target);

        if (!$target.closest(selector).length &&
            $(selector).is(":visible")) {
            $(selector).removeClass('open');
        }
    });


    $(document).ready(function () {
        behaviors();
    });


    $(document).ajaxComplete(function () {
        behaviors();
    });


    $(document).on('ajaxSetup', function (event, context) {
        context.options.ajaxGlobal = true;
    });

})(jQuery);