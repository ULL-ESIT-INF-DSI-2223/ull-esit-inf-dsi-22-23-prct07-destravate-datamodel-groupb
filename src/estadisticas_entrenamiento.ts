/**
 * Clase que representa a las estadísticas de entrenamiento por semana, mes y año.
 * Almacena los km recorridos y el desnivel total acumulado.
 */
export class EstadisticasEntrenamiento {
    private _estadisticaSemanal: [number, number];
    private _estadisticaMensual: [number, number];
    private _estadisticaAnual: [number, number];

    /**
     * Constructor de clase.
     * @param estadistcaSemanal Estadística referente a la semana. 
     * @param estadisticaMensual Estadística referente al mes. 
     * @param estadisticaAnual Estadística referente al año. 
     */
    constructor(estadistcaSemanal: [number, number], estadisticaMensual: [number, number], estadisticaAnual: [number, number]) {
        this._estadisticaSemanal = estadistcaSemanal;
        this._estadisticaMensual = estadisticaMensual;
        this._estadisticaAnual = estadisticaAnual;
    }

    /** 
     * Devuelve la estadística semanal.
     * @returns Estadística semanal.
    */
    get estadisticaSemanal(): [number, number] {
        return this._estadisticaSemanal;
    }

    /** 
     * Establece la estadística semanal.
     * @returns Estadística semanal.
    */
    set estadisticaSemanal(nuevaSemanal: [number, number]) {
        this._estadisticaSemanal = nuevaSemanal;
    }

    /** 
     * Devuelve la estadística mensual.
     * @returns Estadística mensual.
    */
    get estadisticaMensual(): [number, number] {
        return this._estadisticaMensual;
    }

    /** 
     * Establece la estadística mensual.
     * @returns Estadística mensual.
    */
    set estadisticaMensual(nuevaMensual: [number, number]) {
        this._estadisticaMensual = nuevaMensual;
    }

    /** 
     * Devuelve la estadística anual.
     * @returns Estadística anual.
    */
    get estadisticaAnual(): [number, number] {
        return this._estadisticaAnual;
    }

    /** 
     * Establece la estadística anual.
     * @returns Estadística anual.
    */
    set estadisticaAnual(nuevaAnual: [number, number]) {
        this._estadisticaAnual = nuevaAnual;
    }
}