let elementosBotoes = document.querySelectorAll("button");
let elementoImagemRatinho = document.querySelector(".js-imagem-ratinho");

elementosBotoes.forEach((botaoCorrente) => {
  botaoCorrente.addEventListener("click", () => {
    console.log(botaoCorrente.dataset.botao);
    let musicaParaTocar = document.querySelector(
      `audio[data-musica="${botaoCorrente.dataset.botao}"]`
    );
    document
      .querySelectorAll("audio")
      .forEach((musicaCorrente) => musicaCorrente.pause());
    musicaParaTocar.currentTime = 0;
    musicaParaTocar.play();
  });
  botaoCorrente.addEventListener("mouseenter", () => {
    elementoImagemRatinho.classList.add("aparecer");
  });
  botaoCorrente.addEventListener("mouseleave", () => {
    elementoImagemRatinho.classList.remove("aparecer");
  });
});
