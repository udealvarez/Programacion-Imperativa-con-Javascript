const prompt = require("prompt-sync")({ sigint: true });

// Array para almacenar todas las tareas
let tareas = [];

// Funcion para agregar una nueva tarea al array
function agregarTarea(nombreRecibido, fechaLimiteRecibida = null){ //esta funcion necesita data externa
    tareas.push({nombre : nombreRecibido, // -> push, cargar lo que tenga como parametro al array
                completada : false, 
                fechaLimite : fechaLimiteRecibida }); 
                // siempre que ponemos llaves es un { OBJETO }
}


function eliminarTarea(indice){ // indice es la posicion de la tarea -> 0, 1, 2 ..

    if (indice >= 0 && indice < tareas.length) { // .length -> cantidad de tareas
        tareas.splice(indice, 1) // 2 parametros (indice/tarea {que queremos eliminar}, 1 (cuantas cosas queremos eliminar)) 
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

// funcion para modificar tarea
function modificarTarea(indice, nuevoNombre, nuevaFechaLimite = null){

    if (indice >= 0 && indice < tareas.length) { // .length -> cantidad de tareas
        tareas[indice].nombre = nuevoNombre; // esto es para modificar el nombre
        
        if (nuevaFechaLimite !== null) {    // si nueva fecha limite es diferente a nulo, se acordaron una nueva fecha
            tareas[indice].fechaLimite = nuevaFechaLimite; 
        }
        console.log("Tarea modificada con exito");
    }else{
        console.log("Indice de tarea invalido");
    }
}

// funcion para mostrar el menu de opciones
function mostrarMenu(){
    console.log("--- MENU ---");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Modificar tarea ");
    console.log("5. Mostrar todas las tareas");
    console.log("0. Salir");
}

// funcion para interactuar con el usuario
function interactuarConElUsuario(){

    let opcion = -1;

    while (opcion != 0) {
        mostrarMenu();

        opcion = parseInt(prompt("Ingrese la opcion seleccionada: "));

        switch (opcion) {
            case 1:
                let nombreTareaNueva = prompt("Ingrese el nombre de la tarea a cargar: ");
                // podemos hacer lo mismo con la fecha limite con el promp
                agregarTarea(nombreTareaNueva);
                break;

            case 2:
                let indiceAEliminar = parseInt(prompt("Ingrese el indice de la tarea a eliminar: "));
                eliminarTarea(indiceAEliminar);
                break;

            case 3:
                let indiceACompletar = parseInt(prompt("Ingrese el indice de la tarea a eliminar: "))
                completarTarea(indiceACompletar);
                break;   
                
            case 4:
                let indice = parseInt(prompt("Ingrese el indice a modificar: "));
                let nuevoNombre = prompt("Ingrese el nuevo nombre de su tarea: ");    
                // podemos hacer una variable para la fecha y usar el paquete promp
                modificarTarea(indice, nuevoNombre);
                break;

            case 5:
                console.log(" --- Lista de Tareas ---");
                console.log(tareas);
                break; 
        
            default:
                console.log("Opcion invalida");
                break;
        }
    }
}

interactuarConElUsuario();