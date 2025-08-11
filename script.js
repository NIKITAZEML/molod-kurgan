const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu-list');
const closeBtn = document.querySelector('.menu-close');

const isMobile = () => window.matchMedia('(max-width: 860px)').matches;

if (toggle && menu) {
  const closeMenu = () => {
    menu.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    menu.classList.add('show');
    toggle.setAttribute('aria-expanded', 'true');
  };

  const syncMenuForViewport = () => {
    if (isMobile()) {
      menu.classList.remove('show');
      toggle.style.display = 'inline-grid';
    } else {
      toggle.style.display = 'none';
      menu.classList.add('show');
    }
  };

  toggle.addEventListener('click', () => {
    if (!isMobile()) return;
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    expanded ? closeMenu() : openMenu();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  document.addEventListener('click', (e) => {
    if (!isMobile()) return;
    const isClickInside = menu.contains(e.target) || toggle.contains(e.target);
    if (!isClickInside) closeMenu();
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => isMobile() && closeMenu());
  });

  window.addEventListener('resize', syncMenuForViewport);
  window.addEventListener('orientationchange', syncMenuForViewport);
  syncMenuForViewport();
}

document.documentElement.style.scrollBehavior = 'smooth';