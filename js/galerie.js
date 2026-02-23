// overlay pour avoir l'image plus grosse dans la galerie d'images
document.addEventListener('DOMContentLoaded', function() {
  const galleryImages = document.querySelectorAll('#gal-imgs img');

  galleryImages.forEach(img => {
    img.addEventListener('click', function() {
      openModal(this.src);
    });
  });

  function openModal(imageSrc) {
    // faire division d'overlay
    const overlay = document.createElement('div');
    overlay.id = 'gal-modal-overlay';
    overlay.className = 'gal-overlay';

    // conatiner de l'overlay
    const modal = document.createElement('div');
    modal.className = 'gal-modal';

    // bouton pour fermer l'overlay
    const closeBtn = document.createElement('button');
    closeBtn.className = 'gal-close-btn';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', closeModal);

    // faire image qui sera dans l'overlay
    const modalImg = document.createElement('img');
    modalImg.src = imageSrc;
    modalImg.className = 'gal-modal-img';

    // faire l'overlay ("modal")
    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // fermer overlay quand on clique sur le background de l'overlay
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeModal();
      }
    });

    // fermer overlay avec Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  }

  // systeme pour fermer l'overlay
  function closeModal() {
    const overlay = document.getElementById('gal-modal-overlay');
    const modal = overlay?.querySelector('.gal-modal');
    
    if (overlay && modal) {
      overlay.classList.add('closing');
      modal.classList.add('closing');
      
      // attendre la fin de l'animation avant de fermer l'overlay
      setTimeout(() => {
        overlay.remove();
      }, 300);
    }
  }
});
