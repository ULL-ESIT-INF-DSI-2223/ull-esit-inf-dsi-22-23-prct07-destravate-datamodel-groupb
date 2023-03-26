import { Usuario } from "./usuario";
import { Grupo } from "../Grupo/grupos";
import { EstadisticasEntrenamiento } from "./estadisticas_entrenamiento";
import { Ruta } from "../Ruta/rutas";
import { Reto } from "../Reto/retos";
import { HistorialRutas } from "../Usuario/usuario";
import { coleccionUsuarios } from "..";
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
    coleccionUsuarios.showUsuario();
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
        message: "Inserte el historial de rutas: ",
    }]);

    const nombre: string = datos["addNombre"];
    const actividad: string = datos["addActividad"];
    const amigos: Usuario[] = datos["addAmigos"].split(',').map(Number);
    const grupos: Grupo[] = datos["addGrupos"].split(',').map(Number);
    const entrenamiento: EstadisticasEntrenamiento = datos["addEstadsiticas"].split(',').map(Number);
    const rutas: Ruta[] = datos["addRetos"].split(',').map(Number);
    const retos: Reto[] = datos["addRutas"].split(',').map(Number);
    const historial: HistorialRutas = datos["addHistorial"].split(',');

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
    coleccionUsuarios.showUsuario();
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
    coleccionUsuarios.showUsuario();
    console.log("Por implementar...")
    promptUsuario();
}

export async function promptSort() {
    console.clear();
    coleccionUsuarios.showUsuario();
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