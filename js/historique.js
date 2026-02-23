// systeme de barre horizontale pour etapes du projet
document.addEventListener('DOMContentLoaded', function() {
  const historique = document.getElementById('historique');
  const etapesContainer = document.getElementById('his-etapes');
  const etapes = document.querySelectorAll('.his-etape');
  const btnRight = document.getElementById('his-bouton-r');
  const btnLeft = document.getElementById('his-bouton-l');

  let currentIndex = 0;
  let itemWidth = 0;

  // calculer largeur de la barre d'historique selon nombre de divisions d'etapes
  function calculateItemWidth() {
    if (etapes[0]) {
      const style = window.getComputedStyle(etapes[0]);
      const width = parseFloat(style.width);
      const marginRight = parseFloat(style.marginRight);
      itemWidth = width + marginRight;
    }
  }

  // updater le carousel selon l'index et la largeur de la barre d'historique
  function updateCarousel() {
    const offset = -currentIndex * itemWidth;
    etapesContainer.style.transform = `translateX(${offset}px)`;
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
  
  setTimeout(function() {
    calculateItemWidth();
  }, 100);

  // recalculer largeur de fenetre
  window.addEventListener('resize', calculateItemWidth);
});
