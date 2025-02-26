let array = [5,4,1,6,3,2];

for (let j = 0; j < array.length; j++) {        // este for recorre la cantidad de elementos del array
    
    for (let i = 0; i < array.length; i++) {    // este for ordena los elementos dentro del array
        
        if (array[i] > array[i + 1]) {      // esta condicion nos ayuda a comprobar si el numero de la derecha es mas chico que el de la izquierda
            //    0          0 + 1 = 1      -> compara posiciones para reordenar
    
            let temporal = array[i];
            array[i] = array[i + 1];        // el elemento de la posicion 1 se almaceno en la posicion 0
            array[i + 1] = temporal;        // en la posicion 0 + 1 piso el valor de la posicion 0 en la posicion 1
    
        }
    }
}

console.log(array);