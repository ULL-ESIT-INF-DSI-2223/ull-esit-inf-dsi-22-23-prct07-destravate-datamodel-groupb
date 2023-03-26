import { Usuario, HistorialRutas } from "./usuario";
import { ColeccionUsuarios } from "./coleccion_usuarios";
import { Grupo } from "../Grupo/grupos";
import { EstadisticasEntrenamiento } from "./estadisticas_entrenamiento";
import { Ruta } from "../Ruta/rutas";
import { Reto } from "../Reto/retos";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

type SchemaType = {
    usuario: { _nombre: string;
               _tipoActividad: "bicicleta" | "correr";
               _amigos: Usuario[]; 
               _grupos: Grupo[];
               _estadisticasEntrenamiento: EstadisticasEntrenamiento;
               _rutasFavoritas: Ruta[];
               _retosActivos: Reto[];
               _historialRutas: HistorialRutas; 
               _id: number;
            }[]
}

export class JsonColeccionUsuarios extends ColeccionUsuarios {
    private database: lowdb.LowdbSync<SchemaType>;

    constructor(listaUsuarios: Usuario[]) {
        super(listaUsuarios);
        this.database = lowdb(new FileSync("./Usuarios.json"));
        if(this.database.has("usuario").value()) { //archivo creado
            let dbItems = this.database.get("usuario").value();
            console.log(dbItems[0]._nombre)
            dbItems.forEach(item => this._listaElementos.push(new Usuario(item._nombre, item._tipoActividad, 
              item._amigos, item._grupos, item._estadisticasEntrenamiento, item._rutasFavoritas, item._retosActivos, 
              item._historialRutas, item._id)));
        } else { //crear archivo
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
        this._listaElementos.forEach((item) => console.log(item.id, item.nombre/*, item.estadisticasEntrenamiento.estadisticaSemanal[0], item.estadisticasEntrenamiento.estadisticaMensual[0], item.estadisticasEntrenamiento.estadisticaAnual[0]*/));
    }

    private storeUsuarios() {
        this.database.set("usuario", [...this._listaElementos.values()]).write();
    }
}