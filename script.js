const menu = document.querySelector('.menu');
const nav = document.querySelector('.desktop-nav');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('mobile-open');
  menu.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.desktop-nav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('mobile-open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
