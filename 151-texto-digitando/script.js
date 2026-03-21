const el = document.getElementById("type");
const phrases = [
  "Olá, eu sou dev front-end.",
  "Amo HTML, CSS e JavaScript.",
  "Crio interfaces bonitas.",
  "Siga @programador.cs 🚀",
];

let phraseIdx = 0;
let charIdx = 0;
let deleting = false;

function tick() {
  const current = phrases[phraseIdx];
  el.textContent = current.substring(0, charIdx);

  if (!deleting) {
    charIdx++;
    if (charIdx > current.length) {
      deleting = true;
      return setTimeout(tick, 1800);
    }
  } else {
    charIdx--;
    if (charIdx < 0) {
      charIdx = 0;
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      return setTimeout(tick, 400);
    }
  }

  const speed = deleting ? 35 : 70 + Math.random() * 40;
  setTimeout(tick, speed);
}

tick();
