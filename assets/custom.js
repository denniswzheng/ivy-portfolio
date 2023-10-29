// Add custom JS
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.nav-toggle');

  navToggle.addEventListener('click', function() {
      navbar.classList.toggle('active'); // Toggle the 'active' class on the navbar
  });
});