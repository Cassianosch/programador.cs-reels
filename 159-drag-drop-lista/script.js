const list = document.getElementById("list");
let dragged = null;

list.addEventListener("dragstart", (e) => {
  if (!e.target.classList.contains("item")) return;
  dragged = e.target;
  requestAnimationFrame(() => dragged.classList.add("is-dragging"));
});

list.addEventListener("dragend", () => {
  if (!dragged) return;
  dragged.classList.remove("is-dragging");
  list.querySelectorAll(".item").forEach((i) => i.classList.remove("is-over"));
  dragged = null;
});

list.addEventListener("dragover", (e) => {
  e.preventDefault();
  const target = e.target.closest(".item");
  if (!target || target === dragged) return;

  list.querySelectorAll(".item").forEach((i) => i.classList.remove("is-over"));
  target.classList.add("is-over");

  const rect = target.getBoundingClientRect();
  const mid = rect.top + rect.height / 2;
  if (e.clientY < mid) {
    list.insertBefore(dragged, target);
  } else {
    list.insertBefore(dragged, target.nextSibling);
  }
});

list.addEventListener("drop", (e) => {
  e.preventDefault();
});
