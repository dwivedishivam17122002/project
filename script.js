let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    shopingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shopingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>
{
    shopingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    shopingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    shopingCart.classList.remove('active');
    searchForm.classList.remove('active');
}



window.onscroll = () =>{
    searchForm.classList.remove('active');
    shopingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 20,

  // Corrected pagination syntax
  pagination: {
    el: '.swiper-pagination',  // Corrected 'e1' to 'el'
    clickable: true,           // Make pagination clickable
  },

  // Corrected navigation syntax
  navigation: {
    nextEl: '.swiper-button-next',  // Corrected 'nextE1' to 'nextEl'
    prevEl: '.swiper-button-prev',  // Corrected 'prevE1' to 'prevEl'
  },

  // Autoplay configuration
  autoplay: {
    delay: 7500,  // Time in ms before moving to the next slide
    disableOnInteraction: false,  // Ensures autoplay doesn't stop on interaction
  },

  // Breakpoints for responsive design
  breakpoints: {
    0: {
      slidesPerView: 1,  // 1 slide per view for small screens
    },
    768: {
      slidesPerView: 2,  // 2 slides per view for medium screens (tablets)
    },
    1020: {
      slidesPerView: 3,  // 3 slides per view for larger screens (desktops)
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,

  // Corrected pagination syntax
  pagination: {
    el: '.swiper-pagination',  // Corrected 'e1' to 'el'
    clickable: true,           // Make pagination clickable
  },

  // Corrected navigation syntax
  navigation: {
    nextEl: '.swiper-button-next',  // Corrected 'nextE1' to 'nextEl'
    prevEl: '.swiper-button-prev',  // Corrected 'prevE1' to 'prevEl'
  },

  // Autoplay configuration
  autoplay: {
    delay: 7500,  // Time in ms before moving to the next slide
    disableOnInteraction: false,  // Ensures autoplay doesn't stop on interaction
  },

  // Breakpoints for responsive design
  breakpoints: {
    0: {
      slidesPerView: 1,  // 1 slide per view for small screens
    },
    768: {
      slidesPerView: 2,  // 2 slides per view for medium screens (tablets)
    },
    1020: {
      slidesPerView: 3,  // 3 slides per view for larger screens (desktops)
    },
  },
});