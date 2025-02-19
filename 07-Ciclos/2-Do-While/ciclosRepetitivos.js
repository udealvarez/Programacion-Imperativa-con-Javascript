const prompt = require("prompt-sync")({ sigint: true });
/*
console.log("While");

let contador = 1; // VARIABLE CONTADORA

while (contador <= 10) {
    
    console.log(contador);
    contador++;
}

console.log("Do while");

let cont = 1;
do {
    console.log(cont);
    cont++;
} while (cont <= 5);

*/

let numeroAdivinar = 4;
let intento = 0; //variable contadora
let numero;

do {
    numero = parseInt(prompt("Ingrese un numero del 1 al 10: "));

    if (numero < numeroAdivinar) {
        console.log("Muy bajo, intenta nuevamente");
    }else if (numero > numeroAdivinar) {
        console.log("Muy alto, ingrese nuevamente");
    }else{
        console.log("Numero correcto");
    }

    intento++;

} while (numero != numeroAdivinar);

console.log("Adivinaste el numero en " + intento + " de intentos");