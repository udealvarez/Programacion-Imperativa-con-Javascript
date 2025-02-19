function suma(numero1, numero2){

    let resultado = numero1 + numero2;
    return resultado;
}

let resultadoSuma = suma(7,9); // cuando llamamos a una funcion que retorna un valor, lo entrega internamente, 
                               // la mejor manera de capturar lo que retorna la funcion es asignandolo a una variable

console.log(resultadoSuma); 


function resta(num1, num2){

    let resultado = num1 - num2;
    return resultado; // la variable RESULTADO no tiene conflicto con la funcion suma por el alcance
}

let resultadoResta = resta(10,3);
console.log(resultadoResta);


function multiplicar(number1, number2){

    return number1 * number2;  // otra manera de expresarlo
}

let resultadoMultiplicacion = multiplicar(10,10);
console.log(resultadoMultiplicacion);



function division(numerito1, numerito2){

    if (numerito2 == 0) {
        return "NO SE PUEDE DIVIDIR POR CERO";
    }else{
        return numerito1 / numerito2;
    }

}

let resultadoDivision = division(10,2);
console.log(resultadoDivision);

let resultadoDivision2 = division(50,0);
console.log(resultadoDivision2);
