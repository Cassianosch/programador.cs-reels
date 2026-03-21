const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("is-active");
      t.setAttribute("aria-selected", "false");
    });
    panels.forEach((p) => {
      p.classList.remove("is-active");
      p.hidden = true;
    });

    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");

    const panel = document.getElementById(tab.getAttribute("aria-controls"));
    panel.classList.add("is-active");
    panel.hidden = false;
  });
});
