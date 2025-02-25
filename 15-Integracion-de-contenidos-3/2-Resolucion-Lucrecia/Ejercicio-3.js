/*

     Matrices

Se está realizando el desarrollo de una aplicación para control de gastos. 
Cada día, el usuario ingresa sus gastos cotidianos. 
La idea es solo registrar el total de los gastos, al finalizar la jornada. 
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas. 
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. 
Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera.

    Gasto total: 

Crea una función que nos sirva para obtener el valor total de gastos de todo un mes. 
La función deberá retornar dicho valor.


*/


let gastos = [
    [10,20,30,40,50,60,70],     // semana 1
    [5,15,25,35,45,55,65],      // semana 2
    [8,18,28,38,48,58,68],      // semana 3
    [12,22,32,42,52,62,72]      // semana 4
];

function gastosDeTodoElMes(matriz){

    let gastoMensual = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            
            gastoMensual += matriz[i][j];
        }
        
    }

    return gastoMensual;

}

let gastosMensuales = gastosDeTodoElMes(gastos);
console.log("El gasto del todo el mes es: " + gastosMensuales);