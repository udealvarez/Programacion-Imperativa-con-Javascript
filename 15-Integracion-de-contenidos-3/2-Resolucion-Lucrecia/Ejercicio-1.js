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

let gastos = [
    [10,20,30,40,50,60,70],     // semana 1
    [5,15,25,35,45,55,65],      // semana 2
    [8,18,28,38,48,58,68],      // semana 3
    [12,22,32,42,52,62,72]      // semana 4
];

function gastosDeUnaSemanaEspecifica(matriz, numSemana){

    let sumaDeGastos = 0;

    for (let i = 0; i < gastos[numSemana].length; i++) {
        
        sumaDeGastos += matriz[numSemana-1][i];  // suma de gastos -> acumulador
                        //      fila       columna
    }

    return sumaDeGastos;
}

let sumaDeGastosSemanales = gastosDeUnaSemanaEspecifica(gastos, 2);
console.log("los gastos de la semana 2 fueron: " + sumaDeGastosSemanales);



