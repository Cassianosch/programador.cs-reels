$(document).ready(function () {
  $.fn.slideFadeToggle = function (velocidade, tipo, callback) {
    return this.animate(
      { opacity: "toggle", height: "toggle" },
      velocidade,
      tipo,
      callback
    );
  };

  $(".elemento__geral li").each(function () {
    var text = $(this).children("span").text();
    $(this).children("span").after($("<span />").text(text));
  });

  $(".elemento__geral li .elemento__exclusao").on("click", function (e) {
    $(this).addClass("active hover");
    var faixa = $("<div />").addClass("faixa");
    var li = $(this).parent();
    var span = $(this).parent().children("span:first-child");
    setTimeout(function () {
      li.append(faixa);
      faixa.css("right", li.width() - span.width() - 28 + 6);
      faixa.animate(
        {
          width: span.width() + 22,
        },
        400,
        function () {
          li.addClass("faixa__cortadora--externo");
          faixa
            .css({
              left: 0,
              right: "auto",
            })
            .animate(
              {
                width: 0,
              },
              200,
              function () {
                li.addClass("faixa__cortadora");
                setTimeout(function () {
                  li.slideFadeToggle(300, function () {
                    li.remove();
                  });
                }, 500);
              }
            );
        }
      );
    }, 200);
  });
});
