/**
 * funcion que suma __desde__ 2 numeros y devuelve el resultado
 * @param firstNumber  primer numero a operar
 * @param secondNumber segundo numero a operar
 * @param remainingNumbers resto de numeros a opear
 * @returns resultado de la suma de todos los numeros
 */
export function add(firstNumber: number, secondNumber: number) {
  return firstNumber + secondNumber;
}

import { Usuario } from "./usuario";
import { Ruta } from "./rutas";
import { Coordenadas } from "./coordenadas";
import { Reto } from "./retos";
import { Grupo } from "./grupos";
import { EstadisticasEntrenamiento } from "./estadisticas_entrenamiento";

export let estadisticas = new EstadisticasEntrenamiento([2, 4], [5, 9], [10, 20]);

export const estadistica = new EstadisticasEntrenamiento([20,30],[50,60],[90,100])



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
  [ruta_1, ruta_2],
  "correr",
  []
);



export let userUno = new Usuario(
  "Mortadelo",
  "bicicleta",
  [],
  [],
  [ruta_1, ruta_2],
  [reto_1],
  32
);
export let userDos = new Usuario(
  "Filemon",
  "correr",
  [userUno],
  [],
  [ruta_2],
  [reto_2]
);

export let grupo = new Grupo(
  1,
  "acrobacias",
  [userDos, userUno],
  estadisticas,
  [],
  [ruta_1],
  [["23-03-2023", [userUno, userDos], ruta_1]]
);

export let grupo_2 = new Grupo(
  1,
  "suerte por la orejas",
  [userDos, userUno],
  estadisticas,
  [],
  [ruta_1],
  [["23-03-1999", [userUno, userDos], ruta_2]]
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

// console.log(grupo.nombre)

// console.log(userUno.grupos)
// console.log(userUno.addGrupo([25,26]))
// console.log(userUno.grupos)
// console.log(userUno.addGrupo([25,26]))
// console.log(userUno.grupos)
// console.log(userUno.deleteGrupo([25,26]))
// console.log(userUno.grupos)
// console.log(userUno.deleteGrupo([25,26]))
// console.log(userUno.grupos)
