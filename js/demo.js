document.addEventListener('DOMContentLoaded', function() {
  const demonstrations = document.getElementById('demonstrations');
  const demoBtns = document.querySelectorAll('.demo-vid');
  const leftBtn = document.getElementById('demo-bouton-l').querySelector('button');
  const rightBtn = document.getElementById('demo-bouton-r').querySelector('button');
  
  let currentIndex = 0;
  const totalDemos = demoBtns.length;
  
  // Update carousel position by translating the entire container
  function updateCarousel() {
    const offset = -currentIndex * 100;
    demonstrations.style.transform = `translateX(${offset}%)`;
  }
  
  // Left button - go to previous demo
  leftBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalDemos) % totalDemos;
    updateCarousel();
  });
  
  // Right button - go to next demo
  rightBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalDemos;
    updateCarousel();
  });
  
  // Initialize carousel position
  updateCarousel();
});
