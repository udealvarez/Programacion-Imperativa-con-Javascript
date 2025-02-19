/*
Conversor de Monedas: 
Crea una función que convierta una cantidad de dinero de una moneda a otra. 
Usa variables para almacenar tasas de cambio y condicionales para manejar diferentes tipos de monedas.
*/

function convertirMoneda(cantidad, tipoDeCambio){

    let resultado = cantidad * tipoDeCambio;
    return resultado;
}

let cantidad = convertirMoneda(100, 0.85);
console.log("Cantidad en euros: " + cantidad);