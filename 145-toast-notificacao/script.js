const region = document.getElementById("region");

function showToast(kind, message) {
  const el = document.createElement("div");
  el.className = `toast toast--${kind}`;
  el.innerHTML = `
    <span class="toast__icon" aria-hidden="true">${kind === "ok" ? "✓" : "!"}</span>
    <p class="toast__text">${message}</p>
    <button type="button" class="toast__close" aria-label="Fechar">×</button>
  `;
  const close = () => {
    el.classList.add("is-out");
    el.addEventListener("animationend", () => el.remove(), { once: true });
  };
  el.querySelector(".toast__close").addEventListener("click", close);
  region.appendChild(el);
  setTimeout(close, 4200);
}

document.getElementById("toastOk").addEventListener("click", () => {
  showToast("ok", "Alterações salvas com sucesso.");
});

document.getElementById("toastWarn").addEventListener("click", () => {
  showToast("warn", "Sua sessão expira em 5 minutos.");
});
