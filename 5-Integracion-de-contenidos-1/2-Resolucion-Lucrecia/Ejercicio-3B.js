/*
Conversor de Monedas: 
Crea una función que convierta una cantidad de dinero de una moneda a otra. 
Usa variables para almacenar tasas de cambio y condicionales para manejar diferentes tipos de monedas.
*/

function convertirMoneda(cantidad, monedaDestino){

    let tipoDeCambio;

    switch (monedaDestino) {
        case "dolar":
            tipoDeCambio = 1.0; // tipo de cambio de dolar a si mismo
            break;
        case "real":
            tipoDeCambio = 5.5 // tipo de cambio de dolar a real
            break;
        case "euro":
            tipoDeCambio = 0.85 
            break;
    
        default:
            console.log("Moneda no soportada");
            return -1;
            break;
    }

    let resultado = cantidad * tipoDeCambio;
    console.log("Cantidad convertida a " + monedaDestino + " : " + resultado); 
}

convertirMoneda(100, "real");

