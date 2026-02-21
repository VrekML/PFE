// Gallery popup functionality
document.addEventListener('DOMContentLoaded', function() {
  const galleryImages = document.querySelectorAll('#gal-imgs img');

  galleryImages.forEach(img => {
    img.addEventListener('click', function() {
      openModal(this.src);
    });
  });

  function openModal(imageSrc) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'gal-modal-overlay';
    overlay.className = 'gal-overlay';

    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'gal-modal';

    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'gal-close-btn';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', closeModal);

    // Create image element
    const modalImg = document.createElement('img');
    modalImg.src = imageSrc;
    modalImg.className = 'gal-modal-img';

    // Assemble modal
    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Close modal when clicking overlay background
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeModal();
      }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  }

  function closeModal() {
    const overlay = document.getElementById('gal-modal-overlay');
    const modal = overlay?.querySelector('.gal-modal');
    
    if (overlay && modal) {
      overlay.classList.add('closing');
      modal.classList.add('closing');
      
      // Wait for animation to complete before removing
      setTimeout(() => {
        overlay.remove();
      }, 300);
    }
  }
});
