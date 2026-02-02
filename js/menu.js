const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
  if(nav.style.left === '0px'){
    nav.style.left = '-100%';
  } else {
    nav.style.left = '0px';
  }
});

// Close menu if click outside
document.addEventListener('click', (e) => {
  if(!nav.contains(e.target) && !menu.contains(e.target)){
    nav.style.left = '-100%';
  }
});
