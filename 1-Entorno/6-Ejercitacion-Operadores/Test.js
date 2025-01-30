/*Instrucciones

Vimos cómo declarar una variable y asignarle un valor, y probablemente surgió la siguiente pregunta: ¿para qué sirve almacenar datos en variables? Las variables nos permiten reutilizar el dato asignado en la misma con solo invocar su nombre.

    let unNumero = 123;
    console.log(unNumero); // imprimirá el valor asignado a unNumero, o sea 123

También, algo muy importante, así como podemos hacer operaciones matemáticas como sumar (+) o restar (-) números, podemos hacer lo mismo con las variables que las referencien.

Ejemplo:

    / Esto es una asignación estática (valor fijo)
    let unNumero = 124;

    / Esto es una asignación dinámica (resultado de una operacion)
    let siguienteNumero = unNumero + 1;

    / Imprime en pantalla el valor asignado, o sea 124
    console.log(siguienteNumero);

Ahora si, vayamos al ejercicio:

Declara y asigna valor a dos variables: primerNumero y segundoNumero.

Luego, declara las variables resultadoSuma, resultadoResta, resultadoMultiplicacion, resultadoDivision y en cada una almacena el resultado que corresponda.

Por último, imprimí cada uno de los resultados utilizando console.log(nombreDeLaVariable) para ver como se ven los mismos.

    let primerNumero = 100;
    let segundoNumero = 5;

    / resultadoSuma será igual a 105
   /  resultadoResta será igual a 95 (En este caso a primerNumero debemos restarle segundo)
   /  resultadoMultiplicacion será igual a 500 (En este caso el orden de los factores no altera el producto 😊)​
    / resultadoDivision será igual a 20 (En este caso debemos dividir a primerNumero por el segundo)        */


let primerNumero = 100;
let segundoNumero =5;

let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta = primerNumero - segundoNumero;
let resultadoMultiplicacion = primerNumero * segundoNumero;
let resultadoDivision = primerNumero / segundoNumero;

console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMultiplicacion);
console.log(resultadoDivision);