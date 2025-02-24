/*

    .slice()
sintaxis: let newArray = arrayOriginal.slice(inicio, fin);

*/

let frutas = ["manzana", "naranja", "banana", "fresa", "kiwi"];
let primerasTres = frutas.slice(0,3); // -> aca tiene inicio y fin

console.log(primerasTres);

let desdeNaranja = frutas.slice(1); // -> aca solo tiene inicio, desde la posicion 1 hasta el final
console.log(desdeNaranja);

let ultimosDos = frutas .slice(-2); // al tener negativo, se contabiliza desde el final hacia adelante
console.log(ultimosDos);

let entreDosIndices = frutas.slice(-3,4);
console.log(entreDosIndices);



/*

    .splice()
sintaxis: arrayOriginal.splice(inicio, cantidadAEliminar, elemento1, elemento2, elementoN);


*/

let meses = ["enero","febrero","marzo","abril","mayo"];

meses.splice(1, 2, "nuevoMes1", "nuevoMes2"); // el 1 indica desde donde empiezan los cambios
                                                // el 2 indica desde la posicion 1, elimina 2 elementos
                                                // "nuevoMes1", "nuevoMes2" se solicita agregar 2 elementos desde la posicion 1

console.log(meses);

meses.splice(2,0, "nuevoMes3");
console.log(meses);




/*

    .sort() -> ordena los elementos de un array devolviendo un array ordenado
            -> nos permite ordenar numeros como palabras

            -> con las palabras se ordena a travez del CODIGO ASCII
            -> se ordenar por alfabeto, si 2 palabras empiezan iguales, va por la segunda letra

sintaxis: arrayOriginal.sort()

*/

let numeros = [1,3,5,6,8,2,4];

numeros.sort();
console.log(numeros);

let palabras = ["perro", "gato", "auto", "zorro"];
palabras.sort();
console.log(palabras);




/*

    .find()

sintaxis: let resultado = arrayOriginal.find(funcionDePrueba(elemento));


*/

let edades = [25, 28, 30, 25, 22];

let mayorDeEdad = edades.find(edad => edad >= 18);
console.log(mayorDeEdad);

let primeraEdadMayor = edades.find(edad => edad > 30);
console.log(primeraEdadMayor);
