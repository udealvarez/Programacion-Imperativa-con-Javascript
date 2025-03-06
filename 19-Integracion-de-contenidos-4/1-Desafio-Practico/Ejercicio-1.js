/*

        BubbleSort
    
    Crea una función que reciba por parámetro un array de números y los ordene de menor a mayor mediante el ordenamiento burbuja.

*/

let array = [12,4,6,78,33,56];

function ordenamientoBurbuja(arr){

    for (let i = 0; i < array.length; i++) {
        
        for (let j = 0; j < array.length; j++) {

            if (array[i] > array[i + 1]) {
                
                let temporal = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temporal;
            }
        }
    }

    return arr;
    
}

let sarasa = ordenamientoBurbuja(array);
console.log(sarasa);
