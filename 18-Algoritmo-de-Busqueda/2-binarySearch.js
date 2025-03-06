let arreglo = [1,2,3,4,5,6,7];
let nroABuscar = 3;

function busquedaBinaria(arr, valorBuscado){

    let indiceDeBusqueda = 0;
    
    let limiteDeBusqueda = arr.length - 1;              // le restamos 1 para poder las 6 posiciones del array original

    while (indiceDeBusqueda <= limiteDeBusqueda) {      // se repetira el ciclo mientras no haya elementos descartados y esten pendientes a analizar
        
        const INDICEMITAD = Math.round((indiceDeBusqueda + limiteDeBusqueda) / 2);      // las variables CONSTANTES se escriben en MAYUSCULA
                              // ROUND -> metodo que redondea cualquier cosa que pasemos por parametro
                              
        const ELEMENTOMEDIO = arr[INDICEMITAD];
           // ELEMENTOMEDIO almacena el elemento de la mitad de array
        
        if (ELEMENTOMEDIO == valorBuscado) {
            return INDICEMITAD;
        }

        if (ELEMENTOMEDIO > valorBuscado) {
            limiteDeBusqueda = INDICEMITAD - 1;     
        }else{
            indiceDeBusqueda = INDICEMITAD + 1;     // comienzo del 5
        }
        
    }
    return null;
}

let indiceEncontrado = busquedaBinaria(arreglo, 6);

console.log(indiceEncontrado);

