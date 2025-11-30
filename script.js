// Reveal on scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.setAttribute("data-visible", "true");
    }
  });
});

document.querySelectorAll('[data-animate]').forEach(el => {
  observer.observe(el);
});