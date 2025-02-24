/* 
    . map()

        -> recibe una funcion por parametros (un callbakcs)
        -> nos devuelve un array de la misma longitud del array original

*/

let numeros = [2,4,6];
let numerosMultiplicados = numeros.map(function(num){
    return num * 2;
});

console.log(numerosMultiplicados);


/*

    .filter()

        -> recorrer un array y filtra segun una condicion por medio de un callbacks
        -> nos devuelve un array nuevo filtrado
        

*/

let edades = [22,8,17,14,30];

let mayores = edades.filter(function(edad){ // en el parametro de la funcion pongo un nombre generico
    return edad > 18;
});

console.log(mayores);




/*

    .reduce()

        -> recorre la totalidad de un array pero nos devuelve un unico valor
        -> recibe un callback


*/

let nums = [5,7,16];

let suma = nums.reduce(function(acumulador, num){
    return acumulador + num;
})

console.log(suma);




/*

    .forEach()

        -> itera sobre un array, pasa elemento por elemento dentro de un array
        -> no retorna absolutamente nada


*/

let paises = ["argentina", "colombia", "brasil"];

paises.forEach(function(pais){ // lo que va dentro de los parentesis es un nombre generico para cada pais
    console.log(pais);
});