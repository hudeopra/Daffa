jQuery(document).ready(function ($) {

  var nav_offset_top = $("header").height() + 120;

  function navbarFixed() {
    if ($(".ph-header").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".ph-header").addClass("header_fixed");
          $(".ph-login").removeClass("ph-active");
        } else {
          $(".ph-header").removeClass("header_fixed");
          $(".ph-login").removeClass("ph-active");
        }
      });
    }
  }

  navbarFixed();

  // Triggering login popup
  $(document).on("click", "#loginBtn, .pop-up, #pop-up__close", function () {
    $(".ph-login-form").toggleClass("active");
  });

  // Initialize nice select
  if ($("select.nice-select").length) {
    $("select.nice-select").niceSelect();
  }

  $(function () {
    // For card rotation
    $(".btn-rotate").click(function () {
      var $cardContainer = $(this).closest(".rotate-container");
      $cardContainer.find(".card-front").toggleClass("rotate-card-front");
      $cardContainer.find(".card-back").toggleClass("rotate-card-back");
    });
  });

  // Initialize Fancybox
  if (typeof Fancybox !== "undefined") {
    Fancybox.bind("[data-fancybox]", {
      // Your custom options
    });
  }

  // Initialize slick sliders
  if ($(".ph-skill__slider").length) {
    $(".ph-skill__slider").slick({
      dots: false,
      infinite: true,
      speed: 7000,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 431,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 381,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }

  if ($(".ph-instrument--slider").length) {
    $(".ph-instrument--slider").slick({
      dots: true,
      infinite: true,
      speed: 7000,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 431,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 381,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }

  if ($(".ph-members__slider").length) {
    $(".ph-members__slider").slick({
      dots: false,
      infinite: true,
      speed: 7000,
      arrows: false,
      slidesToShow: 7,
      slidesToScroll: 3,
      autoplay: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 431,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 381,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }

  if ($(".ph-video__slider").length) {
    $(".ph-video__slider").slick({
      dots: true,
      infinite: true,
      speed: 7000,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 431,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 381,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }

  if ($('.slider-for').length && $('.slider-nav').length) {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      arrows: false,
      centerMode: true,
      focusOnSelect: true
    });
  }

});
