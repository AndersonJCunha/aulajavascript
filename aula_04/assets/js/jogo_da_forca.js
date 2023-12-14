const vetor = ["museu", "Entra21", "javascript", "PHP"];
let palavra_da_vez = "";
const temp = [];
let acertos = 0;
let erros = 0;
const elemento_iniciarJogo = document.getElementById("iniciar_game");
const elemento_temp = document.getElementById("elemento_temp");
const game = document.getElementById("game");
const tentar = function () {
  const letra = document.getElementById("letra").value.toUpperCase();

  for (indice in palavra_da_vez) {
    if (palavra_da_vez[indice].toUpperCase() == letra) {
      temp[indice] = letra;
    }
  }
  if (temp.includes(letra)) {
    acertos++;
  } else {
    erros++;
  }

  if (erros == 3) {
    alert("você perdeu o jogo");
  }
  atualizarAcertos();
  atualizarErros();
  renderiza_temp();
};
const finalizarJogo = function () {
  elemento_iniciarJogo.style.display = "none";
  game.style.display = "block";
};

const iniciarJogo = function () {
  palavra_da_vez = vetor.pop();
  for (indice in palavra_da_vez) {
    temp[indice] = "*";
  }
  document.getElementById(
    "descricao_palavra"
  ).innerText = `A palavra possui ${palavra_da_vez.length} letras`;
  renderiza_temp();
  elemento_iniciarJogo.style.display = "none";
  game.style.display = "block";
};

const atualizarAcertos = function () {
  document.getElementById("acertos").innerText = acertos;
};

const atualizarErros = function () {
  document.getElementById("erros").innerText = erros;
};

const renderiza_temp = function () {
  elemento_temp.innerText = temp.join("");
};
