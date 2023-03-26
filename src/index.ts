import { Usuario } from "./Usuario/usuario";
import { Ruta } from "./Ruta/rutas";
import { Coordenadas } from "./Ruta/coordenadas";
import { Reto } from "./Reto/retos";
import { Grupo } from "./Grupo/grupos";
import { EstadisticasEntrenamiento } from "./Usuario/estadisticas_entrenamiento";
import { JsonColeccionUsuarios } from "./Usuario/json_coleccion_usuarios";
import { promptUsuario } from "./Usuario/prompt_usuario";

export const estadistica_1 = new EstadisticasEntrenamiento([2, 4], [5, 9], [10, 20]);
export const estadistica_2 = new EstadisticasEntrenamiento([20,30],[50,60],[90,100]);

export const ruta_1 = new Ruta(
  1,
  "Ruta de prueba",
  new Coordenadas(0, 0, 0),
  new Coordenadas(1, 1, 1),
  10,
  55,
  [],
  "correr",
  4.5
);
export const ruta_2 = new Ruta(
  2,
  "Ruta por el teide",
  new Coordenadas(6, 7, 5),
  new Coordenadas(12, 14, 6),
  27,
  217,
  [],
  "correr",
  4.8
);

export const reto_1 = new Reto(
  152,
  "Reto de prueba",
  [ruta_1, ruta_2],
  "correr",
  []
);
export const reto_2 = new Reto(
  152,
  "Reto de nuevo",
  [ruta_1],
  "correr",
  []
);

export const userUno = new Usuario(
  "Mortadelo",
  "bicicleta",
  [],
  [],
  estadistica_1,
  [ruta_1, ruta_2],
  [reto_1],
  [],
  32,
);
export const userDos = new Usuario(
  "Filemon",
  "correr",
  [userUno],
  [],
  estadistica_2,
  [ruta_2],
  [reto_2],
  [],
  30
);

export const grupo_1 = new Grupo(
  1,
  "acrobacias",
  [userDos, userUno],
  estadistica_2,
  [],
  [ruta_1],
  [["23-03-2023", [userUno, userDos], ruta_1]]
);

export const grupo_2 = new Grupo(
  1,
  "suerte por la orejas",
  [userUno],
  estadistica_1,
  [],
  [ruta_1, ruta_2],
  [["23-03-1999", [userUno], ruta_2]]
);

export  const reto = new Reto(152, "Reto de prueba", [ruta_1, ruta_2], "correr", []);

export const ruta = new Ruta(
  1,
  "Ruta de prueba",
  new Coordenadas(0, 0, 0),
  new Coordenadas(1, 1, 1),
  10,
  100,
  [],
  "bicicleta",
  4.5
);

export const coleccionUsuarios = new JsonColeccionUsuarios([userUno, userDos]);

promptUsuario();