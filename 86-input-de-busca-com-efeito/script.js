function movimentarElementoDeBusca(obj, evt) {
  var container = $(obj).closest(".caixa__geral");
  if (!container.hasClass("elemento__ativo")) {
    container.addClass("elemento__ativo");
    evt.preventDefault();
  } else if (
    container.hasClass("elemento__ativo") &&
    $(obj).closest(".caixa__interna-input").length == 0
  ) {
    container.removeClass("elemento__ativo");
    container.find(".elemento__input").val("");
  }
}
