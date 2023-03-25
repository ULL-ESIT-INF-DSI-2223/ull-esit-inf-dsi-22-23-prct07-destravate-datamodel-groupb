import { EstadisticasEntrenamiento } from "./estadisticas_entrenamiento";

/**
 * Tipo que representa al historial de rutas realizadas por un grupo.
 * Cada tupla contiene la fecha de realización, IDs de los usuarios e ID de ruta.
 */
export type historialRutasGrupal = [string, number[], number][];

/**
 * Clase que representa a un grupo.
 * Un grupo esta conformada por diversos usuarios que realizan actividades en conjunto.
 */
export class Grupo {
    private _id: number;
    private _nombre: string;
    private _participantes: number[];
    private _estadisticasGrupal: EstadisticasEntrenamiento;
    private _clasificacion: number[];
    private _rutasFavoritas: number[];
    private _historialRutas: historialRutasGrupal;

    /**
     * Constructor de clase.
     * @param id ID del grupo.
     * @param nombre Nombre del grupo.
     * @param participantes IDs de los participantes del grupo.
     * @param estadisticasGrupal Estadísticas grupales.
     * @param clasificacion Clasificación de usuarios.
     * @param rutasFavoritas Rutas favortias del grupo.
     * @param historialRutas Historial de rutas realizadas.
     */
    constructor(id: number, nombre: string, participantes: number[], estadisticasGrupal: EstadisticasEntrenamiento, clasificacion: number[], rutasFavoritas: number[], historialRutas: historialRutasGrupal) {
        this._id = id;
        this._nombre = nombre;
        this._participantes = participantes;
        this._estadisticasGrupal = estadisticasGrupal;
        this._clasificacion = clasificacion;
        this._rutasFavoritas = rutasFavoritas;
        this._historialRutas = historialRutas;
    }

    /** 
     * Devuelve el ID del grupo.
     * @returns ID del grupo.
    */
    get id(): number {
        return this._id;
    }

    /** 
     * Establece un nuevo ID del grupo.
     * @param nuevoId Nuevo ID del grupo.
    */
    set id(nuevoId: number) {
        this._id = nuevoId;
    }

    /** 
     * Devuelve el nombre del grupo.
     * @returns Nombre del grupo.
    */
    get nombre(): string {
        return this.nombre;
    }

    /** 
     * Establece un nuevo nombre del grupo.
     * @param nuevoNombre Nuevo nombre del grupo.
    */
    set nombre(nuevoNombre: string) {
        this._nombre = nuevoNombre;
    }

   /** 
     * Devuelve los ID de los participantes del grupo.
     * @returns ID de los participantes del grupo.
    */
    get participantes(): number[] {
        return this._participantes;
    }

    /** 
     * Establece una nueva lista de IDs de participantes del grupo.
     * @param nuevosParticipantes Nueva lista de IDs de participantes del grupo.
    */
    set participantes(nuevosParticipantes: number[]) {
        this._participantes = nuevosParticipantes;
    }

   /** 
     * Devuelve las estadísticas de entrenamiento del grupo.
     * @returns Estadísticas de entrenamiento del grupo.
    */
    get estadisticasGrupal(): EstadisticasEntrenamiento {
        return this._estadisticasGrupal;
    }

    /** 
     * Establece nuevas estadísticas del grupo.
     * @param nuevasEstadisticas Nuevas estadísticas del grupo.
    */
    set estadisticasGrupal(nuevasEstadisticas: EstadisticasEntrenamiento) {
        this._estadisticasGrupal = nuevasEstadisticas;
    }

   /** 
     * Devuelve la clasificacion de los usuarios del grupo.
     * @returns Clasificación de los usuarios del grupo.
    */
    get clasificacion(): number[] {
        return this._clasificacion;
    }

    /** 
     * Establece una nueva clasificación del grupo.
     * @param nuevaClasificacion Nueva clasificación del grupo.
    */
    set clasificacion(nuevaClasificacion: number[]) {
        this._clasificacion = nuevaClasificacion;
    }

   /** 
     * Devuelve las rutas favoritas del grupo.
     * @returns Rutas favoritas del grupo.
    */
    get rutasFavoritas(): number[] {
        return this._rutasFavoritas;
    }

    /** 
     * Establece nuevas rutas favoritas del grupo.
     * @param nuevasRutas Nuevas rutas favoritas del grupo.
    */
    set rutasFavoritas(nuevasRutas: number[]) {
        this._rutasFavoritas = nuevasRutas;
    }

   /** 
     * Devuelve el historial de rutas del grupo.
     * @returns Historial de rutas del grupo.
    */
    get historialRutas(): historialRutasGrupal {
        return this._historialRutas;
    }

    /** 
     * Establece un nuevo historial de rutas del grupo.
     * @param nuevoHistorial Nuevo historial de rutas del grupo.
    */
    set historialRutas(nuevoHistorial: historialRutasGrupal) {
        this._historialRutas = nuevoHistorial;
    }
}