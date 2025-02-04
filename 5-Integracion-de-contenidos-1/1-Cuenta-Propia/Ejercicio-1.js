let contrasena = "junior";

function validar(cadena){
    if (cadena === contrasena) {
        console.log("La contrasena es valida");
    }else{
        console.log("La contrasena NO es valida");
    }
}

validar("junior");
validar("pepe");