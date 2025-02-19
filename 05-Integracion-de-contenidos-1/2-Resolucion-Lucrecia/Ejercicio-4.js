/*
Evaluador de Rango de Edad: 
Escribe una función que determine en qué categoría de edad se encuentra una persona. 
Utiliza las estructuras que consideres necesarias para clasificar a las personas
en rangos como niño, adolescente, adulto joven, adulto, etc., según su edad.
*/

function evaluarEdad(edad){

    if (edad < 12) {
        console.log("Nene");
    }else if (edad < 18) {
        console.log("Adolecente");
    }else if (edad < 30) {
        console.log("Adulto joven");
    }else{
        console.log("Adulto");
    }
}

evaluarEdad(10);
evaluarEdad(16);
evaluarEdad(23);
evaluarEdad(36);
