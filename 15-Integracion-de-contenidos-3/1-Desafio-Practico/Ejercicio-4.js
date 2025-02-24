/*

    Matrices

Se está realizando el desarrollo de una aplicación para control de gastos. 
Cada día, el usuario ingresa sus gastos cotidianos. 
La idea es solo registrar el total de los gastos, al finalizar la jornada. 
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas. 
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. 
Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera.

    Callbacks
    
    Gastos por semana:

Crea una función que calcule el total de gastos de cada semana y retorne un array con estos totales. 
En la posición 0 estará el gasto de la semana 0, en la posición 1 el gasto de la semana 1, etc. 
Será obligatorio el uso de callbacks para esta función.

*/


let gastoMensual = [
    [1,2,3,4,5,6,7],            // semana 1
    [11,12,13,14,15,16,17],     // semana 2
    [21,22,23,24,25,26,27],     // semana 3
    [31,32,33,34,35,36,37]      // semana 4
]

function calcularTotalSemana(semana){
    return semana.reduce((acumulador, gasto) => acumulador + gasto, 0);
}

function calcularGastosPorSemana(matrizGastos, callback){
    let totales = matrizGastos.map(semana => callback(semana));
    return totales;
}

let gastosPorSemana = calcularGastosPorSemana(gastoMensual, calcularTotalSemana);
console.log("Gastos por semana", gastosPorSemana);