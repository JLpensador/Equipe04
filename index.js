function Cabecalho() {
  const cabecalho = document.getElementById("cabecalho");

  cabecalho.addEventListener("mouseout", function () {
    cabecalho.style.backgroundColor = "";
  });

  cabecalho.addEventListener("mouseover", function () {
    cabecalho.style.backgroundColor = "red";
  });
}

function caixaMani() {
  const caixaMani = document.getElementById("caixaMani");

  caixaMani.addEventListener("mouseout", function () {
    caixaMani.style.backgroundColor = "";
  });
}

function desenvolvidoPor() {
  const desenvolvidoPor = document.getElementById("desenvolvidoPor");

  desenvolvidoPor.addEventListener("mouseout", function () {
    desenvolvidoPor.style.backgroundColor = "";
  });

  desenvolvidoPor.addEventListener("mouseover", function () {
    desenvolvidoPor.style.backgroundColor = "red";
  });
  console.log(desenvolvidoPor);
}

function compraAiVai() {
  const compra = document.getElementById("compra");
  compra.addEventListener("mouseout", function () {
    alert("Compra ai vai.");
  });
}