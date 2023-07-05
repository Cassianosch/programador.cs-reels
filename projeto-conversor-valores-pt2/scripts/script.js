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

elCard1RodatetoInputValor.addEventListener("keyup", (evento) => {
  buscarValorConvertido("input_superior");
});

elCard2RodapeInputValor.addEventListener("keyup", (evento) => {
  valorParaBaseParaConversao = evento.target.value;
  buscarValorConvertido("input_inferior");
});

for (var i = 0; i < elCard1RodatetoListagemTiposLIItems.length; i++) {
  elCard1RodatetoListagemTiposLIItems[i].addEventListener("click", function () {
    var valorLISelecionado = this.getAttribute("data-value");
    let valorDoTipoParaConverter = valorLISelecionado;
    if (tipoAtual === valorLISelecionado) return;

    tipoAtual = valorDoTipoParaConverter;

    for (var i = 0; i < elCard1RodatetoListagemTiposLIItems.length; i++) {
      elCard1RodatetoListagemTiposLIItems[i].classList.remove("selecionado");
    }
    this.classList.add("selecionado");

    let buscaDeValorConvertido = buscarValorConvertido("input_superior");
    if (!buscaDeValorConvertido) return;
  });
}

for (var i = 0; i < elCard2RodapeListagemTiposLIItems.length; i++) {
  elCard2RodapeListagemTiposLIItems[i].addEventListener("click", function () {
    var valorLISelecionado = this.getAttribute("data-value");
    let valorDoTipoParaConverter = valorLISelecionado;

    if (tipoAtual === valorLISelecionado) return;

    tipoParaConverter = valorDoTipoParaConverter;
    for (var i = 0; i < elCard2RodapeListagemTiposLIItems.length; i++) {
      elCard2RodapeListagemTiposLIItems[i].classList.remove("selecionado");
    }
    this.classList.add("selecionado");

    let buscaDeValorConvertido = buscarValorConvertido("input_inferior");
    if (!buscaDeValorConvertido) return;
  });
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
  console.log("====================================");
  console.log("teste");
  console.log("====================================");
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
      console.log(erro);
      //   alert("Erro ao buscar valor convertido, tente novamente mais tarde.");
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
