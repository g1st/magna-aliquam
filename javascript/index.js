window.onload = function () {
  const images = document.querySelectorAll('.carousel-image');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let currentIndex = 0; // index of currently visible slide

  prev.addEventListener('click', (element) => {
    changeSlide(-1);
  });

  next.addEventListener('click', (element) => {
    changeSlide(1);
  });

  function changeSlide(n) {
    images[currentIndex].classList.remove('visible');

    if (currentIndex + n < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex + n >= images.length) {
      currentIndex = 0;
    } else {
      currentIndex += n;
    }

    images[currentIndex].classList.add('visible');
  }

  // handle hamburger menu button clicks

  const hamburgerMenuButton = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  hamburgerMenuButton.addEventListener('click', (element) => {
    nav.classList.toggle('show-nav');
  });

  document.addEventListener('click', (element) => {
    // toggle sidebar when link in the sidebar is clicked
    if (isLinkInSidebar(element)) {
      nav.classList.toggle('show-nav');
    }
  });

  function isLinkInSidebar(element) {
    const isNavLink = element.target.className.split(' ').includes('nav-link');
    const isSubLink = element.target.className.split(' ').includes('sub-link');

    // make sure this is on mobile (small screen)
    const isSmallScreen = window.innerWidth < 980;

    return (isNavLink || isSubLink) && isSmallScreen;
  }

  // add background to the navbar when scrolled past hero section
  let isOpaque = false;
  const header = document.querySelector('header');

  window.onscroll = () => {
    const hero = document.querySelector('.hero');

    // when we've scrolled past hero section add white background to the header
    if (!isOpaque && window.scrollY >= hero.offsetHeight) {
      header.classList.add('opaque');
      isOpaque = true;
    } else if (isOpaque && window.scrollY <= hero.offsetHeight) {
      header.classList.remove('opaque');
      isOpaque = false;
    }
  };
};
