const renderiza_string = function (elemento) {
    //console.log(elemento.value);
    //console.log(elemento.value.trin());
    const valor = elemento.value;
    console.log(valor.split('/'));
    console.log(elemento.value.valueOf());
   // const vetor_da_string = valor.split('/');
    console.log(vetor_da_string);
    const vetor_da_string = valor.split('@');
    //const string_do_valor = vetor_da_string.join(' - ')
    console.log(string_do_valor);
    const outro_valor = valor.concat(" ...")
    console.log(vetor_da_string);
    
   
    
    




    const render = document.getElementById('render_string');
    render.innerHTML = `
    <p>${valor.toUpperCase()}<p>
    <p>${valor.toLowerCase()}<p>
    <p>${valor.substring(0, 4)} ...<p>
    <p>COMEÇA COM SCRIPT? ${valor.startsWith("SCRIPT")}</p>
    <p>TERMINA COM LEGAL? ${valor.endsWith("LEGAL")}</p>
    <p>EXISTE A PALAVRA CHUVA? ${valor.trim().toUpperCase().includes("CHUVA")}</p>
    <p>${outro_valor}</p>
    <p>${valor.replace("[email]", "andersonjc244@gmail.com")}</p>
    <p>${valor.replaceAll("[telefone]", '48425-5722')}</p>
    <p>${valor.repeat(20)}</p>
    <p>${valor.padEnd(10, '*')}</p>
    <p>${valor.padStart(10, '#')}</p>
    <p>A texto <b>${valor}</b> posui ${valor.length}caracteres</p>
    <p> A texto <b>${valor}</b> possui ${valor.length}caracteres</p>
    <p>${maskedNumber}</p>
    
    
    `;

}