// BUBBLESORT -> ORDENAMIENTO BURBUJA

let numeros = [                     // array de objetos
    {
        nombre : "eduardo",         // objeto 1
        edad : 36,
    },

    {
        nombre : "junior",          // objeto 2
        edad : 8
    },

    {
        nombre : "Vicente",         // objeto 3
        edad : 67
    }
];


for (let j = 0; j < numeros.length; j++) {
    
    for (let i = 0; i < numeros.length - 1; i++) {      // con el - 1, haremos que se recorra el array pero con una vuelta menos por que sino se ROMPE
    
        if (numeros[i].edad > numeros[i + 1].edad) {          // comparo el elemento por la propiedad EDAD de los objetos para ordenarlos por la EDAD
                                                              // y mover el objeto completo
            let temporal = numeros[i];
            numeros[i] = numeros[i + 1];
            numeros[i + 1] = temporal;
        }
    }

}

console.log(numeros);
