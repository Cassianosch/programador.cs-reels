const elBotao = document.querySelector("button");
const elCheckbox = document.querySelector("#elemento__checkbox");

const mudarCorBackground = () => {
  const foiClicado = elBotao.matches("[aria-pressed=true]");
  if (elCheckbox.checked)
    document.body.setAttribute("data-modo-escuro", foiClicado ? false : true);
  elBotao.setAttribute("aria-pressed", foiClicado ? false : true);
};

elBotao.addEventListener("click", mudarCorBackground);
