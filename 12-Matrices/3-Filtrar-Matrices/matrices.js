let matriz = [
    [1,2,3],
    [4,5,6]
];

for (let i = 0; i < matriz.length; i++) {  // for para filas
    
    for (let j = 0; j < matriz[i].length; j++) {   // for para columnas     / matriz[i].length -> me da el num de columnas
        
        if (matriz[i][j] % 2 == 0) {
            console.log(matriz[i][j]);
        }
        
    }
    
}
