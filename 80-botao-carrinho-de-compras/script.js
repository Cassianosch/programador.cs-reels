const { to, registerPlugin, set, timeline } = gsap;

gsap.registerPlugin(MorphSVGPlugin, Physics2DPlugin);

document.querySelectorAll(".adicionar-ao-carrinho").forEach((button) => {
  let background = button.querySelector(".background path");
  button.addEventListener("pointerdown", (e) => {
    if (button.classList.contains("active")) {
      return;
    }
    to(button, {
      "--cor-fundo-secundaria": 0.97,
      duration: 0.1,
    });
  });
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (button.classList.contains("active")) {
      return;
    }
    button.classList.add("active");
    to(button, {
      keyframes: [
        {
          "--cor-fundo-secundaria": 0.97,
          duration: 0.1,
        },
        {
          "--cor-fundo-secundaria": 1,
          delay: 0.1,
          duration: 0.8,
          ease: "elastic.out(1, .6)",
        },
      ],
    });
    to(button, {
      "--cor-texto-2": "16px",
      "--cor-texto-1": 0,
      duration: 0.2,
    });
    to(button, {
      keyframes: [
        {
          "--cor-carrinho-1": "-12px",
          "--cor-carrinho-4": 1,
          duration: 0.25,
        },
        {
          "--cor-garrafa-3": 1,
          "--cor-garrafa-5": 1,
          duration: 0.15,
          onStart() {
            to(button, {
              duration: 0.4,
              keyframes: [
                {
                  "--cor-garrafa-4": "-8deg",
                },
                {
                  "--cor-garrafa-4": "8deg",
                },
                {
                  "--cor-garrafa-4": "0deg",
                },
              ],
            });
          },
        },
        {
          "--cor-garrafa-2": "0px",
          duration: 0.3,
          delay: 0.15,
          onStart() {
            to(background, {
              keyframes: [
                {
                  morphSVG:
                    "M0 19C0 10.7157 6.71573 4 15 4H41.4599C53.6032 4 62.4844 12 72.5547 12C82.6251 12 91.5063 4 103.65 4H137C139.761 4 142 6.23858 142 9V31C142 39.2843 135.284 46 127 46H5C2.23858 46 0 43.7614 0 41V19Z",
                  duration: 0.1,
                  delay: 0.18,
                },
                {
                  morphSVG:
                    "M0 19C0 10.7157 6.71573 4 15 4H41.4599C53.6032 4 62.4844 4 72.5547 4C82.6251 4 91.5063 4 103.65 4H137C139.761 4 142 6.23858 142 9V31C142 39.2843 135.284 46 127 46H5C2.23858 46 0 43.7614 0 41V19Z",
                  duration: 0.8,
                  ease: "elastic.out(1, .6)",
                },
              ],
            });
            to(button, {
              "--cor-garrafa-3": 0.5,
              duration: 0.15,
            });
          },
        },
        {
          "--cor-carrinho-2": "3px",
          duration: 0.1,
          onStart() {
            to(button, {
              keyframes: [
                {
                  "--cor-sucesso-1": "24px",
                  "--cor-sucesso-2": 1,
                  duration: 0.25,
                },
                {
                  "--cor-saida-1": "0px",
                  duration: 0.25,
                },
              ],
            });
          },
        },
        {
          "--cor-carrinho-2": "0px",
          duration: 0.2,
        },
        {
          "--cor-carrinho-1": "-6px",
          "--cor-garrafa-4": "12deg",
          "--cor-garrafa-1": "-25%",
          duration: 0.15,
        },
        {
          "--cor-carrinho-1": "-16px",
          "--cor-garrafa-4": "-12deg",
          "--cor-garrafa-1": "-50%",
          duration: 0.2,
          onStart() {
            drops(button, 5, -130, -100);
          },
        },
        {
          "--cor-carrinho-1": "92px",
          "--cor-carrinho-3": "-20deg",
          duration: 0.4,
          onStart() {
            button.classList.add("reiniciar");
          },
          onComplete() {
            set(button, {
              "--cor-carrinho-1": "-120px",
              "--cor-carrinho-4": 0.8,
              "--cor-carrinho-2": "-2px",
              "--cor-garrafa-5": 0,
              "--cor-texto-2": "2px",
            });
          },
        },
        {
          "--cor-carrinho-1": "-57px",
          "--cor-carrinho-3": "0deg",
          "--cor-sucesso-2": 0,
          duration: 0.3,
          delay: 0.1,
          clearProps: true,
          onStart() {
            to(button, {
              "--cor-texto-2": "10px",
              "--cor-texto-1": 1,
              duration: 0.2,
              delay: 0.1,
            });
          },
          onComplete() {
            button.classList.remove("active", "reiniciar");
          },
        },
      ],
    });
  });
});

function drops(parent, quantity, minAngle, maxAngle) {
  for (let i = quantity - 1; i >= 0; i--) {
    let angle = gsap.utils.random(minAngle, maxAngle),
      velocity = gsap.utils.random(60, 80);

    let div = document.createElement("div");
    div.classList.add("drop");

    parent.appendChild(div);

    set(div, {
      opacity: 1,
      scale: 0,
    });
    timeline({
      onComplete() {
        div.remove();
      },
    })
      .to(
        div,
        {
          duration: 0.4,
          scale: gsap.utils.random(0.5, 0.7),
        },
        0
      )
      .to(
        div,
        {
          duration: 1,
          physics2D: {
            angle: angle,
            velocity: velocity,
            gravity: 80,
          },
        },
        0
      )
      .to(
        div,
        {
          duration: 0.3,
          opacity: 0,
        },
        0.3
      );
  }
}
