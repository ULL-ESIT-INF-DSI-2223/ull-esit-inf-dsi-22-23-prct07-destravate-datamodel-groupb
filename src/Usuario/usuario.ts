import { Ruta } from "../Ruta/rutas";
import { Reto } from "../Reto/retos";
import { Grupo } from "../Grupo/grupos";
import { EstadisticasEntrenamiento } from "./estadisticas_entrenamiento";
import { coleccionUsuarios } from ".."

export type HistorialRutas = [string, Ruta][];
/**
 * Clase para la creación de usuarios
 */
export class Usuario {
  private _id: number;
  private _nombre: string;
  private _tipoActividad: "bicicleta" | "correr";
  private _amigos: Usuario[];
  private _grupos: Grupo[];
  private _estadisticasEntrenamiento: EstadisticasEntrenamiento;
  private _rutasFavoritas: Ruta[];
  private _retosActivos: Reto[];
  private _historialRutas: HistorialRutas;

  /**
   * constructor de la clase Usuario
   * @param nombre nombre del usuario
   * @param tipoActividad el tipo de la actividad que realiza el usuario, puede ser "bicicleta" o "paseo"
   * @param amigos array con los id de los usuarios agregados como amigos
   * @param grupos agrupaciones de IDs de usuarios
   * @param estadisticasEntrenamiento estadisticas de entrenamiento
   * @param rutas ids de las rutas favoritas del usuario
   * @param retos ids de los retos activos del usuario
   * @param id id del usuario, si no se proporciona uno, se generará automaticamente
   */
  constructor(
    nombre: string,
    tipoActividad: "bicicleta" | "correr",
    amigos: Usuario[],
    grupos: Grupo[],
    estadisticasEntrenamiento: EstadisticasEntrenamiento,
    rutas: Ruta[],
    retos: Reto[],
    historialRutas: HistorialRutas,
    id = -1
  ) {
    this._nombre = nombre;
    this._tipoActividad = tipoActividad;
    this._amigos = amigos;
    this._grupos = grupos;
    this._estadisticasEntrenamiento = estadisticasEntrenamiento;
    this._rutasFavoritas = rutas;
    this._retosActivos = retos;
    this._historialRutas = historialRutas;
    id > 0 ? (this._id = id) : (this._id = this.getRandomArbitrary(0, 50));
  }
  /**
   * metodo para generar un id
   * @param min valor minimio que puede adquirir un id
   * @param max valor maximo que puede adquirir un id
   * @returns numero aleatorio generado dentro del rango de valores
   */
  getRandomArbitrary(min: number, max: number) {
    return Math.trunc(Math.random() * (max - min) + min);
  }

  /**
   * Devuelve el ID del usuario.
   */
  get id(): number {
    return this._id;
  }

  /**
   * getter para obtener el nombre del usuario
   * @returns nombre del usuario
   */
  get nombre(): string {
    return this._nombre;
  }

  getNombre(): string {
    return this._nombre;
  }
  /**
   * metodo para cambiar el nombre del usuario
   * @param nombre nuevo nombre del usuario
   */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  /**
   * metodo para obtner el tipo de actividad del usuario
   * @returns el tipo de actividad
   */
  get tipoActividad(): "bicicleta" | "correr" {
    return this._tipoActividad;
  }

  /**
   * metood para cambiar el tipo de actividad del usuario
   * @param tipoActividad el nuevo tipo de actividad del usuario
   */
  set tipoActividad(tipoActividad: "bicicleta" | "correr") {
    this._tipoActividad = tipoActividad;
  }

  /**
   * metodo para obtener los ids de los amigos del usuario
   * @returns array de ids de los amigos del usuario
   */
  get amigos(): Usuario[] {
    return this._amigos;
  }

  /**
   * metodo para definir los amigos del usuario
   */
  set amigos(amigos: Usuario[]) {
    this._amigos = amigos;
  }

  /**
   * metodo para añadir un amigo a la lista
   * @param amigo id del amigo  añadir
   * @returns true si lo ha añadido, false si no lo ha añadido
   */
  addAmigo(amigo: Usuario): boolean {
    const index = this.amigos.indexOf(amigo);
    if (index == -1) {
      this._amigos.push(amigo);
      return true;
    } else {
      console.log("Ruta ya existente");
      return false;
    }
  }

  /**
   * metodo para eliminar un amigo de la lista
   * @param amigo id del amigo
   * @returns true si lo ha eliminado, false si no lo ah eliminado
   */
  deleteAmigo(amigo: Usuario): boolean {
    const index = this.amigos.indexOf(amigo);
    if (index != -1) {
      this._amigos.splice(index, 1);
      return true;
    } else {
      console.log("Ruta no existente en la colecion");
      return false;
    }
  }
  /**
   * metodo par obtener los grupos de amigos del usuario
   * @returns grupos de maigos del usuario
   */
  get grupos(): Grupo[] {
    return this._grupos;
  }
  /**
   * metodo para definir los grupos de amigos del usuario
   * @param grupos nuvos grupos del usuario
   */
  set grupos(grupos: Grupo[]) {
    this._grupos = grupos;
  }

  /**
   * metodo para añadir un grupo de amigos al usuario
   * @param grupo grupo a añadir
   * @returns false si el grupo ya existe, true si lo añadió
   * esta funcion no funciona correcta mente hasta que se implemente la clase grupo
   */
  addGrupo(grupo: Grupo): boolean {
    const index = this.grupos.indexOf(grupo);
    if (index == -1) {
      this._grupos.push(grupo);
      return true;
    } else {
      console.log("Grupo ya existente");
      return false;
    }
  }

  /**
   * metodo para eliminar un grupo del usuario
   * @param grupo grupo a eliminar
   * @returns false si no existe el grupo, true si lo elimina
   * metodo no funciona correcto hasta que se implemente clase grupo
   */
  deleteGrupo(grupo: Grupo): boolean {
    const index = this.grupos.indexOf(grupo);
    if (index != -1) {
      this._grupos.splice(index, 1);
      return true;
    } else {
      console.log("Grupo no existente en la colecion");
      return false;
    }
  }

  /**
   * Devuelve las estadísticas de entrenamiento.
   */
  get estadisticasEntrenamiento(): EstadisticasEntrenamiento {
    return this._estadisticasEntrenamiento;
  }

  /**
   * Establece nuevas estadísticas de entrenamiento.
   */
  set estadisticasEntrenamiento(nuevasEstadisticas: EstadisticasEntrenamiento) {
    this._estadisticasEntrenamiento = nuevasEstadisticas;
  }

  /**
   * metodo para obtener las rutas de un usuario
   * @returns rutas favoritas del usuario
   */
  get rutas(): Ruta[] {
    return this._rutasFavoritas;
  }

  /**
   * metodo para definir las rutas de un usuario
   * @param nuevas rutas favoritas del usuario
   */
  set rutas(rutas: Ruta[]) {
    this._rutasFavoritas = rutas;
  }

  /**
   * metodo para añadir una ruta a la lista de rutas favoritas de un usuario
   * @param ruta id de la ruta a añadir en el array
   * @returns false si no ha podido añadir la ruta a la lista o true si ah conseguido añadirla
   */
  addRuta(ruta: Ruta): boolean {
    const index = this.rutas.indexOf(ruta);
    if (index == -1) {
      this._rutasFavoritas.push(ruta);
      return true;
    } else {
      console.log("Ruta ya existente");
      return false;
    }
  }

  /**
   * metodo para eliminar una ruta de la lista de favoritos de un usuario
   * @param ruta id de la ruta a eliminar
   * @returns true si la ha eliminado o false si no la eliminó
   */
  deleteRuta(ruta: Ruta): boolean {
    const index = this.rutas.indexOf(ruta);
    if (index != -1) {
      this.rutas.splice(index, 1);
      return true;
    } else {
      console.log("Ruta no existente en la colecion");
      return false;
    }
  }

  /**
   * metodo para obtener los retos activos del usuario
   * @returns array de los ids de los retos que estés activos
   */
  get retos(): Reto[] {
    return this._retosActivos;
  }

  /**
   * metodo apra defnir los retos activos del usuario
   * @param retos nuevos retos del usuario
   */
  set retos(retos: Reto[]) {
    this._retosActivos = retos;
  }

  /**
   * metodo para añadir un reto a la lista
   * @param reto  id del reto a añadir
   * @returns true si lo añadió correctamente y false si no
   */
  addReto(reto: Reto): boolean {
    const index = this.retos.indexOf(reto);
    if (index == -1) {
      this._retosActivos.push(reto);
      return true;
    } else {
      console.log("Reto ya existente");
      return false;
    }
  }

  /**
   * metodo para eliminar un reto de la lista de retos activos
   * @param reto id del reto a eliminar
   * @returns true si lo eliminó o false si no lo eliminó
   */
  deleteReto(reto: Reto): boolean {
    const index = this.retos.indexOf(reto);
    if (index != -1) {
      this.retos.splice(index, 1);
      return true;
    } else {
      console.log("Reto no existente en la colecion");
      return false;
    }
  }

  /**
   * Devuelve el historial de rutas del usuario.
   */
  get historialRutas(): HistorialRutas {
    return this._historialRutas;
  }

  /**
   * Establece el historial de rutas del usuario.
   */
  set historialRutas(nuevoHistorial: HistorialRutas) {
    this._historialRutas = nuevoHistorial;
  }
}
