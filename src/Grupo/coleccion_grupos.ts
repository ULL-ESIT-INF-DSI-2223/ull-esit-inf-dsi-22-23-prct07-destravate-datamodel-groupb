import { Coleccion } from "../coleccion";
import { Grupo } from "./grupos";

/**
 * Clase que representa a una colección de grupos.
 */
export class ColeccionGrupos implements Coleccion<Grupo> {
  _listaElementos: Grupo[];

  /**
   * Constructor de clase.
   * @param listaElementos Lista de elementos de la colección.
   */
  constructor(listaElementos: Grupo[]) {
    this._listaElementos = listaElementos;
  }

  /**
   * Añade un nuevo elemento a la colección.
   * @param item Elemento a añadir.
   */
  add(item: Grupo): void {
    this._listaElementos.push(item);
  }

  /**
   * Elimina un elemento de la colección.
   * @param index índice del elemento a eliminar.
   */
  remove(index: number): void {
    this._listaElementos.splice(index, 1);
  }

  /**
   * Modifica un elemento de la colección.
   * @param index índice del elemento a modificar.
   * @param item Elemento con nuevas características.
   */
  modify(index: number, item: Grupo): void {
    this._listaElementos[index] = item;
  }

  /**
   * Ordena los elementos de la colección según su nombre.
   * @param orden Orden ascendente o descendente.
   */
  buscarNombre(orden: "asc" | "desc") {
    this._listaElementos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    if (orden == "desc") {
      this._listaElementos.reverse();
    }
  }

  /**
   * Ordena los elementos de la colección según los kilómetros realizados semanales, mensuales o anuales.
   * @param orden Orden ascendente o descendente.
   * @param tipo Semanal, mensual o anual.
   */
  buscarKilometros(orden: "asc" | "desc", tipo: "sem" | "mes" | "año") {
    switch (tipo) {
      case "sem":
        this._listaElementos.sort(
          (a, b) =>
            a.estadisticasGrupal.estadisticaSemanal[0] -
            b.estadisticasGrupal.estadisticaSemanal[0]
        );
        break;
      case "mes":
        this._listaElementos.sort(
          (a, b) =>
            a.estadisticasGrupal.estadisticaMensual[0] -
            b.estadisticasGrupal.estadisticaMensual[0]
        );
        break;
      default:
        this._listaElementos.sort(
          (a, b) =>
            a.estadisticasGrupal.estadisticaAnual[0] -
            b.estadisticasGrupal.estadisticaAnual[0]
        );
        break;
    }
    if (orden == "desc") {
      this._listaElementos.reverse();
    }
  }

  /**
   * Ordena los elementos de la colección según la cantidad de miembros.
   * @param orden Orden ascendente o descendente.
   */
  buscarCantidadMiembros(orden: "asc" | "desc") {
    this._listaElementos.sort(
      (a, b) => a.participantes.length - b.participantes.length
    );
    if (orden == "desc") {
      this._listaElementos.reverse();
    }
  }
}
