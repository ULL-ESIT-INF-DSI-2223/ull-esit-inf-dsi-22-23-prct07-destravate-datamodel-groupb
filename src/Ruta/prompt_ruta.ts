import { Ruta } from "./rutas";
import { Usuario } from "../Usuario/usuario";
import { Coordenadas } from "./coordenadas";
import { ColeccionRutas } from "./coleccion_rutas";
import { coleccionGrupos, coleccionRetos, coleccionRutas, coleccionUsuarios } from "..";
import * as inquirer from "inquirer";

enum Comandos {
    Añadir = "Añadir ruta",
    Eliminar = "Eliminar ruta",
    Modificar = "Modificar ruta",
    Ordenar = "Ordenar lista",
    Salir = "Salir al menú principal"
}

export async function promptAdd() {
    console.clear();
    coleccionRutas.showRuta();
    const datos = await inquirer.prompt([
    {
        type: "input",
        name: "addId",
        message: "Inserte el ID de ruta: ",
    },
    {
        type: "input",
        name: "addNombre",
        message: "Inserte el nombre: ",
    },
    {
        type: "input",
        name: "addGeolocInicio",
        message: "Inserte la geolocalización de inicio (latitud, longitud, altitud): ",
    },
    {
        type: "input",
        name: "addGeolocFin",
        message: "Inserte la geolocalización final (latitud, longitud, altitud): ",
    },
    {
        type: "input",
        name: "addLongitud",
        message: "Inserte la longitud: ",
    },
    {
        type: "input",
        name: "addDesnivel",
        message: "Inserte el desnivel medio: ",
    },
    {
        type: "input",
        name: "addUsuarios",
        message: "Inserte los id de los usuarios: ",
    },
    {
        type: "input",
        name: "addActividad",
        message: "Inserte el tipo de actividad (correr o bicicleta): ",
    },
    {
        type: "input",
        name: "addCalificacion",
        message: "Inserte la calificacion media: ",
    }]);

    const id: number = Number(datos["addId"]);
    const nombre: string = datos["addNombre"];
    const geolocI: Coordenadas = datos["addGeolocInicio"].split(',').map(Number);
    const geolocF: Coordenadas = datos["addGeolocFin"].split(',').map(Number);
    const longitud: number = Number(datos["addLongitud"]);
    const desnivel: number = Number(datos["addDesnivel"]);
    // Añadir usuarios
    const usuarios: Usuario[] = [];
    const id_usuarios: number[] = datos["addUsuarios"].split(',').map(Number);
    id_usuarios.forEach((id) => coleccionUsuarios._listaElementos.forEach(item => {
        if(item.id == id) {
            usuarios.push(item);
        }
    }));
    const actividad: string = datos["addActividad"];
    const calificacion: number = Number(datos["addCalificacion"]);

    if(actividad == "bicicleta" || actividad == "correr") {
        coleccionRutas.addRuta(new Ruta(id, nombre, geolocI, geolocF, longitud, desnivel, usuarios, actividad, calificacion));
        console.log("Ruta creada.");
        promptRutas()
    } else {
        console.log("ERROR: Datos no correctos.");
        promptRutas();
    }
}

export async function promptRemove() {
    console.clear();
    coleccionRutas.showRuta();
    const dato = await inquirer.prompt({
        type: "input",
        name: "addIndex",
        message: "Inserte el índice del elemento: "
    });
    if(Number(dato["addIndex"]) < coleccionRutas._listaElementos.length) {
        coleccionRutas.removeRuta(Number(dato["addIndex"]));
        console.log("Ruta eliminada.");
        promptRutas();
    } else {
        console.log("ERROR: índice fuera de los límites.");
        promptRutas();
    }
}

export async function promptModify() {
    console.clear();
    coleccionRutas.showRuta();
    const datos = await inquirer.prompt([
    {
        type: "input",
        name: "addId",
        message: "Inserte el ID de ruta: ",
    },
    {
        type: "input",
        name: "addNombre",
        message: "Inserte el nombre: ",
    },
    {
        type: "input",
        name: "addGeolocInicio",
        message: "Inserte la geolocalización de inicio: ",
    },
    {
        type: "input",
        name: "addGeolocFin",
        message: "Inserte la geolocalización final: ",
    },
    {
        type: "input",
        name: "addLongitud",
        message: "Inserte la longitud: ",
    },
    {
        type: "input",
        name: "addDesnivel",
        message: "Inserte el desnivel medio: ",
    },
    {
        type: "input",
        name: "addUsuarios",
        message: "Inserte los id de los usuarios: ",
    },
    {
        type: "input",
        name: "addActividad",
        message: "Inserte el tipo de actividad (correr o bicicleta): ",
    },
    {
        type: "input",
        name: "addCalificacion",
        message: "Inserte la calificacion media: ",
    },
    {
        type: "input",
        name: "addIndice",
        message: "Inserte el indice del elemento: ",
    }]);

    const id: number = Number(datos["addId"]);
    const nombre: string = datos["addNombre"];
    const geolocI: Coordenadas = datos["addGeolocInicio"].split(',').map(Number);
    const geolocF: Coordenadas = datos["addGeolocFin"].split(',').map(Number);
    const longitud: number = Number(datos["addLongitud"]);
    const desnivel: number = Number(datos["addDesnivel"]);
    // Añadir usuarios
    const usuarios: Usuario[] = [];
    const id_usuarios: number[] = datos["addUsuarios"].split(',').map(Number);
    id_usuarios.forEach((id) => coleccionUsuarios._listaElementos.forEach(item => {
        if(item.id == id) {
            usuarios.push(item);
        }
    }));
    const actividad: string = datos["addActividad"];
    const calificacion: number = Number(datos["addCalificacion"]);

    if((actividad == "bicicleta" || actividad == "correr") && (Number(datos["addIndice"]) < coleccionRutas._listaElementos.length)) {
        coleccionRutas.modifyRuta(Number(datos["addIndice"]), new Ruta(id, nombre, geolocI, geolocF, longitud, desnivel, usuarios, actividad, calificacion));
        console.log("Ruta creada.");
        promptRutas()
    } else {
        if(actividad != "bicicleta" && actividad != "correr") {
            console.log("ERROR: Tipo de actividad no válido.");
        } else {
            console.log("ERROR: Índice fuera de la colección.");
        }
        promptRutas();
    }
}

export async function promptSort() {
    console.clear();
    coleccionRutas.showRuta();
    const datos = await inquirer.prompt([
        {
            type: "input",
            name: "addFactor",
            message: "Inserte el factor de búsqueda (nombre, cantidad, longitud, calificacion o tipo): "
        },
        {
            type: "input",
            name: "addOrden",
            message: "Inserte el orden de búsqueda (asc o desc): "
        }]);
    if((datos["addFactor"] == "nombre" || datos["addFactor"] == "cantidad" || datos["addFactor"] == "longitud" || datos["addFactor"] == "calificacion" || datos["addFactor"] == "tipo") && 
       (datos["addOrden"] == "asc" || datos["addOrden"] == "desc")) {
        coleccionRutas.buscarRuta(datos["addFactor"], datos["addOrden"]);
        promptRutas();
    } else {
        console.log("ERROR: Parámetros no válidos.");
        promptRutas();
    }
}

export function promptRutas(): void {
    console.clear();
    coleccionRutas.showRuta();
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
