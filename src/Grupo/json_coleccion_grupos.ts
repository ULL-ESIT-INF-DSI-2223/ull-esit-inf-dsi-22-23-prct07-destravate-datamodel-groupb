import { Grupo, historialRutasGrupal } from "./grupos";
import { ColeccionGrupos } from "./coleccion_grupos";
import { Usuario } from "../Usuario/usuario";
import { EstadisticasEntrenamiento } from "../Usuario/estadisticas_entrenamiento";
import { Ruta } from "../Ruta/rutas";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

type SchemaType = {
    grupo: { _id: number,
             _nombre: string,
             _participantes: Usuario[],
             _estadisticasGrupal: EstadisticasEntrenamiento,
             _clasificacion: number[],
             _rutasFavoritas: Ruta[],
             _historialRutas: historialRutasGrupal }[]
}

export class JsonColeccionGrupos extends ColeccionGrupos {
    private database: lowdb.LowdbSync<SchemaType>;

    constructor(listaGrupos: Grupo[]) {
        super([]);
        this.database = lowdb(new FileSync("./Grupos.json"));
        if(this.database.has("grupo").value()) {
            const dbItems = this.database.get("grupo").value();
            dbItems.forEach(item => this._listaElementos.push(new Grupo(item._id, item._nombre, item._participantes, 
                item._estadisticasGrupal, item._clasificacion, item._rutasFavoritas, item._historialRutas)));
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
        this._listaElementos.forEach((item) => console.log(item.id, item.nombre, item.clasificacion));
    }

    private storeGrupos() {
        this.database.set("grupo", [...this._listaElementos.values()]).write();
    }
}