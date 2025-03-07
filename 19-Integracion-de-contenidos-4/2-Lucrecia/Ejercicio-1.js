/*

        BubbleSort
    
    Crea una función que reciba por parámetro un array de números y los ordene de menor a mayor mediante el ordenamiento burbuja.

*/

let numeros = [8,4,2,9,5,7,85,1,3];

function ordenarElementos(array){

    for (let j = 0; j < array.length; j++) {
        
        for (let i = 0; i < array.length; i++) {
            
            if (array[i] > array[i+1]) {
                
                let temporal = array[i];
                array[i] = array[i+1];
                array[i+1] = temporal;
            }
        }        
    }

    return array;
}

let resultado = ordenarElementos(numeros);
console.log(resultado);