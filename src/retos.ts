import { Ruta } from "./rutas";
import { Usuario } from "./usuario";


/**
 * Clase que representa a un reto. Un reto es un conjunto de rutas.
 */
export class Reto {
    private _id: number;
    private _nombre: string;
    private _rutas: Ruta[];
    private _tipo: "bicicleta" | "correr";
    private _kilometros = 0; // Kilómetros totales del reto
    private _usuarios: Usuario[];

    /**
     * Constructor de clase.
     * @param id Identificación único del reto.
     * @param nombre Nombre del reto.
     * @param rutas Rutas que componen el reto.
     * @param tipo Tipo de reto. Puede ser en bicicleta o correr.
     * @param usuarios Id de los usuarios que realizan el reto.
     */
    constructor(id: number, nombre: string, rutas: Ruta[], tipo: "bicicleta" | "correr", usuarios: Usuario[]) {
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
     * @param nuevoId Nuevo Id de la ruta.
     */
    set id(nuevoId: number) {
        this._id = nuevoId;
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
     * @param nuevoNombre Nuevo nombre de ruta.
     */
    set nombre(nuevoNombre: string) {
        this._nombre = nuevoNombre;
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
     * @param nuevasRutas Nuevo conjunto de rutas del reto.
     */
    set rutas(nuevasRutas: Ruta[]) {
        this._rutas = nuevasRutas;
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
    set tipo(nuevoTipo: "bicicleta" | "correr") {
        this._tipo = nuevoTipo;
    }

    /**
     * Devuelve el numero de kilómetros totales del reto.
     * @returns Numero de kilómetros totales del reto.
     */
    get kilometros(): number {
        return this._kilometros;
    }

    /**
     * metodo para cambiar la cantidad de kilometros
     */
    set kilometos(kilometros: number){
        this._kilometros = kilometros
    }

    /**
     * Devuelve la lista de usuarios que realizan el reto.
     * @returns Lista de usuarios que realizan el reto.
     */
    get usuarios(): Usuario[] {
        return this._usuarios;
    }

    /**
     * Establece una nueva lista de usuarios que realizan el reto.
     * @param nuevos_usuarios Nueva lista de usuarios que realizan el reto.
     */
    set usuarios(nuevosUsuarios: Usuario[]) {
        this._usuarios = nuevosUsuarios;
    }
}