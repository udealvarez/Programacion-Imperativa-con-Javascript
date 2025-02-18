// crear un objeto
let persona = {     //al abrir { } --> objeto literal
    nombre : "Eduardo",
    apellido : "Alvarez",       // PROPIEDADES
    edad : 36,
    coloresFavoritos : ["Celeste", "Blanco"],   // al poner corchetes de esta manera, indico que es un array
    saludar : function(){
        return "Hola! como estas? soy " + this.nombre;
    }
};
 persona.nombre = "Miguel";

// acceder a las propiedades de un objeto
console.log(persona.coloresFavoritos[0]); // para ingresar a las propiedades, escribo un punto " . "


// crear una nueva propiedad
persona.deporteFavorito = "Tenis";
persona.edad = 33;

console.log(persona);

// eliminar una nueva propiedad
delete persona.deporteFavorito;
console.log(persona);


// acceder a un metodo de un objeto
let saludoRecibido = persona.saludar();

console.log(saludoRecibido);