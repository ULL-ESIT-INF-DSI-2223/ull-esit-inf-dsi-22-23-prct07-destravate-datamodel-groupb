import { Usuario } from "./usuario";
import { Grupo } from "../Grupo/grupos";
import { EstadisticasEntrenamiento } from "./estadisticas_entrenamiento";
import { Ruta } from "../Ruta/rutas";
import { Reto } from "../Reto/retos";
import { HistorialRutas } from "../Usuario/usuario";
import { coleccionGrupos, coleccionRetos, coleccionRutas, coleccionUsuarios } from "..";
import * as inquirer from "inquirer";

export enum Comandos {
    Añadir = "Añadir usuario",
    Eliminar = "Eliminar usuario",
    Modificar = "Modificar usuario",
    Ordenar = "Ordenar lista",
    Salir = "Salir al menú principal"
}

export async function promptAdd() {
    console.clear();
    // coleccionUsuarios.showUsuario();
    const datos = await inquirer.prompt([
    {
        type: "input",
        name: "addNombre",
        message: "Inserte el nombre: ",
    },
    {
        type: "input",
        name: "addActividad",
        message: "Inserte el tipo de actividad: ",
    },
    {
        type: "input",
        name: "addAmigos",
        message: "Inserte los ids de los amigos: ",
    },
    {
        type: "input",
        name: "addGrupos",
        message: "Inserte los ids de los grupos: ",
    },
    {
        type: "input",
        name: "addEstadisticas",
        message: "Inserte las estadísticas de entrenamiento: ",
    },
    {
        type: "input",
        name: "addRutas",
        message: "Inserte los id de las rutas favoritas: ",
    },
    {
        type: "input",
        name: "addRetos",
        message: "Inserte los ids de los retos: ",
    },
    {
        type: "input",
        name: "addHistorial",
        message: "Inserte el historial de rutas (fecha, id_ruta): ",
    }]);

    const nombre: string = datos["addNombre"];
    const actividad: string = datos["addActividad"];
    // Añadir amigos
    const amigos: Usuario[] = [];
    const id_amigos: number[] = datos["addAmigos"].split(',').map(Number);
    id_amigos.forEach((id) => coleccionUsuarios._listaElementos.forEach(item => {
        if(item.id == id) {
            amigos.push(item);
        }
    }));
    // Añadir grupos
    const grupos: Grupo[] = [];
    const id_grupos: number[] = datos["addGrupos"].split(',').map(Number);
    id_grupos.forEach((id) => coleccionGrupos._listaElementos.forEach(item => {
        if(item.id == id) {
            grupos.push(item);
        }
    }));
    // Añadir datos entrenamiento
    const datosE: number[] = datos["addEstadisticas"].split(',').map(Number);
    const entrenamiento: EstadisticasEntrenamiento = new EstadisticasEntrenamiento([datosE[0], datosE[1]], [datosE[2], datosE[3]], [datosE[4], datosE[5]]);
    // Añadir rutas
    const id_rutas: number[] = datos["addRetos"].split(',').map(Number);
    const rutas: Ruta[] = [];
    id_rutas.forEach((id) => coleccionRutas._listaElementos.forEach(item => {
        if(item.id == id) {
            rutas.push(item);
        }
    }));
    // Añadir retos
    const id_retos: number[] = datos["addRutas"].split(',').map(Number);
    const retos: Reto[] = [];
    id_retos.forEach((id) => coleccionRetos._listaElementos.forEach(item => {
        if(item.id == id) {
            retos.push(item);
        }
    }));
    // Añadir historial
    const datos_historial = datos["addHistorial"].split(',');
    const historial: HistorialRutas = [];
    for(let i = 0; i < datos_historial.length; i += 2){
        coleccionRutas._listaElementos.forEach(item => {
            if(item.id == datos_historial[i + 1]) {
                historial.push([datos_historial[i], item]);
            }
        })
    }

    if(actividad == "bicicleta" || actividad == "correr") {
        coleccionUsuarios.addUsario(new Usuario(nombre, actividad, amigos, grupos, entrenamiento, rutas, retos, historial));
        console.log("Usuario creado.");
        promptUsuario()
    } else {
        console.log("ERROR: Datos no correctos.");
        promptUsuario();
    }
}

export async function promptRemove() {
    console.clear();
    // coleccionUsuarios.showUsuario();
    const dato = await inquirer.prompt({
        type: "input",
        name: "addIndex",
        message: "Inserte el índice del elemento: "
    });
    if(Number(dato["addIndex"]) < coleccionUsuarios._listaElementos.length) {
        coleccionUsuarios.removeUsuario(Number(dato["addIndex"]));
        console.log("Usuario eliminado.");
        promptUsuario();
    } else {
        console.log("ERROR: índice fuera de los límites.");
        promptUsuario();
    }
}

export async function promptModify() {
    console.clear();
    // coleccionUsuarios.showUsuario();
    const datos = await inquirer.prompt([
        {
            type: "input",
            name: "addNombre",
            message: "Inserte el nombre: ",
        },
        {
            type: "input",
            name: "addActividad",
            message: "Inserte el tipo de actividad: ",
        },
        {
            type: "input",
            name: "addAmigos",
            message: "Inserte los ids de los amigos: ",
        },
        {
            type: "input",
            name: "addGrupos",
            message: "Inserte los ids de los grupos: ",
        },
        {
            type: "input",
            name: "addEstadisticas",
            message: "Inserte las estadísticas de entrenamiento: ",
        },
        {
            type: "input",
            name: "addRutas",
            message: "Inserte los id de las rutas favoritas: ",
        },
        {
            type: "input",
            name: "addRetos",
            message: "Inserte los ids de los retos: ",
        },
        {
            type: "input",
            name: "addHistorial",
            message: "Inserte el historial de rutas (fecha, id_ruta): ",
        },
        {
            type: "input",
            name: "addIndice",
            message: "Inserte el indice del elemento: ",
        }]);
    
        const nombre: string = datos["addNombre"];
        const actividad: string = datos["addActividad"];
        // Añadir amigos
        const amigos: Usuario[] = [];
        const id_amigos: number[] = datos["addAmigos"].split(',').map(Number);
        id_amigos.forEach((id) => coleccionUsuarios._listaElementos.forEach(item => {
            if(item.id == id) {
                amigos.push(item);
            }
        }));
        // Añadir grupos
        const grupos: Grupo[] = [];
        const id_grupos: number[] = datos["addGrupos"].split(',').map(Number);
        id_grupos.forEach((id) => coleccionGrupos._listaElementos.forEach(item => {
            if(item.id == id) {
                grupos.push(item);
            }
        }));
        // Añadir datos entrenamiento
        const datosE: number[] = datos["addEstadisticas"].split(',').map(Number);
        const entrenamiento: EstadisticasEntrenamiento = new EstadisticasEntrenamiento([datosE[0], datosE[1]], [datosE[2], datosE[3]], [datosE[4], datosE[5]]);
        // Añadir rutas
        const id_rutas: number[] = datos["addRetos"].split(',').map(Number);
        const rutas: Ruta[] = [];
        id_rutas.forEach((id) => coleccionRutas._listaElementos.forEach(item => {
            if(item.id == id) {
                rutas.push(item);
            }
        }));
        // Añadir retos
        const id_retos: number[] = datos["addRutas"].split(',').map(Number);
        const retos: Reto[] = [];
        id_retos.forEach((id) => coleccionRetos._listaElementos.forEach(item => {
            if(item.id == id) {
                retos.push(item);
            }
        }));
        // Añadir historial
        const datos_historial = datos["addHistorial"].split(',');
        const historial: HistorialRutas = [];
        for(let i = 0; i < datos_historial.length; i += 2){
            coleccionRutas._listaElementos.forEach(item => {
                if(item.id == datos_historial[i + 1]) {
                    historial.push([datos_historial[i], item]);
                }
            })
        }
    
        if((actividad == "bicicleta" || actividad == "correr") && (Number(datos["addIndice"]) < coleccionUsuarios._listaElementos.length)) {
            coleccionUsuarios.addUsario(new Usuario(nombre, actividad, amigos, grupos, entrenamiento, rutas, retos, historial));
            console.log("Usuario creado.");
            promptUsuario()
        } else {
            if(actividad != "bicicleta" && actividad != "correr") {
                console.log("ERROR: Tipo de actividad no válido.");
            } else {
                console.log("ERROR: Índice fuera de la colección.")
            }
            promptUsuario();
        }
}

export async function promptSort() {
    console.clear();
    // coleccionUsuarios.showUsuario();
    const datos = await inquirer.prompt([
        {
            type: "input",
            name: "addFactor",
            message: "Inserte el factor de búsqueda (nombre o kilometros): "
        },
        {
            type: "input",
            name: "addOrden",
            message: "Inserte el orden de búsqueda (asc o desc): "
        },
        {
            type: "input",
            name: "addAtributo",
            message: "Inserte el atributo de búsqueda (sem, mes o año): "
        }]);
    if((datos["addFactor"] == "nombre" || datos["addFactor"] == "kilometros") && 
       (datos["addOrden"] == "asc" || datos["addOrden"] == "desc") &&
       (datos["addAtributo"] == "sem" || datos["addAtributo"] == "mes" || datos["addAtributo"] == "año")) {
        coleccionUsuarios.buscarUsuario(datos["addFactor"], datos["addOrden"], datos["addAtributo"]);
        promptUsuario();
    } else {
        console.log("ERROR: Parámetros no válidos.");
        promptUsuario();
    }
}

export function promptUsuario() {
    console.clear();
    coleccionUsuarios.showUsuario();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "¿Qué deseas hacer?: ",
        choices: Object.values(Comandos),
    }).then(answers => {
        switch (answers["command"]) {
            case Comandos.Añadir:
                promptAdd();
                break;
            case Comandos.Eliminar:
                promptRemove();
                break;
            case Comandos.Modificar:
                promptModify();
                break;
            case Comandos.Ordenar:
                promptSort();
                break;
            case Comandos.Salir:
                // Vuelve al prompt de inicio
                break;
        }
    });
}