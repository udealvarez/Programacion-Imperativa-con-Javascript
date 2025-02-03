// tradicional vs ternario
let numero = -10;

if (numero > 0) {
    console.log("Numero positivo");
}else{
    console.log("Numero negativo");
}

(numero > 0) ? console.log("Numero positivo") : console.log("Numero negativo"); // IF TERNARIO - SE REDUCE TODO A 1 LINEA


// asignacion a variable

let edad = 30;
let mensaje = "";

if (edad >= 18) {
    mensaje = "Es mayor";
}else{
    mensaje = "Es menor";
}

mensaje = (edad >= 18) ? "Es mayor" : "Es menor"; // otra manera de escribir todo en 1 sola linea
console.log(mensaje);


// mas de una instruccion
let edad1 = 20;
let mensaje1 = "";
let categoria = "";


if (edad1 >= 18) {
    mensaje1 = "Es mayor de edad!";
    categoria = "Adulto";
    console.log("Felicidades, Eres mayor de edad!");
}else{
    mensaje1 = "Es menor de edad!";
    categoria = "Menor";
    console.log("Felicidades, Eres menor de edad!");
}


(edad1 >= 18) ? (mensaje1 = "Es mayor de edad!", categoria = "Adulto", console.log("Felicidades, Eres mayor de edad!")) : (mensaje1 = "Es menor de edad!", categoria = "Menor", console.log("Felicidades, Eres menor de edad!"));  // IF TERNARIO