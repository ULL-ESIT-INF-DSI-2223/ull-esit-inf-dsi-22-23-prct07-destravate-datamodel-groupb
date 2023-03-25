export class EstadisticasEntrenamiento {
    private _estadisticaSemanal: [number, number];
    private _estadisticaMensual: [number, number];
    private _estadisticaAnual: [number, number];

    constructor(estadistcaSemanal: [number, number], estadisticaMensual: [number, number], estadisticaAnual: [number, number]) {
        this._estadisticaSemanal = estadistcaSemanal;
        this._estadisticaMensual = estadisticaMensual;
        this._estadisticaAnual = estadisticaAnual;
    }

    get estadisticaSemanal(): [number, number] {
        return this._estadisticaSemanal;
    }

    set estadisticaSemanal(nuevaSemanal: [number, number]) {
        this._estadisticaSemanal = nuevaSemanal;
    }

    get estadisticaMensual(): [number, number] {
        return this._estadisticaMensual;
    }

    set estadisticaMensual(nuevaMensual: [number, number]) {
        this._estadisticaMensual = nuevaMensual;
    }

    get estadisticaAnual(): [number, number] {
        return this._estadisticaAnual;
    }

    set estadisticaAnual(nuevaAnual: [number, number]) {
        this._estadisticaAnual = nuevaAnual;
    }
}