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
};
