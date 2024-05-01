// Scripts for navigation
'use strict';

// Add header html to the page
document.write(
  `<header class="navbar navbar-expand-lg py-3 py-lg-5 container-lg px-3 px-lg-0 mb-5 d-flex flex-wrap align-items-center justify-content-between">
    <a
      class="navbar-brand gupter-bold order-2 order-lg-1"
      id="bjellLogo"
      href="index.html"
      >Bjell</a
    >
    <button
      class="d-lg-none order-1 order-lg-2 btn fs-2"
      id="navMobileBtn"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="bi bi-list"></i>
    </button>
    <nav class="collapse navbar-collapse flex-grow-0 ibm-plex-mono-semibold order-4 order-lg-2 px-2 px-lg-0" id="navbarNav">
      <ul class="navbar-nav px-4 px-lg-0 fs-5" id="navList">
        <li class="nav-item py-2 py-lg-0 px-lg-5">
          <a
            class="nav-link text-dark text-light-lg"
            id="about"
            href="about.html"
            >About</a
          >
        </li>
        <div class="vr d-none d-lg-block"></div>
        <li class="nav-item py-2 py-lg-0 px-lg-5">
          <a
            class="nav-link text-dark text-light-lg"
            id="collection"
            href="collection.html"
            >Collection</a
          >
        </li>
        <div class="vr d-none d-lg-block"></div>
        <li class="nav-item py-2 py-lg-0 px-lg-5">
          <a 
            class="nav-link text-dark text-light-lg"
            id="contact"
            href="contact.html"
            >Contact</a
          >
        </li>
      </ul>
    </nav>
    <button
      type="button"
      id="shoppingCartBtn"
      class="btn order-3"
      aria-label="Toggle shopping cart"
    >
      <i class="bi bi-cart4 fs-2"></i>
    </button>
  </header>`
);

// Variables for navigation
const header = document.querySelector('header');
const bjellLogo = document.getElementById('bjellLogo');
const navMobileBtn = document.getElementById('navMobileBtn');
const navbarNav = document.getElementById('navbarNav');
const navList = document.getElementById('navList');
const shoppingCartBtn = document.getElementById('shoppingCartBtn');
const currentPage = window.location.pathname;

// Add class and set aria-current attribute to navigation list items
const setActivePage = () => {
  document.querySelectorAll('#navList li').forEach((listItem) => {
    listItem.classList.remove('active');
    listItem.removeAttribute('aria-current');
  });

  // Check the current page and add active class and aria-current attribute accordingly
  if (currentPage.includes('collection')) {
    document.getElementById('collection').classList.add('active');
    document.getElementById('collection').setAttribute('aria-current', 'page');
  } else if (currentPage.includes('about')) {
    document.getElementById('about').classList.add('active');
    document.getElementById('about').setAttribute('aria-current', 'page');
  } else if (currentPage.includes('contact')) {
    document.getElementById('contact').classList.add('active');
    document.getElementById('contact').setAttribute('aria-current', 'page');
  }
};

// Check if mobile navigation is expanded and add classes to different elements,
// or remove classes if mobile navigation is not expanded
const navMobileExpanded = () => {
  if (navMobileBtn.getAttribute('aria-expanded') === 'true') {
    header.classList.add('blue-bg');
    header.classList.add('full-height-navigation');
    navMobileBtn.classList.add('text-light-lg');
    bjellLogo.classList.add('text-light-lg');
    shoppingCartBtn.classList.add('invisible');
    navMobileBtn.innerHTML = "<i class='bi bi-x-lg'></i>";
  } else {
    header.classList.remove('blue-bg');
    header.classList.remove('full-height-navigation');
    navMobileBtn.classList.remove('text-light-lg');
    bjellLogo.classList.remove('text-light-lg');
    shoppingCartBtn.classList.remove('invisible');
    navMobileBtn.innerHTML = "<i class='bi bi-list'></i>";
  }
};

// Call navMovileExpanded function whenever mobile navigation button is clicked
navMobileBtn.addEventListener('click', () => {
  navMobileExpanded();
});

// Change navMobileBtn aria-expanded attribute and remove show class from navbarNav,
// whenever window is resized and window's width is more than 992 and the aria-expanded attribute is set to true
window.addEventListener('resize', () => {
  if (
    window.innerWidth > 992 &&
    navMobileBtn.getAttribute('aria-expanded') === 'true'
  ) {
    navMobileBtn.setAttribute('aria-expanded', 'false');
    navMobileExpanded();
    navbarNav.classList.remove('show');
  }
});

// Call the function when the page loads
window.onload = setActivePage();
