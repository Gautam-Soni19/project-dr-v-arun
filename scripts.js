const revealElements = document.querySelectorAll(".card, .hero-card, .section-title");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});