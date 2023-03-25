import { Coleccion } from "../coleccion";
import { Ruta } from "./rutas";

export class ColeccionRutas implements Coleccion<Ruta> {
    _listaElementos: Ruta[];

    constructor(listaElementos: Ruta[]) {
        this._listaElementos = listaElementos;
    }

    add(item: Ruta): void {
        
    }

    remove(index: number): void {
        
    }

    modify(index: number, item: Ruta): void {
        
    }
}