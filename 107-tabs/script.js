$(document).on(
  "click",
  ".conteudo__geral .estrutura__grid-caixa div",
  function () {
    var numberIndex = $(this).index();

    if (!$(this).is("estrutura__grid-selecionado")) {
      $(".conteudo__geral .estrutura__grid-caixa div").removeClass(
        "estrutura__grid-selecionado"
      );
      $(".conteudo__geral ul li").removeClass("estrutura__grid-selecionado");

      $(this).addClass("estrutura__grid-selecionado");
      $(".conteudo__geral ul")
        .find("li:eq(" + numberIndex + ")")
        .addClass("estrutura__grid-selecionado");

      var listItemHeight = $(".conteudo__geral ul")
        .find("li:eq(" + numberIndex + ")")
        .innerHeight();
      $(".conteudo__geral ul").height(listItemHeight + "px");
    }
  }
);
