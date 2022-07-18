const menu = document.querySelector('#menu');
const closed = document.querySelector('#close');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
  nav.classList.add('open');
  menu.style.display = 'none';
  closed.style.display = 'block';
});

closed.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.style.display = 'block';
  closed.style.display = 'none';
});
