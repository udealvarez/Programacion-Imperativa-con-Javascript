/*

    Objetos anidados: 

Agrega una nueva propiedad al objeto creado en el ejercicio anterior llamada ‘ubicacion’, 
donde deberás guardar un objeto interno con las propiedades: codigoPostal, ciudad, calle y número. 

Luego, crea una función que reciba dicho objeto por parámetro y le permita al usuario eliminar solo una de las propiedades del objeto.

*/


// clase persona
let persona = {
    nombre : "Eduardo",
    edad : 36,
    ocupacion : "Desarrollador Back End",
    habilidad : "Piloto",
    ubicacion : {
        codigoPostal : 1661,
        ciudad : "Bella Vista",
        calle : "Av. San Martin",
        numero : 2140
    }
};

function eliminandoPropiedad(){
    delete persona.ubicacion.codigoPostal;
  
}

console.log(persona);