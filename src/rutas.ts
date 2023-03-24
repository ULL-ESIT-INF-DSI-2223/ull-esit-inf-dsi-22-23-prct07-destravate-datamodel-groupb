import { Coordenadas } from "../src/coordenadas";
/**

    Clase que representa una ruta de actividad al aire libre.
    */
export class Ruta {
  private _id: number; // Identificador único de la ruta
  private _nombre: string; // Nombre de la ruta
  private _geolocalizacionInicio: Coordenadas; // Coordenadas de la ubicación de inicio de la ruta
  private _geolocalizacionFin: Coordenadas; // Coordenadas de la ubicación de fin de la ruta
  private _longitud: number; // Longitud de la ruta en metros
  private _desnivelMedio: number; // Desnivel medio de la ruta en metros
  private _usuarios: number[]; // Lista de identificadores de usuarios que han realizado la ruta
  private _tipoActividad: string; // Tipo de actividad de la ruta (senderismo, ciclismo, etc.)
  private _calificacionMedia: number; // Calificación media de la ruta por los usuarios que la han realizado

  /**

    Crea una instancia de la clase Ruta.
    @param id - Identificador único de la ruta.
    @param nombre - Nombre de la ruta.
    @param geolocalizacionInicio - Coordenadas de la ubicación de inicio de la ruta.
    @param geolocalizacionFin - Coordenadas de la ubicación de fin de la ruta.
    @param longitud - Longitud de la ruta en metros.
    @param desnivelMedio - Desnivel medio de la ruta en metros.
    @param usuarios - Lista de identificadores de usuarios que han realizado la ruta.
    @param tipoActividad - Tipo de actividad de la ruta (senderismo, ciclismo, etc.).
    @param calificacionMedia - Calificación media de la ruta por los usuarios que la han realizado.
    */
  constructor(
    id: number,
    nombre: string,
    geolocalizacionInicio: Coordenadas,
    geolocalizacionFin: Coordenadas,
    longitud: number,
    desnivelMedio: number,
    usuarios: number[],
    tipoActividad: string,
    calificacionMedia: number
  ) {
    this._id = id;
    this._nombre = nombre;
    this._geolocalizacionInicio = geolocalizacionInicio;
    this._geolocalizacionFin = geolocalizacionFin;
    this._longitud = longitud;
    this._desnivelMedio = desnivelMedio;
    this._usuarios = usuarios;
    this._tipoActividad = tipoActividad;
    this._calificacionMedia = calificacionMedia;
  }
  /**

    Devuelve el identificador único de la ruta.
    @returns Identificador único de la ruta.
    */
  get id(): number {
    return this._id;
  }
  /**

    Establece el identificador único de la ruta.
    @param id - Identificador único de la ruta.
    */
  set id(id: number) {
    this._id = id;
  }
  /**

    Devuelve el nombre de la ruta.
    @returns Nombre de la ruta.
    */
  get nombre(): string {
    return this._nombre;
  }
  /**

    Establece el nombre de la ruta.
    @param nombre - Nombre de la ruta.
    */
  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get geolocalizacionInicio(): Coordenadas {
    return this._geolocalizacionInicio;
  }

  set geolocalizacionInicio(geolocalizacionInicio: Coordenadas) {
    this._geolocalizacionInicio = geolocalizacionInicio;
  }

  get geolocalizacionFin(): Coordenadas {
    return this._geolocalizacionFin;
  }

  set geolocalizacionFin(geolocalizacionFin: Coordenadas) {
    this._geolocalizacionFin = geolocalizacionFin;
  }

  get longitud(): number {
    return this._longitud;
  }

  set longitud(longitud: number) {
    this._longitud = longitud;
  }

  get desnivelMedio(): number {
    return this._desnivelMedio;
  }

  set desnivelMedio(desnivelMedio: number) {
    this._desnivelMedio = desnivelMedio;
  }

  get usuarios(): number[] {
    return this._usuarios;
  }

  set usuarios(usuarios: number[]) {
    this._usuarios = usuarios;
  }

  get tipoActividad(): string {
    return this._tipoActividad;
  }

  set tipoActividad(tipoActividad: string) {
    this._tipoActividad = tipoActividad;
  }

  get calificacionMedia(): number {
    return this._calificacionMedia;
  }

  set calificacionMedia(calificacionMedia: number) {
    this._calificacionMedia = calificacionMedia;
  }
}
