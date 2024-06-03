function scrollFooter(scrollY, heightFooter) {
  console.log(scrollY);
  console.log(heightFooter);

  if (scrollY >= heightFooter) {
    $("footer").css({
      bottom: "0px",
    });
  } else {
    $("footer").css({
      bottom: "-" + heightFooter + "px",
    });
  }
}

$(window).load(function () {
  var windowHeight = $(window).height(),
    footerHeight = $("footer").height(),
    heightDocument =
      windowHeight + $(".content").height() + $("footer").height() - 20;

  // Definindo o tamanho do elemento pra animar
  $("#parallax__geral, #parallax__geral--controle").css({
    height: heightDocument + "px",
  });

  // Definindo o tamanho dos elementos header e conteúdo
  $("header").css({
    height: windowHeight + "px",
    "line-height": windowHeight + "px",
  });

  $(".parallax__geral--interno").css({
    "margin-top": windowHeight + "px",
  });

  scrollFooter(window.scrollY, footerHeight);

  // ao dar rolagem
  window.onscroll = function () {
    var scroll = window.scrollY;

    $("#parallax__geral--controle").css({
      top: "-" + scroll + "px",
    });

    $("header").css({
      "background-position-y": 50 - (scroll * 100) / heightDocument + "%",
    });

    scrollFooter(scroll, footerHeight);
  };
});
