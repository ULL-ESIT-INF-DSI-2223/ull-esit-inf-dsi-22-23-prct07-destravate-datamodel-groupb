import { Grupo, historialRutasGrupal } from "./grupos";
import { ColeccionGrupos } from "./coleccion_grupos";
import { Usuario } from "../Usuario/usuario";
import { EstadisticasEntrenamiento } from "../Usuario/estadisticas_entrenamiento";
import { Ruta } from "../Ruta/rutas";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

type SchemaType = {
    grupo: { id: number,
             nombre: string,
             participantes: Usuario[],
             estadisticasGrupal: EstadisticasEntrenamiento,
             clasificacion: number[],
             rutasFavoritas: Ruta[],
             historialRutas: historialRutasGrupal }[]
}

export class JsonColeccionGrupos extends ColeccionGrupos {
    private database: lowdb.LowdbSync<SchemaType>;

    constructor(listaGrupos: Grupo[]) {
        super(listaGrupos);
        this.database = lowdb(new FileSync("Grupos.json"));
        if(this.database.has("grupo").value()) {
            const dbItems = this.database.get("grupo").value();
            dbItems.forEach(item => this._listaElementos.push(new Grupo(item.id, item.nombre, item.participantes, 
                item.estadisticasGrupal, item.clasificacion, item.rutasFavoritas, item.historialRutas)));
        } else {
            this.database.set("grupo", listaGrupos).write();
            listaGrupos.forEach(item => this._listaElementos.push(item));
        }
    }

    addGrupo(grupo: Grupo) {
        super.add(grupo);
        this.storeGrupos();
    }

    removeGrupo(index: number) {
        super.remove(index);
        this.storeGrupos();
    }

    modifyGrupo(index: number, item: Grupo) {
        super.modify(index, item);
        this.storeGrupos();
    }

    buscarGrupo(atributo: string, orden: "asc" | "desc", factor: "sem" | "mes" | "año") {
        switch (atributo) {
            case "nombre":
                super.buscarNombre(orden);
                break;
            case "kilometros":
                super.buscarKilometros(orden, factor);
                break;
            case "cantidad":
                super.buscarCantidadMiembros(orden);
                break;
            default:
                break;
        }
        this.storeGrupos();
        this.showGrupo();
    }

    showGrupo() {
        this._listaElementos.forEach((item) => console.log(item.id, item.nombre, item.participantes, 
            item.estadisticasGrupal, item.clasificacion, item.rutasFavoritas, item.historialRutas));
    }

    private storeGrupos() {
        this.database.set("grupo", [...this._listaElementos.values()]).write();
    }
}