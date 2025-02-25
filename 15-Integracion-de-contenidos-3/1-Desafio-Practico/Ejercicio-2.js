/*

    Matrices

Se está realizando el desarrollo de una aplicación para control de gastos. 
Cada día, el usuario ingresa sus gastos cotidianos. 
La idea es solo registrar el total de los gastos, al finalizar la jornada. 
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas. 
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. 
Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera.

    EJERCICIO 2

    Gastos de un día de la semana: 

Crea una función que nos sirva para obtener el total de gastos de un día específico de la semana. 
Por ejemplo, del gasto de todos los martes del mes, o el gasto de todos los sábados del mes. 
El número correspondiente al día deberá recibirse por parámetro. 
Recuerda que el número de día es determinado por las columnas.

*/


let gastoMensual = [
    [1,2,3,4,5,6,7],            // semana 1
    [11,12,13,14,15,16,17],     // semana 2
    [21,22,23,24,25,26,27],     // semana 3
    [31,32,33,34,35,36,37]      // semana 4
]

function gastoUnDiaDeSemana(dia, gastoMensual){

    if (dia < 0 || dia > 7) {
        return "dia invalido";
    }

    let total = 0;

    for (let semana = 0; semana < gastoMensual.length; semana++) {
        total += gastoMensual[semana][dia];
        
    }

    return total;

}

let martesGasto = gastoUnDiaDeSemana(1, gastoMensual);
console.log("El gasto del dia martes es ", martesGasto);