(function () {
  var elementoBotao, tempoDeClique, intervaloDeTempo;

  var duracaoDoClique = 5000;
  var inicioDoClique = null;

  function quandoADOMEstiverPronta() {
    elementoBotao = document.querySelector(".segure-para-armar");
    elementoBotao.addEventListener("click", aoClicarNoBotao);
    elementoBotao.addEventListener("click", aoClicarLentoNoBotao);
    elementoBotao.addEventListener("mousedown", quandoOBotaoDoMouseBaixar);
    elementoBotao.addEventListener("mouseup", quandoOBotaoDoMouseSubir);
    elementoBotao.addEventListener("mouseleave", quandoOMouseSair);
  }

  function quandoOMouseSair(e) {
    cancelarCliqueLento(e);
  }

  function quandoOBotaoDoMouseSubir(e) {
    cancelarCliqueLento(e);
  }

  function quandoOBotaoDoMouseBaixar(e) {
    iniciarCliqueLento(e);
  }

  function iniciarCliqueLento(e) {
    inicioDoClique = Date.now();

    clearTimeout(tempoDeClique);
    tempoDeClique = setTimeout(function () {
      completeSlowClick(e);
    }, duracaoDoClique);

    clearInterval(intervaloDeTempo);
    intervaloDeTempo = setInterval(function () {
      continuarCliqueLento(e);
    }, 1000 / 60);
  }

  function continuarCliqueLento(e) {
    var tempoDecorrido = Date.now() - inicioDoClique;
    var intervalo = tempoDecorrido / duracaoDoClique;
    var porcentagem = (intervalo * 100).toFixed(4) + "%";
    var gradienteDeCores = [
      "rgba(246, 0, 4, .8)",
      "rgba(246, 0, 4, 0.8) " + porcentagem,
      "transparent " + porcentagem,
    ];

    var classeParaSacudir = "";
    if (intervalo > 0.05) {
      classeParaSacudir = "shake shake-little";
    }
    if (intervalo > 0.33) {
      classeParaSacudir = "shake";
    }
    if (intervalo > 0.75) {
      classeParaSacudir = "shake shake-hard";
    }

    e.target.className =
      "segure-para-armar shake-constant " + classeParaSacudir;

    e.target.style.backgroundImage =
      "linear-gradient(to right, " + gradienteDeCores.join(", ") + " )";
  }

  function completeSlowClick(e) {
    continuarCliqueLento(e);
    var clique = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    clique.slowClick = true;
    e.target.dispatchEvent(clique);
    finishSlowClick(e);
  }

  function cancelarCliqueLento(e) {
    finishSlowClick(e);
  }

  function finishSlowClick(e) {
    e.target.style.background = null;
    e.target.className = "segure-para-armar shake-constant";
    clearTimeout(tempoDeClique);
    clearInterval(intervaloDeTempo);
  }

  function aoClicarNoBotao(e) {
    if (e.slowClick !== true) {
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
    }
  }

  function aoClicarLentoNoBotao(e) {
    window.location.href = "https://i.imgur.com/rU7rGx7.mp4";
  }

  document.addEventListener("DOMContentLoaded", quandoADOMEstiverPronta);
})();
