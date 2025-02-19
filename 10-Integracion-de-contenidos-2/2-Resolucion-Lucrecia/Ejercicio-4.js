/*

        Manipulación de objetos: 

Crea un objeto llamado ‘persona’ que contenga como propiedades: nombre, edad y ocupación. 
Crea una función que muestre cada propiedad de dicho objeto por consola, e invocala para ver sus valores. 
Luego, modifica el valor de ‘ocupación’ y agrega la propiedad ‘habilidad’. 
Llama nuevamente a la función creada para visualizar el cambio efectuado.

*/

let persona = {
    nombre : "Eduardo",
    edad : 36,
    ocupacion : "Electricista"
};

function verObjeto(objeto){  // -> esta funcion tiene que mostrar las props del objeto, 
                                // tenemos que pasarle por parametro dicho objeto
    console.log("Nombre: " + objeto.nombre);
    console.log("Edad: " + objeto.edad);
    console.log("Ocupacion: " + objeto.ocupacion);
    console.log("Habilidad: " + objeto.habilidad);
}

// modifica el valor de ‘ocupación’ y agrega la propiedad ‘habilidad’
persona.ocupacion = "Desarrollador";
persona.habilidad = "Piloto";


// llamar a la funcion
verObjeto(persona); // -> mando por parametro el OBJETO -> PERSONA
