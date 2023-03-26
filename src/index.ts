import { Usuario } from "./Usuario/usuario";
import { Ruta } from "./Ruta/rutas";
import { Coordenadas } from "./Ruta/coordenadas";
import { Reto } from "./Reto/retos";
import { Grupo } from "./Grupo/grupos";
import { EstadisticasEntrenamiento } from "./Usuario/estadisticas_entrenamiento";
import { JsonColeccionUsuarios } from "./Usuario/json_coleccion_usuarios";
import { JsonColeccionGrupos } from "./Grupo/json_coleccion_grupos";
import { JsonColeccionRutas } from "./Ruta/json_coleccion_rutas";
import { JsonColeccionRetos } from "./Reto/json_coleccion_retos";


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
export const estadistica_3 = new EstadisticasEntrenamiento(
  [200, 300],
  [500, 600],
  [900, 1000]
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

export const user1 = new Usuario(
  "Mortadelo",
  "bicicleta",
  [],
  [],
  estadistica_1,
  [ruta_1, ruta_2],
  [reto_1],
  [],
  1
);


export const user2 = new Usuario(
  "Filemon",
  "correr",
  [user1],
  [],
  estadistica_2,
  [ruta_9],
  [reto_2],
  [],
  2
);

export const user3 = new Usuario(
  "Ancor",
  "correr",
  [user1],
  [],
  estadistica_3,
  [ruta_2, ruta_7],
  [reto_2, reto_3],
  [],
  3
);

export const user4 = new Usuario(
  "Juan Carlos",
  "bicicleta",
  [user3],
  [],
  estadistica_1,
  [ruta_2],
  [reto_2],
  [],
  4
);

export const user5 = new Usuario(
  "Sara",
  "correr",
  [user1],
  [],
  estadistica_2,
  [ruta_2],
  [reto_2],
  [],
  5
);

export const user6 = new Usuario(
  "Gara",
  "correr",
  [user1],
  [],
  estadistica_3,
  [ruta_2],
  [reto_2],
  [],
  6
);

export const user7 = new Usuario(
  "Jorge",
  "correr",
  [user1],
  [],
  estadistica_1,
  [ruta_2],
  [reto_2],
  [],
  7
);

export const user8 = new Usuario(
  "Patricia",
  "correr",
  [user1],
  [],
  estadistica_2,
  [ruta_2],
  [reto_2],
  [],
  8
);

export const user9 = new Usuario(
  "Saruman",
  "correr",
  [user1],
  [],
  estadistica_3,
  [ruta_2],
  [reto_2],
  [],
  9
);

export const user10 = new Usuario(
  "Steven",
  "correr",
  [user1],
  [],
  estadistica_1,
  [ruta_2],
  [reto_2],
  [],
  10
);

export const user11 = new Usuario(
  "Guillermo",
  "correr",
  [user1],
  [],
  estadistica_2,
  [ruta_2],
  [reto_2],
  [],
  11
);

export const user12 = new Usuario(
  "Nira",
  "correr",
  [user1],
  [],
  estadistica_2,
  [ruta_2],
  [reto_2],
  [],
  12
);

export const user13 = new Usuario(
  "Saldore",
  "correr",
  [user1],
  [],
  estadistica_3,
  [ruta_2],
  [reto_2],
  [],
  13
);

export const user14 = new Usuario(
  "Carla",
  "correr",
  [user1],
  [],
  estadistica_1,
  [ruta_2],
  [reto_2],
  [],
  14
);

export const user15 = new Usuario(
  "ricardo",
  "correr",
  [user1],
  [],
  estadistica_2,
  [ruta_2],
  [reto_2],
  [],
  15
);

export const user16 = new Usuario(
  "luis",
  "correr",
  [user1],
  [],
  estadistica_3,
  [ruta_2],
  [reto_2],
  [],
  16
);

export const user17 = new Usuario(
  "cristo",
  "correr",
  [user1],
  [],
  estadistica_1,
  [ruta_2],
  [reto_2],
  [],
  17
);

export const user18 = new Usuario(
  "pablo",
  "correr",
  [user1],
  [],
  estadistica_2,
  [ruta_2],
  [reto_2],
  [],
  18
);

export const user19 = new Usuario(
  "orlando",
  "correr",
  [user1],
  [],
  estadistica_3,
  [ruta_2],
  [reto_2],
  [],
  19
);

export const user20 = new Usuario(
  "airam",
  "correr",
  [user1],
  [],
  estadistica_1,
  [ruta_2],
  [reto_2],
  [],
  20
);



export const grupo_1 = new Grupo(
  1,
  "acrobacias",
  [user2, user1],
  estadistica_2,
  [],
  [ruta_1],
  [["23-03-2023", [user1, user2], ruta_1]]
);

export const grupo_2 = new Grupo(
  2,
  "suerte por la orejas",
  [user1],
  estadistica_1,
  [],
  [ruta_1, ruta_2],
  [["23-03-1999", [user3, user14], ruta_2]]
);

export const grupo_3 = new Grupo(
  3,
  "el club de la sal",
  [user1],
  estadistica_1,
  [],
  [ruta_1, ruta_2],
  [["23-03-1999", [user15, user20, user17], ruta_2]]
);

export const grupo_4 = new Grupo(
  4,
  "suerte por la orejas",
  [user1],
  estadistica_1,
  [],
  [ruta_1, ruta_2],
  [["23-03-1999", [user1, user4, ], ruta_2]]
);

export const grupo_5 = new Grupo(
  5,
  "suerte por la orejas",
  [user1],
  estadistica_1,
  [],
  [ruta_1, ruta_2],
  [["23-03-1999", [user1], ruta_2]]
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

export const coleccionUsuarios = new JsonColeccionUsuarios([user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20]);
export const coleccionGrupos = new JsonColeccionGrupos([grupo_1, grupo_2, grupo_3, grupo_4, grupo_5]);
export const coleccionRutas = new JsonColeccionRutas([ruta_1, ruta_2, ruta_3, ruta_4, ruta_5, ruta_6, ruta_7, ruta_8, ruta_9, ruta_10 ]);
export const coleccionRetos = new JsonColeccionRetos([reto_1, reto_2, reto_3]);