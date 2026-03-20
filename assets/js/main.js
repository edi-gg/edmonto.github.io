// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
  });

  // Close nav when clicking a link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('open');
    });
  });
}

// Active nav highlighting based on scroll (homepage only)
const sections = document.querySelectorAll('section[id]');
if (sections.length) {
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('nav--active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('nav--active');
          }
        });
      }
    });
  });
}
