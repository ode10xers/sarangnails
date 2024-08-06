jQuery.noConflict()(function($) {

    "use strict";

    var $window = window,
        offset = '90%',
        cherie_window = $( window ),
        $doc = $(document),
        cherie_preloader = $('.art-preloader-holder'),
        self = this,
        $body = $('body'),
        page_preloader  = $body.data('page-preloader'),
        hamburgerButton  = $('.hamburger--collapse-r'),
        TweenMax = window.TweenMax,
        TweenLite = window.TweenLite,
        fl_theme = window.fl_theme || {};

    fl_theme.window = $(window);
    fl_theme.document = $(document);
    window.fl_theme = fl_theme;
    fl_theme.window = $(window);
    fl_theme.sameOrigin = true;





    // Loader
    function artFadeInLogo() {
        $(".art-preloader-holder img.img-logotype").fadeIn(800);
        setTimeout(function(){
            $(".art-preloader-holder").fadeOut(400);
        }, 800);
    }

    if (!$.cookie('smartCookies')) {
        setTimeout(artFadeInLogo, 200);

        $.cookie('smartCookies', true, {
            expires: 1,
            path: '/'
        });
    } else {
        $( document ).ready(function() {
            $(".art-preloader-holder").fadeOut(400);
        });
    }

    fl_theme.initSiteLoader = function() {

        $("a").on('click', function(event) {
            let cherie_link_ref = $(this).attr('href');

            if( cherie_link_ref !== undefined && cherie_link_ref[0] != '#' ) {
                if(cherie_link_ref.indexOf(window.location.href) +1) {

                } else {

                    let cherie_omg_format = cherie_link_ref.substr(cherie_link_ref.length - 3); // get image format
                    if(cherie_link_ref.indexOf(document.location.host) +1 && (cherie_omg_format !== 'png' && cherie_omg_format !== 'jpg')) {
                        $(".art-preloader-holder").fadeIn(400);
                    }

                }
            }

        });

    };


    // blog category dropdown
    $(document).mouseup(function(e)
    {
        let container = $(".art-categories-dropdown");

        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            container.removeClass('art-cat-open');
        }
    });
    $('.art-categories-dropdown').on('click', function () {
        $(this).toggleClass('art-cat-open');
    })

    // Custom Animation
    $( window ).on( "load", function() {

        $('.art-fadeInUp.art-anim').each(function (){
            $(this).addClass('art-hidden');
            let itemPosition = $(this).offset().top;
            let bottomOfWindow = $(window).scrollTop() + $(window).height();
            if (itemPosition < bottomOfWindow - 35){
                $(this).removeClass('art-hidden');
                $(this).addClass('animate__animated animate__fadeInUp');
            }
        });

        $('.art-fadeIn.art-anim').each(function (){
            $(this).addClass('art-hidden');
            let itemPosition = $(this).offset().top;
            let bottomOfWindow = $(window).scrollTop() + $(window).height();
            if (itemPosition < bottomOfWindow - 35){
                $(this).removeClass('art-hidden');
                $(this).addClass('animate__animated animate__fadeIn');
            }
        });

    });

    $(window).scroll(function (){

        $('.art-fadeInUp.art-anim').each(function (){
            $(this).addClass('art-hidden');
            let itemPosition = $(this).offset().top;
            let bottomOfWindow = $(window).scrollTop() + $(window).height();
            if (itemPosition < bottomOfWindow - 35){
                $(this).removeClass('art-hidden art-anim');
                $(this).addClass('animate__animated animate__fadeInUp');
            }
        });

        $('.art-fadeIn.art-anim').each(function (){
            $(this).addClass('art-hidden');
            let itemPosition = $(this).offset().top;
            let bottomOfWindow = $(window).scrollTop() + $(window).height();
            if (itemPosition < bottomOfWindow - 35){
                $(this).removeClass('art-hidden');
                $(this).addClass('animate__animated animate__fadeIn');
            }
        });

    });﻿





// Stiky Header
    fl_theme.initStikyHeader = function(){

        var header = $('header.art-header-one .art-header-one-content');
        var header_two = $('header.art-header-two .art-header-two-content');

        if(header.length){
            window.onscroll = function() {FirstStickyHeaderFunction()};
        }
        if(header_two.length){
            window.onscroll = function() {SecondStickyHeaderFunction()};
        }

        function FirstStickyHeaderFunction() {

            if( $body.hasClass('admin-bar') && cherie_window.width() < 601 ) {
                if(window.pageYOffset > 46) {
                    header.addClass('art-sticky');
                } else {
                    header.removeClass('art-sticky');
                }
            } else if (window.pageYOffset > 1) {
                header.addClass('art-sticky');
            } else {
                header.removeClass('art-sticky');
            }
        }

        function SecondStickyHeaderFunction() {

            if (window.pageYOffset > 1) {
                header_two.addClass('art-sticky');
            } else {
                header_two.removeClass('art-sticky');
            }
        }

    };

// Stiky Sidebar
    fl_theme.initStikySidebar = function(){
        var sidebar_stiky = $('.sidebar-sticky');
        if(sidebar_stiky.length){
            sidebar_stiky.theiaStickySidebar({
                additionalMarginTop: 30,
                additionalMarginBottom: 30
            });
        }
    };


// Resize iframe video
    fl_theme.initResponsiveIframe = function(){
        var resizeitem = $('iframe');
        resizeitem.height(
            resizeitem.attr("height") / resizeitem.attr("width") * resizeitem.width()
        );
    };


// Fixed Nav Bar   (do I need this?)
    fl_theme.initNavBarFixed = function() {
        var c, currentScrollTop = 0;
        var body = $('body'),
            nav_bar = $('.fl--header'),
            nav_bar_height = nav_bar.height();

        if(nav_bar.length && nav_bar.hasClass( "fixed-navbar" )){
            body.find('.header-padding').css("padding-top",nav_bar_height+"px");
            $(window).scroll(function () {
                var a = $(window).scrollTop();
                var b = nav_bar.height();
                var d = nav_bar.find('.fl-top-header-content').outerHeight();
                currentScrollTop = a;

                if (c < currentScrollTop && a > b + b * 2) {
                    nav_bar.addClass("scrollUp");
                } else if (c > currentScrollTop && !(a <= b) || !(a >= b) ) {
                    nav_bar.removeClass("scrollUp");
                }

                if (c < currentScrollTop && a > b) {
                    nav_bar.addClass("padding-disable");
                } else if (c > currentScrollTop && a < b + d ) {
                    nav_bar.removeClass("padding-disable");
                }

                if (c < currentScrollTop && a > d ) {
                    nav_bar.addClass("fixed-enable");
                }else if (c > currentScrollTop && a < d ) {
                    nav_bar.removeClass("fixed-enable");
                }


                c = currentScrollTop;
            });
        }
    };


    // Open Close Cart Side
    fl_theme.initCartSideOpenClose = function() {
        let $cart_container   = $('.art-woo-side-cart'),
            $site_main_holder = $('.art-woo-container-wrapper'),
            OpenNavBar        = void 0;


        $doc.on('click', '.art-open-cart-side, .art-cart-side-close, .art-woo-content-mask', function (e) {
            e.preventDefault();
            self.toogleOpenCloseCartSide();
        });

        self.toogleOpenCloseCartSide = function () {
            self[OpenNavBar ? 'closeFullscreenCart' : 'openFullscreenCart']();
        };

        self.openFullscreenCart = function () {

            if (OpenNavBar || !$cart_container.length) {
                return;
            }
            OpenNavBar = 1;


            // container
            TweenMax.set($site_main_holder, {
                opacity: 1,
                display: 'block',
                x: '0'
            });
            TweenMax.to($site_main_holder, 0.3, {
                opacity: 1,
                x: '-375px',
                display: 'block',
                delay: 0
            }, 0);


            // Cart side
            TweenMax.set($cart_container, {
                opacity: 1,
                display: 'none',
                x: '375px'
                //force3D: true
            });
            TweenMax.to($cart_container, 0.3, {
                opacity: 1,
                x: '0',
                display: 'block',
                delay: 0
            }, 0);


            $cart_container.addClass('open');
            $site_main_holder.addClass('cart-sidebar-open');
        };


        self.closeFullscreenCart = function () {
            if (!OpenNavBar || !$cart_container.length) {
                return;
            }
            OpenNavBar = 0;


            // container
            TweenMax.to($site_main_holder, 0.3, {
                x: '0',
                opacity: 1,
                display: 'block',
                delay: 0
            });

            // Cart side
            TweenMax.to($cart_container, 0.3, {
                x: '375px',
                opacity: 1,
                display: 'none',
                delay: 0
            });



            // close
            $cart_container.removeClass('open');
            $site_main_holder.removeClass('cart-sidebar-open');
        }


    };


    // Open Close Mobile Navigation (all states are here)
    fl_theme.initMobileNavigationOpenClose = function () {
        let $navbar_wrapper         = $('.art-mobile-menu-wrapper'),
            $navbar_menu_sidebar    = $('.art--mobile-menu-navigation-wrapper'),
            $site_main_holder       = $('.art-main-container'),
            $site_header            = $('#art-main-holder header.art--header'),
            $hamburgerbars          = $('.art--hamburger-menu-wrapper'), /* no need ?*/
            OpenNavBar              = void 0;

        self.fullscreenNavbarIsOpened = function () {
            return OpenNavBar;
        };

        self.toogleOpenCloseMobileMenu = function () {
            self[OpenNavBar ? 'closeFullscreenNavbar' : 'openFullscreenNavbar']();
        };
        self.openFullscreenNavbar = function () {

            if (OpenNavBar || !$navbar_wrapper.length) {
                return;
            }
            OpenNavBar = 1;


            $hamburgerbars.addClass('opened');
            $hamburgerbars.removeClass('closed');

            $site_main_holder.removeClass('art-no-transform');



            // NavBarMenu wrapper Animation
            TweenMax.set($site_main_holder, {
                opacity: 1,
                display: 'block',
                x: '0'
            });

            TweenMax.to($site_main_holder, 0.3, {
                opacity: 1,
                x: '-280px',
                display: 'block',
                delay: 0
            }, 0);


            // NavBarMenu Items Animation
            TweenMax.set($navbar_wrapper, {
                opacity: 1,
                display: 'none',
                x: '280px'
            });
            TweenMax.to($navbar_wrapper, 0.3, {
                opacity: 1,
                x: '0',
                display: 'block',
                delay: 0
            }, 0);




            $navbar_wrapper.addClass('open');
            hamburgerButton.addClass('is-active');
            $navbar_menu_sidebar.addClass('sidebar-open');

            $site_header.addClass('art-menu-open');



        };

        self.closeFullscreenNavbar = function (dontTouchBody) {
            if (!OpenNavBar || !$navbar_wrapper.length) {
                return;
            }
            OpenNavBar = 0;

            // disactive all togglers
            $hamburgerbars.removeClass('opened');
            $hamburgerbars.addClass('closed');


            // container
            TweenMax.to($site_main_holder, 0.3, {
                x: '0',
                opacity: 1,
                display: 'block',
                delay: 0
            });


            TweenMax.to($navbar_wrapper, 0.3, {
                x: '280px',
                opacity: 1,
                display: 'none',
                delay: 0
            });



            setTimeout(function () {
                $site_main_holder.addClass('art-no-transform');
            }, 300);



            // open navbar block
            $navbar_wrapper.removeClass('open');
            hamburgerButton.removeClass('is-active');
            $navbar_menu_sidebar.removeClass('sidebar-open');

            $site_header.removeClass('art-menu-open');

        };


        $doc.on('click', '.art--hamburger-menu-wrapper,.art--mobile-menu-icon,.info_block_hamburger', function (e) {
            self.toogleOpenCloseMobileMenu();
            e.preventDefault();
        });

        $( window ).resize(function() {
            if( cherie_window.width() > 1240 ) {
                self.closeFullscreenNavbar();
            }
        });

    };



// Mobile Menu
    fl_theme.initMobileNavigationSubMenuAnimation = function () {
        var $mobileMenu = $('.art--mobile-menu');

        $mobileMenu.find('li').each(function(){
            var $this = $(this);
            if($this.find('ul').length > 0) {
                $this.find('> a').append('<span class="fl-menu-flipper-icon fl--open-child-menu"><span class="fl-front-content"><i class="fa fa-angle-down" aria-hidden="true"></i></span><span class="fl-back-content"><i class="fa fa-angle-up" aria-hidden="true"></i></span></span>');
            }
        });



        // open -> close sub-menu
        function toggleSub_menu($sub_menu_find) {
            var $navigation_Items = $sub_menu_find.find('.sub-nav >.sub-menu >li >a');

            if (!$sub_menu_find.find('.sub-nav >.sub-menu >li.opened').length) {
                $navigation_Items = $sub_menu_find.find('.sub-menu >li >a');
            }

            TweenMax.set($navigation_Items, {
                opacity: 0,
                x: '-20%',
                force3D: true
            }, 0.04);

            if ($sub_menu_find.hasClass('opened')) {
                $sub_menu_find.removeClass('opened');
                $sub_menu_find.find('li').removeClass('opened');
                $sub_menu_find.find('ul').slideUp(200);
                TweenMax.staggerTo($navigation_Items, 0.3, {
                    opacity: 0,
                    x: '-20%',
                    force3D: true
                }, 0.04);
                console.log($navigation_Items);
            } else {
                TweenMax.staggerTo($navigation_Items, 0.3, {
                    x: '0%',
                    opacity: 1,
                    delay: 0.2
                }, 0.04);

                $sub_menu_find.addClass('opened');
                if (!$sub_menu_find.children('ul').length) {
                    $sub_menu_find.find('div').children('ul').slideDown();
                } else {
                    $sub_menu_find.children('ul').slideDown();
                }
                // Sub menu Children
                $sub_menu_find.siblings('li').children('ul').slideUp(200);
                $sub_menu_find.siblings('li').removeClass('opened');
                $sub_menu_find.siblings('li').find('li').removeClass('opened');
                $sub_menu_find.siblings('li').find('ul').slideUp(200);
            }
        }

        $mobileMenu.on('click', 'li.has-submenu >a', function (e) {
            toggleSub_menu($(this).parent());
            e.preventDefault();
        });
    };




// Velocity Animation Save
    fl_theme.initVelocityAnimationSave = function(){
        var animated_velocity = $('.fl-animated-item-velocity');

        // Hided item if animated not complete
        animated_velocity.each(function () {
            var $this = $(this),
                $item;

            if ($this.data('item-for-animated')) {
                $item = $this.find($this.data('item-for-animated'));
                $item.each(function() {
                    if(!$(this).hasClass('animation-complete')) {
                        $(this).css('opacity','0');
                    }
                });
            } else {
                if(!$this.hasClass('animation-complete')) {
                    $this.css('opacity','0');
                }
            }
        });

        // animated Function
        animated_velocity.each(function () {
            var $this_item = $(this), $item, $animation;
            $animation = $this_item.data('animate-type');
            if ($this_item.data('item-for-animated')) {
                $item = $this_item.find($this_item.data('item-for-animated'));
                $item.each(function() {
                    var $this = $(this);
                    var delay='';
                    if ($this_item.data('item-delay')) {
                        delay = $this_item.data('item-delay');
                    }else {
                        if ($this.data('item-delay')) {
                            delay = $this.data('item-delay');
                        }
                    }
                    $this.waypoint(function () {
                            if(!$this.hasClass('animation-complete')) {
                                $this.addClass('animation-complete')
                                    .velocity('transition.'+$animation,{delay:delay,display:'undefined',opacity:1});
                            }
                        },
                        {
                            offset: offset
                        });
                });
            } else {
                $this_item.waypoint(function () {
                        var delay='';
                        if ($this_item.data('item-delay')) {
                            delay = $this_item.data('item-delay');
                        }

                        if(!$this_item.hasClass('animation-complete')) {
                            $this_item.addClass('animation-complete')
                                .velocity('transition.'+$animation,{  delay:delay,display:'undefined',opacity:1});
                        }

                    },
                    {
                        offset: offset
                    });
            }
        });
    };





// Opacity header With Scroll
    fl_theme.initOpacityScrollFunction = function(){
        window.addEventListener("scroll", function() {
            let header = $('.enable-opacity-with-scroll .content_header');
            let wScroll = $(this).scrollTop();
            let targetHeight = header.outerHeight();
            let scrollPercent = (targetHeight*1.9 - window.scrollY) / targetHeight ;
            header.each(function () {
                let $this = $(this);
                $this.waypoint(function () {
                        TweenMax.to( $this, 0, {
                            y:wScroll / 4,
                            opacity: scrollPercent,
                            ease: Power2.easeOut
                        });
                    },
                    {
                        offset: offset
                    });

            });
        });
    };
// Testimonial Slider
    fl_theme.initPostImageSliderFunction = function () {
        var testimonila_slider = $('.fl-post-image-slider');
        if(testimonila_slider.length){
            testimonila_slider.each(function() {
                var $this = $(this);
                $this.not('.slick-initialized').slick({
                    dots: false,
                    infinite: true,
                    arrows: true,
                    autoplay:true,
                    autoplaySpeed: 6000,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    draggable: true,
                    prevArrow: $('.post-prev-slider-btn'),
                    nextArrow: $('.post-next-slider-btn'),
                });
            });
        }
    };


// Line Height Check
    fl_theme.initLineHeightСheck = function () {
        var $element = $('.post-inner_content >p ,.single-page-wrapper >p');
        $element.each(function() {
            if ($(this).css("font-size") >= "20px") {
                $(this).css('line-height','1.6');
            }
        });
    };


//Search Form Navigatop
    fl_theme.initHeaderSearchForm = function() {
        var $SearchForm = $('.header-search-form'),
            OpenSearchForm = void 0,
            search_form_input = $('form.search_global input'),
            search_form_info_text = $('form.search_global .info-text'),
            $searchformicon =  $('.header-search');

        self.toggleFullscreenSearchForm = function () {
            self[OpenSearchForm ? 'closeFullscreenSearchForm' : 'openFullscreenSearchForm']();
        };




        self.openFullscreenSearchForm = function () {
            if (OpenSearchForm || !$SearchForm.length) {
                return;
            }
            OpenSearchForm = 1;
            //Default
            $searchformicon.addClass('opened');
            $searchformicon.removeClass('closed');

            // set top position and animate
            TweenMax.to($SearchForm, 0.4, {
                opacity: 1,
                display: 'block'
            });
            // Search Input
            TweenMax.to(search_form_input, .2, {
                opacity: 1,
                y: '0',
                delay: .3
            });
            //Info Text
            TweenMax.to(search_form_info_text, .2, {
                opacity: 1,
                y: '0',
                delay: .5
            });


            $SearchForm.addClass('open');
        };

        self.closeFullscreenSearchForm = function () {
            if (!OpenSearchForm || !$SearchForm.length) {
                return;
            }
            OpenSearchForm = 0;
            // disactive all togglers
            $searchformicon.removeClass('opened');
            $searchformicon.addClass('closed');
            // Search input
            TweenMax.to(search_form_input, .4, {
                opacity: 0,
                y: '-20px',

            });
            // Search info text
            TweenMax.to(search_form_info_text, .4, {
                opacity: 0,
                y: '20px',
                delay: .3
            });
            // set top position and animate
            TweenMax.to($SearchForm, .4, {
                force3D: true,
                display: 'none',
                opacity: 0,
                delay: .7
            });

            // open search form wrapper block
            $SearchForm.removeClass('open');

        };

        $(document).keyup(function(e) {
            if(OpenSearchForm === 1){
                if (e.keyCode === 27 )  {
                    $searchformicon.trigger('click');
                }
            }
        });

        $(document).on("scroll",function(e) {
            if(OpenSearchForm === 1){
                $searchformicon.trigger('click');
            }
        });


        $doc.on('click', '.header-search', function (e) {
            self.toggleFullscreenSearchForm();
            e.preventDefault();
        });



    };




    // Load More button for Blog
    fl_theme.initLoadMoreForBlog = function () {

        let cherie_load_next_page;
        let cherie_lmp_ajax_instance;
        let lmp_is_loading;
        let cherie_blog_pagination_wrapper = $('.art-blog-pagination-wrapper');

        cherie_current_style();

        $(document).on( 'click', '.art-button-container .art-button-load-more', function (event) {
            event.preventDefault();

            cherie_load_next_page();
        });

        cherie_load_next_page = function () {


            var $cherie_next_page = cherie_jquery_get_next_page(); //.next-page a


            if( $cherie_next_page.length > 0 ) {


                cherie_start_ajax_loading();  // pre loader

                var cherie_next_page;
                cherie_next_page = $cherie_next_page.attr('href');


                cherie_lmp_ajax_instance = $.get( cherie_next_page, function( data ) {


                    cherie_lmp_ajax_instance = false;
                    var $data = $('<div>'+data+'</div>');

                    var $posts = $data.find('.art-all-posts-itself').html();
                    $('.art-all-posts-itself').append( $posts );


                    var $cherie_next_page = cherie_jquery_get_next_page();
                    var $cherie_new_next_page = cherie_jquery_get_next_page($data);
                    if( $cherie_new_next_page.length ) {
                        $cherie_next_page.replaceWith($cherie_new_next_page);
                    } else {
                        $cherie_next_page.remove();
                    }


                    cherie_end_ajax_loading();

                    cherie_current_style();

                });

            }

        };

        function cherie_jquery_get_next_page($parent) {

            var $next_page;

            if( typeof($parent) == 'undefined' ) {
                $parent = $(document);
            }

            var $pagination = $parent.find('.art-pagination');

            if( $pagination.find('.next-page a').length > 0 ) {

                $next_page = $pagination.find('.next-page a');
            } else {

                $next_page = $parent.find('.next-page a');
            }


            return $next_page;
        }

        function cherie_start_ajax_loading() {
            cherie_blog_pagination_wrapper.addClass('art-is-loading');
        }

        function cherie_end_ajax_loading() {
            cherie_blog_pagination_wrapper.removeClass('art-is-loading');
        }



        function cherie_current_style() {
            $( '.art-blog-pagination-wrapper .art-load-more-button-container' ).hide();

            var $cherie_next_page = cherie_jquery_get_next_page();
            if ( $cherie_next_page.length > 0 ) {
                $( '.art-blog-pagination-wrapper .art-load-more-button-container' ).show();
            }

        }

    };

    // Load More button for Shop
    fl_theme.initLoadMoreForShop = function () {

            var cherie_load_next_page;
            var cherie_lmp_ajax_instance;
            var lmp_is_loading;
            var cherie_blog_pagination_wrapper = $('.art-shop-pagination-wrapper');

            cherie_current_style();

            $(document).on( 'click', '.art-button-container .art-button-load-more', function (event) {
                event.preventDefault();

                cherie_load_next_page();
            });

            cherie_load_next_page = function () {


                var $cherie_next_page = cherie_jquery_get_next_page(); // .next-page a;


                if( $cherie_next_page.length > 0 ) {


                    cherie_start_ajax_loading();  // pre loader

                    var cherie_next_page;
                    cherie_next_page = $cherie_next_page.attr('href');


                    cherie_lmp_ajax_instance = $.get( cherie_next_page, function( data ) {


                        cherie_lmp_ajax_instance = false;
                        var $data = $('<div>'+data+'</div>');

                        var $posts = $data.find('ul.products').html();
                        $('ul.products').append( $posts );


                        var $cherie_next_page = cherie_jquery_get_next_page();
                        var $cherie_new_next_page = cherie_jquery_get_next_page($data);
                        if( $cherie_new_next_page.length ) {
                            $cherie_next_page.replaceWith($cherie_new_next_page);
                        } else {
                            $cherie_next_page.remove();
                        }


                        cherie_end_ajax_loading();

                        cherie_current_style();

                    });

                }

            };

            function cherie_jquery_get_next_page($parent) {

                var $next_page;

                if( typeof($parent) == 'undefined' ) {
                    $parent = $(document);
                }

                var $pagination = $parent.find('.art-shop-pagination-wrapper .woocommerce-pagination');

                if( $pagination.find('.woocommerce-pagination a.next').length > 0 ) {

                    $next_page = $pagination.find('.woocommerce-pagination a.next');
                } else {

                    $next_page = $parent.find('.woocommerce-pagination a.next');
                }

                return $next_page;
            }

            function cherie_start_ajax_loading() {
                cherie_blog_pagination_wrapper.addClass('art-is-loading');
            }

            function cherie_end_ajax_loading() {
                cherie_blog_pagination_wrapper.removeClass('art-is-loading');
            }



            function cherie_current_style() {
                $( '.art-shop-pagination-wrapper .art-load-more-button-container' ).hide();

                var $cherie_next_page = cherie_jquery_get_next_page();
                if ( $cherie_next_page.length > 0 ) {
                    $( '.art-shop-pagination-wrapper .art-load-more-button-container' ).show();
                }

            }

        };




    // Line Height Check
    fl_theme.initFullScreenSearchBlog = function () {

        $( '.art-search-blog-button' ).on( 'click', function(e) {
            e.preventDefault();

            $('.art-search-blog .art-overlay').fadeIn(350);
        });

        $( '.art-search-blog .art-overlay-close' ).on( 'click', function(e) {

            $('.art-search-blog .art-overlay').fadeOut(350);
        });

    };



    // Blog Sticky
    fl_theme.initBlogStickyArchive = function () {

        $('.art-content-left, .art-content-right').theiaStickySidebar({

        });






        $('.art-services-tabs-left, .art-services-tabs-center').theiaStickySidebar({
            additionalMarginTop: 100 // 65
        });


        // smooth scroll
        $("#scroll-spy ul li a[href^='#']").on('click', function(event) {
            let hash = this.hash;
            if (hash) {
                event.preventDefault();
                $('html, body').animate({scrollTop: $(hash).offset().top - cherieSettings.headerHeight}, 750);
            }
        });


        $(window).bind('scroll', function() {
            var currentTop = $(window).scrollTop();

            var elems = $('.art-service-wrapper');
            var cherie_all_nav = $('.art-service-full-page-tabs li a');

            elems.each(function(index){
                var elemTop 	= $(this).offset().top;
                var elemBottom 	= elemTop + $(this).height();

                if(currentTop >= elemTop-100 && currentTop <= elemBottom){
                    var id 		= $(this).attr('id');
                    var navElem = $('a[href="#' + id+ '"]');


                    cherie_all_nav.removeClass( 'active' );
                    navElem.addClass('active');

                }
            })

        });

    };
    fl_theme.initCustomFunction = function(){

        // Loader
        fl_theme.initSiteLoader();


        // Blog Sticky
        fl_theme.initBlogStickyArchive();

        // Load More button for Blog
        fl_theme.initFullScreenSearchBlog();

        // Load More button for Blog
        fl_theme.initLoadMoreForBlog();


        // Load More button for Blog
        fl_theme.initLoadMoreForShop();


        // header
        fl_theme.initStikyHeader();

        // Sidebar  initStikySidebar


        // Resize iframe video
        fl_theme.initResponsiveIframe();

        // Open Close Cart Side
        fl_theme.initCartSideOpenClose();

        // Open Close Mobile Navigation
        fl_theme.initMobileNavigationOpenClose();

        // Sub Menu Animation
        fl_theme.initMobileNavigationSubMenuAnimation();


        //Navbar fixed  initNavBarFixed


        // Maybe I need it
        fl_theme.initOpacityScrollFunction();


        // Post Image Slider
        fl_theme.initPostImageSliderFunction();


        // Line Height Check  initLineHeightСheck

        // FullscreenSearch
        fl_theme.initHeaderSearchForm();
    };




    fl_theme.initCustomFunction();
    $($window).on('resize', function() {
        fl_theme.initResponsiveIframe();
        // initNavBarFixed
        // Resize iframe video
        fl_theme.initResponsiveIframe();
    });





    
    $('.art-product-layout-classic').on('click', '.zoomImg', function(){
        if ($(window).width() > 640) {
            $(this).siblings('.fresco').trigger('click');
        }
    });






    // WooCommerce navigation
    if (jQuery.fn.slick) {


        $('.art-product-sliders-for').slick({
            asNavFor:'.art-product-sliders-nav',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite:false,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        dots:true
                    }
                }
            ]
        });

        $('.art-product-sliders-nav').slick({
            slidesToShow:3,
            slidesToScroll:1,
            draggable: false,
            prevArrow: '.previous_image',
            nextArrow: '.next_image',
            vertical:true,
            dots:false,
            infinite:false,
            asNavFor:'.art-product-sliders-for',
            // arrows:true,
            focusOnSelect: true,
        });

    }




    /* Service accordion */
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {

            if( !$(this).hasClass('active') ) {
                $('.accordion').removeClass('active');
                $('.panel').removeAttr("style")
            }

            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = (panel.scrollHeight + 100) + "px";
            }
        });
    }


});



jQuery( document.body ).on( 'updated_cart_totals', function () {
    jQuery('#calc_shipping_country').select2();
} );