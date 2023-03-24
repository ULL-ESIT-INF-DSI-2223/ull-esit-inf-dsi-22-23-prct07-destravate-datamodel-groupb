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
  private _tipoActividad: "bicicleta" | "correr"; // Tipo de actividad de la ruta (bicicleta o corriendo)
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
  constructor(id: number, nombre: string, geolocalizacionInicio: Coordenadas, geolocalizacionFin: Coordenadas, 
    longitud: number, desnivelMedio: number, usuarios: number[], tipoActividad: "bicicleta" | "correr", 
    calificacionMedia: number) {
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
    @param id Identificador único de la ruta.
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

  /** 
   * Devuelve la geolocalización de inicio.
   * @returns Geolocalización de inicio.
  */
  get geolocalizacionInicio(): Coordenadas {
    return this._geolocalizacionInicio;
  }

  /** 
   * Establece una nueva geolocalización de inicio.
   * @param geolocalizacionInicio Nueva geolocalización de inicio.
  */
  set geolocalizacionInicio(geolocalizacionInicio: Coordenadas) {
    this._geolocalizacionInicio = geolocalizacionInicio;
  }

  /** 
   * Devuelve la geolocalización de final.
   * @returns Geolocalización de final.
  */
  get geolocalizacionFin(): Coordenadas {
    return this._geolocalizacionFin;
  }

  /** 
   * Establece una nueva geolocalización de final.
   * @param geolocalizacionInicio Nueva geolocalización de final.
  */
  set geolocalizacionFin(geolocalizacionFin: Coordenadas) {
    this._geolocalizacionFin = geolocalizacionFin;
  }

  /** 
   * Devuelve la longitud de la ruta.
   * @returns Longitud de la ruta.
  */
  get longitud(): number {
    return this._longitud;
  }

  /** 
   * Establece una nueva longitud de la ruta.
   * @param geolocalizacionInicio Nueva longitud de la ruta.
  */
  set longitud(longitud: number) {
    this._longitud = longitud;
  }

  /** 
   * Devuelve el desnivel medio.
   * @returns Desnivel medio.
  */
  get desnivelMedio(): number {
    return this._desnivelMedio;
  }

  /** 
   * Establece el nuevo desnivel medio.
   * @param geolocalizacionInicio Nuevo desnivel medio.
  */
  set desnivelMedio(desnivelMedio: number) {
    this._desnivelMedio = desnivelMedio;
  }

  /** 
   * Devuelve los usuarios que realizan la ruta.
   * @returns Usuarios que realizan la ruta.
  */
  get usuarios(): number[] {
    return this._usuarios;
  }

  /** 
   * Establece una nueva lista de usuarios que realizan la ruta.
   * @param geolocalizacionInicio Nueva lista de usuarios que realizan la ruta.
  */
  set usuarios(usuarios: number[]) {
    this._usuarios = usuarios;
  }

  /** 
   * Devuelve el tipo de actividad.
   * @returns Tipo de actividad.
  */
  get tipoActividad(): "bicicleta" | "correr" {
    return this._tipoActividad;
  }

  /** 
   * Establece el nuevo tipo de actividad.
   * @param geolocalizacionInicio Nuevo tipo de actividad.
  */
  set tipoActividad(tipoActividad: "bicicleta" | "correr") {
    this._tipoActividad = tipoActividad;
  }

  /** 
   * Devuelve la calificación media de la ruta.
   * @returns Calificación media de la ruta.
  */
  get calificacionMedia(): number {
    return this._calificacionMedia;
  }

  /** 
   * Establece una nueva calificación media de la ruta.
   * @param geolocalizacionInicio Nueva calificación media de la ruta.
  */
  set calificacionMedia(calificacionMedia: number) {
    this._calificacionMedia = calificacionMedia;
  }
}
