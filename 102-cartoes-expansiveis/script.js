const elTodosItems = document.querySelectorAll(".elemento__cartao");

const expand = (item, i) => {
  elTodosItems.forEach((it, ind) => {
    if (i === ind) return;
    it.clicked = false;
  });
  gsap.to(elTodosItems, {
    width: item.clicked ? "15vw" : "8vw",
    duration: 2,
    ease: "elastic(1, .6)",
  });

  item.clicked = !item.clicked;
  gsap.to(item, {
    width: item.clicked ? "42vw" : "15vw",
    duration: 2.5,
    ease: "elastic(1, .3)",
  });
};

elTodosItems.forEach((item, i) => {
  item.clicked = false;
  item.addEventListener("click", () => expand(item, i));
});
