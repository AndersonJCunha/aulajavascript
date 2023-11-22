const veiculos = [
    { modelo: "passeio", marca: "nissam" }
    { modelo: "passeio", marca: "bmw" }
    { modelo: "passeio", marca: "honda" }
    { modelo: "passeio", marca: "tesla" }
    { modelo: "passeio", marca: "fiat" }
];

const exibe_veiculos = function () {
    const veiculos_html = document.querySelector('#render');
    for (veiculo of veiculos) {
        render.innerHtml += `
        <div style="width:25%; margin:10px">
        <h1>Modelo: <b>${veiculo.modelo}</b></h1>
        <h2>Marca: <b>${veiculo.marca}</b></h2>
 
        </div>
        `;


    }


}
