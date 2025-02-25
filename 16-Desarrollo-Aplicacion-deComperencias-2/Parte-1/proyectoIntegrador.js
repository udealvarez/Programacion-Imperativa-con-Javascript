const prompt = require("prompt-sync")({ sigint: true });

// Array para almacenar todas las tareas
let tareas = [];

let categoriasNombres = [
    "trabajo",
    "personal",
    // agregar mas categorias segun sea necesario
];

// funcion que muestra todas las categorias
function mostrarTodasLasCategorias(){
    console.log("Categorias existentes: ");

    categoriasNombres.forEach(function(categoria, indice){ // metodo de arrays -> el forEach ingresa al array y lo recorre sin modificar
        console.log(indice + ": " + categoria);
    }); 
}

// funciuon que sirve para cargar nuevas categorias por el usuario
function agregarNuevaCategoriaPorElUsuario(nombreCategoria){
    categoriasNombres.push(nombreCategoria);
    console.log("Categoria " + nombreCategoria + " agregada correctamente");
}









// Funcion para agregar una nueva tarea al array
function agregarTarea(nombreRecibido, fechaLimiteRecibida = null){ 
    tareas.push({nombre : nombreRecibido, 
                completada : false, 
                fechaLimite : fechaLimiteRecibida }); 
                
}


function eliminarTarea(indice){ 

    if (indice >= 0 && indice < tareas.length) { 
        tareas.splice(indice, 1) 
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

    if (indice >= 0 && indice < tareas.length) { 
        tareas[indice].nombre = nuevoNombre; 
        
        if (nuevaFechaLimite !== null) {    
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
    console.log("6. Ver todas las categorias");
    console.log("7. Agregar una nueva categoria");
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
                modificarTarea(indice, nuevoNombre);
                break;

            case 5:
                console.log(" --- Lista de Tareas ---");
                console.log(tareas);
                break; 

            case 6:
                mostrarTodasLasCategorias();
                break; 

            case 7:
                let nuevaCategoria = prompt("Ingrese el nombre de la nueva categoria a agregar: ");
                agregarNuevaCategoriaPorElUsuario(nuevaCategoria);
                break; 
        
            default:
                console.log("Opcion invalida");
                break;
        }
    }
}

interactuarConElUsuario();