import { Grupo, historialRutasGrupal } from "./grupos";
import { Ruta } from "../Ruta/rutas";
import { Usuario } from "../Usuario/usuario";
import { EstadisticasEntrenamiento } from "../Usuario/estadisticas_entrenamiento";
import { mainPrompt } from "../main";
import { coleccionRetos, coleccionRutas, coleccionGrupos, coleccionUsuarios } from "..";
import * as inquirer from "inquirer";

enum Comandos {
  Añadir = "Añadir grupo",
  Eliminar = "Eliminar grupo",
  Modificar = "Modificar grupo",
  Ordenar = "Ordenar lista",
  Salir = "Salir al menú principal",
}

export async function promptAddG() {
  console.clear();
  coleccionGrupos.showGrupo();
  const datos = await inquirer.prompt([
    {
      type: "input",
      name: "addId",
      message: "Inserte el id: ",
    },
    {
      type: "input",
      name: "addNombre",
      message: "Inserte el nombre: ",
    },
    {
      type: "input",
      name: "addParticipantes",
      message: "Inserte los participantes: ",
    },
    {
      type: "input",
      name: "addEstadisticaGrupal",
      message: "Inserte las estadisticas grupales: ",
    },
    {
      type: "input",
      name: "addClasificacion",
      message: "Inserte la clasificacion: ",
    },
    {
      type: "input",
      name: "addRutasFavoritas",
      message: "Inserte los id de las rutas favoritas: ",
    },
    {
      type: "input",
      name: "addHistorial",
      message: "Inserte el historial de rutas (fecha, id_ruta): ",
    },
  ]);

  const id = Number(datos["addId"]);
  const nombre: string = datos["addNombre"];
  // Añadir participantes
  const usuarios: Usuario[] = [];
  const id_usuarios: number[] = datos["addId"].split(",").map(Number);
  id_usuarios.forEach((id) =>
    coleccionUsuarios._listaElementos.forEach((item) => {
      if (item.id == id) {
        usuarios.push(item);
      }
    })
  );
  // Añadir estadistica grupal
  const datosE: number[] = datos["addEstadisticaGrupal"].split(",").map(Number);
  const entrenamiento: EstadisticasEntrenamiento =
    new EstadisticasEntrenamiento(
      [datosE[0], datosE[1]],
      [datosE[2], datosE[3]],
      [datosE[4], datosE[5]]
    );
  // Añadir clasificacion
  const clasificacion: number[] = datos["addClasificacion"].split(",").map(Number);
  // Añadir rutas favoritas
  const id_rutas: number[] = datos["addRutasFavoritas"].split(",").map(Number);
  const rutas: Ruta[] = [];
  id_rutas.forEach((id) =>
    coleccionRutas._listaElementos.forEach((item) => {
      if (item.id == id) {
        rutas.push(item);
      }
    })
  );
  // Añadir historial
  const datos_historial = datos["addHistorial"].split(",");
  const historial: historialRutasGrupal = [];
  for (let i = 0; i < datos_historial.length; i += 3) {
    coleccionRutas._listaElementos.forEach((item) => {
      if (item.id == datos_historial[i + 1]) {
        historial.push([datos_historial[i], [], item]);
      }
    });
  }
  coleccionGrupos.addGrupo(new Grupo(id, nombre, usuarios, entrenamiento, clasificacion, rutas, historial));
  console.log("Grupo creado.");
  promptGrupo();
}

export async function promptRemoveG(Id = -1) {
    console.clear();
    coleccionGrupos.showGrupo();
    const dato = await inquirer.prompt({
      type: "input",
      name: "addIndex",
      message: "Inserte el índice del elemento: ",
    });
    if (Number(dato["addIndex"]) < coleccionGrupos._listaElementos.length || Id == -1 || 
    Id == coleccionGrupos._listaElementos[coleccionGrupos._listaElementos.length - 1].participantes[0].id) {
        coleccionGrupos.removeGrupo(Number(dato["addIndex"]));
      console.log("Grupo eliminado.");
      promptGrupo();
    } else {
      if(Number(dato["addIndex"]) >= coleccionGrupos._listaElementos.length) {
        console.log("ERROR: índice fuera de los límites.");
        promptGrupo();
      } else {
        console.log("ERROR: usuario no tiene permisos.");
        promptGrupo();
      }
    }
  }

export async function promptModifyG() {
    console.clear();
    coleccionGrupos.showGrupo();
    const datos = await inquirer.prompt([
      {
        type: "input",
        name: "addId",
        message: "Inserte el id: ",
      },
      {
        type: "input",
        name: "addNombre",
        message: "Inserte el nombre: ",
      },
      {
        type: "input",
        name: "addParticipantes",
        message: "Inserte los participantes: ",
      },
      {
        type: "input",
        name: "addEstadisticaGrupal",
        message: "Inserte las estadisticas grupales: ",
      },
      {
        type: "input",
        name: "addClasificacion",
        message: "Inserte la clasificacion: ",
      },
      {
        type: "input",
        name: "addRutasFavoritas",
        message: "Inserte los id de las rutas favoritas: ",
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
      },
    ]);
  
    const id = Number(datos["addId"]);
    const nombre: string = datos["addNombre"];
    // Añadir participantes
    const usuarios: Usuario[] = [];
    const id_usuarios: number[] = datos["addId"].split(",").map(Number);
    id_usuarios.forEach((id) =>
      coleccionUsuarios._listaElementos.forEach((item) => {
        if (item.id == id) {
          usuarios.push(item);
        }
      })
    );
    // Añadir estadistica grupal
    const datosE: number[] = datos["addEstadisticaGrupal"].split(",").map(Number);
    const entrenamiento: EstadisticasEntrenamiento =
      new EstadisticasEntrenamiento(
        [datosE[0], datosE[1]],
        [datosE[2], datosE[3]],
        [datosE[4], datosE[5]]
      );
    // Añadir clasificacion
    const clasificacion: number[] = datos["addClasificacion"].split(",").map(Number);
    // Añadir rutas favoritas
    const id_rutas: number[] = datos["addRutasFavoritas"].split(",").map(Number);
    const rutas: Ruta[] = [];
    id_rutas.forEach((id) =>
      coleccionRutas._listaElementos.forEach((item) => {
        if (item.id == id) {
          rutas.push(item);
        }
      })
    );
    // Añadir historial
    const datos_historial = datos["addHistorial"].split(",");
    const historial: historialRutasGrupal = [];
    for (let i = 0; i < datos_historial.length; i += 2) {
      coleccionRutas._listaElementos.forEach((item) => {
        if (item.id == datos_historial[i + 1]) {
          historial.push([datos_historial[i], [], item]);
        }
      });
    }
    if(Number(datos["addIndice"]) < coleccionGrupos._listaElementos.length) {
        coleccionGrupos.modifyGrupo(Number(datos["addIndice"]), new Grupo(id, nombre, usuarios, entrenamiento, clasificacion, rutas, historial));
        console.log("Grupo modificado.");
        promptGrupo();
    } else {
        console.log("ERROR: Índice fuera de la colección.");
        promptGrupo();
    }
}

export async function promptSortG() {
  console.clear();
  coleccionGrupos.showGrupo();
  const datos = await inquirer.prompt([
    {
      type: "input",
      name: "addFactor",
      message: "Inserte el factor de búsqueda (nombre, kilometros o cantidad): ",
    },
    {
      type: "input",
      name: "addOrden",
      message: "Inserte el orden de búsqueda (asc o desc): ",
    },
    {
      type: "input",
      name: "addAtributo",
      message: "Inserte el atributo de búsqueda (sem, mes o año): ",
    },
  ]);
  if (
    (datos["addFactor"] == "nombre" || datos["addFactor"] == "kilometros" || datos["addFactor"] == "cantidad") &&
    (datos["addOrden"] == "asc" || datos["addOrden"] == "desc") &&
    (datos["addAtributo"] == "sem" ||
      datos["addAtributo"] == "mes" ||
      datos["addAtributo"] == "año")
  ) {
    coleccionGrupos.buscarGrupo(
      datos["addFactor"],
      datos["addOrden"],
      datos["addAtributo"]
    );
    promptGrupo();
  } else {
    console.log("ERROR: Parámetros no válidos.");
    promptGrupo();
  }
}

export function promptGrupo(): void {
  console.clear();
  coleccionGrupos.showGrupo();
  inquirer
    .prompt({
      type: "list",
      name: "command",
      message: "¿Qué deseas hacer?: ",
      choices: Object.values(Comandos),
    })
    .then((answers) => {
      switch (answers["command"]) {
        case Comandos.Añadir:
          promptAddG();
          break;
        case Comandos.Eliminar:
          promptRemoveG();
          break;
        case Comandos.Modificar:
          promptModifyG();
          break;
        case Comandos.Ordenar:
          promptSortG();
          break;
        case Comandos.Salir:
          mainPrompt();
          break;
      }
    });
}
