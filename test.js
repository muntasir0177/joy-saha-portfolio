// ── Navbar scroll blur ──
const navbar = document.getElementById('navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('backdrop-blur-md', 'bg-[#070d1e]/90', 'shadow-lg');
      navbar.classList.remove('py-6', 'lg:py-10');
      navbar.classList.add('py-4');
    } else {
      navbar.classList.remove('backdrop-blur-md', 'bg-[#070d1e]/90', 'shadow-lg');
      navbar.classList.remove('py-4');
      navbar.classList.add('py-6', 'lg:py-10');
    }
  });
}

// ── Mobile menu toggle ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  const hamTop = hamburger.querySelector('.ham-top');
  const hamMid = hamburger.querySelector('.ham-mid');
  const hamBot = hamburger.querySelector('.ham-bot');
  let menuOpen = false;

  const toggleMenu = () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
      hamTop.style.transform = 'translateY(7px) rotate(45deg)';
      hamMid.style.opacity = '0';
      hamMid.style.transform = 'scaleX(0)';
      hamBot.style.width = '24px';
      hamBot.style.transform = 'translateY(-7px) rotate(-45deg)';
      // Adding a background to navbar when menu is open (if not scrolled)
      navbar.classList.add('bg-[#070d1e]');
    } else {
      mobileMenu.style.maxHeight = '0';
      hamTop.style.transform = '';
      hamMid.style.opacity = '';
      hamMid.style.transform = '';
      hamBot.style.width = '';
      hamBot.style.transform = '';
      if (window.scrollY <= 20) {
        navbar.classList.remove('bg-[#070d1e]');
      }
    }
  };

  hamburger.addEventListener('click', toggleMenu);

  // Close menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (menuOpen) toggleMenu();
    });
  });
}