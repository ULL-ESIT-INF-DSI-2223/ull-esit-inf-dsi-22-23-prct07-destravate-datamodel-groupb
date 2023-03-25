export class Grupo {
    private _id: number;
    private _nombre: string;
    private _participantes: number[];
    // estadísticas grupal
    // clasificación usuarios
    // rutas favoritas del grupo
    // histórico rutas realizadas en conjunto

    constructor(id: number, nombre: string, participantes: number[]) {
        this._id = id;
        this._nombre = nombre;
        this._participantes = participantes;
        // El resto de cosas
    }

    get id(): number {
        return this._id;
    }

    set id(nuevo_id: number) {
        this._id = nuevo_id;
    }

    get nombre(): string {
        return this.nombre;
    }

    set nombre(nuevo_nombre: string) {
        this._nombre = nuevo_nombre;
    }

    get participantes(): number[] {
        return this._participantes;
    }

    set participantes(nuevos_participantes: number[]) {
        this._participantes = nuevos_participantes;
    }

    // Resto de getters y setters
}