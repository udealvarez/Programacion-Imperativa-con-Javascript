const prompt = require("prompt-sync")({ sigint: true });

/*
let contador = 0;

while (contador <= 5) {
    console.log("El contador es: " + contador);
    contador++;
}

console.log(contador);
*/


let control = "si";
console.log("Bienvenido al registro de notas!");

let nota;
let sumaNotas = 0;  // VARIABLE ACUMULADORA
let cant = 0; // VARIABLE CONTADORA

while (control == "si") {
    console.log("Ingrese una nota a sumar: ");
    nota = parseInt(prompt("Nota alumno: "));

    sumaNotas = sumaNotas + nota; //acumulador + nota nueva  --> va sumando lo que tiene el acumulador con la nueva nota
 // sumaNotas += nota;    --> otra manera de escribirlo

    cant++; //cantidad de notas

    control = prompt("Ingrese 'si' si desea agregar notas o 'no' para terminar");
}

if (cant > 0) {
    let promedio = sumaNotas / cant;
    console.log("El promedio de las notas es: " + promedio);
}else{
    console.log("No ingresaron notas");
}
