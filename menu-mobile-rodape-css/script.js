$(".conteudo__menu__rodape").each(function () {
  var self = $(this);
  $("<em />")
    .appendTo(self)
    .css(
      "--offset",
      self.find(".item__ativo").position().left +
        self.find(".item__ativo").width() / 2
    );
});

$(".conteudo__menu__rodape ul li a").on("click touch", function (e) {
  e.preventDefault();

  var self = $(this);

  if (!self.parent().hasClass("item__ativo")) {
    self.parent().parent().children("li").removeClass("item__ativo");
    self.parent().addClass("item__ativo");
    self
      .parent()
      .parent()
      .parent()
      .children("em")
      .css(
        "--offset",
        self.parent().position().left + self.parent().width() / 2
      );
  }
});
