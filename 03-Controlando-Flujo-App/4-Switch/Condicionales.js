
let diaSemana = 7;
let mensaje = "";

switch (diaSemana) {
    case 1:
        mensaje = "Hoy es Lunes";
        break;
    case 2: 
        mensaje = "Hoy es Martes";
        break;
    case 3:
        mensaje = "Hoy es Miercoles";
        break;
    case 4: 
        mensaje = "Hoy es Jueves";
        break;
    case 5:
        mensaje = "Hoy es Viernes";
        break;
    case 6: 
        mensaje = "Hoy es Sabado";
        break;
    case 7:
        mensaje = "Hoy es Domingo";
        break;
    default:
        mensaje = "Ingreso un numero incorrecto";
}

console.log(mensaje);


let fruta = "naranja";
let mensajeFruta = " ";

switch (fruta) {
    case "manzana":
        mensajeFruta = "Es una manzana";
        break;
    case "banana":
        mensajeFruta = "Es una banana";
        break;
    case "pera":
        mensajeFruta = "Es una pera";
        break;
    case "naranja":
        mensajeFruta = "Es una naranja";
        break;
    default:
        mensajeFruta = "Ha ingresado una fruta incorrecta";
        break;
}
console.log(fruta);