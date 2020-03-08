'use strict';
/*===============================================*/

/*  PRE LOADING
 /*===============================================*/

jQuery(window).on('load', function () {
  jQuery('.preloader').delay(500).fadeOut('slow');
});
jQuery(document).ready(function () {
  /*=============================================== */

  /*    //search pop up
   /* =============================================== */
  if (jQuery('.btn-search').length != "") {
    jQuery('.btn-search').on('click', function (e) {
      e.preventDefault();
      jQuery('.search_popup').toggleClass('active');
    });
    jQuery('.search-close').on('click', function (e) {
      e.preventDefault();
      jQuery('.search_popup').removeClass('active');
    });
  }
  /*=============================================== */

  /*   wow
   /* =============================================== */


  var wow = new WOW({
    boxClass: 'wow',
    // animated element css class (default is wow)
    animateClass: 'animated',
    // animation css class (default is animated)
    offset: 0,
    // distance to the element when triggering the animation (default is 0)
    mobile: true,
    // trigger animations on mobile devices (default is true)
    live: true,
    // act on asynchronously loaded content (default is true)
    scrollContainer: null,
    // optional scroll container selector, otherwise use window,
    resetAnimation: true // reset animation on end (default is true)

  });
  wow.init();
  /* ==============================================
   STICKY HEADER
   =============================================== */

  jQuery(window).on('scroll', function () {
    if (jQuery(window).scrollTop() < 100) {
      jQuery('.header').removeClass('sticky');
    } else {
      jQuery('.header').addClass('sticky');
    }

    if (jQuery(window).scrollTop() < 400) {
      jQuery('.back-to-top').removeClass('active');
    } else {
      jQuery('.back-to-top').addClass('active');
    }
  });
  jQuery('a.has_sub_menu').on('click', function (e) {
    if (window.matchMedia('(max-width: 992px)').matches) {
      e.preventDefault();
      jQuery(this).toggleClass("active_menu");
      jQuery(this).next(jQuery('.sub_menu')).slideToggle();
    }
  });
  /* ==============================================
      Easing move links
       =============================================== */

  jQuery('a.ease[href^="#"]').on('click', function (event) {
    var jQueryanchor = jQuery(this);
    jQuery('html, body').stop().animate({
      scrollTop: jQuery(jQueryanchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
  /* ==============================================
  COUNTER JS
  ============================================== */

  jQuery('.counter').counterUp({
    delay: 5,
    time: 3000
  });
  /* ==============================================
    Nice Select JS
   ============================================== */

  $('select').niceSelect(); // /* ==============================================
  //  OWL CAROUSEL
  //  =============================================== */

  jQuery(".cover-slider").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 550,
    autoplayHoverPause: false,
    dots: true,
    nav: true,
    navText: ['<i class="lnr-arrow-left lnr"></i>', '<i class="lnr-arrow-right lnr"></i>'],
    responsiveClass: true,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  });
  $(".testimonial-two").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 450,
    autoplayHoverPause: false,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
        items: 2
      }
    },
    items: 2
  });
  $(".testimonial-one").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 450,
    autoplayHoverPause: false,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    items: 1
  });
  /* ==============================================
         portfolio
         =============================================== */
  // filter items on button click

  jQuery('.portfolio-categories').on('click', 'li', function (e) {
    e.preventDefault();
    jQuery('.portfolio-categories li').removeClass('active');
    jQuery(this).closest('li').addClass('active');
  });
  var filterizd = $('.filtr-container');

  if (filterizd.length > 0) {
    filterizd.imagesLoaded(function () {
      filterizd.filterizr({
        layout: 'sameWidth'
      });
    });
  }
  /* ==============================================
         pop up
         =============================================== */


  jQuery('.filtr-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image

    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function titleSrc(item) {
        return item.el.attr('title');
      }
    },
    zoom: {
      enabled: true,
      duration: 300,
      // don't foget to change the duration also in CSS
      opener: function opener(element) {
        return element.find('img');
      }
    }
  });
  /* ==============================================
          //    google maps styles
             =============================================== */

  function map_one() {
    // The location of office
    var pyrmont = new google.maps.LatLng(24.650731, 46.673236); // The map, centered at office

    var map_id = document.getElementById("map_one");
    var map_icon = $("#map_one").data('mapicon');
    var map = new google.maps.Map(map_id, {
      zoom: 17,
      center: pyrmont
    }); // The marker, positioned at location

    var marker = new google.maps.Marker({
      position: pyrmont,
      map: map,
      mapTypeId: 'roadmap',
      icon: map_icon
    });
  } // initialize all the maps and apis


  function initialize() {
    if ($("#map_one").length > 0) {
      map_one();
    }
  }

  $(window).on('load', function () {
    initialize();
  });
});