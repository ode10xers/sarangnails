(function ($) {

    "use strict";



    /* Tabs */



    // service menu
    $('.art-service-menu-tabs li').on('click', function(){

        var widget_itself = $(this),
            widget_parent_tabs = widget_itself.parent(),
            widget_parent_content = widget_itself.parent().parent().find('.art-service-info'),
            selected_button = widget_itself.data('id');

        widget_parent_tabs.find('li').removeClass('art-active').addClass('art-no-active');
        widget_itself.removeClass('art-no-active').addClass('art-active');

        widget_parent_content.find('.art-service-item').hide();
        widget_parent_content.find('.art-service-item[data-id="' + selected_button + '"]').fadeIn();

    });


    // Accordion tabs
    $('.art-accordion-menu-tabs li').on('click', function(){

        var widget_itself = $(this),
            widget_parent_tabs = widget_itself.parent(),
            widget_parent_content = widget_itself.parent().parent().find('.art-accordion-menu-info'),
            selected_button = widget_itself.data('id');

        widget_parent_tabs.find('li').removeClass('art-active').addClass('art-no-active');
        widget_itself.removeClass('art-no-active').addClass('art-active');

        widget_parent_content.find('.art-accordion-item').hide();
        widget_parent_content.find('.art-accordion-item[data-id="' + selected_button + '"]').fadeIn();

    });


    // service menu two
    $('.art-service-menu-two-tabs li').on('click', function(){

        var widget_itself = $(this),
            widget_parent_tabs = widget_itself.parent(),
            widget_parent_content = widget_itself.parent().parent().find('.art-service-two-info'),
            selected_button = widget_itself.data('id');

        widget_parent_tabs.find('li').removeClass('art-active').addClass('art-no-active');
        widget_itself.removeClass('art-no-active').addClass('art-active');

        widget_parent_content.find('.art-service-wrapper').hide();
        widget_parent_content.find('.art-service-wrapper[data-id="' + selected_button + '"]').fadeIn();

    });

    // Mention
    $('.art-mention-tabs li').on('click', function(){

        var widget_itself = $(this),
            widget_parent_tabs = widget_itself.parent(),
            widget_parent_content = widget_itself.parent().parent().find('.art-mention-info'),
            selected_button = widget_itself.data('id');


            widget_parent_tabs.find('li').removeClass('art-active').addClass('art-no-active');
            widget_itself.removeClass('art-no-active').addClass('art-active');

            widget_parent_content.find('.art-mention-item').hide();
            widget_parent_content.find('.art-mention-item[data-id="' + selected_button + '"]').fadeIn();

    });

    // Contact menu two
    $('.art-contact-menu-two-tabs li').on('click', function(){

        var widget_itself = $(this),
            widget_parent_tabs = widget_itself.parent(),
            widget_parent_content = widget_itself.parent().parent().find('.art-contact-info-wrapper'),
            selected_button = widget_itself.data('id');

        widget_parent_tabs.find('li').removeClass('art-active').addClass('art-no-active');
        widget_itself.removeClass('art-no-active').addClass('art-active');

        widget_parent_content.find('.art-contact-info-data').hide();
        widget_parent_content.find('.art-contact-info-data[data-id="' + selected_button + '"]').fadeIn();

    });


    /* Slick init */


    /* Slick resize slides */
    function resizedw(){

        // Half SLIDERS
        jQuery('.art-half-slide-container-left').slick('unslick');
        jQuery('.art-half-slide-container-right').slick('unslick');

        jQuery( '.art-half-slide-container-left' ).each(function() {

            var all_side_left = $(this);
            var width = all_side_left.width();

            width = (width - 610)*100/width;

            all_side_left.slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '16px 0 '+ width +'%',
                arrows: false
            });


            var side_width = all_side_left.find('.item-itself').width();
            all_side_left.find('.slick-dots').css('width', side_width);

        });

        jQuery( '.art-half-slide-container-right' ).each(function() {

            var all_side_left = $(this);
            var width = all_side_left.width();

            width = (width - 610)*100/width;

            all_side_left.slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: width + '% 0 0',
                arrows: false
            });


            var side_width = all_side_left.find('.item-itself').width();
            all_side_left.find('.slick-dots').css('width', side_width);

        });


    }

    var doit;
    window.onresize = function(){
        clearTimeout(doit);
        doit = setTimeout(resizedw, 2000);
    };


    /**
     * Elementor JS Hooks
     */
    var imagesCarouselHandlerLeft = function ($scope, $) {

        jQuery( '.art-half-slide-container-left' ).each(function() {

            var all_side_left = $(this);
            var width = all_side_left.width();

            width = (width - 610)*100/width;

            all_side_left.slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '16px 0 '+ width +'%',
                arrows: false,
                responsive: [
                    {
                        breakpoint: 950,
                        settings: {
                            centerPadding: '0 0 '+ width +'%',
                        }
                    }
                ]
            });


            var side_width = all_side_left.find('.item-itself').width();
            all_side_left.find('.slick-dots').css('width', side_width);

        });


    };

    var imagesCarouselHandlerRight = function ($scope, $) {



        jQuery( '.art-half-slide-container-right' ).each(function() {

            var all_side_left = $(this);
            var width = all_side_left.width();

            width = (width - 610)*100/width;

            all_side_left.slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: width + '% 0 0',
                arrows: false
            });


            var side_width = all_side_left.find('.item-itself').width();
            all_side_left.find('.slick-dots').css('width', side_width);

        });





        /*var width = jQuery('.art-half-slide-container-right').width();
        width = (width - 610)*100/width;

        jQuery('.art-half-slide-container-right').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            centerMode: true,
            centerPadding: width + '% 0 0',
            arrows: false
        });*/

    };


    var imagesSwiperHandler = function ($scope, $) {

        /* Blog */
        var swiper = new Swiper('.swiper-container-blog', {
            slidesPerView: 4,
            spaceBetween: 30,
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false,
                dragSize: 263
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                200: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 3,
                },
                892: {
                    slidesPerView: 4,
                },
            }
        });


    };

    let imagesSwiperShop = function ($scope, $) {

        /* Shop */


        let swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 30,
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false,
                dragSize: 263
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                200: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 3,
                },
                892: {
                    slidesPerView: 4,
                },
            }
        });

    };

    let imagesSwiperSliderInfo = function ($scope, $) {

        /* Slider Info */
        let swiper = new Swiper('.swiper-container-slider-info', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    };

    let imagesSwiperTeam = function ($scope, $) {

        /* Slider Team */
        let swiper = new Swiper('.swiper-team-container', {
            slidesPerView: 4,
            spaceBetween: 30,
            //loop: true,
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false,
                dragSize: 263
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                200: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 3,
                },
                892: {
                    slidesPerView: 4,
                },
            }
        });

    };

    let imagesSwiperTestimonials = function ($scope, $) {

        /* Slider Info */
        let swiper = new Swiper('.swiper-container-testimonial-info', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    };

    let imagesSwiperTestimonialsImages = function ($scope, $) {

        let galleryImage = new Swiper('.swiper-container-testimonial-image', {
            spaceBetween: 10,
            slidesPerView: 1,
            effect: 'fade',
            allowTouchMove: false,
            fadeEffect: { crossFade: true },
        });

        let galleryText = new Swiper('.swiper-container-testimonial-text', {
            spaceBetween: 10,
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryImage
            }
        });

    }


    let myMapBlockImage = function ($scope, $) {

        mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV3MTI0NTQiLCJhIjoiY2tkNGYyeHFwMXduNTMwcGdnZzN1dnRrZCJ9.OpOYQNg_IU9NoviDgt1rcA';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/andrew12454/ckd4g3dbl06ay1iq87ysv0weu'
        });

        map.scrollZoom.disable();
        map.addControl(new mapboxgl.NavigationControl());

    }

    $(window).on("elementor/frontend/init", function () {

        if (jQuery.fn.slick) {
            elementorFrontend.hooks.addAction(
                "frontend/element_ready/art-half-slider-left.default",
                imagesCarouselHandlerLeft
            );
        }

        if (jQuery.fn.slick) {
            elementorFrontend.hooks.addAction(
                "frontend/element_ready/art-half-slider-right.default",
                imagesCarouselHandlerRight
            );
        }

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/woo-star-posts-slider.default",
            imagesSwiperHandler
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/woo-star-products-slider.default",
            imagesSwiperShop
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/art-slider-info.default",
            imagesSwiperSliderInfo
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/art-testimonials.default",
            imagesSwiperTestimonials
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/testimonials-images.default",
            imagesSwiperTestimonialsImages
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/woo-team-slider.default",
            imagesSwiperTeam
        );

       /* elementorFrontend.hooks.addAction(
            "frontend/element_ready/art-my-map.default",
            myMapBlockImage
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/art-my-map-contacts.default",
            myMapBlockImage
        );*/

    });




    $('.open-team-popup-link').magnificPopup({
        type:'inline',
        midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.

        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',

        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto'
    });




})
(jQuery);


