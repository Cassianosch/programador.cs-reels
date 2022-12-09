console.clear();

const { gsap, imagesLoaded } = window;

const buttons = {
  prev: document.querySelector(".btn-esquerda"),
  next: document.querySelector(".btn--direita"),
};
const cardsContainerEl = document.querySelector(".conteudo__cards");
const appBgContainerEl = document.querySelector(".conteudo__background");

const cardInfosContainerEl = document.querySelector(".conteudo__informacoes");

buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction) {
  const currentCardEl = cardsContainerEl.querySelector(".card--corrente");
  const previousCardEl = cardsContainerEl.querySelector(".card--anterior");
  const nextCardEl = cardsContainerEl.querySelector(".card--proximo");

  const currentBgImageEl = appBgContainerEl.querySelector(".imagem--corrente");
  const previousBgImageEl = appBgContainerEl.querySelector(".imagem--anterior");
  const nextBgImageEl = appBgContainerEl.querySelector(".imagem--proxima");

  changeInfo(direction);
  swapCardsClass();

  removeCardEvents(currentCardEl);

  function swapCardsClass() {
    currentCardEl.classList.remove("card--corrente");
    previousCardEl.classList.remove("card--anterior");
    nextCardEl.classList.remove("card--proximo");

    currentBgImageEl.classList.remove("imagem--corrente");
    previousBgImageEl.classList.remove("imagem--anterior");
    nextBgImageEl.classList.remove("imagem--proxima");

    currentCardEl.style.zIndex = "50";
    currentBgImageEl.style.zIndex = "-2";

    if (direction === "right") {
      previousCardEl.style.zIndex = "20";
      nextCardEl.style.zIndex = "30";

      nextBgImageEl.style.zIndex = "-1";

      currentCardEl.classList.add("card--anterior");
      previousCardEl.classList.add("card--proximo");
      nextCardEl.classList.add("card--corrente");

      currentBgImageEl.classList.add("imagem--anterior");
      previousBgImageEl.classList.add("imagem--proxima");
      nextBgImageEl.classList.add("imagem--corrente");
    } else if (direction === "left") {
      previousCardEl.style.zIndex = "30";
      nextCardEl.style.zIndex = "20";

      previousBgImageEl.style.zIndex = "-1";

      currentCardEl.classList.add("card--proximo");
      previousCardEl.classList.add("card--corrente");
      nextCardEl.classList.add("card--anterior");

      currentBgImageEl.classList.add("imagem--proxima");
      previousBgImageEl.classList.add("imagem--corrente");
      nextBgImageEl.classList.add("imagem--anterior");
    }
  }
}

function changeInfo(direction) {
  let currentInfoEl = cardInfosContainerEl.querySelector(
    ".informacoes__corrente"
  );
  let previousInfoEl = cardInfosContainerEl.querySelector(
    ".informacoes__anterior"
  );
  let nextInfoEl = cardInfosContainerEl.querySelector(".informacoes__seguinte");

  gsap
    .timeline()
    .to([buttons.prev, buttons.next], {
      duration: 0.2,
      opacity: 0.5,
      pointerEvents: "none",
    })
    .to(
      currentInfoEl.querySelectorAll(".texto"),
      {
        duration: 0.4,
        stagger: 0.1,
        translateY: "-120px",
        opacity: 0,
      },
      "-="
    )
    .call(() => {
      swapInfosClass(direction);
    })
    .call(() => initCardEvents())
    .fromTo(
      direction === "right"
        ? nextInfoEl.querySelectorAll(".texto")
        : previousInfoEl.querySelectorAll(".texto"),
      {
        opacity: 0,
        translateY: "40px",
      },
      {
        duration: 0.4,
        stagger: 0.1,
        translateY: "0px",
        opacity: 1,
      }
    )
    .to([buttons.prev, buttons.next], {
      duration: 0.2,
      opacity: 1,
      pointerEvents: "all",
    });

  function swapInfosClass() {
    currentInfoEl.classList.remove("informacoes__corrente");
    previousInfoEl.classList.remove("informacoes__anterior");
    nextInfoEl.classList.remove("informacoes__seguinte");

    if (direction === "right") {
      currentInfoEl.classList.add("informacoes__anterior");
      nextInfoEl.classList.add("informacoes__corrente");
      previousInfoEl.classList.add("informacoes__seguinte");
    } else if (direction === "left") {
      currentInfoEl.classList.add("informacoes__seguinte");
      nextInfoEl.classList.add("informacoes__anterior");
      previousInfoEl.classList.add("informacoes__corrente");
    }
  }
}

function updateCard(e) {
  const card = e.currentTarget;
  const box = card.getBoundingClientRect();
  const centerPosition = {
    x: box.left + box.width / 2,
    y: box.top + box.height / 2,
  };
  let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
  gsap.set(card, {
    "--current-card-rotation-offset": `${angle}deg`,
  });
  const currentInfoEl = cardInfosContainerEl.querySelector(
    ".informacoes__corrente"
  );
  gsap.set(currentInfoEl, {
    rotateY: `${angle}deg`,
  });
}

function resetCardTransforms(e) {
  const card = e.currentTarget;
  const currentInfoEl = cardInfosContainerEl.querySelector(
    ".informacoes__corrente"
  );
  gsap.set(card, {
    "--current-card-rotation-offset": 0,
  });
  gsap.set(currentInfoEl, {
    rotateY: 0,
  });
}

function initCardEvents() {
  const currentCardEl = cardsContainerEl.querySelector(".card--corrente");
  currentCardEl.addEventListener("pointermove", updateCard);
  currentCardEl.addEventListener("pointerout", (e) => {
    resetCardTransforms(e);
  });
}

initCardEvents();

function removeCardEvents(card) {
  card.removeEventListener("pointermove", updateCard);
}

function init() {
  let tl = gsap.timeline();

  tl.to(cardsContainerEl.children, {
    delay: 0.15,
    duration: 0.5,
    stagger: {
      ease: "power4.inOut",
      from: "right",
      amount: 0.1,
    },
    "--card-translateY-offset": "0%",
  })
    .to(
      cardInfosContainerEl
        .querySelector(".informacoes__corrente")
        .querySelectorAll(".texto"),
      {
        delay: 0.5,
        duration: 0.4,
        stagger: 0.1,
        opacity: 1,
        translateY: 0,
      }
    )
    .to(
      [buttons.prev, buttons.next],
      {
        duration: 0.4,
        opacity: 1,
        pointerEvents: "all",
      },
      "-=0.4"
    );
}

const waitForImages = () => {
  const images = [...document.querySelectorAll("img")];
  const totalImages = images.length;
  let loadedImages = 0;
  const loaderEl = document.querySelector(".loader span");

  gsap.set(cardsContainerEl.children, {
    "--card-translateY-offset": "100vh",
  });
  gsap.set(
    cardInfosContainerEl
      .querySelector(".informacoes__corrente")
      .querySelectorAll(".texto"),
    {
      translateY: "40px",
      opacity: 0,
    }
  );
  gsap.set([buttons.prev, buttons.next], {
    pointerEvents: "none",
    opacity: "0",
  });

  images.forEach((image) => {
    imagesLoaded(image, (instance) => {
      if (instance.isComplete) {
        loadedImages++;
        let loadProgress = loadedImages / totalImages;

        gsap.to(loaderEl, {
          duration: 1,
          scaleX: loadProgress,
          backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
        });

        if (totalImages == loadedImages) {
          gsap
            .timeline()
            .to(".conteudo__carregamento", {
              duration: 0.8,
              opacity: 0,
              pointerEvents: "none",
            })
            .call(() => init());
        }
      }
    });
  });
};

waitForImages();
