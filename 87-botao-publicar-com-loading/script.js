let duracao = 1600,
  ativacao__sucesso = (button) => {
    button.classList.add("ativacao__sucesso");
  };

document.querySelectorAll(".caixa__geral").forEach((button) => {
  button.style.setProperty("--duracao", duracao + "ms");
  ["mousedown", "touchstart", "keypress"].forEach((e) => {
    button.addEventListener(e, (ev) => {
      if (
        e != "keypress" ||
        (e == "keypress" &&
          ev.which == 32 &&
          !button.classList.contains("ativacao__carregamento"))
      ) {
        button.classList.add("ativacao__carregamento");
        button.timeout = setTimeout(ativacao__sucesso, duracao, button);
      }
    });
  });
  ["mouseup", "mouseout", "touchend", "keyup"].forEach((e) => {
    button.addEventListener(
      e,
      (ev) => {
        if (e != "keyup" || (e == "keyup" && ev.which == 32)) {
          button.classList.remove("ativacao__carregamento");
          clearTimeout(button.timeout);
        }
      },
      false
    );
  });
});
