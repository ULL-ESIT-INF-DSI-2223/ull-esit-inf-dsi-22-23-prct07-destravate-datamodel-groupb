import { Ruta } from "./rutas";

/**
 * Clase que representa a un reto. Un reto es un conjunto de rutas.
 */
export class Reto {
    private _id: number;
    private _nombre: string;
    private _rutas: Ruta[];
    private _tipo: "bicicleta" | "correr";
    private _kilometros = 0; // Kilómetros totales del reto
    private _usuarios: number[]; // Esto cambiar por la clase usuarios

    /**
     * Constructor de clase.
     * @param id Identificación único del reto.
     * @param nombre Nombre del reto.
     * @param rutas Rutas que componen el reto.
     * @param tipo Tipo de reto. Puede ser en bicicleta o correr.
     * @param usuarios Usuarios que realizan el reto.
     */
    constructor(id: number, nombre: string, rutas: Ruta[], tipo: "bicicleta" | "correr", usuarios: number[]) {
        this._id = id;
        this._nombre = nombre;
        this._rutas = rutas;
        this._tipo = tipo;
        this._rutas.forEach((ruta) => {
            this._kilometros += ruta.longitud;
        });
        this._usuarios = usuarios;
    }

    /**
     * Devuelve el Id de la ruta.
     * @returns Id de la ruta.
     */
    get id(): number {
        return this._id;
    }

    /**
     * Establece un nuevo Id de la ruta.
     * @param nuevo_id Nuevo Id de la ruta.
     */
    set id(nuevo_id: number) {
        this._id = nuevo_id;
    }

    /**
     * Devuelve el nombre de la ruta.
     * @returns Nombre de la ruta.
     */
    get nombre(): string {
        return this._nombre;
    }

    /**
     * Establece un nuevo nombre de ruta.
     * @param nuevo_nombre Nuevo nombre de ruta.
     */
    set nombre(nuevo_nombre: string) {
        this._nombre = nuevo_nombre;
    }

    /**
     * Devuelve el conjunto de rutas del reto.
     * @returns Conjunto de rutas del reto.
     */
    get rutas(): Ruta[] {
        return this._rutas;
    }

    /**
     * Establece un nuevo conjunto de rutas del reto.
     * @param nuevas_rutas Nuevo conjunto de rutas del reto.
     */
    set rutas(nuevas_rutas: Ruta[]) {
        this._rutas = nuevas_rutas;
        this._kilometros = 0;
        this._rutas.forEach((ruta) => {
            this._kilometros += ruta.longitud;
        });
    }

    /**
     * Devuelve el tipo de reto.
     * @returns Tipo de reto.
     */
    get tipo(): "bicicleta" | "correr" {
        return this._tipo;
    }

    /**
     * Establece un nuevo tipo de reto.
     * @param nuevo_tipo Nuevo tipo de reto.
     */
    set tipo(nuevo_tipo: "bicicleta" | "correr") {
        this._tipo = nuevo_tipo;
    }

    /**
     * Devuelve el numero de kilómetros totales del reto.
     * @returns Numero de kilómetros totales del reto.
     */
    get kilometros(): number {
        return this._kilometros;
    }

    /**
     * Devuelve la lista de usuarios que realizan el reto.
     * @returns Lista de usuarios que realizan el reto.
     */
    get usuarios(): number[] { // A cambiar cuando se implemente la clase usuarios
        return this._usuarios;
    }

    /**
     * Establece una nueva lista de usuarios que realizan el reto.
     * @param nuevos_usuarios Nueva lista de usuarios que realizan el reto.
     */
    set usuarios(nuevos_usuarios: number[]) { // A cambiar cuando se implemente la clase usuarios
        this._usuarios = nuevos_usuarios;
    }
}