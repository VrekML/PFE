// systeme de barre horizontale pour etapes du projet
document.addEventListener('DOMContentLoaded', function() {
  const historique = document.getElementById('historique');
  const etapesContainer = document.getElementById('his-etapes');
  const etapes = document.querySelectorAll('.his-etape');
  const btnRight = document.getElementById('his-bouton-r');
  const btnLeft = document.getElementById('his-bouton-l');

  let currentIndex = 0;
  let itemPercentage = 43; // Desktop: 35vw width + 6vw left margin + 2vw right margin

  // Calculate item percentage based on screen size
  function calculateItemPercentage() {
    if (window.innerWidth <= 768) {
      itemPercentage = 88; // Mobile: 80vw width + 6vw left margin + 2vw right margin
    } else {
      itemPercentage = 43; // Desktop: 35vw width + 6vw left margin + 2vw right margin
    }
    // Reset to first item when screen size changes
    currentIndex = 0;
    updateCarousel();
  }

  // updater le carousel selon l'index avec percentage responsif
  function updateCarousel() {
    const offset = -currentIndex * itemPercentage;
    etapesContainer.style.transform = `translateX(${offset}vw)`;
  }

  // appuyer sur bouton droite augment l'index et deplace la barre vers la gauche
  btnRight.addEventListener('click', function() {
    if (currentIndex < etapes.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  // appuyer sur bouton gauche baisse l'index et deplace la barre vers la droite
  btnLeft.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // animation de transition
  etapesContainer.style.transition = 'transform 0.3s ease';
  
  // Initialize carousel position
  calculateItemPercentage();

  // Recalculate on window resize
  window.addEventListener('resize', calculateItemPercentage);
});
