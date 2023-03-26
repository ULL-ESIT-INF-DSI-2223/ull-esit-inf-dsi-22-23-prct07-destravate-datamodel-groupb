import { ColeccionRetos } from "./coleccion_retos";
import { Ruta } from "../Ruta/rutas";
import { Usuario } from "../Usuario/usuario";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";
import { Reto } from "./retos";

/**
 * Define el tipo de objeto almacenado en la base de datos. Este tipo 
 * es utilizado por el módulo de bajo nivel `lowdb` para realizar las 
 * operaciones de lectura y escritura en el archivo JSON.
 */
type SchemaType = {
    reto: { _id: number,
            _nombre: string,
            _rutas: Ruta[],
            _tipo: "bicicleta" | "correr",
            _kilometros: number,
            _usuarios: Usuario[] }[]
}

/**
 * clase que extiende la clase colleciones de retos
 */
export class JsonColeccionRetos extends ColeccionRetos {
    private database: lowdb.LowdbSync<SchemaType>;
    /**
     * constructor de la clase JsonColeccionRetos
     * @param listaRetos retos para hacer un objeto
     */
    constructor(listaRetos: Reto[]) {
        super([]);
        this.database = lowdb(new FileSync("./Retos.json"));
        if(this.database.has("reto").value()) {
            const dbItems = this.database.get("reto").value();
            dbItems.forEach(item => this._listaElementos.push(new Reto(item._id, item._nombre, item._rutas, 
                item._tipo, item._usuarios)));
        } else {
            this.database.set("reto", listaRetos).write();
            listaRetos.forEach(item => this._listaElementos.push(item));
        }
    }
    /**
     * metodo para añadir un reto a la coolleccion
     * @param reto reo a añadir
     */
    addReto(reto: Reto) {
        super.add(reto);
        this.storeRetos();
    }
    /**
     * metodo para eliminar un reto a la coolleccion
     * @param index indice del reto a eliminar
     */
    removeReto(index: number) {
        super.remove(index);
        this.storeRetos();
    }

    /**
     * metodo para modificar un reto
     * @param index indice del reto
     * @param item reto a modificar
     */
    modifyReto(index: number, item: Reto) {
        super.modify(index, item);
        this.storeRetos();
    }

    /**
     * metodo para buscar un reto
     * @param atributos atributo para buscar
     * @param order orden a buscar
     */
    buscarReto(atributo: string, orden: "asc" | "desc") {
        switch (atributo) {
            case "nombre":
                super.buscarNombre(orden);
                break;
            case "cantidad":
                super.buscarCantidadUsuarios(orden);
                break;
            case "kilometros":
                super.buscarKilometros(orden);
                break;
            default:
                break;
        }
        this.storeRetos();
        this.showReto();
    }

    /**
     * metodo para enseñar los retos
     */
    showReto() {
        this._listaElementos.forEach((item) => console.log(item.id, item.nombre, 
            item.tipo, item.kilometros));
    }

    /**
     * metodo para ordenar los retos
     */
    private storeRetos() {
        this.database.set("reto", [...this._listaElementos.values()]).write();
    }
}// 