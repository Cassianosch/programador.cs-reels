const elemento__rodape = document.querySelector(".elemento__rodape");
const cobertura__completa = document.querySelector(".cobertura__completa");
const count = 110;
const size = 50;
for (let i = 0; i <= count; i += 1) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  elemento__rodape.appendChild(dot);
}
const dots = Array.from(document.querySelectorAll(".dot"));

const updateText = (texto__interno) => {
  Array.from(document.querySelectorAll(".texto__interno")).forEach(
    (e) => (e.innerHTML = texto__interno)
  );
};

const reset = () => {
  dots.forEach((dot, i) => {
    const x = (i / count) * (190 + size) - size / 2;
    const y = Math.random(1) * 52 - size / 2;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.style.opacity = 1;
    dot.style.transform = "scale(1)";
  });
};
reset();

cobertura__completa.addEventListener("click", () => {
  anime({
    easing: "linear",
    targets: document.querySelectorAll(".dot"),
    opacity: [{ value: 0, duration: 600, delay: anime.stagger(10) }],
    translateX: {
      value: function () {
        return anime.random(-30, 30);
      },
      duration: 400,
      delay: anime.stagger(10),
    },
    translateY: {
      value: function () {
        return anime.random(-30, 30);
      },
      duration: 400,
      delay: anime.stagger(10),
    },
    scale: {
      value: function () {
        return 0;
      },
      duration: 400,
      delay: anime.stagger(10),
    },
  });
  anime({
    easing: "linear",
    delay: 4000,
    complete: () => {
      updateText("Enviado");
      setTimeout(() => {
        updateText("Enviar");
        reset();
      }, 3000);
    },
  });
});
