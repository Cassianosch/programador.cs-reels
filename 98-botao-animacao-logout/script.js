document.querySelectorAll(".elemento__botao_saida").forEach((button) => {
  button.state = "default";

  // function to transition a button from one state to the next
  let updateButtonState = (button, state) => {
    if (logoutButtonStates[state]) {
      button.state = state;
      for (let key in logoutButtonStates[state]) {
        button.style.setProperty(key, logoutButtonStates[state][key]);
      }
    }
  };

  // mouse hover listeners on button
  button.addEventListener("mouseenter", () => {
    if (button.state === "default") {
      updateButtonState(button, "hover");
    }
  });
  button.addEventListener("mouseleave", () => {
    if (button.state === "hover") {
      updateButtonState(button, "default");
    }
  });

  // click listener on button
  button.addEventListener("click", () => {
    if (button.state === "default" || button.state === "hover") {
      button.classList.add("clicked");
      updateButtonState(button, "walking1");
      setTimeout(() => {
        button.classList.add("elemento__botao--porta-slammed");
        updateButtonState(button, "walking2");
        setTimeout(() => {
          button.classList.add("falling");
          updateButtonState(button, "falling1");
          setTimeout(() => {
            updateButtonState(button, "falling2");
            setTimeout(() => {
              updateButtonState(button, "falling3");
              setTimeout(() => {
                button.classList.remove("clicked");
                button.classList.remove("elemento__botao--porta-slammed");
                button.classList.remove("falling");
                updateButtonState(button, "default");
              }, 1000);
            }, logoutButtonStates["falling2"]["--duracao--caminhada"]);
          }, logoutButtonStates["falling1"]["--duracao--caminhada"]);
        }, logoutButtonStates["walking2"]["--elemento__botao--conjunto-duration"]);
      }, logoutButtonStates["walking1"]["--elemento__botao--conjunto-duration"]);
    }
  });
});

const logoutButtonStates = {
  default: {
    "--elemento__botao--conjunto-duration": "100",
    "--transform-elemento__botao--conjunto": "none",
    "--duracao--caminhada": "100",
    "--transform-elemento__botao--braco1": "none",
    "--transform-pulso1": "none",
    "--transform-elemento__botao--braco2": "none",
    "--transform-pulso2": "none",
    "--transform-elemento__botao--perna1": "none",
    "--transform-parturilha1": "none",
    "--transform-elemento__botao--perna2": "none",
    "--transform-parturilha2": "none",
  },
  hover: {
    "--elemento__botao--conjunto-duration": "100",
    "--transform-elemento__botao--conjunto": "translateX(1.5px)",
    "--duracao--caminhada": "100",
    "--transform-elemento__botao--braco1": "rotate(-5deg)",
    "--transform-pulso1": "rotate(-15deg)",
    "--transform-elemento__botao--braco2": "rotate(5deg)",
    "--transform-pulso2": "rotate(6deg)",
    "--transform-elemento__botao--perna1": "rotate(-10deg)",
    "--transform-parturilha1": "rotate(5deg)",
    "--transform-elemento__botao--perna2": "rotate(20deg)",
    "--transform-parturilha2": "rotate(-20deg)",
  },
  walking1: {
    "--elemento__botao--conjunto-duration": "300",
    "--transform-elemento__botao--conjunto": "translateX(11px)",
    "--duracao--caminhada": "300",
    "--transform-elemento__botao--braco1":
      "translateX(-4px) translateY(-2px) rotate(120deg)",
    "--transform-pulso1": "rotate(-5deg)",
    "--transform-elemento__botao--braco2": "translateX(4px) rotate(-110deg)",
    "--transform-pulso2": "rotate(-5deg)",
    "--transform-elemento__botao--perna1": "translateX(-3px) rotate(80deg)",
    "--transform-parturilha1": "rotate(-30deg)",
    "--transform-elemento__botao--perna2": "translateX(4px) rotate(-60deg)",
    "--transform-parturilha2": "rotate(20deg)",
  },
  walking2: {
    "--elemento__botao--conjunto-duration": "400",
    "--transform-elemento__botao--conjunto": "translateX(17px)",
    "--duracao--caminhada": "300",
    "--transform-elemento__botao--braco1": "rotate(60deg)",
    "--transform-pulso1": "rotate(-15deg)",
    "--transform-elemento__botao--braco2": "rotate(-45deg)",
    "--transform-pulso2": "rotate(6deg)",
    "--transform-elemento__botao--perna1": "rotate(-5deg)",
    "--transform-parturilha1": "rotate(10deg)",
    "--transform-elemento__botao--perna2": "rotate(10deg)",
    "--transform-parturilha2": "rotate(-20deg)",
  },
  falling1: {
    "--elemento__botao--conjunto-duration": "1600",
    "--duracao--caminhada": "400",
    "--transform-elemento__botao--braco1": "rotate(-60deg)",
    "--transform-pulso1": "none",
    "--transform-elemento__botao--braco2": "rotate(30deg)",
    "--transform-pulso2": "rotate(120deg)",
    "--transform-elemento__botao--perna1": "rotate(-30deg)",
    "--transform-parturilha1": "rotate(-20deg)",
    "--transform-elemento__botao--perna2": "rotate(20deg)",
  },
  falling2: {
    "--duracao--caminhada": "300",
    "--transform-elemento__botao--braco1": "rotate(-100deg)",
    "--transform-elemento__botao--braco2": "rotate(-60deg)",
    "--transform-pulso2": "rotate(60deg)",
    "--transform-elemento__botao--perna1": "rotate(80deg)",
    "--transform-parturilha1": "rotate(20deg)",
    "--transform-elemento__botao--perna2": "rotate(-60deg)",
  },
  falling3: {
    "--duracao--caminhada": "500",
    "--transform-elemento__botao--braco1": "rotate(-30deg)",
    "--transform-pulso1": "rotate(40deg)",
    "--transform-elemento__botao--braco2": "rotate(50deg)",
    "--transform-pulso2": "none",
    "--transform-elemento__botao--perna1": "rotate(-30deg)",
    "--transform-elemento__botao--perna2": "rotate(20deg)",
    "--transform-parturilha2": "none",
  },
};
