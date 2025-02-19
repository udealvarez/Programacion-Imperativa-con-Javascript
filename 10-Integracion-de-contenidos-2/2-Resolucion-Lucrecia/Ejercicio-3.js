/*

        Convertir texto: 

Crea una función que reciba un string por parámetro y lo convierta a mayúsculas y minúsculas respectivamente. 
La función deberá mostrar los resultados por consola. 
Para esto, averiguar qué hacen los métodos de Strings: toUpperCase() y toLowerCase()


*/

function convertirTexto(texto){ // parametro -> informacion externa que tenemos que proporcionar
    let textoMayuscula = texto.toUpperCase(); // -> toma un texto y lo convierte en -> MAYUSCULA
    let textoMinuscula = texto.toLowerCase(); // -> toma un texto y lo convierte en -> minuscula

    console.log("Texto en mayuscula: " + textoMayuscula);
    console.log("Texto en minuscula: " + textoMinuscula);
}

convertirTexto("HoLa MuNdO");