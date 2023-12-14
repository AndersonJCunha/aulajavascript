const url_base = "https://pokeapi.co/api/v2/"
let endpoint ="";
let dados = [];
 
fetch(url_base)
.then((Response) =>Response.json())
.then((json) => {
 exibeEndpoints(json);
})
.catch((erro) => console.error(erro))
.finally(()=>{
   console.log("terminou a requisiçâo")
});
 
const exibeEndpoints = function (endpoints){
    const ul_endpoints = document.getElementById("endpoints");
    const keys = Object.keys(endpoints);
 
    keys.forEach((key) => {
        ul_endpoints.innerHTML +=
        `<li onclick="consultaEndpoint('${key}','${endpoints[key]}')">${key}</li>`;
    });
};
 
const consultaEndpoint = function (key,endpoint){
    fetch(endpoint)
    .then((Response) =>Response.json())
    .then((json) => {
        console.log(endpoint,json);
        dados = json;
        if(key =='pokemon'){
            renderPokemons();
        }
       
    })
    .catch((erro) => console.error(erro))
    .finally(()=>{
       console.log("terminou a requisiçâo")
    });
   };
 
   const renderPokemons = function(){
     const div_items = document.getElementById('items');
     const btn_previous = document.getElementById('previous');
     const btn_next = document.getElementById('next');
     dados.results.forEach(item =>{
        div_items.innerHTML += `<h1>${item.name}</h1>`
     });
       
      if(dados.previous == null){
        btn_previous.disabled = true
      }
 
      if(dados.next == null){
        btn_next.disabled = true
      }
       
     
   }