$(document).ready(function () {
  $(".js-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

fetch(
  "https://raw.githubusercontent.com/Cassianosch/programador.cs-reels/develop/slider-produtos-simples/assets/data/data.json"
)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      $(".js-slider").slick("slickAdd", `<h1>@programador.cs</h1>`);
    });
  });
