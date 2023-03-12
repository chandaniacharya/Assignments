const toggleButton = document.getElementById('toggle-menu');
const navElement = document.querySelector('nav');

toggleButton.addEventListener('click', () => {
  if (navElement.style.display === 'flex') {
    navElement.style.display = 'none';
  } else {
    navElement.style.display = 'flex';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    navElement.style.display = 'flex';
    toggleButton.style.display = 'none';
  } else {
    navElement.style.display = 'none';
    toggleButton.style.display = 'block';
  }
});
