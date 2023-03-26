import { Usuario, HistorialRutas } from "./usuario";
import { ColeccionUsuarios } from "./coleccion_usuarios";
import { Grupo } from "../Grupo/grupos";
import { EstadisticasEntrenamiento } from "./estadisticas_entrenamiento";
import { Ruta } from "../Ruta/rutas";
import { Reto } from "../Reto/retos";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileAsync";

type SchemaType = {
    usuario: { id: number, nombre: string, 
               tipoActividad: "bicicleta" | "correr", 
               amigos: Usuario[], 
               grupos: Grupo[],
               estadisticasEntrenamiento: EstadisticasEntrenamiento,
               rutasFavoritas: Ruta[],
               retosActivos: Reto[],
               historialRutas: HistorialRutas }[]
}

export class JsonColeccionUsuarios extends ColeccionUsuarios {
    private database: lowdb.LowdbSync<SchemaType>;
}