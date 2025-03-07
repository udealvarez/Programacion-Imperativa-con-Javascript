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

// funcion que filtra tareas por categoria
function filtrarTareasPorCategoria(numeroCategoria){
    let tareasFiltradas = tareas.filter(function(tarea){                         // callback
        return tarea.categoria === numeroCategoria;
    });

    return tareasFiltradas;
}


// funcion que muestra cantidad de tareas completadas
function contarTareasCompletadasPorCategoria(numeroCategoria){

    let tareasCategoria = filtrarTareasPorCategoria(numeroCategoria);
    let tareasCompletadas = tareasCategoria.reduce(function(contador, tarea){
        return tarea.completada ? contador + 1 : contador;                      // IF TERNARIO
    });

    let tareasEnTotal = tareasCategoria.length;

    console.log("Tareas completadas de la categoria " + numeroCategoria + ": " + tareasCompletadas + " de " + tareasEnTotal + " tareas");
}


// funcion que muestra todas las tareas no completadas
function mostrarTareasNoCompletadas(){
    console.log("Tareas no completadas: ");
    tareas.forEach(function(tarea){
        if (!tarea.completada) {                // si la tarea NO esta completada
            console.log("- Nombre: " + tarea.nombre + ", Categoria: " + categoriasNombres[tarea.categoria]); // si tarea.categoria tiene un 0, se va a mostrar TRABAJO

        }
    });
}


// funcion para ordenar tareas por la propiedad 'nombre' usando BubbleSort
function ordenarTareasPorNombre(){

    let total = tareas.length;

    for (let j = 0; j < t; j++) {                           // con este for recorro la cantidad de elementos del array

        for (let i = 0; i < total - 1; i++) {               // le resto 1 para tener el total de los elementos
    
            if (tareas[i].nombre > tareas[i+1].nombre) {    // si esto se cumple, busco ordenar el array de menor a mayor
                
                let temporal = tareas[i];
                tareas[i] = tareas[i+1];
                tareas[i] = temporal;
            }        
        }      
    }
}


// funcion para ordenar tareas por la propiedad 'fechaLimite' usando BubbleSort
function ordenarTareasPorFechaLimite(){

    let total = tareas.length;

    for (let j = 0; j < t; j++) {                           

        for (let i = 0; i < total - 1; i++) {               
    
            if (tareas[i].fechaLimite > tareas[i+1].fechaLimite) {    
                
                let temporal = tareas[i];
                tareas[i] = tareas[i+1];
                tareas[i] = temporal;
            }        
        }      
    }
}

// funcion que busca una terea por nombre y retorna su posicion en el array
function buscarTarearPorNombre(nombreTarea){

    let inicio = 0;
    let fin = tareas.length - 1;

    while (inicio <= fin) { // vamos a repetir siempre que haya elemento en el arreglo que no sean descartados
        
        let posicionElmentoMedio = Math.round((inicio + fin) / 2);

        if (tareas[posicionElmentoMedio].nombre === nombreTarea) {  // tareas[posicionElmentoMedio].nombre -> ruta especifica del elemento que quiero analizar con el nombre que le paso por parametro
            return posicionElmentoMedio;
        }else if (tareas[posicionElmentoMedio].nombre < nombreTarea) {  // si el nombre es menor (posicion del array), cambio el nuevo inicio de busqueda
            inicio = posicionElmentoMedio + 1;      // cambio la posicion de inicio hacia la derecha de la posicion del medio del array para volver a buscar
        }else{
            fin = posicionElmentoMedio - 1;      
        }
    }

    return -1;      // indica que lo que tenemos que buscar, no esta dentro del array
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
    console.log("8. Filtrar tareas por categoria");
    console.log("9. Visualizar cantidad de tareas completadas por categoria");
    console.log("10. Visualizar todas las tareas NO completadas");
    console.log("11. Ordenar las tareas por alfabeticamente");
    console.log("12. Ordenar las tareas por fecha limite");
    console.log("13. Buscar una tarea por su nombre");
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

            case 8:
                mostrarTodasLasCategorias();
                let nroCategoria = parseInt(prompt("Ingrese el numero de la categoria a filtrar: "));
                let tareasCategoria = filtrarTareasPorCategoria(nroCategoria);

                console.log("Tareas de la categoria seleccionada: ");
                console.log(tareasCategoria);

                break;

            case 9:
                mostrarTodasLasCategorias();
                
                let nroCateg = parseInt(prompt("Ingrese el numero de la categoria a visualizar: "));
                contarTareasCompletadasPorCategoria(nroCateg);

                break; 

            case 10:
                mostrarTareasNoCompletadas();
                break;
 
            case 11:
                ordenarTareasPorNombre();
                console.log("Tareas por nombre: ");
                console.log(tareas);
                break;
            
            case 12:
                ordenarTareasPorFechaLimite();
                console.log("Tareas por fecha: ");
                console.log(tareas);
                break;     
                
            case 13:
                ordenarTareasPorNombre();

                let nombreABuscar = prompt("Intrege el nombre de la tarea a buscar: ");     // el nombre de la tarea tiene que ser escrito tal cual esta guardado
                let indiceTarea = buscarTarearPorNombre(nombreABuscar);
                
                if (indiceTarea !== -1) {       // !==  -> DIFERENTE
                    console.log("Tarea encontrada en el indice: " + indiceTarea);
                }else{
                    console.log("Tarea no encontrada");
                }
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