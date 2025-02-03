function ejemplo1(){
    if (true) {
        var mensaje = "Hola"       // var-> variable global, se puede acceder de cualquier parte
    }
    console.log(mensaje);
}

ejemplo1();



// let -> tiene un alcance de bloque, solo tiene jurisdiccion en el bloque que fue creado

function ejemplo2() {
    if (true) {
        let mensaje = "Hola"; // el LET solo se jurisdiccion en el bloque del IF
       // console.log(mensaje);  --> con este console.log descomentado se ve el mensaje
    }
    console.log(mensaje); // --> no se puede ver el mensaje si esta descomentado este console y comentado el del bloque IF
}

ejemplo2();

// se recomienda usar mas LET sobre VAR por que se tiene un control mas preciso sobre el alcance de las variables