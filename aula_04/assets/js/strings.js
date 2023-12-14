const renderiza_string = function (elemento) {
  const valor = elemento.value;
  const outro_valor = valor.concat(" ...");
  const vetor_da_string = valor.split("/");
  const string_do_vetor = vetor_da_string.join("-");
  console.log(valor);
  console.log(valor.trim());
  console.log(vetor_da_string);
  console.log(string_do_vetor);
  const render = document.getElementById("render_string");
  render.innerHTML = `
        <p>${valor.toUpperCase()}</p>
        <p>${valor.toLowerCase()}</p>
        <p>${valor.substring(0, 4)} ...</p>
        <p>Começa com Script? ${valor.startsWith("script")}</p>
        <p>Termina com legal? ${valor.endsWith("legal")}</p>
        <p>Existe a palavra chuva? ${valor
          .trim()
          .toLowerCase()
          .includes("chuva")}</p>
        <p>${outro_valor}</p>
        <p>${valor.replace("[email]", "gabriel@local.br")}</p>
        <p>${valor.replaceAll("[telefone]", "9988-4455")}</p>
        <p>${valor.repeat(60)}</p>
        <p>${valor.padEnd(10, "*")}</p>
        <p>${valor.padStart(10, "#")}</p>
        <p>A texto <b>${valor}</b> posui ${valor.length} caracteres</p>
        <p>${mascaraEmail(valor)}</p>
    `;
};

/**
  Desafio, colocar um email e criar uma máscara
  que exiba os dois primeiros caracteres prencha
  com * os outros até o @ e exibindo o restante do
  domínio, conforme exemplos abaixo
  joao@teste.com.br
  jo**@teste.com.br
  maria@gmail.com.br
  ma***@gmail.com.br
*/
const mascaraEmail = function (email) {
  email = email.split("@");
  email[0] = `${email[0].substring(0, 2)}${email[0].padEnd(
    email[0].length,
    "*"
  )}`;
  return email.join("@");
};
