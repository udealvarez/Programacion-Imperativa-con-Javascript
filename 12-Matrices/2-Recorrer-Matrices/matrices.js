let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.table(matriz);

// recorrer la totalidad de datos de la matriz
for (let i = 0; i < matriz.length; i++) {        // i para las fijas -> este for recorre filas
    
    for (let j = 0; j < matriz.length; j++) {        // j es para las columnas  -> for recorre columnas
        
        console.log(matriz[i][j]); // primer [fila], segundo [colimnas]
        
    }
}

// el doble FOR nos permite acceder a cada elemento de una matriz