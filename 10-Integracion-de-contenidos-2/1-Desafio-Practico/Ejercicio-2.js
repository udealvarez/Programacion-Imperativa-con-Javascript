/*

        Eliminar primer elemento: 

Crea una función llamada ‘eliminarPrimerElemento’ que tome un array como parámetro y elimine el primer elemento.
La función debe devolver el elemento eliminado.

*/


function eliminarPrimerElemento(numeros){
    return numeros.shift();
}

let numeros = [1, 2, 3, 4, 5];

let elementoEliminado = eliminarPrimerElemento(numeros);

console.log(elementoEliminado);