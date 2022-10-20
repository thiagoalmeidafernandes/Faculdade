var gasolina, etanol;

function melhor() {
  etanol = Number(frdados.txtetanol.value.replace(",", "."));
  gasolina = Number(frdados.txtgasolina.value.replace(",", "."));

  if (etanol < 0.7 * gasolina) {
    document.getElementById("imagem").src = "imagens/m2.jpg";
  } else {
    document.getElementById("imagem").src = "imagens/m3.jpg";
  }
}

function limpar() {
  document.getElementById("imagem").src = "imagens/m1.jpg";
}
