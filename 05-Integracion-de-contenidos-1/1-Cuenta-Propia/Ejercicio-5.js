/*
Generador de Mensajes Personalizados: 
Crea una función que genere un mensaje personalizado para un usuario según su nombre
y el momento del día (solo tendremos en consideración si es de mañana, o es de tarde). 

Utiliza concatenación e interpolación para construir el mensaje
y condicionales (if ternario) para incluir diferentes saludos.

*/

function mensajePersonalizado(momentoDelDia, nombre){
    let saludo = (momentoDelDia === "manana") ? `Buenos dias, ${nombre}` : `Buenas tardes ${nombre}`;
    let mensaje = (nombre === "pablo") ? (momentoDelDia === `manana` ? `lindo dia para volar` : `Te toca trabajar`) : (nombre === "gregorio") ? (momentoDelDia === `manana` ? `Hay que entrenar` : `Los chicos te esperan en el bar`) : (`momento equivocado del dia`);
    
    console.log(`${saludo} ${mensaje}`)
}

mensajePersonalizado("noche","pablo");
mensajePersonalizado("manana","pablo");
mensajePersonalizado("tarde","gregorio");
mensajePersonalizado("manana","gregorio");

