const grid = document.getElementById("grid");
const dialog = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbClose = document.getElementById("lbClose");

grid.addEventListener("click", (e) => {
  if (e.target.tagName !== "IMG") return;
  const src = e.target.src.replace("w=400", "w=1200").replace("h=300", "h=900");
  lbImg.src = src;
  lbImg.alt = e.target.alt;
  dialog.showModal();
});

lbClose.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});
