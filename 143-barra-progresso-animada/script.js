const fill = document.getElementById("fill");
const pct = document.getElementById("pct");
const bar = document.getElementById("bar");
const btn = document.getElementById("start");

let value = 0;
let timer;

function setProgress(v) {
  value = Math.min(100, Math.max(0, v));
  fill.style.width = `${value}%`;
  pct.textContent = `${Math.round(value)}%`;
  bar.setAttribute("aria-valuenow", String(Math.round(value)));
}

btn.addEventListener("click", () => {
  btn.disabled = true;
  value = 0;
  setProgress(0);
  clearInterval(timer);
  timer = setInterval(() => {
    const step = 2 + Math.random() * 6;
    setProgress(value + step);
    if (value >= 100) {
      clearInterval(timer);
      btn.disabled = false;
    }
  }, 180);
});
