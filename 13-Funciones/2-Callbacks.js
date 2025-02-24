// los CALLBACKS son funciones que se envian por parametros a otras funciones y se 
    // ejecutan luego de una tarea asincronica


// funcion que recorre array ejecuta un callback

function procesarArray(array, callback){
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}


// funcion de callbaks que muestre los elementos del array
function mostrarElemento(elemento){

    console.log(elemento);
}

function multiplicarPorDos(elemento){
    console.log(elemento * 2);
}

function calcularCuadrado(elemento){
    console.log(elemento * elemento);
}

// crear nuestro array
let miArray = [1,2,3,4,5];

// llamada a la funcion procesarArray
console.log("Recorriendo el array: ");
procesarArray(miArray, mostrarElemento); // no le pasamos parametros, sino el IDENTIFICADOR -> mostrarElemento

console.log("Multiplicacion por 2:")
procesarArray(miArray, multiplicarPorDos)

console.log("Cuadrado de cada elemento: s");
procesarArray(miArray, calcularCuadrado)