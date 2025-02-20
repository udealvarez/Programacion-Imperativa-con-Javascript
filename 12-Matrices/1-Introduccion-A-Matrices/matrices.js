// crear una matriz

// opcion 1
let matriz = [
    [1,2,3],      // los corchetes violetas son las filas de una matriz
    [4,5,6],
    [7,8,9]
];

// opcion 2
let arrayMatriz = []; // esto es una manera de tener un array vacio

let fila1 = ["A", "B", "C"];
let fila2 = ["E", "D", "U"];

arrayMatriz[0] = fila1;     // agregamos array en distintas posiciones
arrayMatriz[1] = fila2;


// visualizar una matriz
console.table(matriz);  // -> el .TABLE nos muestra la matriz en formato TABLA
console.table(arrayMatriz);


// acceder a un elemento especifico
console.log(matriz[1][1]); // -> el primer [FILA] y el segundo [COLUMNA]
console.log(matriz[2][1]); 


// modificar un elemento especifico
matriz[0][1] = 23;

console.table(matriz);  // visualizar una matriz


// recorrer una columna espeficica
for (let i = 0; i < matriz.length; i++) { // con el matriz.length solo tenemos el numero de filas
    console.log(matriz[i][0]); // i es el numero de fila
}
    

// recorrer una fila especifica
for (let i = 0; i < matriz[0].length; i++) { // matriz[0].length se centra solo en la fila 0
    console.log(matriz[0][i]);
}
