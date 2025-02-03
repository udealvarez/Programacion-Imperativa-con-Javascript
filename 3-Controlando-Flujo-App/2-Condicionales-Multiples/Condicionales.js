let clima = "soleado";
let temperatura = 23;
let mensaje = "";


if (clima === "soleado" && temperatura >= 25) {
    console.log("El dia esta caluroso");
}else{
    console.log("El dia no esta caluroso");
}


let puntuacion = 75;

if (puntuacion >= 90) {
    console.log("Nota A");
}else if(puntuacion >= 80){
    console.log("Nota B");
} else if (puntuacion >= 70) {
    console.log("Nota C");
}else{
    console.log("Nota D");
}



let nota = -78;

if (nota >= 1 && nota <= 1<0) {
    if (nota >= 7 && nota <= 10) {
        console.log("Aprobaste la materia");
    }else{
        console.log("Deberas recursar la materia");
    }
}else{
    console.log("La nota enviada es erronea!! Debe ser un nro del 1 al 10");
}