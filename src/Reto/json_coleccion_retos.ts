import { ColeccionRetos } from "./coleccion_retos";
import { Ruta } from "../Ruta/rutas";
import { Usuario } from "../Usuario/usuario";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileAsync";

type SchemaType = {
    reto: { id: number,
            nombre: string,
            rutas: Ruta[],
            tipo: "bicicleta" | "correr",
            kilometros: number,
            usuarios: Usuario[] }[]
}

export class JsonColeccionRetos extends ColeccionRetos {
    private database: lowdb.LowdbSync<SchemaType>;
}