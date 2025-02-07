/*
Generador de Mensajes Personalizados: 
Crea una función que genere un mensaje personalizado para un usuario según su nombre
y el momento del día (solo tendremos en consideración si es de mañana, o es de tarde). 

Utiliza concatenación e interpolación para construir el mensaje
y condicionales (if ternario) para incluir diferentes saludos.

*/

function generarMensajePersonalizado(nombre, momentoDelDia){

    let saludo = (momentoDelDia === "manana") ? "Buenos Dias" : "Buenas tardes";
    console.log(`${saludo}, ${nombre} !`) // interpolacion ${sarasa}

}

generarMensajePersonalizado("Ude", "manana");