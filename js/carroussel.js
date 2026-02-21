// Carousel background image rotation with crossfade effect
document.addEventListener('DOMContentLoaded', function() {
  const accueilSection = document.getElementById('accueil');
  const images = ['images/test.png', 'images/test2.png', 'images/test3.png'];
  let currentIndex = 0;

  // Create two overlay divs for background image crossfade
  const bgLayer1 = document.createElement('div');
  const bgLayer2 = document.createElement('div');
  
  // Configure bgLayer1
  bgLayer1.style.position = 'absolute';
  bgLayer1.style.top = '0';
  bgLayer1.style.left = '0';
  bgLayer1.style.width = '100%';
  bgLayer1.style.height = '100%';
  bgLayer1.style.backgroundSize = 'cover';
  bgLayer1.style.backgroundPosition = 'center';
  bgLayer1.style.backgroundImage = `url('${images[0]}')`;
  bgLayer1.style.transition = 'opacity 0.5s ease';
  bgLayer1.style.opacity = '1';
  bgLayer1.style.zIndex = '0';
  bgLayer1.style.pointerEvents = 'none';

  // Configure bgLayer2
  bgLayer2.style.position = 'absolute';
  bgLayer2.style.top = '0';
  bgLayer2.style.left = '0';
  bgLayer2.style.width = '100%';
  bgLayer2.style.height = '100%';
  bgLayer2.style.backgroundSize = 'cover';
  bgLayer2.style.backgroundPosition = 'center';
  bgLayer2.style.backgroundImage = `url('${images[1]}')`;
  bgLayer2.style.transition = 'opacity 0.5s ease';
  bgLayer2.style.opacity = '0';
  bgLayer2.style.zIndex = '0';
  bgLayer2.style.pointerEvents = 'none';

  // Ensure accueil section has position relative
  if (getComputedStyle(accueilSection).position === 'static') {
    accueilSection.style.position = 'relative';
  }

  // Insert background layers at the beginning
  accueilSection.insertBefore(bgLayer1, accueilSection.firstChild);
  accueilSection.insertBefore(bgLayer2, accueilSection.firstChild);

  // Change background image every 5 seconds with crossfade
  setInterval(function() {
    currentIndex = (currentIndex + 1) % images.length;
    
    // Determine which layer to update
    if (bgLayer1.style.opacity === '1') {
      // Fade out layer 1, fade in layer 2
      bgLayer2.style.backgroundImage = `url('${images[currentIndex]}')`;
      bgLayer1.style.opacity = '0';
      bgLayer2.style.opacity = '1';
    } else {
      // Fade out layer 2, fade in layer 1
      bgLayer1.style.backgroundImage = `url('${images[currentIndex]}')`;
      bgLayer2.style.opacity = '0';
      bgLayer1.style.opacity = '1';
    }
  }, 5000);
});
