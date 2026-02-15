// Menu toggle functionality
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const navOverlay = document.querySelector('.nav-overlay');
const navClose = document.querySelector('.nav-close');

function openMenu() {
  nav.classList.add('open');
  if (navOverlay) navOverlay.classList.add('active');
  menu.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  nav.classList.remove('open');
  if (navOverlay) navOverlay.classList.remove('active');
  menu.classList.remove('active');
  document.body.style.overflow = '';
}

if (menu) {
  menu.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

// Close button in navigation
if (navClose) {
  navClose.addEventListener('click', closeMenu);
}

// Close menu when clicking overlay
if (navOverlay) {
  navOverlay.addEventListener('click', closeMenu);
}

// Close menu on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('open')) {
    closeMenu();
  }
});
