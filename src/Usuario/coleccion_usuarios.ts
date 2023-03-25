import { Coleccion } from "../coleccion";
import { Usuario } from "./usuario";

export class ColeccionRutas implements Coleccion<Usuario> {
    _listaElementos: Usuario[];

    constructor(listaElementos: Usuario[]) {
        this._listaElementos = listaElementos;
    }

    add(item: Usuario): void {
        this._listaElementos.push(item);
    }

    remove(index: number): void {
        this._listaElementos.splice(index, 1);
    }

    modify(index: number, item: Usuario): void {
        this._listaElementos[index] = item;
    }

    buscarNombre(orden: "asc" | "desc") {
        this._listaElementos.sort((a, b) => a.nombre.localeCompare(b.nombre));
        if(orden == "desc") {
            this._listaElementos.reverse()
        }
    }

    buscarKilomteros(orden: "asc" | "desc", tipo: "sem" | "mes" | "año") {
        switch (tipo) {
            case "sem":
                this._listaElementos.sort((a, b) => b.estadisticasEntrenamiento.estadisticaSemanal[0] - a.estadisticasEntrenamiento.estadisticaSemanal[0]);
                break;
            case "mes":
                this._listaElementos.sort((a, b) => b.estadisticasEntrenamiento.estadisticaMensual[0] - a.estadisticasEntrenamiento.estadisticaMensual[0]);
                break;
            default:
                this._listaElementos.sort((a, b) => b.estadisticasEntrenamiento.estadisticaAnual[0] - a.estadisticasEntrenamiento.estadisticaAnual[0]);
                break;
        }
        if(orden == "desc") {
            this._listaElementos.reverse()
        }
    }
}