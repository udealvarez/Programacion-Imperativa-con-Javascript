//      Unir dos arrays: 
// 
// Crea una función llamada ‘unirArrays’ que tome dos arrays como parámetros y los una en uno solo. 
// La función debe devolver el nuevo array.
// Para esto, averiguar qué hace el método .concat()


function unirArrays(array1, array2){
    return array1.concat(array2);
}

let numeros = [1, 2, 3];
let letras = ["A", "B", "C"];

let nuevoArray = unirArrays(numeros, letras);
console.log(nuevoArray);