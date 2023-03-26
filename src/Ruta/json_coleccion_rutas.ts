import { ColeccionRutas } from "./coleccion_rutas";
import { Coordenadas } from "./coordenadas";
import { Usuario } from "../Usuario/usuario";
import { Ruta } from "./rutas";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";


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

    constructor(listaRutas: Ruta[]) {
        super(listaRutas);
        this.database = lowdb(new FileSync("Rutas.json"));
        if(this.database.has("ruta").value()) {
            const dbItems = this.database.get("ruta").value();
            dbItems.forEach(item => this._listaElementos.push(new Ruta(item.id, item.nombre, 
                item.geolocalizacionInicio, item.geolocalizacionFin, item.longitud, item.desnivelMedio, 
                item.usuarios, item.tipoActividad, item.calificacionMedia)));
        } else {
            this.database.set("ruta", listaRutas).write();
            listaRutas.forEach(item => this._listaElementos.push(item));
        }
    }

    addRuta(ruta: Ruta) {
        super.add(ruta);
        this.storeRutas();
    }

    removeRuta(index: number) {
        super.remove(index);
        this.storeRutas();
    }

    modifyRuta(index: number, item: Ruta) {
        super.modify(index, item);
        this.storeRutas();
    }

    buscarRuta(atributo: string, orden: "asc" | "desc") {
        switch (atributo) {
            case "nombre":
                super.buscarNombre(orden);
                break;
            case "cantidad":
                super.buscarCantidadUsuarios(orden);
                break;
            case "longitud":
                super.buscarLongitud(orden);
                break;
            case "calificacion":
                super.buscarCalificacion(orden);
                break;
            case "tipo":
                super.buscarTipoActividad(orden);
                break;
            default:
                break;
        }
        this.storeRutas();
        this.showRuta();
    }

    showRuta() {
        this._listaElementos.forEach((item) => console.log(item.id, item.nombre, 
            item.geolocalizacionInicio, item.geolocalizacionFin, item.longitud, item.desnivelMedio, 
            item.usuarios, item.tipoActividad, item.calificacionMedia));
    }

    private storeRutas() {
        this.database.set("ruta", [...this._listaElementos.values()]).write();
    }
}