import { Grupo, historialRutasGrupal } from "./grupos";
import { ColeccionGrupos } from "./coleccion_grupos";
import { Usuario } from "../Usuario/usuario";
import { EstadisticasEntrenamiento } from "../Usuario/estadisticas_entrenamiento";
import { Ruta } from "../Ruta/rutas";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

/**
 * Define el tipo de objeto almacenado en la base de datos. Este tipo 
 * es utilizado por el módulo de bajo nivel `lowdb` para realizar las 
 * operaciones de lectura y escritura en el archivo JSON.
 */
type SchemaType = {
    grupo: { _id: number,
             _nombre: string,
             _participantes: Usuario[],
             _estadisticasGrupal: EstadisticasEntrenamiento,
             _clasificacion: number[],
             _rutasFavoritas: Ruta[],
             _historialRutas: historialRutasGrupal }[]
}

/**
 * Clase JSON que extiene la clase de colección de grupos.
 */
export class JsonColeccionGrupos extends ColeccionGrupos {
    private database: lowdb.LowdbSync<SchemaType>;

    /**
     * Constructor de clase.
     * @param listaGrupos Lista de grupos que conforman la colección.
     */
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

    /**
     * Añade un nuevo elemento a la colección.
     * @param item Elemento a añadir.
     */
    addGrupo(grupo: Grupo) {
        super.add(grupo);
        this.storeGrupos();
    }

    /**
     * Añade un nuevo elemento a la colección.
     * @param item Elemento a añadir.
     */
    removeGrupo(index: number) {
        super.remove(index);
        this.storeGrupos();
    }

    /**
     * Modifica un elemento de la colección.
     * @param index índice del elemento a modificar.
     * @param item Elemento con nuevas características.
     */
    modifyGrupo(index: number, item: Grupo) {
        super.modify(index, item);
        this.storeGrupos();
    }

    /**
     * Método que permite ordenar la colección.
     * @param atributo Atributo por el que se va a ordenar.
     * @param orden Orden ascendente o descendente.
     * @param factor Factor por el que se ordena (en ciertos casos).
     */
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

    /**
     * Muestra la colección por consola.
     */
    showGrupo() {
        this._listaElementos.forEach((item) => console.log(item.id, item.nombre, item.clasificacion));
    }

    /**
     * Alamcena los grupos en el JSON.
     */
    private storeGrupos() {
        this.database.set("grupo", [...this._listaElementos.values()]).write();
    }
}