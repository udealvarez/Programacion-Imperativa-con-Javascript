/*
Evaluador de Rango de Edad: 
Escribe una función que determine en qué categoría de edad se encuentra una persona. 
Utiliza las estructuras que consideres necesarias para clasificar a las personas
en rangos como niño, adolescente, adulto joven, adulto, etc., según su edad.
*/

function calculandoCategoria(edad){
    if (edad >= 60) {
        return"Persona mayor";
    }else if (edad >= 45) {
        return "Adultez media"
    }else if (edad >= 25) {
        return "Adultez joven"
    }else if (edad >= 14) {
        return "Juventud"
    }else if (edad >= 12) {
        return "Adolescencia"
    }else if (edad > 0) {
        return "Niñes"
    }else{
        return "Edad invalida"
    }
}

console.log(calculandoCategoria(-4));
console.log(calculandoCategoria(15));
console.log(calculandoCategoria(23));
console.log(calculandoCategoria(67));
console.log(calculandoCategoria(34));

