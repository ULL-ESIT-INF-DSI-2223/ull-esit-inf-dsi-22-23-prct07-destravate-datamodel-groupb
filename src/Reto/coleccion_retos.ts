import { Coleccion } from "../coleccion";
import { Reto } from "./retos";

/**
 * Clase que representa a una colección de retos.
 */
export class ColeccionRetos implements Coleccion<Reto> {
    _listaElementos: Reto[];

    /**
     * Constructor de clase.
     * @param listaElementos Lista de elementos de la colección. 
     */
    constructor(listaElementos: Reto[]) {
        this._listaElementos = listaElementos;
    }

    /**
     * Añade un nuevo elemento a la colección.
     * @param item Elemento a añadir.
     */
    add(item: Reto): void {
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
    modify(index: number, item: Reto): void {
        this._listaElementos[index] = item;
    }

    /**
     * Ordena los elementos de la colección según su nombre.
     * @param orden Orden ascendente o descendente.
     */
    buscarNombre(orden: "asc" | "desc") {
        this._listaElementos.sort((a, b) => a.nombre.localeCompare(b.nombre));
        if(orden == "desc") {
            this._listaElementos.reverse()
        }
    }

    /**
     * Ordena los elementos de la colección según la cantidad de kilómetros totales.
     * @param orden Orden ascendente o descendente.
     */
    buscarKilometros(orden: "asc" | "desc") {
        this._listaElementos.sort((a, b) => b.kilometros - a.kilometros);
        if(orden == "desc") {
            this._listaElementos.reverse()
        }
    }

    /**
     * Ordena los elementos de la colección según la cantidad de usuarios.
     * @param orden Orden ascendente o descendente.
     */
    buscarCantidadUsuarios(orden: "asc" | "desc") {
        this._listaElementos.sort((a, b) => b.usuarios.length - a.usuarios.length);
        if(orden == "desc") {
            this._listaElementos.reverse()
        }
    }
}