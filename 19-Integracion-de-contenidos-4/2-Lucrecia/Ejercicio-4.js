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


let temas = [
    {
        nombre : "Arrasando",           // objeto 1
        votos : 230
    },
    {
        nombre : "Azul",                // objeto 1
        votos : 1230
    },
    {
        nombre : "Puesto",              // objeto 1
        votos : 148
    },
    {
        nombre : "Quedate",             // objeto 1
        votos : 5230
    },
    {
        nombre : "Bienvenito",          // objeto 1
        votos : 30
    }
];

function busquedaLineal(array, tema){

    for (let i = 0; i < array.length; i++) {

        if (array[i].nombre  === tema) {

            return array[i].votos;
        }
    }

    return "El tema buscado no se encuentra dentro del array";
}

let votos = busquedaLineal(temas, "Quedate");
console.log(votos);
