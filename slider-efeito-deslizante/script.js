// Slick slider init

$(".carrosel").slick({
  arrows: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  draggable: false,
});

$(".carrosel")
  .on("beforeChange", () => {
    $(".slick-list").addClass("do-transition");
  })
  .on("afterChange", () => {
    $(".slick-list").removeClass("do-transition");
  });
