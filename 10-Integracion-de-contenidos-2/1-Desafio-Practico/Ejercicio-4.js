/*
        Manipulación de objetos:

Crea un objeto llamado ‘persona’ que contenga como propiedades: nombre, edad y ocupación. 
Crea una función que muestre cada propiedad de dicho objeto por consola, e invocala para ver sus valores. 
Luego, modifica el valor de ‘ocupación’ y agrega la propiedad ‘habilidad’. 
Llama nuevamente a la función creada para visualizar el cambio efectuado.

*/


// clase persona
let persona = {
    nombre : "Eduardo",
    edad : 36,
    ocupacion : "Electricista"
};


// funcion para mostrar las propiedades del objeto persona
function mostrarPropiedades(){
    console.log("Nombre: " + persona.nombre);
    console.log("Edad: " + persona.edad);
    console.log("Ocupacion: " + persona.ocupacion);

    if (persona.habilidad) {
        console.log("Habilidad: " + persona.habilidad);
    }
};


// llamado a la funcion
mostrarPropiedades();


// modificacion de la ocupacion
persona.ocupacion = "Desarrollador Back End";

// habilidad
persona.habilidad = "Piloto";

// llamo a la funcion para ver los cambios
mostrarPropiedades();



