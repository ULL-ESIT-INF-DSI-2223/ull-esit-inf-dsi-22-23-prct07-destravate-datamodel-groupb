import { Coleccion } from "../coleccion";
import { Grupo } from "./grupos";

export class ColeccionGrupos implements Coleccion<Grupo> {
    _listaElementos: Grupo[];

    constructor(listaElementos: Grupo[]) {
        this._listaElementos = listaElementos;
    }

    add(item: Grupo): void {
        this._listaElementos.push(item);
    }

    remove(index: number): void {
        this._listaElementos.splice(index, 1);
    }

    modify(index: number, item: Grupo): void {
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
                this._listaElementos.sort((a, b) => b.estadisticasGrupal.estadisticaSemanal[0] - a.estadisticasGrupal.estadisticaSemanal[0]);
                break;
            case "mes":
                this._listaElementos.sort((a, b) => b.estadisticasGrupal.estadisticaMensual[0] - a.estadisticasGrupal.estadisticaMensual[0]);
                break;
            default:
                this._listaElementos.sort((a, b) => b.estadisticasGrupal.estadisticaAnual[0] - a.estadisticasGrupal.estadisticaAnual[0]);
                break;
        }
        if(orden == "desc") {
            this._listaElementos.reverse()
        }
    }

    buscarCantidadMiembros(orden: "asc" | "desc") {
        this._listaElementos.sort((a, b) => b.participantes.length - a.participantes.length);
        if(orden == "desc") {
            this._listaElementos.reverse()
        }
    }
}