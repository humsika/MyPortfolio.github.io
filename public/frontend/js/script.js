$(function() {
    $(window).on("load", function() {
      $('#preloader').fadeOut('slow', function() {
        $(this).remove();
      });
    });
  });
  
  /**
   * element toggle function
   */
  
  var elemToggleFunc = function (elem) { elem.classList.toggle("active"); }
  
  /**
   * header sticky & go to top
   */
  
  var header = document.querySelector(".header");
  var goTopBtn = document.querySelector("[data-go-top]");
  
  window.addEventListener("scroll", function () {
  
    if (window.scrollY >= 10) {
      header.classList.add("active");
      goTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      goTopBtn.classList.remove("active");
    }
  
  });

  document.querySelectorAll('.navbar-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        const offset = 80; // Adjust this value according to your header height
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    });
});

  
  $(document).ready(function() {  
    $('#success-message').delay(3000).slideUp();
  });
  
  
  /**
   * navbar toggle
   */
  
  /**
   * navbar toggle
   */
  
  // Function to toggle the "active" class
  function elemToggleFunc(elem) {
    elem.classList.toggle("active");
  }
  
  // Function to close the menu when a link is clicked
  function closeMenu() {
    navbar.classList.remove("active");
    navToggleBtn.classList.remove("active");
    document.body.style.overflow = ''; // Reset overflow to default
  }
  
  // Selectors
  var navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
  var navbar = document.querySelector("[data-navbar]");
  var navLinks = document.querySelectorAll(".navbar-link");
  
  // Event listener for the toggle button
  navToggleBtn.addEventListener("click", function () {
    elemToggleFunc(navToggleBtn);
    elemToggleFunc(navbar);
    
    // Toggle body overflow based on the menu visibility
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
  });
  
  // Event listeners for navbar links to close the menu
  navLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
  
  
  /**
   * dark & light theme toggle
   */
  
  var themeToggleBtn = document.querySelector("[data-theme-btn]");
  
  themeToggleBtn.addEventListener("click", function () {
  
    elemToggleFunc(themeToggleBtn);
  
    if (themeToggleBtn.classList.contains("active")) {
      document.body.classList.remove("dark_theme");
      document.body.classList.add("light_theme");
  
      localStorage.setItem("theme", "light_theme");
    } else {
      document.body.classList.add("dark_theme");
      document.body.classList.remove("light_theme");
  
      localStorage.setItem("theme", "dark_theme");
    }
  });
  
  /**
   * check & apply last time selected theme from localStorage
   */
  
  if (localStorage.getItem("theme") === "light_theme") {
    themeToggleBtn.classList.add("active");
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
  } else {
    themeToggleBtn.classList.remove("active");
    document.body.classList.remove("light_theme");
    document.body.classList.add("dark_theme");
  }
  
  /**
   * skills toggle
   */
  
  var toggleBtnBox = document.querySelector("[data-toggle-box]");
  var toggleBtns = document.querySelectorAll("[data-toggle-btn]");
  var skillsBox = document.querySelector("[data-skills-box]");
  var dataskillcertificatebox = document.querySelector("[data-skill-certificate-box]");
  
  for (var i = 0; i < toggleBtns.length; i++) {
    toggleBtns[i].addEventListener("click", function () {
  
      elemToggleFunc(toggleBtnBox);
      for (var i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
      elemToggleFunc(skillsBox);
      elemToggleFunc(dataskillcertificatebox);
    });
  }
  
      var swiperCards = new Swiper("#slider1", {
          loop: true,
          spaceBetween: 32,
          grabCursor: true,
          autoplay: {
              delay: 3000,
              disableOnInteraction: false,
          },
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true,
          },
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
          },
          breakpoints: {
              600: {
                  slidesPerView: 2,
              },
              968: {
                  slidesPerView: 3,
              },
          },
      });
  
  var swiperCard3 = new Swiper("#slider3", {
        loop: true,
        spaceBetween: 32,
        grabCursor: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          600: {
            slidesPerView: 1,
          },
          968: {
            slidesPerView: 1,
          },
        },
      });
  
  
      var swiperCard2 = new Swiper("#slider2", {
        loop: true,
        spaceBetween: 32,
        grabCursor: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          600: {
            slidesPerView: 1,
          },
          968: {
            slidesPerView: 1,
          },
        },
      });
  
  // Add event listeners to the toggle buttons
  var toggleButtons = document.querySelectorAll('[data-toggle-btn]');
  toggleButtons.forEach(function (button) {
    button.addEventListener('click', toggleCertificatesList);
  });

  