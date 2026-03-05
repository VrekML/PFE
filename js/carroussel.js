// systeme de carroussel d'images pour la section accueil
document.addEventListener('DOMContentLoaded', function() {
  // section accueil
  const accueilSection = document.getElementById('accueil');
  // pogner les images dans un array
  const images = ['images/accueil/outside-acc.png', 'images/accueil/choice-acc.png', 'images/accueil/inside-acc.png'];
  let currentIndex = 0;

  // fonction pour determiner la position du background en fonction de la taille de l'écran
  function getBackgroundPosition() {
    return window.innerWidth <= 768 ? '20%' : 'center';
  }

  // faire deux layers d'images pour l'animation de crossfade
  const bgLayer1 = document.createElement('div');
  const bgLayer2 = document.createElement('div');
  
  // image de background normale
  bgLayer1.style.position = 'absolute';
  bgLayer1.style.top = '0';
  bgLayer1.style.left = '0';
  bgLayer1.style.width = '100%';
  bgLayer1.style.height = '100%';
  bgLayer1.style.backgroundSize = 'cover';
  bgLayer1.style.backgroundPosition = getBackgroundPosition();
  bgLayer1.style.backgroundImage = `url('${images[0]}')`;
  bgLayer1.style.transition = 'opacity 0.5s ease';
  bgLayer1.style.opacity = '1';
  bgLayer1.style.zIndex = '0';
  bgLayer1.style.pointerEvents = 'none';

  // image de background 2, pendant l'animation crossfade
  bgLayer2.style.position = 'absolute';
  bgLayer2.style.top = '0';
  bgLayer2.style.left = '0';
  bgLayer2.style.width = '100%';
  bgLayer2.style.height = '100%';
  bgLayer2.style.backgroundSize = 'cover';
  bgLayer2.style.backgroundPosition = getBackgroundPosition();
  bgLayer2.style.backgroundImage = `url('${images[1]}')`;
  bgLayer2.style.transition = 'opacity 0.5s ease';
  bgLayer2.style.opacity = '0';
  bgLayer2.style.zIndex = '0';
  bgLayer2.style.pointerEvents = 'none';

  // assurer position relative sur la section accueil
  // if (getComputedStyle(accueilSection).position === 'static') {
  //   accueilSection.style.position = 'relative';
  // }

  // placer les images dans la section une premiere fois
  accueilSection.insertBefore(bgLayer1, accueilSection.firstChild);
  accueilSection.insertBefore(bgLayer2, accueilSection.firstChild);

  // systeme pour changer l'image a chaque 5 secondes
  setInterval(function() {
    currentIndex = (currentIndex + 1) % images.length;
    
    // savoir quelle image update
    if (bgLayer1.style.opacity === '1') {
      // Fade out img 1, fade in img 2
      bgLayer2.style.backgroundImage = `url('${images[currentIndex]}')`;
      bgLayer1.style.opacity = '0';
      bgLayer2.style.opacity = '1';
    } else {
      // Fade out img 2, fade in img 1
      bgLayer1.style.backgroundImage = `url('${images[currentIndex]}')`;
      bgLayer2.style.opacity = '0';
      bgLayer1.style.opacity = '1';
    }
  }, 5000);

  // update background position quand la taille de l'écran change
  window.addEventListener('resize', function() {
    const position = getBackgroundPosition();
    bgLayer1.style.backgroundPosition = position;
    bgLayer2.style.backgroundPosition = position;
  });
});
