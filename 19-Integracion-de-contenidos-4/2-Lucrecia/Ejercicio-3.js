/*

        Contar la cantidad de veces que aparece un número en un array

    Crea una función que reciba por parámetro un número y un array de números, 
    y devuelva la cantidad de veces que aparece ese número en el array utilizando búsqueda lineal.


*/

let numeros = [8,4,2,9,5,4,7,85,1,4,3,4,4];
let cantidad = 0;

function contarCoincidencias(array, num){

    for (let i = 0; i < array.length; i++) {

        if (array[i] === num) {
            cantidad++;
        }
    }

    return cantidad;
}

let cantidadCoincidencias = contarCoincidencias(numeros, 4);
console.log("La cantidad de coincidencias es: " + cantidad);