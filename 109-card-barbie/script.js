$(".elemento__cartao-item").click(function () {
  $(".elemento__cartao-item").removeClass("elemento__cartao-item--ativo");
  $(this).addClass("elemento__cartao-item--ativo");
});
