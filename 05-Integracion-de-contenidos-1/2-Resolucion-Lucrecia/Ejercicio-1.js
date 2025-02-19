/*
Validador de contraseña: 

Crea una variable llamada ‘contraseña’ donde guardes un valor específico. 
Luego, crea una función que reciba por parámetro un dato y utilizando operadores lógicos y condicionales,
verifica si dicho parámetro coincide con la variable llamada ‘contraseña’. 
La función deberá mostrar por consola si la contraseña recibida es válida o no.
*/

let contrasena = "miContrasena";

function validadorContrasena(contrasenaRecibida){

    if (contrasenaRecibida === contrasena) {
        console.log("Contrasena es valida");
    }else{
        console.log("Contrasena no valida");
    }
}

validadorContrasena("pepe");
validadorContrasena("miContrasena");