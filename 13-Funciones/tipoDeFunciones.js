// funciones declaradas

console.log(suma(2,2));

function suma(num1, num2){

    return num1 + num2;
}



// funciones expresadas

let resta = function(num1, num2){
    return num1 - num2;
}

console.log(resta(6,3));



// funciones flechas (arrow functions)      -> estas funciones no tienen acceso a su propio THIS
        // NOTA: si necesito una funcion SIMPLE las F. Flechas son las mejores
        
let multiplicacion = (num1, num2) => {
    return num1 * num2;
} 

console.log(multiplicacion(8,5));

    // otra opcion

let objeto = {
    valor : 10,
    doble : () => {return this.valor * 2;}
}

console.log(objeto.doble());