$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true,
});
$(document).ready(function () {
  $(".custom-carousel .elemento").click(function () {
    $(".custom-carousel .elemento").not($(this)).removeClass("elemento__ativo");
    $(this).toggleClass("elemento__ativo");
  });
});
