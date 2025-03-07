/*

        Obtener votos

    Dado un array con los datos de una encuesta realizada sobre los temas musicales más populares 
        —lo que se tiene en el array son objetos definidos con el nombre de un tema musical y cantidad de votos que obtuvo— 
    
    crear el array con los datos de 5 temas y una cantidad de votos para cada uno. 
    
    Los votos obtenidos deben estar desordenados. 
    
    Una vez creado el array, se deberá escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo, considerando:


        PARTE 1

    Resolverlo aplicando búsqueda lineal.

*/

let temasMusicales = [
    {
        nombre : "Faint",
        votos : 120
    },
    {
        nombre : "Numb",
        votos : 85
    },
    {
        nombre : "Like a stone",
        votos : 200
    },
    {
        nombre : "Feel good",
        votos : 150
    },
    {
        nombre : "Complicated",
        votos : 95
    }
];

// SORT -> ordena el arrat por los votos ya que la busqueda binaria tiene que estar ordenado
temasMusicales.sort((a,b) => a.votos - b.votos);


function buscarVotosBinario(arr, votosBuscado){

    let inicio = 0;
    let fin = arr.length - 1;  // le resto 1 para tener el total de las posiciones

    while (inicio <= fin) {
        let mitad = Math.round((inicio + fin) / 2);
        let votosMedio = arr[mitad].votos;

        if (votosMedio === votosBuscado) {
            return arr[mitad].nombre;
        }

        if (votosMedio > votosBuscado) {
            fin = mitad - 1;
        }else{
            inicio = mitad + 1;
        }
    }
    
    return "Tema no encontrado";
}


let resultado = buscarVotosBinario(temasMusicales, 200);
console.log(resultado);