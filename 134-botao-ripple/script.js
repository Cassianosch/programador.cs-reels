const btn = document.getElementById("rippleBtn");

btn.addEventListener("click", (e) => {
  const circle = document.createElement("span");
  const d = Math.max(btn.offsetWidth, btn.offsetHeight);
  const rect = btn.getBoundingClientRect();
  circle.className = "ripple";
  circle.style.width = circle.style.height = `${d}px`;
  circle.style.left = `${e.clientX - rect.left - d / 2}px`;
  circle.style.top = `${e.clientY - rect.top - d / 2}px`;
  btn.appendChild(circle);
  circle.addEventListener("animationend", () => circle.remove());
});
