// Array para almacenar todas las tareas
let tareas = [];

// Funcion para agregar una nueva tarea al array
function agregarTarea(nombreRecibido, fechaLimiteRecibida = null){ //esta funcion necesita data externa
    tareas.push({nombre : nombreRecibido, // -> push, cargar lo que tenga como parametro al array
                completada : false, 
                fechaLimite : fechaLimiteRecibida }); 
                // siempre que ponemos llaves es un { OBJETO }
}


function eliminarTarea(indice){

    if (indice >= 0 && indice < tareas.length) { // .length -> cantidad de tareas
        tareas.slice(indice, 1) // 2 parametros (indice/tarea {que queremos eliminar}, 1 (cuantas cosas queremos eliminar)) 
        console.log("Tarea eliminada correctamente!");
    }else{
        console.log("Indice de tarea invalido");
    }
}

// funcion para marcar tarea completada

function completarTarea(indice){

    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].completada = true;
        console.log("Tarea marcada como correcta");
    }else{
        console.log("Indice de tarea invalido");
    }
}