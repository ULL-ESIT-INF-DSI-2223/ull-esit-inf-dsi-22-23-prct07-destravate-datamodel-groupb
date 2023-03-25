import { Coleccion } from "../coleccion";
import { Ruta } from "./rutas";

export class ColeccionRutas implements Coleccion<Ruta> {
    _listaElementos: Ruta[];

    constructor(listaElementos: Ruta[]) {
        this._listaElementos = listaElementos;
    }

    add(item: Ruta): void {
        this._listaElementos.push(item);
    }

    remove(index: number): void {
        this._listaElementos.splice(index, 1);
    }

    modify(index: number, item: Ruta): void {
        this._listaElementos[index] = item;
    }

    buscarNombre(orden: "asc" | "desc") {
        this._listaElementos.sort((a, b) => a.nombre.localeCompare(b.nombre));
        if(orden == "desc") {
            this._listaElementos.reverse()
        }
    }

    buscarCantidadUsuarios(orden: "asc" | "desc") {
        this._listaElementos.sort((a, b) => b.usuarios.length - a.usuarios.length);
        if(orden == "desc") {
            this._listaElementos.reverse()
        }
    }

    buscarLongitud(orden: "asc" | "desc") {
        this._listaElementos.sort((a, b) => b.longitud - a.longitud);
        if(orden == "desc") {
            this._listaElementos.reverse()
        }
    }

    buscarCalificacion(orden: "asc" | "desc") {
        this._listaElementos.sort((a, b) => b.calificacionMedia - a.calificacionMedia);
        if(orden == "desc") {
            this._listaElementos.reverse()
        }
    }

    buscarTipoActividad(orden: "asc" | "desc") {
        this._listaElementos.sort((a, b) => a.tipoActividad.localeCompare(b.tipoActividad));
        if(orden == "desc") {
            this._listaElementos.reverse()
        }
    }
}