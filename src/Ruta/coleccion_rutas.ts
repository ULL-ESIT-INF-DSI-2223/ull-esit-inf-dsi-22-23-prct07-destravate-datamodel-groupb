import { Coleccion } from "../coleccion";
import { Ruta } from "./rutas";

/**
 * Clase que representa a una colección de rutas.
 */
export class ColeccionRutas implements Coleccion<Ruta> {
    _listaElementos: Ruta[];

    /**
     * Constructor de clase.
     * @param listaElementos Lista de elementos de la colección. 
     */
    constructor(listaElementos: Ruta[]) {
        this._listaElementos = listaElementos;
    }

    /**
     * Añade un nuevo elemento a la colección.
     * @param item Elemento a añadir.
     */
    add(item: Ruta): void {
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
    modify(index: number, item: Ruta): void {
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
     * Ordena los elementos de la colección según la cantidad de usuarios.
     * @param orden Orden ascendente o descendente.
     */
    buscarCantidadUsuarios(orden: "asc" | "desc") {
        this._listaElementos.sort((a, b) => b.usuarios.length - a.usuarios.length);
        if(orden == "desc") {
            this._listaElementos.reverse()
        }
    }

    /**
     * Ordena los elementos de la colección según la longitud.
     * @param orden Orden ascendente o descendente.
     */
    buscarLongitud(orden: "asc" | "desc") {
        this._listaElementos.sort((a, b) => b.longitud - a.longitud);
        if(orden == "desc") {
            this._listaElementos.reverse()
        }
    }

    /**
     * Ordena los elementos de la colección según la calificación media.
     * @param orden Orden ascendente o descendente.
     */
    buscarCalificacion(orden: "asc" | "desc") {
        this._listaElementos.sort((a, b) => b.calificacionMedia - a.calificacionMedia);
        if(orden == "desc") {
            this._listaElementos.reverse()
        }
    }

    /**
     * Ordena los elementos de la colección según el tipo de actividad.
     * @param orden Orden ascendente o descendente.
     */
    buscarTipoActividad(orden: "asc" | "desc") {
        this._listaElementos.sort((a, b) => a.tipoActividad.localeCompare(b.tipoActividad));
        if(orden == "desc") {
            this._listaElementos.reverse()
        }
    }
}