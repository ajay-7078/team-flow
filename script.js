
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navActions.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navActions.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Close menu when clicking on Sign up button
document.querySelectorAll('.nav-actions a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navActions.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

const revealEls = document.querySelectorAll(
  '.feature-card, .price-card, blockquote, .showcase-copy, .showcase-art, .section-head'
);
revealEls.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => io.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        navLinks.classList.remove('active');
        navActions.classList.remove('active');
        navToggle.classList.remove('active');
      }
    }
  });
});
