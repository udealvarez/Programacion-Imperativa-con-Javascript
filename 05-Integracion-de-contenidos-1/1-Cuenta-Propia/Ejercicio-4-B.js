/*
Evaluador de Rango de Edad: 
Escribe una función que determine en qué categoría de edad se encuentra una persona. 
Utiliza las estructuras que consideres necesarias para clasificar a las personas
en rangos como niño, adolescente, adulto joven, adulto, etc., según su edad.
*/

function calculandoCategoria(edad){
    if (edad >= 60) {
        console.log("Persona mayor");
    }else if (edad >= 45) {
        console.log("Adultez media");
    }else if (edad >= 25) {
        console.log("Adultez joven");
    }else if (edad >= 14) {
        return "Juventud"
    }else if (edad >= 12) {
       console.log("Adolescencia");
    }else if (edad > 0) {
        console.log("Niñes");
    }else{
        console.log("Edad invalida");
    }
}

calculandoCategoria(-4);
calculandoCategoria(4);
calculandoCategoria(14);
calculandoCategoria(54);
calculandoCategoria(64);
