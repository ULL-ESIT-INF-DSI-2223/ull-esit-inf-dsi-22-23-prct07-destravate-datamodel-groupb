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



const ruta_1 = new Ruta(1, "Ruta de prueba", new Coordenadas(0, 0, 0), new Coordenadas(1, 1, 1), 10, 55,
[], "correr", 4.5);
const ruta_2 = new Ruta(2, "Ruta por el teide", new Coordenadas(6, 7, 5), new Coordenadas(12, 14, 6), 27, 217,
[], "correr", 4.8);

const reto_1 = new Reto(152, "Reto de prueba", [ruta_1, ruta_2], "correr", []);
const reto_2 = new Reto(152, "Reto de nuevo", [ruta_1, ruta_2], "correr", []);


let userUno = new Usuario(
  "Mortadelo",
  "bicicleta",
  [],
  [
    [2, 5],
    [20, 33],
  ],
  [ruta_1, ruta_2],
  [reto_1],
  32
);
let user = new Usuario(
  "Filemon",
  "correr",
  [userUno],
  [[26, 13]],
  [ruta_2],
  [reto_2]
);


// console.log(userUno.grupos)
// console.log(userUno.addGrupo([25,26]))
// console.log(userUno.grupos)
// console.log(userUno.addGrupo([25,26]))
// console.log(userUno.grupos)
// console.log(userUno.deleteGrupo([25,26]))
// console.log(userUno.grupos)
// console.log(userUno.deleteGrupo([25,26]))
// console.log(userUno.grupos)







