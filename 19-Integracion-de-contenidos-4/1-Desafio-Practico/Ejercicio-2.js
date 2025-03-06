/*

        Indicar ordenamiento

    Crea una función que reciba por parámetro un array de números e indique si el array se encuentra ordenado de forma ascendente o no.

*/


let array = [1,2,3,4,5,6,7];

function indicarOrdenamiento(arr){


    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length; j++) {
            
            if (array[i] < array[i + 1]) {      // comparo si el numero de la izquiera es mas chico que el de la derecha
                return "Ordenado ASC";
            }else{
                return "Ordenado DESC";
            }            
        }
    }
}

let ascDESC = indicarOrdenamiento(array);
console.log(ascDESC);