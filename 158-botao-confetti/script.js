const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const btn = document.getElementById("celebrar");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const colors = ["#f59e0b", "#ef4444", "#6366f1", "#22d3ee", "#10b981", "#ec4899"];
let particles = [];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function burst(x, y) {
  for (let i = 0; i < 60; i++) {
    const angle = rand(0, Math.PI * 2);
    const speed = rand(3, 9);
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      size: rand(4, 8),
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1,
      decay: rand(0.012, 0.025),
      rotation: rand(0, Math.PI * 2),
      rotSpeed: rand(-0.15, 0.15),
    });
  }
}

let raf;

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.18;
    p.vx *= 0.99;
    p.life -= p.decay;
    p.rotation += p.rotSpeed;

    if (p.life <= 0) {
      particles.splice(i, 1);
      continue;
    }

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.globalAlpha = p.life;
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
    ctx.restore();
  }

  if (particles.length) {
    raf = requestAnimationFrame(loop);
  }
}

btn.addEventListener("click", () => {
  const r = btn.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2);
  if (!raf || particles.length === 60) {
    loop();
  }
});
