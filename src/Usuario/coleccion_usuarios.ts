import { Coleccion } from "../coleccion";
import { Usuario } from "./usuario";

export class ColeccionRutas implements Coleccion<Usuario> {
    _listaElementos: Usuario[];

    constructor(listaElementos: Usuario[]) {
        this._listaElementos = listaElementos;
    }

    add(item: Usuario): void {
        
    }

    remove(index: number): void {
        
    }

    modify(index: number, item: Usuario): void {
        
    }
}