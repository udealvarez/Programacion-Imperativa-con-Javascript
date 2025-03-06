/*

        Contar la cantidad de veces que aparece un número en un array

    Crea una función que reciba por parámetro un número y un array de números, 
    y devuelva la cantidad de veces que aparece ese número en el array utilizando búsqueda lineal.


*/

let numeros = [1,3,1,6,8,23,1,10];
let numeroBuscado = 0;


function cantidadDeElementosRepetido(num, arr) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === num) {
            numeroBuscado++;
        }
    }  

 return numeroBuscado;
}

let numeroEncontrado = cantidadDeElementosRepetido(1, numeros);
console.log(numeroEncontrado);