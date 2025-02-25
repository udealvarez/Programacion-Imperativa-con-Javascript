/*

    Matrices

Se está realizando el desarrollo de una aplicación para control de gastos. 
Cada día, el usuario ingresa sus gastos cotidianos. 
La idea es solo registrar el total de los gastos, al finalizar la jornada. 
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas. 
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. 
Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera.

    EJERCICIO 1

    Gastos de toda la semana: 

Crear una función que nos sirva para obtener el total de gastos de una semana específica. 
Recordemos que cada fila representa una semana. 
El número de semana deberá recibirse por parámetro.

*/

let gastoMensual = [
    [1,2,3,4,5,6,7],            // semana 1
    [11,12,13,14,15,16,17],     // semana 2
    [21,22,23,24,25,26,27],     // semana 3
    [31,32,33,34,35,36,37]      // semana 4
]

function gastosSemanal(semana){

    if (semana < 1 || semana > 4) {
        return "numero de semana invalido";
    }

    let total = 0;

    for (let i = 0; i < gastoMensual.length; i++) {
        total += gastoMensual[semana -1][i];
    }

    return total;
}

console.log(gastosSemanal(2));


