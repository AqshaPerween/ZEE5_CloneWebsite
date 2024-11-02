var card = document.querySelector(".card");

card.addEventListener("click", function () {
    window.location.href = "playvideo.html";

});

let currentIndex = 0;
  const images = document.querySelectorAll('.carousel img');
  const dots = document.querySelectorAll('.carousel-dots span');
  const totalImages = images.length;

  // Show next image
  function nextSlide() {
    updateSlide((currentIndex + 1) % totalImages);
  }

  // Show previous image
  function prevSlide() {
    updateSlide((currentIndex - 1 + totalImages) % totalImages);
  }

  // Show specific image
  function currentSlide(index) {
    updateSlide(index);
  }

  // Update slide and dots
  function updateSlide(index) {
    images[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex = index;
    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  }

  // Auto-slide every 3 seconds
  setInterval(nextSlide, 3000);