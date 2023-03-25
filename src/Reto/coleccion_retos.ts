import { Coleccion } from "../coleccion";
import { Reto } from "./retos";

export class ColeccionRetos implements Coleccion<Reto> {
    _listaElementos: Reto[];

    constructor(listaElementos: Reto[]) {
        this._listaElementos = listaElementos;
    }

    add(item: Reto): void {
        
    }

    remove(index: number): void {
        
    }

    modify(index: number, item: Reto): void {
        
    }
}