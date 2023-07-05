const BUTTON = document.querySelector("button");
const SYNC = document.querySelector("#elemento__checkbox");

const TOGGLE = () => {
  const IS_PRESSED = BUTTON.matches("[aria-pressed=true]");
  if (SYNC.checked)
    document.body.setAttribute("data-dark-mode", IS_PRESSED ? false : true);
  BUTTON.setAttribute("aria-pressed", IS_PRESSED ? false : true);
};

BUTTON.addEventListener("click", TOGGLE);
