/*

        Unir dos arrays: 

Crea una función llamada ‘unirArrays’ que tome dos arrays como parámetros y los una en uno solo. 
La función debe devolver el nuevo array.Para esto, averiguar qué hace el método .concat()

*/


function unirArrays(array1, array2){
    return array1.concat(array2); // el metodo concat retorna un nuevo array uniendo 2 arrays
                                // Array1 CONCATENA array2
}

let arreglo = [6,7,8,9];
let resultadoDeUnion = unirArrays([1,2,3,4,5], arreglo);
  
console.log(resultadoDeUnion);