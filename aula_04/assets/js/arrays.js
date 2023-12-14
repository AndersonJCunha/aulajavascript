var frutas = ["Maçã", "Banana"];
console.log(frutas.length, frutas[10]);
// 2

// for in faz um loop até o último item do vetor
// porém ele pega o índice
for (indice in frutas) {
  console.log(indice, frutas[indice]);
}

// for of faz um loop até o último item do vetor
// porém ele pega o elemento
for (fruta of frutas) {
  console.log(fruta);
}

frutas.forEach(function (elemento, indice_do_elemento) {
  console.log(elemento, indice_do_elemento);
});

frutas.push("uva");
frutas.push("pera");

console.table(frutas);
const valor_removido = frutas.pop();
console.table(frutas);
console.log("removido do fim:", valor_removido);

const valor_removido_do_inicio = frutas.shift();
console.table(frutas);
console.log("removido do inicio:", valor_removido_do_inicio);

frutas.unshift("melancia"); // add no início
console.table(frutas);

const posicao = frutas.indexOf("Banana");
console.log("posicao: ", posicao);

if (posicao !== -1) {
  console.warn("fruta encontrada");
  const outro_item_removido = frutas.splice(posicao, 1);
  console.table(frutas);
  console.log("removido a fruta: ", frutas[posicao]);
} else {
  console.error("Fruta não encontada");
}

const frutaExiste = frutas.includes("uva");
console.log("fruta existe? ", frutaExiste);

/**
 * Jogo de forca
 * vetor com várias palavras
 * remover a última palavra do vetor
 * a palavra removida falar a quantidade de letras.
 * Em um input digitar uma letra e ver se ela existe na palavra.
 * Se não existe conta como erro. Com três erros game over a palavra volta para o início do vetor.
 * Acertando todas as letras, conta como 100 pontos, e volta para o ínico do vetor
 */
