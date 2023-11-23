const renderiza_string = function(elemento){
    const valor = elemento.value;  
    const outro_valor = valor.concat("...");
    const vetor_da_string = valor.split('/');
    const tamanho_endereço = valor.split('@')[0].length;
    const string_do_vetor = vetor_da_string.join('-');
    const email = 'andersonjc244@gmail.com.br';
    const paddedEmail = valor.substring(0,2).padEnd(tamanho_endereço,'*') + valor.substring(tamanho_endereço);
   
   console.log(elemento.value);
   console.log(elemento.value.trim());
   console.log(elemento.value.valueOf());
   console.log(valor.split('/'));
   console.log(vetor_da_string);
   console.log(string_do_vetor);
   console.log(paddedEmail);
 
 const render = document.getElementById('render_string');
   render.innerHTML = `
      <p>${valor.toUpperCase()}<p>
      <p>${valor.toLowerCase()}<p>
      <p>${valor.substring(0,4)}....<p>
      <p>Começa com Script? ${valor.startsWith("script")}</p>
      <p>Termina com legal? ${valor.endsWith("legal")}</p>
      <p>Existe a palavra chuva? ${valor.trim().toLowerCase().includes("chuva")}</p> <!-- -->
      <p>${outro_valor}</p>
      <p>${valor.replace("[email]","andersonjc244@gmail.com.br")}</p>
      <p>${valor.replaceAll("[telefone]",'98425-5722')}</p>
      <p>${valor.repeat(60)}</p>
      <p>${valor.padStart(3,4,'**')}</p>
      <p> A texto <b>${valor}</b> possui ${valor.length}caracteres</p>
 
     
 
 
 
 
   
 
     
   `;
   
}