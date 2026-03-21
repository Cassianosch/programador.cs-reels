const counters = document.querySelectorAll("[data-target]");
const duration = 1600;

function animate(el) {
  const target = +el.dataset.target;
  const start = performance.now();

  function step(now) {
    const t = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(ease * target).toLocaleString("pt-BR");
    if (t < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        animate(e.target);
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((c) => obs.observe(c));
