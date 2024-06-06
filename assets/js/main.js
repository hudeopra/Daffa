jQuery(document).ready(function ($) {
  var nav_offset_top = $("header").height() - window.innerHeight * 0.95; // Adjusted to 10vh scroll

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

  // // Toggle meny form visibility
  // $(document).on("click", ".ph-header__open--trigger", function () {
  //   $(".ph-header").toggleClass("header_fixed");
  //   $(".ph-login").removeClass("ph-active");
  // });

  // // Toggle login form visibility
  // $(document).on("click", ".ph-user-trigger", function () {
  //   $(".ph-login").toggleClass("ph-active");
  // });

  // Initialize nice select
  $("select.nice-select").niceSelect();

  $(function () {
    // For card rotation
    $(".btn-rotate").click(function () {
        var $cardContainer = $(this).closest(".rotate-container");
        $cardContainer.find(".card-front").toggleClass("rotate-card-front");
        $cardContainer.find(".card-back").toggleClass("rotate-card-back");
    });
});


  // Initialize slick slider 
  $(".ph-skill__slider").slick({
    dots: false,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".ph-instrument--slider").slick({
    dots: false,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".ph-members__slider").slick({
    dots: false,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".slider-for",
    focusOnSelect: true,
  });
  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    var form = event.target;
    var formData = new FormData(form);

    // Perform AJAX request
    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit form");
        }
        // Assuming response is OK, handle success here
        console.log("Form submitted successfully");
      })
      .catch((error) => {
        console.error("Error submitting form:", error.message);
        // You can add additional error handling here
      });
  }

  // Attach event listener for login form
  var loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", handleSubmit);
  }

  // Attach event listener for newsletter form
  var newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", handleSubmit);
  }

  // Attach event listeners to specific forms
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", handleSubmit);
  }

  var bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", handleSubmit);
  }

  // Attach event listener for all other forms
  $("form").not("#contactForm, #bookingForm").on("submit", handleSubmit);
});
