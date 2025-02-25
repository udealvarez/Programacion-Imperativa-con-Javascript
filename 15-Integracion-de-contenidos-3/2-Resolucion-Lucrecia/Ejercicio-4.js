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


let gastos = [
    [10,20,30,40,50,60,70],     // semana 1
    [5,15,25,35,45,55,65],      // semana 2
    [8,18,28,38,48,58,68],      // semana 3
    [12,22,32,42,52,62,72]      // semana 4
];

function calcularTotalDeGastosPorSemana(matriz, callback){

    let totalGastosPorSemana = [];
    let gastosSemanales = 0;

    matriz.forEach(function(semana){ // .forEach -> cambia de semanas
        gastosSemanales = semana.reduce(function(total, dia){
                                // .reduce -> acumula todo lo que hay en una semana
            return total + dia;
        });

        totalGastosPorSemana.push(gastosSemanales) // .push() es un metodo de array que agrea un elemento a un array

    },0);

    callback(totalGastosPorSemana);
}

function mostrarResultados(resultados){
    console.log("Total de gastos por semana: " + resultados);
}

calcularTotalDeGastosPorSemana(gastos, mostrarResultados);
// al momentos de pasar una funcion como callback por parametro, NO LLEVA PARENTESIS
