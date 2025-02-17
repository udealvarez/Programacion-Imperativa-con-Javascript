// Crear Array
let numero = [10, 20, 30, 40, 50];

// modificar cada uno de elementos a un array e imprimirlos
for (let i = 0; i < numero.length; i++) {
    numero[i] = i+1;
}

for (let i = 0; i < numero.length; i++) {
    console.log(numero[i]);   
}


// Agregar elementos a un array
let notas = [8,4,10,6];

notas[notas.length] = 7; // LENGTH me devuelve la cantidad de elementos del array empezando desde 1
                        // entonces no es necesario tener que brindar el numero del elemento

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);  
}



// Extraer elementos de un array a una variable
let nombre = ["Pedro", "Adriana", "Fabricio"];

let nombreSeleccionado = nombre[1];

console.log(nombreSeleccionado);



// Extraer todos los elementos para algo especifico
let numerosExt = [10, 20, 30, 40, 50];
let acumulador = 0;

for (let i = 0; i < numerosExt.length; i++) {
    acumulador += numerosExt[i];
    
}

let promedio = acumulador / numerosExt.length;


console.log(promedio);


// Encontrar el mayor o menor
let numeros = [10,48,7,52,19];

let menor = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log(menor);
