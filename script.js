// CoverPoint — shared JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  var burger = document.querySelector('.hamburger');
  var nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Auto-update copyright year
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
});
