import { Usuario } from "./Usuario/usuario";
import { Ruta } from "./Ruta/rutas";
import { Coordenadas } from "./Ruta/coordenadas";
import { Reto } from "./Reto/retos";
import { Grupo } from "./Grupo/grupos";
import { EstadisticasEntrenamiento } from "./Usuario/estadisticas_entrenamiento";
import { JsonColeccionUsuarios } from "./Usuario/json_coleccion_usuarios";
import { promptUsuario } from "./Usuario/prompt_usuario";
import { JsonColeccionGrupos } from "./Grupo/json_coleccion_grupos";
import { JsonColeccionRutas } from "./Ruta/json_coleccion_rutas";
import { JsonColeccionRetos } from "./Reto/json_coleccion_retos";
import { promptRetos } from "./Reto/prompt_reto";
import { promptRutas } from "./Ruta/prompt_ruta"
import { promptGrupo } from "./Grupo/prompt_grupo";

export const estadistica_1 = new EstadisticasEntrenamiento(
  [2, 4],
  [5, 9],
  [10, 20]
);
export const estadistica_2 = new EstadisticasEntrenamiento(
  [20, 30],
  [50, 60],
  [90, 100]
);

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
export const ruta_3 = new Ruta(
  3,
  "Ruta por guamasa",
  new Coordenadas(10, 12, 14),
  new Coordenadas(20, 20, 24),
  27,
  217,
  [],
  "bicicleta",
  6
);
export const ruta_4 = new Ruta(
  4,
  "Ruta por las teresitas",
  new Coordenadas(11, 12, 13),
  new Coordenadas(21, 22, 23),
  27,
  217,
  [],
  "correr",
  4.8
);
export const ruta_5 = new Ruta(
  5,
  "Ruta norteña",
  new Coordenadas(50, 51, 52),
  new Coordenadas(60, 61, 65),
  27,
  217,
  [],
  "correr",
  4.8
);
export const ruta_6 = new Ruta(
  6,
  "Ruta por anaga",
  new Coordenadas(0, 0, 0),
  new Coordenadas(19, 18, 17),
  27,
  217,
  [],
  "correr",
  4.8
);
export const ruta_7 = new Ruta(
  7,
  "Ruta sureña",
  new Coordenadas(0, 0, 0),
  new Coordenadas(21, 10, 1),
  27,
  217,
  [],
  "correr",
  4.8
);
export const ruta_8 = new Ruta(
  8,
  "Ruta por el teide",
  new Coordenadas(19, 11, 16),
  new Coordenadas(26, 3, 23),
  27,
  217,
  [],
  "correr",
  4.8
);
export const ruta_9 = new Ruta(
  9,
  "Ruta por el teide",
  new Coordenadas(7, 8, 9),
  new Coordenadas(5, 3, 4),
  27,
  217,
  [],
  "correr",
  4.8
);
export const ruta_10 = new Ruta(
  10,
  "Ruta por el teide",
  new Coordenadas(6, 7, 5),
  new Coordenadas(0, 0, 0),
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
export const reto_2 = new Reto(152, "Reto del malagueño", [ruta_1], "correr", []);
export const reto_3 = new Reto(152, "Reto del guanche", [ruta_1], "correr", []);

export const userUno = new Usuario(
  "Mortadelo",
  "bicicleta",
  [],
  [],
  estadistica_1,
  [ruta_1, ruta_2],
  [reto_1],
  [],
  32
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

export const reto = new Reto(
  152,
  "Reto de prueba",
  [ruta_1, ruta_2],
  "correr",
  []
);

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
export const coleccionGrupos = new JsonColeccionGrupos([grupo_1, grupo_2]);
export const coleccionRutas = new JsonColeccionRutas([ruta_1, ruta_2]);
export const coleccionRetos = new JsonColeccionRetos([reto_1, reto_2, reto_3]);

// promptUsuario()
// promptRetos();
// promptRutas()
promptGrupo()