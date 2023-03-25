import { Coleccion } from "../coleccion";
import { Reto } from "./retos";

export class ColeccionRetos implements Coleccion<Reto> {
    _listaElementos: Reto[];

    constructor(listaElementos: Reto[]) {
        this._listaElementos = listaElementos;
    }

    add(item: Reto): void {
        this._listaElementos.push(item);
    }

    remove(index: number): void {
        this._listaElementos.splice(index, 1);
    }

    modify(index: number, item: Reto): void {
        this._listaElementos[index] = item;
    }

    buscarNombre(orden: "asc" | "desc") {
        this._listaElementos.sort((a, b) => a.nombre.localeCompare(b.nombre));
        if(orden == "desc") {
            this._listaElementos.reverse()
        }
    }

    buscarKilometros(orden: "asc" | "desc") {
        this._listaElementos.sort((a, b) => b.kilometros - a.kilometros);
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
}