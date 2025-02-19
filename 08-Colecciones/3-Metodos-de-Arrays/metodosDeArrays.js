// .push() --> agrega un elemento mas al array
let Colores = ["Rojo", "Naranja", "Azul"];

Colores.push("Violeta");
console.log(Colores);

Colores.push("Gris", "Dorado");
console.log(Colores);


// .pop  --> elimina el ultimo elemento del array
let colores = ["Rojo", "Naranja", "Azul"];
let colorEliminado = colores.pop();

console.log(colores);
console.log(colorEliminado);


// .shift  --> elimina el primero de los elementos de un array
let nombres = ["Sandra", "Lautaro", "Ezequiel"];
let nombreDelete = nombres.shift();

console.log(nombres);
console.log(nombreDelete);


// unshift  --> agraga uno o varios elementos al princio de un array
let marcas = ["Audi"];

let nuevaLongitud = marcas.unshift("Mercedes", "Ford", "Ferrari");

console.log(marcas);
console.log(nuevaLongitud); // me devuelve la longitud del array (solo el numero de elementos)


// .join()  --> une los elementos de un array
let dias = ["Lunes", "Martes", "Miercoles"];

let separadosPorComas = dias.join();
console.log(separadosPorComas);

let separadosPorGuion = dias.join(" - ");
console.log(separadosPorGuion);

// indexOf  --> busca un elemento del array que le mandamos por parametro
let frutas1 = ["manzana", "banana", "frutilla"];

let indiceEncontrado = frutas1.indexOf("banana");
console.log(indiceEncontrado);


// lastindexOf --> empieza a buscar el elemento por el final del array, si hay elementos repetidos me va a devolver la posicion del ultimo
let clubes = ["Racing", "Boca", "Lanus", "Boca"];
let posicionEncontrada = clubes.lastIndexOf("Boca");

console.log(posicionEncontrada);


// .includes()  -->  similar al lasindexOf pero retorna un boleano | me va a retornar un true si encuentra el elemento y un false si no lo encuentra
let frutas = ["banana", "manzana", "pera"];

console.log(frutas.includes("manzana")); // le mando por patrametro el elemento que quiero buscar

