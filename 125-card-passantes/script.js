$.fn.commentCards = function () {
  return this.each(function () {
    var $this = $(this),
      $cards = $this.find(".cartao"),
      $current = $cards.filter(".cartao--current"),
      $next;

    $cards.on("click", function () {
      if (!$current.is(this)) {
        $cards.removeClass("cartao--current cartao--out cartao--next");
        $current.addClass("cartao--out");
        $current = $(this).addClass("cartao--current");
        $next = $current.next();
        $next = $next.length ? $next : $cards.first();
        $next.addClass("cartao--next");
      }
    });

    if (!$current.length) {
      $current = $cards.last();
      $cards.first().trigger("click");
    }

    $this.addClass("cartaos--active");
  });
};

$(".cartoes").commentCards();
