// String y accesos unicos
let saludos = "Hola!";
console.log(saludos[4]);


// .length  --> length es una propiedad, nos retorna la cantidad de caracteres del string
let miSerie = "Man Men";

//console.log(miSerie.length)
let arrayNombres = ["Bart", "Lisa", "Moe"];
console.log(arrayNombres.length);
console.log(arrayNombres[0].length);


// indexOf --> busca en el string, el string que pasamos por parametro
let saludo = "Hola! Estamos programando"; 
console.log(saludo.indexOf("a"));   // comienza la busqueda desde la posicion | IZQ -> DER
console.log(saludo.indexOf("Estamos"))


// .slide()     TENEMOS 3 OPCIONES
let fraseSlide = "Hola!! como estas?";

    // opcion 1
console.log(fraseSlide.slice(6,11));

    // opcion 2
console.log(fraseSlide.slice(6)); // en este caso toma lo que esta desde la posicion 6 hacia atras

    // opcion 3
console.log(fraseSlide.slice(-10)); // el num por parametros es la cantidad de letras que va a retroceder
                            // despues se trae desde esa posicion del string, lo que esta hacia atras 

// .trim()      --> esta propiedad elimina los espacios que estan al principio y al final de un string
let nombreCompleto = "     Homero Simpson    ";
console.log(nombreCompleto.trim());


// .split()  --> este metodo divide un string en distintas partes 
let saludoSplit = "Hola, como estas?";
console.log(saludoSplit.split(" ")); // el separador va de manera de parametro, en este caso un espacio

let arrayNuevo = saludoSplit.split(", "); // separo el strin con la coma --> "hola", "como estas?"
console.log(arrayNuevo);



// .replace()   --> reemplaza una parte del string por otra
let frase = "me encanta Java";

let fraseNueva = frase.replace("Java", "Javascript");
console.log(fraseNueva);