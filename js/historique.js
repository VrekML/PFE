// Carousel functionality for histoire section
document.addEventListener('DOMContentLoaded', function() {
  const historique = document.getElementById('historique');
  const etapesContainer = document.getElementById('his-etapes');
  const etapes = document.querySelectorAll('.his-etape');
  const btnRight = document.getElementById('his-bouton-r');
  const btnLeft = document.getElementById('his-bouton-l');

  let currentIndex = 0;
  let itemWidth = 0;

  // Calculate item width based on container and items
  function calculateItemWidth() {
    if (etapes[0]) {
      const style = window.getComputedStyle(etapes[0]);
      const width = parseFloat(style.width);
      const marginRight = parseFloat(style.marginRight);
      itemWidth = width + marginRight;
    }
  }

  function updateCarousel() {
    const offset = -currentIndex * itemWidth;
    etapesContainer.style.transform = `translateX(${offset}px)`;
  }

  btnRight.addEventListener('click', function() {
    if (currentIndex < etapes.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  btnLeft.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Initialize carousel with delay to ensure CSS is applied
  etapesContainer.style.transition = 'transform 0.3s ease';
  
  setTimeout(function() {
    calculateItemWidth();
  }, 100);

  // Recalculate on window resize
  window.addEventListener('resize', calculateItemWidth);
});
