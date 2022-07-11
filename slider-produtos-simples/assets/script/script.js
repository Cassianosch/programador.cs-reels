$(document).ready(function () {
  $(".js-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
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
    data.forEach((el) => {
      $(".js-slider").slick(
        "slickAdd",
        `
        <div class="card">
            <div class="like"></div>
            <img class="product"
                src="${el.image}" alt="Foto do produtos - ${el.name}" />
            <h4 class="title" title="${el.name}">${el.name}</h4>
            <div class="rating">
                ${handleRating(el.rating)}
            </div>
            <div class="price">
                <h5>${handlePrice(el.price)}</h5>
                <h5>${handlePrice(el.price, true)}</h5>
            </div>
            <a class="button">Adicionar ao Carrinho</a>
        </div>
      `
      );
    });
  });

function handleRating(rating) {
  let htmlToReturn = "";
  const maximumRatingStars = 5;

  for (let i = 0; i < rating; i++) {
    htmlToReturn = htmlToReturn + "&#9733;";
  }

  for (let j = 0; j < maximumRatingStars - rating; j++) {
    htmlToReturn = htmlToReturn + "&#9734;";
  }

  return htmlToReturn;
}

function handlePrice(price, discount = false) {
  if (discount) {
    price = price * 0.9;
    // price *= 0.9;
  }
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
