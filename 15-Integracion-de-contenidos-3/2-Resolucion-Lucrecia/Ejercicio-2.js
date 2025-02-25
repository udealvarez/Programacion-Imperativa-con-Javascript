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



let gastos = [
    [10,20,30,40,50,60,70],     // semana 1
    [5,15,25,35,45,55,65],      // semana 2
    [8,18,28,38,48,58,68],      // semana 3
    [12,22,32,42,52,62,72]      // semana 4
];


function gastosDeUnDiaDeLaSemana(matriz, numDeDia){

    let gastosDeUnDia = 0;

    for (let i = 0; i < matriz.length; i++) {
        
        gastosDeUnDia += matriz[i][numDeDia - 1];
    }

    return gastosDeUnDia;
}

let gastosTotales = gastosDeUnDiaDeLaSemana(gastos, 2);
console.log("El gasto de un dia de la semana es: " + gastosTotales);