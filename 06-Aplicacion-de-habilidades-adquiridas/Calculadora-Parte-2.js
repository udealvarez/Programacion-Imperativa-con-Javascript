const prompt = require("prompt-sync")({ sigint: true }); // este comando va al inicio del archivo

/*
    NOTA

    Para cada archivo vamos a tener que instalar por la consola el siguiente comand

    npm i prompt-sync       --> comando

*/

/*  algo que despues nos sirve mas abajo

let numero = parseInt(prompt("Por favor ingrese un numero: ")); // con el parseInt parseo el numero a entero, sino tengo el parseInt me lo toma como string
console.log("El numero que ha seleccioado es: " + numero);

*/

function suma(numero1, numero2){

    let resultado = numero1 + numero2;
    return resultado;
}

function resta(numero1, numero2){

    let resultado = numero1 - numero2;
    return resultado; 
}

function multiplicar(numero1, numero2){

    return numero1 * numero2;  
}

function division(numero1, numero2){

    if (numero2 == 0) {
        return "NO SE PUEDE DIVIDIR POR CERO";
    }else{
        return numero1 / numero2;
    }
}


console.log("Bienvenido a la calculadora virtual");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicacion");
console.log("4. Division");

let opcion = parseInt(prompt("Indique que operacion quiere realizar: ")); // al agregarle el parseInt el prompt tiene que recibir un entero para entrar en el switch

let numero1;
let numero2;
let resultado;

switch (opcion) {
    case 1:
        numero1 = parseInt(prompt("Indique el primer numero: "));
        numero2 = parseInt(prompt("Indique el segundo numero: "));
        resultado = suma(numero1, numero2);
        console.log("El resultado de la suma es: " + resultado);
        break;

    case 2:
        numero1 = parseInt(prompt("Indique el primer numero: "));
        numero2 = parseInt(prompt("Indique el segundo numero: "));
        resultado = resta(numero1, numero2);
        console.log("El resultado de la resta es: " + resultado);
        break;

    case 3:
        numero1 = parseInt(prompt("Indique el primer numero: "));
        numero2 = parseInt(prompt("Indique el segundo numero: "));
        resultado = multiplicar(numero1, numero2);
        console.log("El resultado de la multiplicacion es: " + resultado);
        break;

    case 4:
        numero1 = parseInt(prompt("Indique el primer numero: "));
        numero2 = parseInt(prompt("Indique el segundo numero: "));
        resultado = division(numero1, numero2);

        if (typeof resultado == "string") {
            console.log(resultado);
        }else{
            console.log("El resultado de la division es: " + resultado);
        }

        break;
        
    default:
        console.log("Ingreso una opcion no valida");
        break;
}