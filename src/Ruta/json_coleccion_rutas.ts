import { ColeccionRutas } from "./coleccion_rutas";
import { Coordenadas } from "./coordenadas";
import { Usuario } from "../Usuario/usuario";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileAsync";

type SchemaType = {
    ruta: { id: number,
            nombre: string,
            geolocalizacionInicio: Coordenadas,
            geolocalizacionFin: Coordenadas,
            longitud: number,
            desnivelMedio: number,
            usuarios: Usuario[],
            tipoActividad: "bicicleta" | "correr",
            calificacionMedia: number }[]
}

export class JsonColeccionRutas extends ColeccionRutas {
    private database: lowdb.LowdbSync<SchemaType>;
}