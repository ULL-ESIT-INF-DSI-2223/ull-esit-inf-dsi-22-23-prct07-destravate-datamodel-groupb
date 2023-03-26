import { historialRutasGrupal } from "./grupos";
import { ColeccionGrupos } from "./coleccion_grupos";
import { Usuario } from "../Usuario/usuario";
import { EstadisticasEntrenamiento } from "../Usuario/estadisticas_entrenamiento";
import { Ruta } from "../Ruta/rutas";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileAsync";

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
}