import { Usuario, HistorialRutas } from "./usuario";
import { ColeccionUsuarios } from "./coleccion_usuarios";
import { Grupo } from "../Grupo/grupos";
import { EstadisticasEntrenamiento } from "./estadisticas_entrenamiento";
import { Ruta } from "../Ruta/rutas";
import { Reto } from "../Reto/retos";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

type SchemaType = {
    usuario: { nombre: string, 
               tipoActividad: "bicicleta" | "correr", 
               amigos: Usuario[], 
               grupos: Grupo[],
               estadisticasEntrenamiento: EstadisticasEntrenamiento,
               rutasFavoritas: Ruta[],
               retosActivos: Reto[],
               historialRutas: HistorialRutas 
               id: number }[]
}

export class JsonColeccionUsuarios extends ColeccionUsuarios {
    private database: lowdb.LowdbSync<SchemaType>;

    constructor(listaUsuarios: Usuario[]) {
        super(listaUsuarios);
        this.database = lowdb(new FileSync("Usuarios.json"));
        if(this.database.has("usuario").value()) {
            const dbItems = this.database.get("usuario").value();
            dbItems.forEach(item => this._listaElementos.push(new Usuario(item.nombre, item.tipoActividad, 
                item.amigos, item.grupos, item.estadisticasEntrenamiento, item.rutasFavoritas, item.retosActivos, 
                item.historialRutas, item.id)));
        } else {
            this.database.set("usuario", listaUsuarios).write();
            listaUsuarios.forEach(item => this._listaElementos.push(item));
        }
    }

    addUsario(usuario: Usuario) {
        super.add(usuario);
        this.storeUsuarios();
    }

    removeUsuario(index: number) {
        super.remove(index);
        this.storeUsuarios();
    }

    modifyUsuario(index: number, item: Usuario) {
        super.modify(index, item);
        this.storeUsuarios();
    }

    buscarUsuario(atributo: string, orden: "asc" | "desc", factor: "sem" | "mes" | "año") {
        switch (atributo) {
            case "nombre":
                super.buscarNombre(orden);
                break;
            case "kilometros":
                super.buscarKilometros(orden, factor)
                break;
            default:
                break;
        }
        this.storeUsuarios();
        this.showUsuario();
    }

    showUsuario() {
        this._listaElementos.forEach((item) => console.log(item.id, item.nombre, item.tipoActividad, 
            item.amigos, item.grupos, item.estadisticasEntrenamiento, item.rutas, item.retos, item.historialRutas));
    }

    private storeUsuarios() {
        this.database.set("usuario", [...this._listaElementos.values()]).write();
    }
}