/*
Conversor de Monedas: 
Crea una función que convierta una cantidad de dinero de una moneda a otra. 
Usa variables para almacenar tasas de cambio y condicionales para manejar diferentes tipos de monedas.
*/


function convertidorDeDinero(monto, moneda){
    let tasaDeCambio = 1.22;  // 1 DOLAR = 1.22 PESO ARG

    if (moneda === "ARG") {
        ARG = monto * tasaDeCambio;
    }else if (moneda === "USD") {
        USD = monto * tasaDeCambio;
    }else{
        SALIDA = "Moneda invalidad para la operacion";
    }
}

convertidorDeDinero(1000, "ARG");
convertidorDeDinero(770, "USD");
convertidorDeDinero(1045, "BR");

console.log(ARG);
console.log(USD);
console.log(SALIDA);
