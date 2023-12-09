const lista = document.querySelectorAll("form select"),
monedaOrigen = document.querySelector(".desde select"),
monedaDestino = document.querySelector(".destino select"),
clickBtn = document.querySelector("form button");

for (let i = 0; i < lista.length; i++) {
    // La lista de paises esta en paises.js
    for(let codigoMoneda in listaPaises){
        // USD = monedaOrigen por default y ARS = monedaDestino por default
        let selected = i == 0 ? codigoMoneda == "USD" ? "selected" : "" : codigoMoneda == "ARS" ? "selected" : "";
        // Crea tag con el código de moneda texto y valor
        let optionTag = `<option value="${codigoMoneda}" ${selected}>${codigoMoneda}</option>`;
        // Inserta Tag
        lista[i].insertAdjacentHTML("beforeend", optionTag);
    }
    lista[i].addEventListener("change", e =>{
        buscaBanderas(e.target); // Carga Bandera
    });
}

function buscaBanderas(element){
    for(let codigoPais in listaPaises){
        if(codigoPais == element.value){ 
            let imgTag = element.parentElement.querySelector("img"); 
            imgTag.src = `https://flagcdn.com/48x36/${listaPaises[codigoPais].toLowerCase()}.png`;
        }
    }
}

window.addEventListener("load", ()=>{
    buscaCambio();
});

clickBtn.addEventListener("click", e =>{
    e.preventDefault(); // Para evitar que se envie el formulario
    buscaCambio();
});

const banderaIcon = document.querySelector("form .icon");
banderaIcon.addEventListener("click", ()=>{
    // Cambia monedas y Banderas de origen a destino y viceversa
    let tempCode = monedaOrigen.value; 
    monedaOrigen.value = monedaDestino.value; 
    monedaDestino.value = tempCode; 
    buscaBanderas(monedaOrigen); 
    buscaBanderas(monedaDestino); 
    buscaCambio(); 
})

function buscaCambio(){
    // Obtiene el Valor del Cambio
    const importe = document.querySelector("form input");
    const tipoCambioTxt = document.querySelector("form .cambio");
    let importeMoneda = importe.value;
    // Valor por Default = 1
    if(importeMoneda == "" || importeMoneda == "0"){
        importe.value = "1";
        importeMoneda = 1;
    }
    tipoCambioTxt.innerText = "Obteniendo cambio...";
    let url = `https://v6.exchangerate-api.com/v6/803b9f729bfe877f567a7e03/latest/${monedaOrigen.value}`;
    // Obtiene la respuesta de la api y pasa a jSon 
    fetch(url).then(response => response.json()).then(result =>{
        let coefCambio = result.conversion_rates[monedaDestino.value];
        let totalCalculado = (importeMoneda * coefCambio).toFixed(2); // calcula Importe Total, Coeficiente por Importe
        tipoCambioTxt.innerText = `${importeMoneda} ${monedaOrigen.value} = ${totalCalculado} ${monedaDestino.value}`;
    }).catch(() =>{ // Captura errores de la Api
        tipoCambioTxt.innerText = "Error, Hubo un Problema!!!";
    });
}