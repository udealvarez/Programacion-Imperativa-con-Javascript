function suma(numero1, numero2){

    let resultado = numero1 + numero2;
    return resultado;
}

function resta(num1, num2){

    let resultado = num1 - num2;
    return resultado; 
}

function multiplicar(number1, number2){

    return number1 * number2;  
}

function division(numerito1, numerito2){

    if (numerito2 == 0) {
        return "NO SE PUEDE DIVIDIR POR CERO";
    }else{
        return numerito1 / numerito2;
    }
}

console.log("Bienvenido a la calculadora virtual");
console.log("Indique que operacion quiere realizar:");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicacion");
console.log("4. Division");