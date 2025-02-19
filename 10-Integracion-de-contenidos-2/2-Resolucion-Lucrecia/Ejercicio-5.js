/*

        Objetos anidados: 

Agrega una nueva propiedad al objeto creado en el ejercicio anterior llamada ‘ubicacion’, 
donde deberás guardar un objeto interno con las propiedades: codigoPostal, ciudad, calle y número. 
Luego, crea una función que reciba dicho objeto por parámetro y le permita al usuario eliminar solo una de las propiedades del objeto.

*/

let persona = {
    nombre : "Eduardo",
    edad : 36,
    ocupacion : "Electricista",
    habilidad : "Piloto",
 
};

persona.ubicacion = {
    codigoPosta : 1661,
    ciudad : "Bella Vista",
    calle : "Av. San Martin",
    numero : 2140
};

function eliminarPropiedad(objeto, propiedad){ // necesito 2 parametros para eliminar
    switch (propiedad) {
        case "nombre":
            delete objeto.nombre;
            break;
        case "edad":
            delete objeto.edad;                    
            break;
        case "ocupacion":
            delete objeto.ocupacion;            
            break;
        case "habilidad":
            delete objeto.habilidad;            
            break;
            
        case "ubicacion":
            delete objeto.ubicacion;            
            break;
    
        default:
            console.log("Dicha propiedad no existe en el objeto");
            break;
    }
}

eliminarPropiedad(persona, "edad");
console.log(persona);