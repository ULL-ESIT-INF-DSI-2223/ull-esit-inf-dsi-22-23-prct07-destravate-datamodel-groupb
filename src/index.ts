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

import { Ruta} from "./rutas"
import { Coordenadas} from "./rutas"


const rutas: Ruta[] = [
  new Ruta(
    "Ruta 1",
    10,
    60,
    [
      new Coordenadas(10.1234, -72.3456, 132.42),
      new Coordenadas(10.2345, -72.4567, 139.42),
      new Coordenadas(10.3456, -72.5678, 135.42),
    ]
  ),
  new Ruta(
    "Ruta 2",
    8,
    45,
    [
      new Coordenadas(10.5678, -72.7890, 150.36),
      new Coordenadas(10.6789, -72.8901, 160.36),
      new Coordenadas(10.7890, -73.0012, 92.36),
    ]
  ),
  // ... más rutas
];

console.log(rutas[0].desnivel)

