/*

        Eliminar primer elemento: 

Crea una función llamada ‘eliminarPrimerElemento’ que tome un array como parámetro y elimine el primer elemento. 
La función debe devolver el elemento eliminado.

*/

function eliminarPrimerElemento(array){
    let primerElemento = array.shift();
    return primerElemento;
}

let arrayNuevo = [1,2,3];
let elementoEliminado = eliminarPrimerElemento(arrayNuevo);

console.log(arrayNuevo);
console.log(elementoEliminado);