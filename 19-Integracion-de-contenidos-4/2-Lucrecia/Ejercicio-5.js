/*

        Obtener votos

    Dado un array con los datos de una encuesta realizada sobre los temas musicales más populares 
        —lo que se tiene en el array son objetos definidos con el nombre de un tema musical y cantidad de votos que obtuvo— 
    
    crear el array con los datos de 5 temas y una cantidad de votos para cada uno. 
    
    Los votos obtenidos deben estar desordenados. 
    
    Una vez creado el array, se deberá escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo, considerando:


        PARTE 2

    Resolverlo aplicando búsqueda binaria.

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

// para la busqueda binaria el array tiene que estar ordenado

function busquedaBinaria(array, temas){

    let inicio = 0;
    let fin = array.lenght - 1;     // para tener el total de las posiciones

    while (inicio <= fin) {
        
        let posicionMedio = Math.round((inicio + fin) / 2);

        let elementoDelMedio = array[posicionMedio];

        if (elementoDelMedio.nombre === temas) {    // temas -> lo que recibo por parametros
            return elementoDelMedio.votos;
        }

        if (elementoDelMedio.nombre > temas) {
            fin = posicionMedio - 1;
        }else{
            inicio = posicionMedio + 1;
        }

        return -1;
    }
}