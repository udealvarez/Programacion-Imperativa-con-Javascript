/*

        Indicar ordenamiento

    Crea una función que reciba por parámetro un array de números e indique si el array se encuentra ordenado de forma ascendente o no.

*/

let numeros = [8,4,2,9,5,7,85,1,3];

function indicarSiEstaOrdenado(array){

    let ordenado = true;

    for (let j = 0; j < array.length; j++) {
        
        for (let i = 0; i < array.length; i++) {
            
            if (array[i] > array[i+1]) {
                
                ordenado = false;

            }
        }        
    }

    return ordenado;
}


let retorno = indicarSiEstaOrdenado(numeros);
console.log(retorno);