import { ColeccionRutas } from "./coleccion_rutas";
import { Coordenadas } from "./coordenadas";
import { Usuario } from "../Usuario/usuario";
import { Ruta } from "./rutas";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

/**
 * Define el tipo de objeto almacenado en la base de datos. Este tipo 
 * es utilizado por el módulo de bajo nivel `lowdb` para realizar las 
 * operaciones de lectura y escritura en el archivo JSON.
 */
type SchemaType = {
    ruta: { _id: number,
            _nombre: string,
            _geolocalizacionInicio: Coordenadas,
            _geolocalizacionFin: Coordenadas,
            _longitud: number,
            _desnivelMedio: number,
            _usuarios: Usuario[],
            _tipoActividad: "bicicleta" | "correr",
            _calificacionMedia: number }[]
}
/**
 * Clase que implementa la interfaz `ColeccionRutas` utilizando una base de 
 * datos JSON para almacenar y persistir los datos. Esta clase extiende la 
 * clase abstracta `ColeccionRutas` e implementa sus métodos públicos.
 */
export class JsonColeccionRutas extends ColeccionRutas {
    /**
     * Objeto que representa la conexión a la base de datos JSON. Este objeto 
     * es utilizado para realizar las operaciones de lectura y escritura en 
     * el archivo JSON.
     */
    private database: lowdb.LowdbSync<SchemaType>;
    /**
     * Constructor de la clase. Recibe una lista de objetos `Ruta` que se 
     * utilizarán para inicializar la base de datos. Si la base de datos ya 
     * existe, se cargan los datos almacenados. Si no existe, se crea y se 
     * inicializa con los datos proporcionados.
     * 
     * @param listaRutas Lista de objetos `Ruta` que se utilizarán para 
     * inicializar la base de datos.
     */
    constructor(listaRutas: Ruta[]) {
        // Llama al constructor de la clase padre con una lista vacía.
        super([]);
        // Crea una conexión a la base de datos JSON utilizando el módulo `lowdb`.
        // Si el archivo JSON no existe, se crea automáticamente.
        this.database = lowdb(new FileSync("./Rutas.json"));
        if(this.database.has("ruta").value()) {
            const dbItems = this.database.get("ruta").value();
            dbItems.forEach(item => this._listaElementos.push(new Ruta(item._id, item._nombre, 
                item._geolocalizacionInicio, item._geolocalizacionFin, item._longitud, item._desnivelMedio, 
                item._usuarios, item._tipoActividad, item._calificacionMedia)));
        } else {
            this.database.set("ruta", listaRutas).write();
            listaRutas.forEach(item => this._listaElementos.push(item));
        }
    }
/**

Agrega una nueva ruta a la colección y la guarda en la base de datos.
@param ruta Ruta que se agrega a la colección.
*/
    addRuta(ruta: Ruta) {
        super.add(ruta);
        this.storeRutas();
    }
/**

Elimina una ruta de la colección y la elimina de la base de datos.
@param index Índice de la ruta que se elimina de la colección.
*/
    removeRuta(index: number) {
        super.remove(index);
        this.storeRutas();
    }
/**

Modifica una ruta de la colección y actualiza la información en la base de datos.
@param index Índice de la ruta que se modifica en la colección.
@param item Objeto Ruta que contiene los nuevos datos de la ruta.
*/
    modifyRuta(index: number, item: Ruta) {
        super.modify(index, item);
        this.storeRutas();
    }
/**

Busca rutas en la colección y las ordena según el atributo indicado y el orden especificado.
@param atributo Atributo por el que se ordenan las rutas. Puede ser "nombre", "cantidad", "longitud", "calificacion" o "tipo".
@param orden Orden en el que se ordenan las rutas. Puede ser "asc" o "desc".
*/
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
/** 
Muestra rutas en la colección
*/
    showRuta() {
        this._listaElementos.forEach((item) => console.log(item.id, item.nombre, 
            item.longitud, item.desnivelMedio, item.tipoActividad, item.calificacionMedia));
    }

    private storeRutas() {
        this.database.set("ruta", [...this._listaElementos.values()]).write();
    }
}