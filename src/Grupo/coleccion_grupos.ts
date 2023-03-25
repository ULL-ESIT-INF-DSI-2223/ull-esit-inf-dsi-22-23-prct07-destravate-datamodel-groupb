import { Coleccion } from "../coleccion";
import { Grupo } from "./grupos";

export class ColeccionGrupos implements Coleccion<Grupo> {
    _listaElementos: Grupo[];

    constructor(listaElementos: Grupo[]) {
        this._listaElementos = listaElementos;
    }

    add(item: Grupo): void {
        
    }

    remove(index: number): void {
        
    }

    modify(index: number, item: Grupo): void {
        
    }
}