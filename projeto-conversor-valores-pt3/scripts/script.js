let elCard1RodatetoInputValor = document.querySelector(
  "#js-card1__rodateto__input__valor"
);
let elCard1RodatetoListagemTipos = document.querySelector(
  "#js-card1__rodateto__listagem__tipos"
);

var elCard1RodatetoListagemTiposLIItems =
  elCard1RodatetoListagemTipos.getElementsByTagName("li");

let elCard2RodapeInputValor = document.querySelector(
  "#js-card2__rodape__input__valor"
);
let elCard2RodapeListagemTipos = document.querySelector(
  "#js-card2__rodape__listagem__tipos"
);
var elCard2RodapeListagemTiposLIItems =
  elCard2RodapeListagemTipos.getElementsByTagName("li");

let tipoAtual = "BRL";
let tipoParaConverter = "USD";
let valorInputSuperiorBaseParaConversao = 0;

elCard1RodatetoInputValor.addEventListener("keyup", () => {
  buscarValorConvertido("input_superior");
});

elCard2RodapeInputValor.addEventListener("keyup", (evento) => {
  valorParaBaseParaConversao = evento.target.value;
  buscarValorConvertido("input_inferior");
});

function criandoEscutadoresDosElementosLI() {
  escutadorElementosLI(elCard1RodatetoListagemTiposLIItems, "input_superior");
  escutadorElementosLI(elCard2RodapeListagemTiposLIItems, "input_inferior");
}

function escutadorElementosLI(todosOsElementosLI, tipoElementoParaConverter) {
  for (var i = 0; i < todosOsElementosLI.length; i++) {
    todosOsElementosLI[i].addEventListener("click", function () {
      var valorLISelecionado = this.getAttribute("data-value");
      let valorDoTipoParaConverter = valorLISelecionado;

      if (tipoAtual === valorLISelecionado) return;
      if (tipoElementoParaConverter === "input_superior") {
        tipoAtual = valorDoTipoParaConverter;
      }
      if (tipoElementoParaConverter === "input_inferior") {
        tipoParaConverter = valorDoTipoParaConverter;
      }
      for (var i = 0; i < todosOsElementosLI.length; i++) {
        todosOsElementosLI[i].classList.remove("selecionado");
      }
      this.classList.add("selecionado");

      let buscaDeValorConvertido = buscarValorConvertido(
        tipoElementoParaConverter
      );
      if (!buscaDeValorConvertido) return;
    });
  }
}

async function buscarValorConvertido(tipoDeInput) {
  if (
    tipoDeInput === "input_superior" &&
    ["", 0].includes(elCard1RodatetoInputValor.value)
  ) {
    elCard2RodapeInputValor.value = 0;
    return false;
  }
  if (
    tipoDeInput === "input_inferior" &&
    ["", 0].includes(elCard2RodapeInputValor.value)
  ) {
    elCard1RodatetoInputValor.value = 0;
    return false;
  }

  if (tipoAtual === tipoParaConverter) {
    elCard2RodapeInputValor.value = elCard1RodatetoInputValor.value;
    return false;
  }

  let url = `https://economia.awesomeapi.com.br/${tipoAtual}-${tipoParaConverter}/1`;
  await fetch(url)
    .then((resposta) => {
      return resposta.json();
    })
    .then((dados) => {
      valorInputSuperiorBaseParaConversao = dados[0].bid;
      converterValor(tipoDeInput);
    })
    .catch((erro) => {
      alert("Erro ao buscar valor convertido, tente novamente mais tarde.");
    });
  return true;
}

function converterValor(tipoDeInput) {
  if (tipoDeInput === "input_superior") {
    let valorDigitado = elCard1RodatetoInputValor.value;
    let valorConvertido = valorDigitado * valorInputSuperiorBaseParaConversao;
    elCard2RodapeInputValor.value = valorConvertido.toFixed(2);
  }
  if (tipoDeInput === "input_inferior") {
    let valorDigitado = elCard2RodapeInputValor.value;
    let valorConvertido = valorDigitado / valorInputSuperiorBaseParaConversao;
    elCard1RodatetoInputValor.value = valorConvertido.toFixed(2);
  }
}

criandoEscutadoresDosElementosLI();
