import { Usuario } from "../Usuario/usuario";
import { Grupo } from "../Grupo/grupos";
import { EstadisticasEntrenamiento } from "../Usuario/estadisticas_entrenamiento";
import { Ruta } from "../Ruta/rutas";
import { Reto } from "../Reto/retos";
import { HistorialRutas } from "../Usuario/usuario";
import { mainPrompt } from "../main";
import {
  coleccionGrupos,
  coleccionRetos,
  coleccionRutas,
  coleccionUsuarios,
} from "..";
import * as inquirer from "inquirer";

enum Comandos {
  Añadir = "Añadir Reto",
  Eliminar = "Eliminar Reto",
  Modificar = "Modificar Reto",
  Ordenar = "Ordenar lista",
  Salir = "Salir al menú principal",
}

export async function promptAdd() {
  console.clear();
  coleccionRetos.showReto();
  const datos = await inquirer.prompt([
    {
      type: "input",
      name: "addId",
      message: "Inserte ID: ",
    },
    {
      type: "input",
      name: "addNombre",
      message: "Inserte nombre: ",
    },
    {
      type: "input",
      name: "addRuta",
      message: "Inserte ruta: ",
    },
    {
      type: "input",
      name: "addTipo",
      message: "Inserte tipo de actividad: ",
    },
    {
      type: "input",
      name: "addKilometros",
      message: "Inserte longitud del reto: ",
    },
    {
      type: "input",
      name: "addUsuarios",
      message: "Inserte usuarios del reto: ",
    },
  ]);

  const id: number = datos["addId"];
  const nombre: string = datos["addNombre"];
  const actividad: string = datos["addTipo"];

  //Añadir Ruta
  const rutas: Ruta[] = [];
  const id_rutas: number[] = datos["addRuta"].split(",").map(Number);
  id_rutas.forEach((id) =>
    coleccionRutas._listaElementos.forEach((item) => {
      if (item.id == id) {
        rutas.push(item);
      }
    })
  );

  //añadir usuarios
  const usuarios: Usuario[] = [];
  const id_usuario: number[] = datos["addUsuarios"].split(",").map(Number);
  id_usuario.forEach((id) =>
    coleccionUsuarios._listaElementos.forEach((item) => {
      if (item.id == id) {
        usuarios.push(item);
      }
    })
  );

  if (actividad == "bicicleta" || actividad == "correr") {
    coleccionRetos.addReto(new Reto(id, nombre, rutas, actividad, usuarios));
    console.log("Reto creado.");
    promptRetos();
  } else {
    console.log("ERROR: Datos no correctos.");
    promptRetos();
  }
}

export async function promptRemove() {
  console.clear();
  coleccionRetos.showReto();
  const dato = await inquirer.prompt({
    type: "input",
    name: "addIndex",
    message: "Inserte el índice del elemento: ",
  });
  if (Number(dato["addIndex"]) < coleccionRetos._listaElementos.length) {
    coleccionRetos.removeReto(Number(dato["addIndex"]));
    console.log("Reto eliminado.");
    promptRetos();
  } else {
    console.log("ERROR: índice fuera de los límites.");
    promptRetos();
  }
}

export async function promptModify() {
  console.clear();
  coleccionRetos.showReto();
  const datos = await inquirer.prompt([
    {
      type: "input",
      name: "addId",
      message: "Inserte ID: ",
    },
    {
      type: "input",
      name: "addNombre",
      message: "Inserte nombre: ",
    },
    {
      type: "input",
      name: "addRuta",
      message: "Inserte ruta: ",
    },
    {
      type: "input",
      name: "addTipo",
      message: "Inserte tipo de actividad: ",
    },
    {
      type: "input",
      name: "addKilometros",
      message: "Inserte longitud del reto: ",
    },
    {
      type: "input",
      name: "addUsuarios",
      message: "Inserte usuarios del reto: ",
    },
    {
      type: "input",
      name: "addIndice",
      message: "Inserte el indice del elemento: ",
    }  
  ]);

  const id: number = datos["addId"];
  const nombre: string = datos["addNombre"];
  const actividad: string = datos["addTipo"];

  //Añadir Ruta
  const rutas: Ruta[] = [];
  const id_rutas: number[] = datos["addRuta"].split(",").map(Number);
  id_rutas.forEach((id) =>
    coleccionRutas._listaElementos.forEach((item) => {
      if (item.id == id) {
        rutas.push(item);
      }
    })
  );

  //añadir usuarios
  const usuarios: Usuario[] = [];
  const id_usuario: number[] = datos["addUsuarios"].split(",").map(Number);
  id_usuario.forEach((id) =>
    coleccionUsuarios._listaElementos.forEach((item) => {
      if (item.id == id) {
        usuarios.push(item);
      }
    })
  );

  if (
    (actividad == "bicicleta" || actividad == "correr") &&
    Number(datos["addIndice"]) < coleccionUsuarios._listaElementos.length
  ) {
    coleccionRetos.modifyReto(Number(datos["addIndice"]), new Reto(id, nombre, rutas, actividad, usuarios));
    console.log("Reto creado.");
    promptRetos();
  } else {
    if (actividad != "bicicleta" && actividad != "correr") {
      console.log("ERROR: Tipo de actividad no válido.");
    } else {
      console.log("ERROR: Índice fuera de la colección.");
    }
    promptRetos();
  }
}

export async function promptSort() {
  console.clear();
  coleccionRetos.showReto();
  const datos = await inquirer.prompt([
    {
      type: "input",
      name: "addFactor",
      message:
        "Inserte el factor de búsqueda (nombre o kilometros o usuarios): ",
    },
    {
      type: "input",
      name: "addOrden",
      message: "Inserte el orden de búsqueda (asc o desc): ",
    },
  ]);
  if (
    (datos["addFactor"] == "nombre" ||
      datos["addFactor"] == "kilometros" ||
      datos["addFactor"] == "usuarios") &&
    (datos["addOrden"] == "asc" || datos["addOrden"] == "desc")
  ) {
    coleccionRetos.buscarReto(datos["addFactor"], datos["addOrden"]);
    promptRetos();
  } else {
    console.log("ERROR: Parámetros no válidos.");
    promptRetos();
  }
}

export function promptRetos(): void {
  console.clear();
  coleccionRetos.showReto();
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
          mainPrompt();
          break;
      }
    });
}
