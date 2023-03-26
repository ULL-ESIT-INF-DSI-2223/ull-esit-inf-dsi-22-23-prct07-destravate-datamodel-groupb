import { Usuario, HistorialRutas } from "./usuario";
import { ColeccionUsuarios } from "./coleccion_usuarios";
import { Grupo } from "../Grupo/grupos";
import { EstadisticasEntrenamiento } from "./estadisticas_entrenamiento";
import { Ruta } from "../Ruta/rutas";
import { Reto } from "../Reto/retos";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

/**
 * Define el tipo de objeto almacenado en la base de datos. Este tipo 
 * es utilizado por el módulo de bajo nivel `lowdb` para realizar las 
 * operaciones de lectura y escritura en el archivo JSON.
 */
type SchemaType = {
  usuario: {
    _nombre: string;
    _tipoActividad: "bicicleta" | "correr";
    _amigos: Usuario[];
    _grupos: Grupo[];
    _estadisticasEntrenamiento: EstadisticasEntrenamiento;
    _rutasFavoritas: Ruta[];
    _retosActivos: Reto[];
    _historialRutas: HistorialRutas;
    _id: number;
  }[];
};
/**

Clase que implementa una colección de usuarios almacenada en un archivo JSON.
@extends ColeccionUsuarios
*/
export class JsonColeccionUsuarios extends ColeccionUsuarios {
  /*
Base de datos de usuarios.
@type {lowdb.LowdbSync<SchemaType>}
@private
*/
  private database: lowdb.LowdbSync<SchemaType>;
/**

Crea una instancia de la clase JsonColeccionUsuarios.
@param {Array<Usuario>} listaUsuarios - Lista de usuarios.
*/
  constructor(listaUsuarios: Usuario[]) {
    super([]);
    this.database = lowdb(new FileSync("./Usuarios.json"));
    if (this.database.has("usuario").value()) {
      //archivo creado
      const dbItems = this.database.get("usuario").value();
      // console.log(dbItems[0]._nombre)
      dbItems.forEach((item) =>
        this._listaElementos.push(
          new Usuario(
            item._nombre,
            item._tipoActividad,
            item._amigos,
            item._grupos,
            item._estadisticasEntrenamiento,
            item._rutasFavoritas,
            item._retosActivos,
            item._historialRutas,
            item._id
          )
        )
      );
    } else {
      //crear archivo
      this.database.set("usuario", listaUsuarios).write();
      listaUsuarios.forEach((item) => this._listaElementos.push(item));
    }
  }
/**

Agrega un usuario a la colección.
@param {Usuario} usuario - Usuario a agregar.
*/
  addUsario(usuario: Usuario) {
    super.add(usuario);
    this.storeUsuarios();
  }
/**

Remueve un usuario de la colección.
@param {number} index - Índice del usuario a remover.
*/
  removeUsuario(index: number) {
    super.remove(index);
    this.storeUsuarios();
  }
/**

Modifica un usuario de la colección.
@param {number} index - Índice del usuario a modificar.
@param {Usuario} item - Usuario modificado.
*/
  modifyUsuario(index: number, item: Usuario) {
    super.modify(index, item);
    this.storeUsuarios();
  }
/**

Busca usuarios por nombre o cantidad de kilómetros recorridos.
@param {string} atributo - Atributo por el cual buscar (nombre o kilometros).
@param {"asc" | "desc"} orden - Orden ascendente o descendente.
@param {"sem" | "mes" | "año"} factor - Factor de tiempo a considerar.
*/
  buscarUsuario(
    atributo: string,
    orden: "asc" | "desc",
    factor: "sem" | "mes" | "año"
  ) {
    switch (atributo) {
      case "nombre":
        super.buscarNombre(orden);
        break;
      case "kilometros":
        super.buscarKilometros(orden, factor);
        break;
      default:
        break;
    }
    this.storeUsuarios();
    this.showUsuario();
  }
/** Muestra los usuarios */
  showUsuario() {
    this._listaElementos.forEach((item) =>
      console.log(
        item.id,
        item.nombre /*, item.estadisticasEntrenamiento.estadisticaSemanal[0], item.estadisticasEntrenamiento.estadisticaMensual[0], item.estadisticasEntrenamiento.estadisticaAnual[0]*/
      )
    );
  }

  private storeUsuarios() {
    this.database.set("usuario", [...this._listaElementos.values()]).write();
  }
}
