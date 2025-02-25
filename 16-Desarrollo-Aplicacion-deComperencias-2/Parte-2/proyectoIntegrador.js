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

    mostrarTodasLasCategorias();

    let numeroCategoria = parseInt(prompt("Ingrese el numero de la categoria para la nueva tarea: "));

    if (numeroCategoria >= 0 && numeroCategoria < categoriasNombres.length) { // cantidad de elementos de la matriz categoriasNombres
        
        tareas.push({nombre : nombreRecibido, // esto se ve con la opcion 5
                    completada : false, 
                    fechaLimite : fechaLimiteRecibida,
                    categoria :  numeroCategoria}); 
    }else{
        console.log("Numero de categoria incorrecto");
    }
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
function modificarTarea(indice, nuevoNombre, nuevaFechaLimite = null, nuevoNumeroCategoria){

    if (indice >= 0 && indice < tareas.length) { 
       tareas[indice].nombre = nuevoNombre !== undefined ? nuevoNombre : tareas[indice].nombre;                             // IF TERNARIOS
       tareas[indice].fechaLimite = nuevaFechaLimite !== undefined ? nuevaFechaLimite : tareas[indice].fechaLimite;         // IF TERNARIOS
       tareas[indice].categoria = nuevoNumeroCategoria !== undefined ? nuevoNumeroCategoria : tareas[indice].categoria;     // IF TERNARIOS

       console.log("Modificacion correcta");

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

                if (indice >= 0 && indice < tareas.length) { // indice es menor que la cantidad de tareas actuales
                    let opcion = parseInt(prompt("Que propiedad desea modificar? 1. Nombre, 2. Fecha limite, 3. Numero de categoria")); 
                    
                    switch (opcion) {
                        case 1:
                            let nombreNombre = prompt("Ingrese el nuevo nombre de su tarea: ");
                            modificarTarea(indice, nombreNombre)
                            break;
                        
                        case 2:
                            let nuevaFechaLimite = prompt("Ingrese la nueva fecha limite para su tarea: ");
                            modificarTarea(indice, undefined, nuevaFechaLimite); // en este caso undefined es por que no queremos sobre escribir el nombre
                            break;                                              // pero tenemos que pasarle 3 parametros para modificar la fecha
                        
                        case 3:
                            let nuevoNumeroDeCategoria = parseInt(prompt("Ingrese nuevo numero de categoria: "));    

                            if (nuevoNumeroDeCategoria > 0 && nuevoNumeroCategoria < categoriasNombres.length) {
                                
                                modificarTarea(indice, undefined, undefined, nuevoNumeroDeCategoria);
                            }
                            break;
                    
                        default:
                            break;
                    }
                }else{
                    console.log("Indice de tarea incorrecto");
                }

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



/*

    NOTA: PRIMERA LINEA DE PROYECTO

1.  "windows + R" -> "CMD"--> se abre la terminal de windows

2.  escribo la ruta de la carpeta

    -> cd C:\Users\Eduardo\Desktop\DH\Programacion-Imperativa-con-Javascript\16-Desarrollo-Aplicacion-deComperencias-2\Parte-2

3. una vez linkeada la ruta a la carpeta, escribo en la terminal

    -> npm i prompt-sync

4. verificar que se hayan agregado 3 archivos a tu carpeta


*/