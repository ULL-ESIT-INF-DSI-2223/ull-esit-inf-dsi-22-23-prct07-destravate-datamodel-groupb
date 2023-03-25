import { Coleccion } from "../coleccion";
import { Usuario } from "./usuario";

/**
 * Clase que representa a una colección de usuarios.
 */
export class ColeccionUsuarios implements Coleccion<Usuario> {
    _listaElementos: Usuario[];

    /**
     * Constructor de clase.
     * @param listaElementos Lista de elementos de la colección. 
     */
    constructor(listaElementos: Usuario[]) {
        this._listaElementos = listaElementos;
    }

    /**
     * Añade un nuevo elemento a la colección.
     * @param item Elemento a añadir.
     */
    add(item: Usuario): void {
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
    modify(index: number, item: Usuario): void {
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
     * Ordena los elementos de la colección según los kilómetros realizados semanales, mensuales o anuales.
     * @param orden Orden ascendente o descendente.
     * @param tipo Semanal, mensual o anual.
     */
    buscarKilomteros(orden: "asc" | "desc", tipo: "sem" | "mes" | "año") {
        switch (tipo) {
            case "sem":
                this._listaElementos.sort((a, b) => a.estadisticasEntrenamiento.estadisticaSemanal[0] - b.estadisticasEntrenamiento.estadisticaSemanal[0]);
                break;
            case "mes":
                this._listaElementos.sort((a, b) => a.estadisticasEntrenamiento.estadisticaMensual[0] - b.estadisticasEntrenamiento.estadisticaMensual[0]);
                break;
            default:
                this._listaElementos.sort((a, b) => a.estadisticasEntrenamiento.estadisticaAnual[0] - b.estadisticasEntrenamiento.estadisticaAnual[0]);
                break;
        }
        if(orden == "desc") {
            this._listaElementos.reverse()
        }
    }
}