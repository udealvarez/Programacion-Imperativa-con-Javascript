let array = [15, 3, 51, 7, 92, 110, 5, 17, 13, 48];
let elementoBuscado = 311;

let posicion = -1;

function busquedaLineal(arr, elemento){

    for (let i = 0; i < arr.length; i++) {          // uso el array que paso por parametro - ARR
        if (arr[i] === elemento) {
            return i;
        }        
    }
    return -1;
}

let indiceEncotrado = busquedaLineal(array, 51);    // se puede pasar por parametros

if (indiceEncotrado === -1) {
    console.log("El elemento a buscar no se encuentra no se encuentra dentro del array");
}else{
    console.log("El elemento a buscar se encuentra en la posicion: " + indiceEncotrado);
}
