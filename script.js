document.addEventListener('DOMContentLoaded', () => {
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Any other JS you already have can go here
  // Example: Blink effect (if you added it via JS)
  // const blinkElement = document.querySelector('.blink');
  // if (blinkElement) {
  //   setInterval(() => {
  //     blinkElement.style.visibility = 
  //       blinkElement.style.visibility === 'hidden' ? 'visible' : 'hidden';
  //   }, 1000);
  // }

});
