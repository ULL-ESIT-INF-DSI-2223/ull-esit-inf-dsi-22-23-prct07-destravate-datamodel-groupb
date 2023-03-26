import { ColeccionRetos } from "./coleccion_retos";
import { Ruta } from "../Ruta/rutas";
import { Usuario } from "../Usuario/usuario";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";
import { Reto } from "./retos";

type SchemaType = {
    reto: { _id: number,
            _nombre: string,
            _rutas: Ruta[],
            _tipo: "bicicleta" | "correr",
            _kilometros: number,
            _usuarios: Usuario[] }[]
}

export class JsonColeccionRetos extends ColeccionRetos {
    private database: lowdb.LowdbSync<SchemaType>;

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

    addReto(reto: Reto) {
        super.add(reto);
        this.storeRetos();
    }

    removeReto(index: number) {
        super.remove(index);
        this.storeRetos();
    }

    modifyReto(index: number, item: Reto) {
        super.modify(index, item);
        this.storeRetos();
    }

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

    showReto() {
        this._listaElementos.forEach((item) => console.log(item.id, item.nombre, item.rutas, 
            item.tipo, item.usuarios));
    }

    private storeRetos() {
        this.database.set("reto", [...this._listaElementos.values()]).write();
    }
}