const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.getElementById('sidebar-overlay');

function toggleSidebar() {
  const isOpen = sidebar.classList.toggle('open');
  overlay.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
}

hamburger.addEventListener('click', toggleSidebar);

overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
});

document.addEventListener('click', (e) => {
  if (
    !sidebar.contains(e.target) &&
    !hamburger.contains(e.target) &&
    !overlay.contains(e.target) &&
    sidebar.classList.contains('open')
  ) {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});