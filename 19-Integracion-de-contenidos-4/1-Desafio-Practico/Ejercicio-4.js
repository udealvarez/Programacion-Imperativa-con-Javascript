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


function buscarVotosLineal(arr, nombreBuscado){

    for (let i = 0; i < temasMusicales.length; i++) {

        if (temasMusicales[i].nombre === nombreBuscado) {
            return "La cantidad de votos es: " + temasMusicales[i].votos;
        }
    }
    return "Tema no encontrado";
}

let temaBuscado = buscarVotosLineal(temasMusicales, "Feel good");
console.log(temaBuscado);

