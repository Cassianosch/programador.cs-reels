// Hy! You can really help me if you donate me leastways 1 dollor :)
// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

var mouse = {
    X: 0,
    Y: 0,
    CX: 0,
    CY: 0,
  },
  caixa__card = {
    X: mouse.X,
    Y: mouse.Y,
    CX: mouse.CX,
    CY: mouse.CY,
  },
  imags = [
    "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/109243/pexels-photo-109243.jpeg?auto=compress&cs=tinysrgb",
    "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?&auto=compress&cs=tinysrgb",
    "https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  ];

$(".caixa__card").on("mousemove", function (e) {
  mouse.X = e.pageX - $(this).offset().left - $(".caixa__card").width() / 2;
  mouse.Y = e.pageY - $(this).offset().top - $(".caixa__card").height() / 2;
});

$(".caixa__card").on("mouseleave", function (e) {
  mouse.X = mouse.CX;
  mouse.Y = mouse.CY;
});

setInterval(function () {
  caixa__card.CY += (mouse.Y - caixa__card.CY) / 12;
  caixa__card.CX += (mouse.X - caixa__card.CX) / 12;

  $(".caixa__card .detalhe__luz").css(
    "background",
    "radial-gradient(circle at " +
      mouse.X +
      "px " +
      mouse.Y +
      "px, #fff, transparent)"
  );
  $(".caixa__card").css({
    transform:
      "scale(1.03) translate(" +
      caixa__card.CX * 0.05 +
      "px, " +
      caixa__card.CY * 0.05 +
      "px) rotateX(" +
      caixa__card.CY * 0.05 +
      "deg) rotateY(" +
      caixa__card.CX * 0.05 +
      "deg)",
  });
}, 20);

$(".conteudo__geral .elemento__interno").each(function (i) {
  if (i == 0) {
    $(this).addClass("active");
    $(this).next().addClass("next");
    $(this).prev().addClass("prev");
  }

  $(this).attr("id", "slide-" + i);

  $(this).prepend(
    $("<div>", {
      class: "blur",
      style: "background-image: url(" + imags[i] + ");",
    }),
    $("<div>", {
      class: "bg",
      style: "background-image: url(" + imags[i] + ");",
    })
  );

  $(this)
    .find(".caixa__card")
    .css("background-image", "url(" + imags[i] + ")");

  $(".caixa__navegacao .elemento__navegacao-items").append(
    $("<li>", { class: i == 0 ? "active" : "", id: i }).on(
      "click",
      function () {
        var cSlide = $(".conteudo__geral #slide-" + $(this).attr("id"));

        $(".caixa__navegacao .elemento__navegacao-items li").removeClass(
          "active"
        );
        $(this).addClass("active");

        $(".conteudo__geral .elemento__interno").removeClass(
          "active prev next"
        );
        cSlide.addClass("active");
        cSlide.next().addClass("next");
        cSlide.prev().addClass("prev");
      }
    )
  );
});
