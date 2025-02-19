function suma(nota1, nota2, nota3){
    let resultado = nota1 + nota2 + nota3;
    return resultado;
}

function promedio(){
    let resultadoSuma = suma(7,8,9);
    let resultadoPromedio = resultadoSuma / 3;
    return resultadoPromedio;
}

// llamado
let promedioObtenido = promedio();
console.log("El promedio de sus notas es: " + promedioObtenido);
