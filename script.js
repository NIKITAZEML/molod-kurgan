const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu-list');

if (toggle && menu) {
  const closeMenu = () => {
    menu.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    const isClickInside = menu.contains(e.target) || toggle.contains(e.target);
    if (!isClickInside) closeMenu();
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });
}

document.documentElement.style.scrollBehavior = 'smooth';