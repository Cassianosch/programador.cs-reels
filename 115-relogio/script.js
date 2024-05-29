const template = document.querySelector("#numerais-relogio");

document.querySelectorAll("ul").forEach((n, i) => {
  const clone = template.content.cloneNode(true);
  n.appendChild(clone);
});

const update = function (delta) {
  const d = new Date();
  document.body.style.setProperty(
    "--seconds-p",
    Math.floor(d.getSeconds() / 10)
  );
  document.body.style.setProperty("--seconds-a", d.getSeconds() % 10);

  document.body.style.setProperty(
    "--minutes-p",
    Math.floor(d.getMinutes() / 10)
  );
  document.body.style.setProperty("--minutes-a", d.getMinutes() % 10);

  document.body.style.setProperty("--hours-p", Math.floor(d.getHours() / 10));
  document.body.style.setProperty("--hours-a", d.getHours() % 10);

  window.requestAnimationFrame(update);
};
window.requestAnimationFrame(update);
