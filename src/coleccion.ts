/**  
 * Interfaz que implementa los métodos de una colección
*/
export interface Coleccion<T> {
  _listaElementos: T[];
  add(item: T): void;
  remove(index: number): void;
  modify(index: number, item: T): void;
}
