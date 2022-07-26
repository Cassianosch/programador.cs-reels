function setarData() {
  let elementoData = document.querySelector(".js-data");

  let data = new Date();

  const objData = {
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric",
  };

  elementoData.textContent = data.toLocaleTimeString("pt-BR", objData);
}
setarData();
setInterval(() => {
  setarData();
}, 1000);
