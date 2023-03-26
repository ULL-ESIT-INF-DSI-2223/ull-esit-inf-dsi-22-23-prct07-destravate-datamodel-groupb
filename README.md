# Informe Práctica 7 
[![Tests](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-groupb/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-groupb/actions/workflows/node.js.yml) [![Coveralls](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-groupb/actions/workflows/coveralls.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-groupb/actions/workflows/coveralls.yml) [![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-groupb/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-groupb?branch=main)

## Grupo B
  - Juan Carlos Rey Medina
    - alu0101410869
  - Cristopher Alexandro Medina Peschiutta
    - alu0101333281
  - Ancor González Carballo
    - alu0101327679

## Introducción

## Tareas Previas

## Proyecto

### Clase Ruta

El codigo de esta clase es:

```ts
export class Ruta {
  private _id: number; // Identificador único de la ruta
  private _nombre: string; // Nombre de la ruta
  private _geolocalizacionInicio: Coordenadas; // Coordenadas de la ubicación de inicio de la ruta
  private _geolocalizacionFin: Coordenadas; // Coordenadas de la ubicación de fin de la ruta
  private _longitud: number; // Longitud de la ruta en metros
  private _desnivelMedio: number; // Desnivel medio de la ruta en metros
  private _usuarios: Usuario[]; // Lista de identificadores de usuarios que han realizado la ruta
  private _tipoActividad: "bicicleta" | "correr"; // Tipo de actividad de la ruta (bicicleta o corriendo)
  private _calificacionMedia: number; // Calificación media de la ruta por los usuarios que la han realizado

  constructor(
    id: number,
    nombre: string,
    geolocalizacionInicio: Coordenadas,
    geolocalizacionFin: Coordenadas,
    longitud: number,
    desnivelMedio: number,
    usuarios: Usuario[],
    tipoActividad: "bicicleta" | "correr",
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

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get nombre(): string {
    return this._nombre;
  }
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

  get usuarios(): Usuario[] {
    return this._usuarios;
  }

  set usuarios(usuarios: Usuario[]) {
    this._usuarios = usuarios;
  }

  get tipoActividad(): "bicicleta" | "correr" {
    return this._tipoActividad;
  }

  set tipoActividad(tipoActividad: "bicicleta" | "correr") {
    this._tipoActividad = tipoActividad;
  }

  get calificacionMedia(): number {
    return this._calificacionMedia;
  }

  set calificacionMedia(calificacionMedia: number) {
    this._calificacionMedia = calificacionMedia;
  }
}

```

Este código define una clase llamada "Ruta" que representa una ruta de actividad al aire libre. La clase tiene propiedades como un identificador único, nombre de la ruta, coordenadas de inicio y fin de la ruta, longitud, desnivel medio, una lista de usuarios que han realizado la ruta, tipo de actividad (bicicleta o correr) y la calificación media de la ruta.

La clase tiene un constructor que inicializa estas propiedades cuando se crea una nueva instancia de la clase. También hay métodos "get" y "set" para cada propiedad que permiten obtener y establecer sus valores. Por ejemplo, el método "getId()" devuelve el identificador único de la ruta, mientras que el método "setId()" establece un nuevo identificador único para la ruta.

La clase depende de otras dos clases llamadas "Coordenadas" y "Usuario". La clase "Coordenadas" representa un par de coordenadas de longitud y latitud, y la clase "Usuario" representa a un usuario que ha realizado la ruta. Estas dos clases se importan al principio del archivo usando la sintaxis de importación de módulos de TypeScript.

### Clase Coordenadas
El codigo de esta clase es:

```ts
export class Coordenadas {
  private _latitud: number;
  private _longitud: number;
  private _altitud: number;

  constructor(latitud: number, longitud: number, altitud: number) {
    this._latitud = latitud;
    this._longitud = longitud;
    this._altitud = altitud;
  }

  get latitud(): number {
    return this._latitud;
  }

  set latitud(latitud: number) {
    this._latitud = latitud;
  }

  get longitud(): number {
    return this._longitud;
  }

  set longitud(longitud: number) {
    this._longitud = longitud;
  }

  get altitud(): number {
    return this._altitud;
  }

  set altitud(altitud: number) {
    this._altitud = altitud;
  }
}

```

Este código define una clase llamada Coordenadas que representa las coordenadas geográficas de un punto en la Tierra, utilizando las propiedades de latitud, longitud y altitud.

El constructor de la clase Coordenadas recibe tres parámetros: latitud, longitud y altitud, y se utiliza para inicializar las variables privadas de la clase _latitud, _longitud y _altitud.

La clase también tiene cuatro métodos que permiten obtener y establecer los valores de latitud, longitud y altitud de un objeto Coordenadas. Los métodos de acceso get y set se utilizan para acceder a las variables privadas _latitud, _longitud y _altitud, respectivamente.

En resumen, este código define una clase útil para representar y manipular coordenadas geográficas de un punto en la Tierra.

### Clase ColeccionRutas

El codigo de esta clase es:

```ts
import { Coleccion } from "../coleccion";
import { Ruta } from "./rutas";

/**
 * Clase que representa a una colección de rutas.
 */
export class ColeccionRutas implements Coleccion<Ruta> {
  _listaElementos: Ruta[];

  /**
   * Constructor de clase.
   * @param listaElementos Lista de elementos de la colección.
   */
  constructor(listaElementos: Ruta[]) {
    this._listaElementos = listaElementos;
  }

  /**
   * Devuelve la lista de rutas del sistema.
   * @returns Lista de rutas.
   */
  get listaRutas(): Ruta[] {
    return this._listaElementos;
  }

  /**
   * Añade un nuevo elemento a la colección.
   * @param item Elemento a añadir.
   */
  add(item: Ruta): void {
    this._listaElementos.push(item);
  }

  /**
   * Elimina un elemento de la colección.
   * @param index índice del elemento a eliminar.
   */
  remove(index: number): void {
    this._listaElementos.splice(index, 1);
  }

  /**
   * Modifica un elemento de la colección.
   * @param index índice del elemento a modificar.
   * @param item Elemento con nuevas características.
   */
  modify(index: number, item: Ruta): void {
    this._listaElementos[index] = item;
  }

  /**
   * Ordena los elementos de la colección según su nombre.
   * @param orden Orden ascendente o descendente.
   */
  buscarNombre(orden: "asc" | "desc") {
    this._listaElementos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    if (orden == "desc") {
      this._listaElementos.reverse();
    }
  }

  /**
   * Ordena los elementos de la colección según la cantidad de usuarios.
   * @param orden Orden ascendente o descendente.
   */
  buscarCantidadUsuarios(orden: "asc" | "desc") {
    this._listaElementos.sort((a, b) => a.usuarios.length - b.usuarios.length);
    if (orden == "desc") {
      this._listaElementos.reverse();
    }
  }

  /**
   * Ordena los elementos de la colección según la longitud.
   * @param orden Orden ascendente o descendente.
   */
  buscarLongitud(orden: "asc" | "desc") {
    this._listaElementos.sort((a, b) => a.longitud - b.longitud);
    if (orden == "desc") {
      this._listaElementos.reverse();
    }
  }

  /**
   * Ordena los elementos de la colección según la calificación media.
   * @param orden Orden ascendente o descendente.
   */
  buscarCalificacion(orden: "asc" | "desc") {
    this._listaElementos.sort(
      (a, b) => a.calificacionMedia - b.calificacionMedia
    );
    if (orden == "desc") {
      this._listaElementos.reverse();
    }
  }

  /**
   * Ordena los elementos de la colección según el tipo de actividad.
   * @param orden Orden ascendente o descendente.
   */
  buscarTipoActividad(orden: "asc" | "desc") {
    this._listaElementos.sort((a, b) =>
      a.tipoActividad.localeCompare(b.tipoActividad)
    );
    if (orden == "desc") {
      this._listaElementos.reverse();
    }
  }
}
```

Esta clase implementa la interfaz genérica Coleccion y se especializa para manejar objetos de tipo Ruta.

La clase ColeccionRutas tiene una propiedad privada _listaElementos, que es un arreglo de objetos de tipo Ruta. El constructor de la clase toma una lista de objetos Ruta y la asigna a la propiedad privada _listaElementos.

La clase tiene cinco métodos que permiten agregar, eliminar y modificar elementos en la lista de Ruta. También proporciona cinco métodos para buscar y ordenar elementos de la lista en función de diferentes criterios, como el nombre, la cantidad de usuarios, la longitud, la calificación media y el tipo de actividad.

En resumen, esta clase representa una colección de objetos Ruta y proporciona métodos útiles para manipular y buscar elementos en la lista.


### Clase JsonColeccionRutas
El codigo de esta clase es:

```ts
import { ColeccionRutas } from "./coleccion_rutas";
import { Coordenadas } from "./coordenadas";
import { Usuario } from "../Usuario/usuario";
import { Ruta } from "./rutas";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";


type SchemaType = {
    ruta: { _id: number,
            _nombre: string,
            _geolocalizacionInicio: Coordenadas,
            _geolocalizacionFin: Coordenadas,
            _longitud: number,
            _desnivelMedio: number,
            _usuarios: Usuario[],
            _tipoActividad: "bicicleta" | "correr",
            _calificacionMedia: number }[]
}

export class JsonColeccionRutas extends ColeccionRutas {
    private database: lowdb.LowdbSync<SchemaType>;

    constructor(listaRutas: Ruta[]) {
        super([]);
        this.database = lowdb(new FileSync("./Rutas.json"));
        if(this.database.has("ruta").value()) {
            const dbItems = this.database.get("ruta").value();
            dbItems.forEach(item => this._listaElementos.push(new Ruta(item._id, item._nombre, 
                item._geolocalizacionInicio, item._geolocalizacionFin, item._longitud, item._desnivelMedio, 
                item._usuarios, item._tipoActividad, item._calificacionMedia)));
        } else {
            this.database.set("ruta", listaRutas).write();
            listaRutas.forEach(item => this._listaElementos.push(item));
        }
    }

    addRuta(ruta: Ruta) {
        super.add(ruta);
        this.storeRutas();
    }

    removeRuta(index: number) {
        super.remove(index);
        this.storeRutas();
    }

    modifyRuta(index: number, item: Ruta) {
        super.modify(index, item);
        this.storeRutas();
    }

    buscarRuta(atributo: string, orden: "asc" | "desc") {
        switch (atributo) {
            case "nombre":
                super.buscarNombre(orden);
                break;
            case "cantidad":
                super.buscarCantidadUsuarios(orden);
                break;
            case "longitud":
                super.buscarLongitud(orden);
                break;
            case "calificacion":
                super.buscarCalificacion(orden);
                break;
            case "tipo":
                super.buscarTipoActividad(orden);
                break;
            default:
                break;
        }
        this.storeRutas();
        this.showRuta();
    }

    showRuta() {
        this._listaElementos.forEach((item) => console.log(item.id, item.nombre, 
            item.longitud, item.desnivelMedio, item.tipoActividad, item.calificacionMedia));
    }

    private storeRutas() {
        this.database.set("ruta", [...this._listaElementos.values()]).write();
    }
}
```
Este código es una clase llamada JsonColeccionRutas que extiende de una clase llamada ColeccionRutas. La clase JsonColeccionRutas utiliza la librería lowdb para almacenar la lista de rutas en un archivo JSON.

La clase tiene un constructor que recibe una lista de objetos Ruta. Si la base de datos ya tiene una lista de rutas almacenada, se recuperan los datos y se convierten en objetos Ruta. Si no hay una lista en la base de datos, se almacena la lista pasada como parámetro.

La clase tiene métodos para agregar, eliminar y modificar rutas en la lista. También tiene un método para buscar rutas por diferentes atributos y ordenarlas según se desee. También hay un método para mostrar todas las rutas en la lista.

La clase tiene un método privado llamado storeRutas que escribe la lista de rutas en la base de datos JSON.

### Fichero prompt_ruta
El codigo de esta clase es:

```ts
import { Ruta } from "./rutas";
import { Usuario } from "../Usuario/usuario";
import { Coordenadas } from "./coordenadas";
import { ColeccionRutas } from "./coleccion_rutas";
import { mainPrompt } from "../main";
import { coleccionGrupos, coleccionRetos, coleccionRutas, coleccionUsuarios } from "..";
import * as inquirer from "inquirer";

enum Comandos {
    Añadir = "Añadir ruta",
    Eliminar = "Eliminar ruta",
    Modificar = "Modificar ruta",
    Ordenar = "Ordenar lista",
    Salir = "Salir al menú principal"
}

export async function promptAdd() {
    console.clear();
    coleccionRutas.showRuta();
    const datos = await inquirer.prompt([
    {
        type: "input",
        name: "addId",
        message: "Inserte el ID de ruta: ",
    },
    {
        type: "input",
        name: "addNombre",
        message: "Inserte el nombre: ",
    },
    {
        type: "input",
        name: "addGeolocInicio",
        message: "Inserte la geolocalización de inicio (latitud, longitud, altitud): ",
    },
    {
        type: "input",
        name: "addGeolocFin",
        message: "Inserte la geolocalización final (latitud, longitud, altitud): ",
    },
    {
        type: "input",
        name: "addLongitud",
        message: "Inserte la longitud: ",
    },
    {
        type: "input",
        name: "addDesnivel",
        message: "Inserte el desnivel medio: ",
    },
    {
        type: "input",
        name: "addUsuarios",
        message: "Inserte los id de los usuarios: ",
    },
    {
        type: "input",
        name: "addActividad",
        message: "Inserte el tipo de actividad (correr o bicicleta): ",
    },
    {
        type: "input",
        name: "addCalificacion",
        message: "Inserte la calificacion media: ",
    }]);

    const id = Number(datos["addId"]);
    const nombre: string = datos["addNombre"];
    const geolocI: Coordenadas = datos["addGeolocInicio"].split(',').map(Number);
    const geolocF: Coordenadas = datos["addGeolocFin"].split(',').map(Number);
    const longitud = Number(datos["addLongitud"]);
    const desnivel = Number(datos["addDesnivel"]);
    // Añadir usuarios
    const usuarios: Usuario[] = [];
    const id_usuarios: number[] = datos["addUsuarios"].split(',').map(Number);
    id_usuarios.forEach((id) => coleccionUsuarios._listaElementos.forEach(item => {
        if(item.id == id) {
            usuarios.push(item);
        }
    }));
    const actividad: string = datos["addActividad"];
    const calificacion = Number(datos["addCalificacion"]);

    if(actividad == "bicicleta" || actividad == "correr") {
        coleccionRutas.addRuta(new Ruta(id, nombre, geolocI, geolocF, longitud, desnivel, usuarios, actividad, calificacion));
        console.log("Ruta creada.");
        promptRutas()
    } else {
        console.log("ERROR: Datos no correctos.");
        promptRutas();
    }
}

export async function promptRemove() {
    console.clear();
    coleccionRutas.showRuta();
    const dato = await inquirer.prompt({
        type: "input",
        name: "addIndex",
        message: "Inserte el índice del elemento: "
    });
    if(Number(dato["addIndex"]) < coleccionRutas._listaElementos.length) {
        coleccionRutas.removeRuta(Number(dato["addIndex"]));
        console.log("Ruta eliminada.");
        promptRutas();
    } else {
        console.log("ERROR: índice fuera de los límites.");
        promptRutas();
    }
}

export async function promptModify() {
    console.clear();
    coleccionRutas.showRuta();
    const datos = await inquirer.prompt([
    {
        type: "input",
        name: "addId",
        message: "Inserte el ID de ruta: ",
    },
    {
        type: "input",
        name: "addNombre",
        message: "Inserte el nombre: ",
    },
    {
        type: "input",
        name: "addGeolocInicio",
        message: "Inserte la geolocalización de inicio: ",
    },
    {
        type: "input",
        name: "addGeolocFin",
        message: "Inserte la geolocalización final: ",
    },
    {
        type: "input",
        name: "addLongitud",
        message: "Inserte la longitud: ",
    },
    {
        type: "input",
        name: "addDesnivel",
        message: "Inserte el desnivel medio: ",
    },
    {
        type: "input",
        name: "addUsuarios",
        message: "Inserte los id de los usuarios: ",
    },
    {
        type: "input",
        name: "addActividad",
        message: "Inserte el tipo de actividad (correr o bicicleta): ",
    },
    {
        type: "input",
        name: "addCalificacion",
        message: "Inserte la calificacion media: ",
    },
    {
        type: "input",
        name: "addIndice",
        message: "Inserte el indice del elemento: ",
    }]);

    const id = Number(datos["addId"]);
    const nombre: string = datos["addNombre"];
    const geolocI: Coordenadas = datos["addGeolocInicio"].split(',').map(Number);
    const geolocF: Coordenadas = datos["addGeolocFin"].split(',').map(Number);
    const longitud = Number(datos["addLongitud"]);
    const desnivel = Number(datos["addDesnivel"]);
    // Añadir usuarios
    const usuarios: Usuario[] = [];
    const id_usuarios: number[] = datos["addUsuarios"].split(',').map(Number);
    id_usuarios.forEach((id) => coleccionUsuarios._listaElementos.forEach(item => {
        if(item.id == id) {
            usuarios.push(item);
        }
    }));
    const actividad: string = datos["addActividad"];
    const calificacion = Number(datos["addCalificacion"]);

    if((actividad == "bicicleta" || actividad == "correr") && (Number(datos["addIndice"]) < coleccionRutas._listaElementos.length)) {
        coleccionRutas.modifyRuta(Number(datos["addIndice"]), new Ruta(id, nombre, geolocI, geolocF, longitud, desnivel, usuarios, actividad, calificacion));
        console.log("Ruta creada.");
        promptRutas()
    } else {
        if(actividad != "bicicleta" && actividad != "correr") {
            console.log("ERROR: Tipo de actividad no válido.");
        } else {
            console.log("ERROR: Índice fuera de la colección.");
        }
        promptRutas();
    }
}

export async function promptSort() {
    console.clear();
    coleccionRutas.showRuta();
    const datos = await inquirer.prompt([
        {
            type: "input",
            name: "addFactor",
            message: "Inserte el factor de búsqueda (nombre, cantidad, longitud, calificacion o tipo): "
        },
        {
            type: "input",
            name: "addOrden",
            message: "Inserte el orden de búsqueda (asc o desc): "
        }]);
    if((datos["addFactor"] == "nombre" || datos["addFactor"] == "cantidad" || datos["addFactor"] == "longitud" || datos["addFactor"] == "calificacion" || datos["addFactor"] == "tipo") && 
       (datos["addOrden"] == "asc" || datos["addOrden"] == "desc")) {
        coleccionRutas.buscarRuta(datos["addFactor"], datos["addOrden"]);
        promptRutas();
    } else {
        console.log("ERROR: Parámetros no válidos.");
        promptRutas();
    }
}

export function promptRutas(): void {
    console.clear();
    coleccionRutas.showRuta();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "¿Qué deseas hacer?: ",
        choices: Object.values(Comandos),
    }).then(answers => {
        switch (answers["command"]) {
            case Comandos.Añadir:
                promptAdd();
                break;
            case Comandos.Eliminar:
                promptRemove();
                break;
            case Comandos.Modificar:
                promptModify();
                break;
            case Comandos.Ordenar:
                promptSort();
                break;
            case Comandos.Salir:
                mainPrompt();
                break;
        }
    });
}
```

Este archivo que contiene funciones para interactuar con una colección de rutas. El código importa varias clases y funciones de otros archivos en el mismo directorio y en el directorio padre.

El archivo define un enum llamado Comandos que contiene algunas opciones para interactuar con la colección de rutas: Añadir, Eliminar, Modificar, Ordenar, Salir.

Las tres funciones que definen los diferentes comandos son promptAdd(), promptRemove() y promptModify(). Todas ellas usan la librería inquirer para obtener información del usuario a través de la línea de comandos.

La función promptAdd() pide al usuario que ingrese información para crear una nueva ruta y la agrega a la colección de rutas. La función promptRemove() pide al usuario que seleccione una ruta de la colección y la elimina. La función promptModify() permite al usuario modificar información de una ruta existente en la colección.

Cada función usa métodos de la clase ColeccionRutas, que se importa del archivo "coleccion_rutas.ts", para agregar, eliminar o modificar elementos de la colección. También usa la clase Usuario y la clase Coordenadas, ambas importadas de otros archivos.

### Clase Usuario
El codigo de esta clase es:

```ts
export class Usuario {
  private _id: number;
  private _nombre: string;
  private _tipoActividad: "bicicleta" | "correr";
  private _amigos: Usuario[];
  private _grupos: Grupo[];
  // private _estadisticasEntrenamiento: EstadisticasEntrenamiento;
  private _rutasFavoritas: Ruta[];
  private _retosActivos: Reto[];
  // collecion de rutas con fecha

  constructor(
    nombre: string,
    tipoActividad: "bicicleta" | "correr",
    amigos: Usuario[],
    grupos: Grupo[], // cambiar a tipo grupo
    rutas: Ruta[],
    retos: Reto[],
    id = -1
  ) {
    this._nombre = nombre;
    this._tipoActividad = tipoActividad;
    this._amigos = amigos;
    this._grupos = grupos;
    this._rutasFavoritas = rutas;
    this._retosActivos = retos;
    id < 0 ? (this._id = id) : (this._id = this.getRandomArbitrary(0, 50));
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get tipoActividad(): "bicicleta" | "correr" {
    return this._tipoActividad;
  }

  set tipoActividad(tipoActividad: "bicicleta" | "correr") {
    this._tipoActividad = tipoActividad;
  }

  get amigos(): Usuario[] {
    return this._amigos;
  }

  set amigos(amigos: Usuario[]) {
    this._amigos = amigos;
  }

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

  get grupos(): Grupo[] {
    return this._grupos;
  }

  set grupos(grupos: Grupo[]) {
    this._grupos = grupos;
  }

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

  get rutas(): Ruta[] {
    return this._rutasFavoritas;
  }

  set rutas(rutas: Ruta[]) {
    this._rutasFavoritas = rutas;
  }

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

  get retos(): Reto[] {
    return this._retosActivos;
  }

  set retos(retos: Reto[]) {
    this._retosActivos = retos;
  }

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
}
```

Este código contiene una clase llamada Usuario con una serie de propiedades y métodos. La clase tiene varias propiedades privadas, incluyendo _id, _nombre, _tipoActividad, _amigos, _grupos, _rutasFavoritas, y _retosActivos. Cada propiedad tiene un método getter para obtener su valor y un método setter para cambiar su valor.

El constructor de la clase toma varios argumentos, incluyendo nombre, tipoActividad, amigos, grupos, rutas, retos, y id. Si no se proporciona un valor para id, se generará un número aleatorio. La clase también tiene varios métodos adicionales, incluyendo getRandomArbitrary(), addAmigo(), deleteAmigo(), y addGrupo(), que se utilizan para modificar las propiedades _amigos y _grupos del usuario.

La clase Usuario también importa las clases Ruta, Reto y Grupo desde otros archivos llamados rutas.ts, retos.ts y grupos.ts, respectivamente.

### Clase EstadisticasEntrenamiento
El codigo de esta clase es:

```ts
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
  constructor(
    estadistcaSemanal: [number, number],
    estadisticaMensual: [number, number],
    estadisticaAnual: [number, number]
  ) {
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
```

Este es un código que define una clase llamada "EstadisticasEntrenamiento" que representa las estadísticas de entrenamiento por semana, mes y año. La clase tiene tres propiedades privadas: "_estadisticaSemanal", "_estadisticaMensual" y "_estadisticaAnual", cada una de las cuales es una tupla que contiene dos números.

El constructor de la clase toma tres argumentos que corresponden a las estadísticas de entrenamiento para la semana, mes y año respectivamente. Estas estadísticas se asignan a las propiedades correspondientes en la instancia creada.

La clase tiene también tres métodos "get" y tres métodos "set" que permiten acceder y modificar las estadísticas de entrenamiento para cada periodo de tiempo. Cada método "get" devuelve una tupla que contiene los km recorridos y el desnivel total acumulado para el periodo de tiempo correspondiente. Cada método "set" toma una tupla como argumento y actualiza las estadísticas correspondientes en la instancia de la clase.


### Clase ColeccionUsuarios
El codigo de esta clase es:

```ts
import { Coleccion } from "../coleccion";
import { Usuario } from "./usuario";

/**
 * Clase que representa a una colección de usuarios.
 */
export class ColeccionUsuarios implements Coleccion<Usuario> {
  _listaElementos: Usuario[];

  /**
   * Constructor de clase.
   * @param listaElementos Lista de elementos de la colección.
   */
  constructor(listaElementos: Usuario[]) {
    this._listaElementos = listaElementos;
  }

  /**
   * Añade un nuevo elemento a la colección.
   * @param item Elemento a añadir.
   */
  add(item: Usuario): void {
    this._listaElementos.push(item);
  }

  /**
   * Elimina un elemento de la colección.
   * @param index índice del elemento a eliminar.
   */
  remove(index: number): void {
    this._listaElementos.splice(index, 1);
  }

  /**
   * Modifica un elemento de la colección.
   * @param index índice del elemento a modificar.
   * @param item Elemento con nuevas características.
   */
  modify(index: number, item: Usuario): void {
    this._listaElementos[index] = item;
  }

  /**
   * Ordena los elementos de la colección según su nombre.
   * @param orden Orden ascendente o descendente.
   */
  buscarNombre(orden: "asc" | "desc") {
    this._listaElementos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    if (orden == "desc") {
      this._listaElementos.reverse();
    }
  }

  /**
   * Ordena los elementos de la colección según los kilómetros realizados semanales, mensuales o anuales.
   * @param orden Orden ascendente o descendente.
   * @param tipo Semanal, mensual o anual.
   */
  buscarKilometros(orden: "asc" | "desc", tipo: "sem" | "mes" | "año") {
    switch (tipo) {
      case "sem":
        this._listaElementos.sort(
          (a, b) =>
            a.estadisticasEntrenamiento.estadisticaSemanal[0] -
            b.estadisticasEntrenamiento.estadisticaSemanal[0]
        );
        break;
      case "mes":
        this._listaElementos.sort(
          (a, b) =>
            a.estadisticasEntrenamiento.estadisticaMensual[0] -
            b.estadisticasEntrenamiento.estadisticaMensual[0]
        );
        break;
      default:
        this._listaElementos.sort(
          (a, b) =>
            a.estadisticasEntrenamiento.estadisticaAnual[0] -
            b.estadisticasEntrenamiento.estadisticaAnual[0]
        );
        break;
    }
    if (orden == "desc") {
      this._listaElementos.reverse();
    }
  }
}

```

Este código define la clase ColeccionUsuarios, que implementa la interfaz genérica Coleccion con tipo Usuario. La clase tiene un atributo privado _listaElementos, que es un array de usuarios, y varios métodos para añadir, eliminar y modificar usuarios en la colección. Además, la clase tiene dos métodos para ordenar los usuarios por nombre o por kilómetros recorridos en un periodo de tiempo determinado. El ordenamiento puede ser ascendente o descendente según el parámetro orden que se recibe en cada método.

### Clase JsonColeccionUsuarios
El codigo de esta clase es:

```ts
import { Usuario, HistorialRutas } from "./usuario";
import { ColeccionUsuarios } from "./coleccion_usuarios";
import { Grupo } from "../Grupo/grupos";
import { EstadisticasEntrenamiento } from "./estadisticas_entrenamiento";
import { Ruta } from "../Ruta/rutas";
import { Reto } from "../Reto/retos";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

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

export class JsonColeccionUsuarios extends ColeccionUsuarios {
  private database: lowdb.LowdbSync<SchemaType>;

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

  addUsario(usuario: Usuario) {
    super.add(usuario);
    this.storeUsuarios();
  }

  removeUsuario(index: number) {
    super.remove(index);
    this.storeUsuarios();
  }

  modifyUsuario(index: number, item: Usuario) {
    super.modify(index, item);
    this.storeUsuarios();
  }

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
```

Este código es una implementación de la clase JsonColeccionUsuarios, que extiende a la clase ColeccionUsuarios. Esta clase tiene una lista de usuarios y un objeto database que usa la librería lowdb para almacenar la información de los usuarios en un archivo JSON llamado "Usuarios.json".

El archivo importa varias clases y tipos, incluyendo Usuario, HistorialRutas, ColeccionUsuarios, Grupo, EstadisticasEntrenamiento, Ruta, Reto, lowdb, y FileSync. También define un tipo llamado SchemaType, que es un objeto con una propiedad llamada usuario, que es un arreglo de objetos con varias propiedades, incluyendo _nombre, _tipoActividad, _amigos, _grupos, _estadisticasEntrenamiento, _rutasFavoritas, _retosActivos, _historialRutas, y _id.

La clase JsonColeccionUsuarios tiene un constructor que acepta una lista de usuarios como argumento. Si el archivo "Usuarios.json" existe, los usuarios almacenados se recuperan y se agregan a la lista de usuarios de la clase. Si no existe el archivo, se crea el archivo y se almacenan los usuarios en él.

La clase tiene varios métodos, incluyendo addUsuario, removeUsuario, modifyUsuario, buscarUsuario y showUsuario. Cada método realiza una operación diferente en la lista de usuarios y luego llama al método storeUsuarios, que almacena la lista de usuarios en el archivo "Usuarios.json".

En resumen, este código es una implementación de una colección de usuarios que se almacena en un archivo JSON y utiliza la librería lowdb para realizar operaciones de lectura y escritura en el archivo.


### Fichero prompt_usuario
El codigo de esta fichero es:

```ts
import { Usuario } from "./usuario";
import { Grupo } from "../Grupo/grupos";
import { EstadisticasEntrenamiento } from "./estadisticas_entrenamiento";
import { Ruta } from "../Ruta/rutas";
import { Reto } from "../Reto/retos";
import { HistorialRutas } from "../Usuario/usuario";
import { mainPrompt } from "../main";
import {
  coleccionGrupos,
  coleccionRetos,
  coleccionRutas,
  coleccionUsuarios,
} from "..";
import * as inquirer from "inquirer";

enum Comandos {
  Añadir = "Añadir usuario",
  Eliminar = "Eliminar usuario",
  Modificar = "Modificar usuario",
  Ordenar = "Ordenar lista",
  Salir = "Salir al menú principal",
}

export async function promptAdd() {
  console.clear();
  coleccionUsuarios.showUsuario();
  const datos = await inquirer.prompt([
    {
      type: "input",
      name: "addNombre",
      message: "Inserte el nombre: ",
    },
    {
      type: "input",
      name: "addActividad",
      message: "Inserte el tipo de actividad: ",
    },
    {
      type: "input",
      name: "addAmigos",
      message: "Inserte los ids de los amigos: ",
    },
    {
      type: "input",
      name: "addGrupos",
      message: "Inserte los ids de los grupos: ",
    },
    {
      type: "input",
      name: "addEstadisticas",
      message: "Inserte las estadísticas de entrenamiento: ",
    },
    {
      type: "input",
      name: "addRutas",
      message: "Inserte los id de las rutas favoritas: ",
    },
    {
      type: "input",
      name: "addRetos",
      message: "Inserte los ids de los retos: ",
    },
    {
      type: "input",
      name: "addHistorial",
      message: "Inserte el historial de rutas (fecha, id_ruta): ",
    },
  ]);

  const nombre: string = datos["addNombre"];
  const actividad: string = datos["addActividad"];
  // Añadir amigos
  const amigos: Usuario[] = [];
  const id_amigos: number[] = datos["addAmigos"].split(",").map(Number);
  id_amigos.forEach((id) =>
    coleccionUsuarios._listaElementos.forEach((item) => {
      if (item.id == id) {
        amigos.push(item);
      }
    })
  );
  // Añadir grupos
  const grupos: Grupo[] = [];
  const id_grupos: number[] = datos["addGrupos"].split(",").map(Number);
  id_grupos.forEach((id) =>
    coleccionGrupos._listaElementos.forEach((item) => {
      if (item.id == id) {
        grupos.push(item);
      }
    })
  );
  // Añadir datos entrenamiento
  const datosE: number[] = datos["addEstadisticas"].split(",").map(Number);
  const entrenamiento: EstadisticasEntrenamiento =
    new EstadisticasEntrenamiento(
      [datosE[0], datosE[1]],
      [datosE[2], datosE[3]],
      [datosE[4], datosE[5]]
    );
  // Añadir rutas
  const id_rutas: number[] = datos["addRetos"].split(",").map(Number);
  const rutas: Ruta[] = [];
  id_rutas.forEach((id) =>
    coleccionRutas._listaElementos.forEach((item) => {
      if (item.id == id) {
        rutas.push(item);
      }
    })
  );
  // Añadir retos
  const id_retos: number[] = datos["addRutas"].split(",").map(Number);
  const retos: Reto[] = [];
  id_retos.forEach((id) =>
    coleccionRetos._listaElementos.forEach((item) => {
      if (item.id == id) {
        retos.push(item);
      }
    })
  );
  // Añadir historial
  const datos_historial = datos["addHistorial"].split(",");
  const historial: HistorialRutas = [];
  for (let i = 0; i < datos_historial.length; i += 2) {
    coleccionRutas._listaElementos.forEach((item) => {
      if (item.id == datos_historial[i + 1]) {
        historial.push([datos_historial[i], item]);
      }
    });
  }

  if (actividad == "bicicleta" || actividad == "correr") {
    coleccionUsuarios.addUsario(
      new Usuario(
        nombre,
        actividad,
        amigos,
        grupos,
        entrenamiento,
        rutas,
        retos,
        historial
      )
    );
    console.log("Usuario creado.");
    promptUsuario();
  } else {
    console.log("ERROR: Datos no correctos.");
    promptUsuario();
  }
}

export async function promptRemove() {
  console.clear();
  coleccionUsuarios.showUsuario();
  const dato = await inquirer.prompt({
    type: "input",
    name: "addIndex",
    message: "Inserte el índice del elemento: ",
  });
  if (Number(dato["addIndex"]) < coleccionUsuarios._listaElementos.length) {
    coleccionUsuarios.removeUsuario(Number(dato["addIndex"]));
    console.log("Usuario eliminado.");
    promptUsuario();
  } else {
    console.log("ERROR: índice fuera de los límites.");
    promptUsuario();
  }
}

export async function promptModify() {
  console.clear();
  coleccionUsuarios.showUsuario();
  const datos = await inquirer.prompt([
    {
      type: "input",
      name: "addNombre",
      message: "Inserte el nombre: ",
    },
    {
      type: "input",
      name: "addActividad",
      message: "Inserte el tipo de actividad: ",
    },
    {
      type: "input",
      name: "addAmigos",
      message: "Inserte los ids de los amigos: ",
    },
    {
      type: "input",
      name: "addGrupos",
      message: "Inserte los ids de los grupos: ",
    },
    {
      type: "input",
      name: "addEstadisticas",
      message: "Inserte las estadísticas de entrenamiento: ",
    },
    {
      type: "input",
      name: "addRutas",
      message: "Inserte los id de las rutas favoritas: ",
    },
    {
      type: "input",
      name: "addRetos",
      message: "Inserte los ids de los retos: ",
    },
    {
      type: "input",
      name: "addHistorial",
      message: "Inserte el historial de rutas (fecha, id_ruta): ",
    },
    {
      type: "input",
      name: "addIndice",
      message: "Inserte el indice del elemento: ",
    },
  ]);

  const nombre: string = datos["addNombre"];
  const actividad: string = datos["addActividad"];
  // Añadir amigos
  const amigos: Usuario[] = [];
  const id_amigos: number[] = datos["addAmigos"].split(",").map(Number);
  id_amigos.forEach((id) =>
    coleccionUsuarios._listaElementos.forEach((item) => {
      if (item.id == id) {
        amigos.push(item);
      }
    })
  );
  // Añadir grupos
  const grupos: Grupo[] = [];
  const id_grupos: number[] = datos["addGrupos"].split(",").map(Number);
  id_grupos.forEach((id) =>
    coleccionGrupos._listaElementos.forEach((item) => {
      if (item.id == id) {
        grupos.push(item);
      }
    })
  );
  // Añadir datos entrenamiento
  const datosE: number[] = datos["addEstadisticas"].split(",").map(Number);
  const entrenamiento: EstadisticasEntrenamiento =
    new EstadisticasEntrenamiento(
      [datosE[0], datosE[1]],
      [datosE[2], datosE[3]],
      [datosE[4], datosE[5]]
    );
  // Añadir rutas
  const id_rutas: number[] = datos["addRetos"].split(",").map(Number);
  const rutas: Ruta[] = [];
  id_rutas.forEach((id) =>
    coleccionRutas._listaElementos.forEach((item) => {
      if (item.id == id) {
        rutas.push(item);
      }
    })
  );
  // Añadir retos
  const id_retos: number[] = datos["addRutas"].split(",").map(Number);
  const retos: Reto[] = [];
  id_retos.forEach((id) =>
    coleccionRetos._listaElementos.forEach((item) => {
      if (item.id == id) {
        retos.push(item);
      }
    })
  );
  // Añadir historial
  const datos_historial = datos["addHistorial"].split(",");
  const historial: HistorialRutas = [];
  for (let i = 0; i < datos_historial.length; i += 2) {
    coleccionRutas._listaElementos.forEach((item) => {
      if (item.id == datos_historial[i + 1]) {
        historial.push([datos_historial[i], item]);
      }
    });
  }

  if (
    (actividad == "bicicleta" || actividad == "correr") &&
    Number(datos["addIndice"]) < coleccionUsuarios._listaElementos.length
  ) {
    coleccionUsuarios.modifyUsuario(
      Number(datos["addIndice"]),
      new Usuario(
        nombre,
        actividad,
        amigos,
        grupos,
        entrenamiento,
        rutas,
        retos,
        historial
      )
    );
    console.log("Usuario creado.");
    promptUsuario();
  } else {
    if (actividad != "bicicleta" && actividad != "correr") {
      console.log("ERROR: Tipo de actividad no válido.");
    } else {
      console.log("ERROR: Índice fuera de la colección.");
    }
    promptUsuario();
  }
}

export async function promptSort() {
  console.clear();
  coleccionUsuarios.showUsuario();
  const datos = await inquirer.prompt([
    {
      type: "input",
      name: "addFactor",
      message: "Inserte el factor de búsqueda (nombre o kilometros): ",
    },
    {
      type: "input",
      name: "addOrden",
      message: "Inserte el orden de búsqueda (asc o desc): ",
    },
    {
      type: "input",
      name: "addAtributo",
      message: "Inserte el atributo de búsqueda (sem, mes o año): ",
    },
  ]);
  if (
    (datos["addFactor"] == "nombre" || datos["addFactor"] == "kilometros") &&
    (datos["addOrden"] == "asc" || datos["addOrden"] == "desc") &&
    (datos["addAtributo"] == "sem" ||
      datos["addAtributo"] == "mes" ||
      datos["addAtributo"] == "año")
  ) {
    coleccionUsuarios.buscarUsuario(
      datos["addFactor"],
      datos["addOrden"],
      datos["addAtributo"]
    );
    promptUsuario();
  } else {
    console.log("ERROR: Parámetros no válidos.");
    promptUsuario();
  }
}

export function promptUsuario() {
  console.clear();
  coleccionUsuarios.showUsuario();
  inquirer
    .prompt({
      type: "list",
      name: "command",
      message: "¿Qué deseas hacer?: ",
      choices: Object.values(Comandos),
    })
    .then((answers) => {
      switch (answers["command"]) {
        case Comandos.Añadir:
          promptAdd();
          break;
        case Comandos.Eliminar:
          promptRemove();
          break;
        case Comandos.Modificar:
          promptModify();
          break;
        case Comandos.Ordenar:
          promptSort();
          break;
        case Comandos.Salir:
          mainPrompt();
          break;
      }
    });
}
```

Este código contiene una colección de funciones de promt para realizar la adición, eliminación, modificación y ordenamiento de usuarios en un sistema de gestión de usuarios.

El código comienza importando varias clases y enumeraciones de otros archivos para utilizarlas en las funciones de prompt que están definidas en este archivo.

Luego, se definen dos funciones principales de prompt, promptAdd y promptRemove, que solicitan al usuario que proporcione información sobre el usuario que se va a agregar o eliminar.

En la función promptAdd, se utiliza la biblioteca inquirer para hacer preguntas interactivas al usuario y recopilar la información necesaria para crear un nuevo usuario. Los datos proporcionados se usan para crear un nuevo objeto Usuario y agregarlo a la lista de usuarios en coleccionUsuarios.

En la función promptRemove, se utiliza la biblioteca inquirer para solicitar al usuario el índice del usuario que se va a eliminar, y se elimina ese usuario de la lista de usuarios en coleccionUsuarios.

Además, hay una enumeración de Comandos que se utiliza para proporcionar opciones al usuario en el menú de prompt principal y un bloque final que exporta las funciones de prompt para su uso en otras partes del sistema de gestión de usuarios.

### Clase Grupo
El codigo de esta clase es:

```ts
export type historialRutasGrupal = [string, Usuario[], Ruta][];

export class Grupo {
  private _id: number;
  private _nombre: string;
  private _participantes: Usuario[];
  private _estadisticasGrupal: EstadisticasEntrenamiento;
  private _clasificacion: number[];
  private _rutasFavoritas: Ruta[];
  private _historialRutas: historialRutasGrupal;

  constructor(
    id: number,
    nombre: string,
    participantes: Usuario[],
    estadisticasGrupal: EstadisticasEntrenamiento,
    clasificacion: number[],
    rutasFavoritas: Ruta[],
    historialRutas: historialRutasGrupal
  ) {
    this._id = id;
    this._nombre = nombre;
    this._participantes = participantes;
    this._estadisticasGrupal = estadisticasGrupal;
    this._clasificacion = clasificacion;
    this._rutasFavoritas = rutasFavoritas;
    this._historialRutas = historialRutas;
  }

  get id(): number {
    return this._id;
  }

  set id(nuevoId: number) {
    this._id = nuevoId;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(nuevoNombre: string) {
    this._nombre = nuevoNombre;
  }

  get participantes(): Usuario[] {
    return this._participantes;
  }

  set participantes(nuevosParticipantes: Usuario[]) {
    this._participantes = nuevosParticipantes;
  }

  get estadisticasGrupal(): EstadisticasEntrenamiento {
    return this._estadisticasGrupal;
  }

  set estadisticasGrupal(nuevasEstadisticas: EstadisticasEntrenamiento) {
    this._estadisticasGrupal = nuevasEstadisticas;
  }

  get clasificacion(): number[] {
    return this._clasificacion;
  }

  set clasificacion(nuevaClasificacion: number[]) {
    this._clasificacion = nuevaClasificacion;
  }

  get rutasFavoritas(): Ruta[] {
    return this._rutasFavoritas;
  }

  set rutasFavoritas(nuevasRutas: Ruta[]) {
    this._rutasFavoritas = nuevasRutas;
  }

  get historialRutas(): historialRutasGrupal {
    return this._historialRutas;
  }

  set historialRutas(nuevoHistorial: historialRutasGrupal) {
    this._historialRutas = nuevoHistorial;
  }
}
```

Una implementacion de la clase llamada Grupo que representa a un grupo de usuarios que realizan actividades en conjunto. Esta clase tiene los siguientes atributos:

_id: ID del grupo (número).
_nombre: nombre del grupo (cadena de caracteres).
_participantes: lista de objetos Usuario que representa los participantes del grupo.
_estadisticasGrupal: objeto EstadisticasEntrenamiento que representa las estadísticas de entrenamiento del grupo.
_clasificacion: lista de números que representa la clasificación de los usuarios en el grupo.
_rutasFavoritas: lista de objetos Ruta que representa las rutas favoritas del grupo.
_historialRutas: lista de tuplas que contiene la fecha de realización, IDs de los usuarios e ID de ruta.
La clase tiene un constructor que toma como parámetros los valores iniciales de los atributos, y métodos de acceso y modificación para cada uno de ellos. En particular, el método get devuelve el valor del atributo correspondiente, mientras que el método set establece un nuevo valor para el mismo.

El tipo historialRutasGrupal es una tupla que contiene la fecha de realización, un arreglo de objetos Usuario y un objeto Ruta. La tupla se utiliza en el atributo _historialRutas para guardar el historial de las rutas realizadas por el grupo.

En resumen, esta clase permite modelar un grupo de usuarios que realizan actividades en conjunto y permite almacenar información relevante como las estadísticas de entrenamiento, la clasificación de los usuarios, las rutas favoritas y el historial de rutas realizadas.

### Clase ColeccionGrupos
El codigo de esta clase es:

```ts
import { Coleccion } from "../coleccion";
import { Grupo } from "./grupos";

/**
 * Clase que representa a una colección de grupos.
 */
export class ColeccionGrupos implements Coleccion<Grupo> {
  _listaElementos: Grupo[];

  /**
   * Constructor de clase.
   * @param listaElementos Lista de elementos de la colección.
   */
  constructor(listaElementos: Grupo[]) {
    this._listaElementos = listaElementos;
  }

  /**
   * Añade un nuevo elemento a la colección.
   * @param item Elemento a añadir.
   */
  add(item: Grupo): void {
    this._listaElementos.push(item);
  }

  /**
   * Elimina un elemento de la colección.
   * @param index índice del elemento a eliminar.
   */
  remove(index: number): void {
    this._listaElementos.splice(index, 1);
  }

  /**
   * Modifica un elemento de la colección.
   * @param index índice del elemento a modificar.
   * @param item Elemento con nuevas características.
   */
  modify(index: number, item: Grupo): void {
    this._listaElementos[index] = item;
  }

  /**
   * Ordena los elementos de la colección según su nombre.
   * @param orden Orden ascendente o descendente.
   */
  buscarNombre(orden: "asc" | "desc") {
    this._listaElementos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    if (orden == "desc") {
      this._listaElementos.reverse();
    }
  }

  /**
   * Ordena los elementos de la colección según los kilómetros realizados semanales, mensuales o anuales.
   * @param orden Orden ascendente o descendente.
   * @param tipo Semanal, mensual o anual.
   */
  buscarKilometros(orden: "asc" | "desc", tipo: "sem" | "mes" | "año") {
    switch (tipo) {
      case "sem":
        this._listaElementos.sort(
          (a, b) =>
            a.estadisticasGrupal.estadisticaSemanal[0] -
            b.estadisticasGrupal.estadisticaSemanal[0]
        );
        break;
      case "mes":
        this._listaElementos.sort(
          (a, b) =>
            a.estadisticasGrupal.estadisticaMensual[0] -
            b.estadisticasGrupal.estadisticaMensual[0]
        );
        break;
      default:
        this._listaElementos.sort(
          (a, b) =>
            a.estadisticasGrupal.estadisticaAnual[0] -
            b.estadisticasGrupal.estadisticaAnual[0]
        );
        break;
    }
    if (orden == "desc") {
      this._listaElementos.reverse();
    }
  }

  /**
   * Ordena los elementos de la colección según la cantidad de miembros.
   * @param orden Orden ascendente o descendente.
   */
  buscarCantidadMiembros(orden: "asc" | "desc") {
    this._listaElementos.sort(
      (a, b) => a.participantes.length - b.participantes.length
    );
    if (orden == "desc") {
      this._listaElementos.reverse();
    }
  }
}
```

Este código define la clase "ColeccionGrupos", que implementa la interfaz "Coleccion" para un tipo específico de objeto "Grupo". La clase contiene métodos para añadir, eliminar y modificar elementos de la colección, así como métodos para ordenar los elementos según diferentes criterios (por ejemplo, el nombre del grupo, la cantidad de miembros o los kilómetros realizados). Estos métodos utilizan el atributo "_listaElementos", que es una matriz de objetos "Grupo" y se inicializa en el constructor de la clase.

 
### Clase JsonColeccionGrupos
El codigo de esta clase es:

```ts
import { Grupo, historialRutasGrupal } from "./grupos";
import { ColeccionGrupos } from "./coleccion_grupos";
import { Usuario } from "../Usuario/usuario";
import { EstadisticasEntrenamiento } from "../Usuario/estadisticas_entrenamiento";
import { Ruta } from "../Ruta/rutas";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

type SchemaType = {
    grupo: { _id: number,
             _nombre: string,
             _participantes: Usuario[],
             _estadisticasGrupal: EstadisticasEntrenamiento,
             _clasificacion: number[],
             _rutasFavoritas: Ruta[],
             _historialRutas: historialRutasGrupal }[]
}

export class JsonColeccionGrupos extends ColeccionGrupos {
    private database: lowdb.LowdbSync<SchemaType>;

    constructor(listaGrupos: Grupo[]) {
        super([]);
        this.database = lowdb(new FileSync("./Grupos.json"));
        if(this.database.has("grupo").value()) {
            const dbItems = this.database.get("grupo").value();
            dbItems.forEach(item => this._listaElementos.push(new Grupo(item._id, item._nombre, item._participantes, 
                item._estadisticasGrupal, item._clasificacion, item._rutasFavoritas, item._historialRutas)));
        } else {
            this.database.set("grupo", listaGrupos).write();
            listaGrupos.forEach(item => this._listaElementos.push(item));
        }
    }

    addGrupo(grupo: Grupo) {
        super.add(grupo);
        this.storeGrupos();
    }

    removeGrupo(index: number) {
        super.remove(index);
        this.storeGrupos();
    }

    modifyGrupo(index: number, item: Grupo) {
        super.modify(index, item);
        this.storeGrupos();
    }

    buscarGrupo(atributo: string, orden: "asc" | "desc", factor: "sem" | "mes" | "año") {
        switch (atributo) {
            case "nombre":
                super.buscarNombre(orden);
                break;
            case "kilometros":
                super.buscarKilometros(orden, factor);
                break;
            case "cantidad":
                super.buscarCantidadMiembros(orden);
                break;
            default:
                break;
        }
        this.storeGrupos();
        this.showGrupo();
    }

    showGrupo() {
        this._listaElementos.forEach((item) => console.log(item.id, item.nombre, item.clasificacion));
    }

    private storeGrupos() {
        this.database.set("grupo", [...this._listaElementos.values()]).write();
    }
}
```

El código es una implementación de la clase JsonColeccionGrupos, que extiende la clase abstracta ColeccionGrupos y agrega funcionalidades para almacenar la información de los grupos en un archivo JSON utilizando la librería lowdb.

La clase JsonColeccionGrupos tiene un constructor que recibe una lista de grupos y los almacena en la base de datos si no existe previamente. La clase también tiene los métodos addGrupo, removeGrupo y modifyGrupo que agregan, eliminan y modifican grupos respectivamente en la lista de elementos. Además, la clase tiene el método buscarGrupo que busca grupos en la lista de acuerdo a diferentes atributos, como el nombre, la cantidad de kilómetros o la cantidad de miembros.

Finalmente, la clase tiene el método showGrupo que imprime la información de todos los grupos en la lista. La clase también tiene un método privado storeGrupos que guarda la información de los grupos en la base de datos después de cada cambio en la lista de elementos.

### Fichero prompt_grupo
El codigo de esta clase es:

```ts
import { Grupo, historialRutasGrupal } from "./grupos";
import { Ruta } from "../Ruta/rutas";
import { Usuario } from "../Usuario/usuario";
import { EstadisticasEntrenamiento } from "../Usuario/estadisticas_entrenamiento";
import { mainPrompt } from "../main";
import { coleccionRetos, coleccionRutas, coleccionGrupos, coleccionUsuarios } from "..";
import * as inquirer from "inquirer";

enum Comandos {
  Añadir = "Añadir grupo",
  Eliminar = "Eliminar grupo",
  Modificar = "Modificar grupo",
  Ordenar = "Ordenar lista",
  Salir = "Salir al menú principal",
}

export async function promptAddG(param: number) {
  console.clear();
  coleccionGrupos.showGrupo();
  const datos = await inquirer.prompt([
    {
      type: "input",
      name: "addId",
      message: "Inserte el id: ",
    },
    {
      type: "input",
      name: "addNombre",
      message: "Inserte el nombre: ",
    },
    {
      type: "input",
      name: "addParticipantes",
      message: "Inserte los participantes: ",
    },
    {
      type: "input",
      name: "addEstadisticaGrupal",
      message: "Inserte las estadisticas grupales: ",
    },
    {
      type: "input",
      name: "addClasificacion",
      message: "Inserte la clasificacion: ",
    },
    {
      type: "input",
      name: "addRutasFavoritas",
      message: "Inserte los id de las rutas favoritas: ",
    },
    {
      type: "input",
      name: "addHistorial",
      message: "Inserte el historial de rutas (fecha, id_ruta): ",
    },
  ]);

  const id = Number(datos["addId"]);
  const nombre: string = datos["addNombre"];
  // Añadir participantes
  const usuarios: Usuario[] = [];
  const id_usuarios: number[] = datos["addId"].split(",").map(Number);
  id_usuarios.forEach((id) =>
    coleccionUsuarios._listaElementos.forEach((item) => {
      if (item.id == id) {
        usuarios.push(item);
      }
    })
  );
  // Añadir estadistica grupal
  const datosE: number[] = datos["addEstadisticaGrupal"].split(",").map(Number);
  const entrenamiento: EstadisticasEntrenamiento =
    new EstadisticasEntrenamiento(
      [datosE[0], datosE[1]],
      [datosE[2], datosE[3]],
      [datosE[4], datosE[5]]
    );
  // Añadir clasificacion
  const clasificacion: number[] = datos["addClasificacion"].split(",").map(Number);
  // Añadir rutas favoritas
  const id_rutas: number[] = datos["addRutasFavoritas"].split(",").map(Number);
  const rutas: Ruta[] = [];
  id_rutas.forEach((id) =>
    coleccionRutas._listaElementos.forEach((item) => {
      if (item.id == id) {
        rutas.push(item);
      }
    })
  );
  // Añadir historial
  const datos_historial = datos["addHistorial"].split(",");
  const historial: historialRutasGrupal = [];
  for (let i = 0; i < datos_historial.length; i += 3) {
    coleccionRutas._listaElementos.forEach((item) => {
      if (item.id == datos_historial[i + 1]) {
        historial.push([datos_historial[i], [], item]);
      }
    });
  }
  coleccionGrupos.addGrupo(new Grupo(id, nombre, usuarios, entrenamiento, clasificacion, rutas, historial));
  console.log("Grupo creado.");
}

export async function promptRemoveG() {
    console.clear();
    coleccionGrupos.showGrupo();
    const dato = await inquirer.prompt({
      type: "input",
      name: "addIndex",
      message: "Inserte el índice del elemento: ",
    });
    if (Number(dato["addIndex"]) < coleccionGrupos._listaElementos.length) {
        coleccionGrupos.removeGrupo(Number(dato["addIndex"]));
      console.log("Grupo eliminado.");
      promptGrupo();
    } else {
      console.log("ERROR: índice fuera de los límites.");
      promptGrupo();
    }
  }

export async function promptModifyG() {
    console.clear();
    coleccionGrupos.showGrupo();
    const datos = await inquirer.prompt([
      {
        type: "input",
        name: "addId",
        message: "Inserte el id: ",
      },
      {
        type: "input",
        name: "addNombre",
        message: "Inserte el nombre: ",
      },
      {
        type: "input",
        name: "addParticipantes",
        message: "Inserte los participantes: ",
      },
      {
        type: "input",
        name: "addEstadisticaGrupal",
        message: "Inserte las estadisticas grupales: ",
      },
      {
        type: "input",
        name: "addClasificacion",
        message: "Inserte la clasificacion: ",
      },
      {
        type: "input",
        name: "addRutasFavoritas",
        message: "Inserte los id de las rutas favoritas: ",
      },
      {
        type: "input",
        name: "addHistorial",
        message: "Inserte el historial de rutas (fecha, id_ruta): ",
      },
      {
        type: "input",
        name: "addIndice",
        message: "Inserte el indice del elemento: ",
      },
    ]);
  
    const id = Number(datos["addId"]);
    const nombre: string = datos["addNombre"];
    // Añadir participantes
    const usuarios: Usuario[] = [];
    const id_usuarios: number[] = datos["addId"].split(",").map(Number);
    id_usuarios.forEach((id) =>
      coleccionUsuarios._listaElementos.forEach((item) => {
        if (item.id == id) {
          usuarios.push(item);
        }
      })
    );
    // Añadir estadistica grupal
    const datosE: number[] = datos["addEstadisticaGrupal"].split(",").map(Number);
    const entrenamiento: EstadisticasEntrenamiento =
      new EstadisticasEntrenamiento(
        [datosE[0], datosE[1]],
        [datosE[2], datosE[3]],
        [datosE[4], datosE[5]]
      );
    // Añadir clasificacion
    const clasificacion: number[] = datos["addClasificacion"].split(",").map(Number);
    // Añadir rutas favoritas
    const id_rutas: number[] = datos["addRutasFavoritas"].split(",").map(Number);
    const rutas: Ruta[] = [];
    id_rutas.forEach((id) =>
      coleccionRutas._listaElementos.forEach((item) => {
        if (item.id == id) {
          rutas.push(item);
        }
      })
    );
    // Añadir historial
    const datos_historial = datos["addHistorial"].split(",");
    const historial: historialRutasGrupal = [];
    for (let i = 0; i < datos_historial.length; i += 2) {
      coleccionRutas._listaElementos.forEach((item) => {
        if (item.id == datos_historial[i + 1]) {
          historial.push([datos_historial[i], [], item]);
        }
      });
    }
    if(Number(datos["addIndice"]) < coleccionGrupos._listaElementos.length) {
        coleccionGrupos.modifyGrupo(Number(datos["addIndice"]), new Grupo(id, nombre, usuarios, entrenamiento, clasificacion, rutas, historial));
        console.log("Grupo modificado.");
        promptGrupo();
    } else {
        console.log("ERROR: Índice fuera de la colección.");
        promptGrupo();
    }
}

export async function promptSortG() {
  console.clear();
  coleccionGrupos.showGrupo();
  const datos = await inquirer.prompt([
    {
      type: "input",
      name: "addFactor",
      message: "Inserte el factor de búsqueda (nombre, kilometros o cantidad): ",
    },
    {
      type: "input",
      name: "addOrden",
      message: "Inserte el orden de búsqueda (asc o desc): ",
    },
    {
      type: "input",
      name: "addAtributo",
      message: "Inserte el atributo de búsqueda (sem, mes o año): ",
    },
  ]);
  if (
    (datos["addFactor"] == "nombre" || datos["addFactor"] == "kilometros" || datos["addFactor"] == "cantidad") &&
    (datos["addOrden"] == "asc" || datos["addOrden"] == "desc") &&
    (datos["addAtributo"] == "sem" ||
      datos["addAtributo"] == "mes" ||
      datos["addAtributo"] == "año")
  ) {
    coleccionGrupos.buscarGrupo(
      datos["addFactor"],
      datos["addOrden"],
      datos["addAtributo"]
    );
    promptGrupo();
  } else {
    console.log("ERROR: Parámetros no válidos.");
    promptGrupo();
  }
}

export function promptGrupo(): void {
  console.clear();
  coleccionGrupos.showGrupo();
  inquirer
    .prompt({
      type: "list",
      name: "command",
      message: "¿Qué deseas hacer?: ",
      choices: Object.values(Comandos),
    })
    .then((answers) => {
      switch (answers["command"]) {
        case Comandos.Añadir:
          promptAddG();
          break;
        case Comandos.Eliminar:
          promptRemoveG();
          break;
        case Comandos.Modificar:
          promptModifyG();
          break;
        case Comandos.Ordenar:
          promptSortG();
          break;
        case Comandos.Salir:
          mainPrompt();
          break;
      }
    });
}
```

Este código exporta tres funciones (promptAddG, promptRemoveG y promptModifyG) y un enum (Comandos) para manejar una colección de grupos de usuarios.

Las funciones utilizan la librería inquirer para realizar preguntas interactivas en la terminal y permitir al usuario agregar, eliminar o modificar un grupo de la colección. Para ello, se definen diferentes objetos con los datos necesarios y se utilizan los métodos de las clases correspondientes (coleccionUsuarios, coleccionRutas, coleccionGrupos, etc.) para obtener o modificar los datos necesarios.

Cada una de las funciones define una serie de preguntas que el usuario debe responder, y utiliza los datos obtenidos para crear o modificar un objeto de la clase Grupo. Una vez que el objeto se ha creado o modificado, se añade a la colección correspondiente (coleccionGrupos).

El enum Comandos define una serie de comandos que se utilizan para mostrar un menú de opciones en la función principal del programa (mainPrompt).

### Clase Reto
El codigo de esta clase es:

```ts
import { Ruta } from "../Ruta/rutas";
import { Usuario } from "../Usuario/usuario";

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
  constructor(
    id: number,
    nombre: string,
    rutas: Ruta[],
    tipo: "bicicleta" | "correr",
    usuarios: Usuario[]
  ) {
    this._id = id;
    this._nombre = nombre;
    this._rutas = rutas;
    this._tipo = tipo;
    if (this._rutas != undefined) {
      this._rutas.forEach((ruta) => {
        this._kilometros += ruta.longitud;
      });
    } else {
      this._kilometros = 0;
    }
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
  set kilometros(kilometros: number) {
    this._kilometros = kilometros;
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
```

Este código define una clase llamada Reto que representa un reto deportivo. Tiene los siguientes atributos privados:

_id: Identificación única del reto (número).
_nombre: Nombre del reto (cadena de texto).
_rutas: Rutas que componen el reto (arreglo de objetos Ruta).
_tipo: Tipo de reto, que puede ser "bicicleta" o "correr" (cadena de texto).
_kilometros: Kilómetros totales del reto (número).
_usuarios: Usuarios que realizan el reto (arreglo de objetos Usuario).
Además, tiene un constructor que toma estos atributos como parámetros y los inicializa. También tiene varios getters y setters para cada uno de los atributos.

En particular, los setters para _rutas, _tipo y _usuarios recalculan automáticamente _kilometros a partir de las nuevas rutas añadidas, el nuevo tipo de reto o la lista de nuevos usuarios.

### Clase ColeccionRetos
El codigo de esta clase es:

```ts
import { Coleccion } from "../coleccion";
import { Reto } from "./retos";

/**
 * Clase que representa a una colección de retos.
 */
export class ColeccionRetos implements Coleccion<Reto> {
  _listaElementos: Reto[];

  /**
   * Constructor de clase.
   * @param listaElementos Lista de elementos de la colección.
   */
  constructor(listaElementos: Reto[]) {
    this._listaElementos = listaElementos;
  }

  /**
   * Añade un nuevo elemento a la colección.
   * @param item Elemento a añadir.
   */
  add(item: Reto): void {
    this._listaElementos.push(item);
  }

  /**
   * Elimina un elemento de la colección.
   * @param index índice del elemento a eliminar.
   */
  remove(index: number): void {
    this._listaElementos.splice(index, 1);
  }

  /**
   * Modifica un elemento de la colección.
   * @param index índice del elemento a modificar.
   * @param item Elemento con nuevas características.
   */
  modify(index: number, item: Reto): void {
    this._listaElementos[index] = item;
  }

  /**
   * Ordena los elementos de la colección según su nombre.
   * @param orden Orden ascendente o descendente.
   */
  buscarNombre(orden: "asc" | "desc") {
    this._listaElementos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    if (orden == "desc") {
      this._listaElementos.reverse();
    }
  }

  /**
   * Ordena los elementos de la colección según la cantidad de kilómetros totales.
   * @param orden Orden ascendente o descendente.
   */
  buscarKilometros(orden: "asc" | "desc") {
    this._listaElementos.sort((a, b) => a.kilometros - b.kilometros);
    if (orden == "desc") {
      this._listaElementos.reverse();
    }
  }

  /**
   * Ordena los elementos de la colección según la cantidad de usuarios.
   * @param orden Orden ascendente o descendente.
   */
  buscarCantidadUsuarios(orden: "asc" | "desc") {
    this._listaElementos.sort((a, b) => a.usuarios.length - b.usuarios.length);
    if (orden == "desc") {
      this._listaElementos.reverse();
    }
  }
}
```

Este código define una clase llamada "ColeccionRetos" que implementa la interfaz "Coleccion". La clase tiene una propiedad "_listaElementos" que almacena una lista de elementos de tipo "Reto". Además, la clase tiene cuatro métodos que permiten añadir, eliminar, modificar y ordenar elementos de la lista de retos según su nombre, la cantidad de kilómetros totales o la cantidad de usuarios. La clase es genérica, lo que significa que puede trabajar con cualquier tipo de elemento que implemente la interfaz "Reto".

### Clase JsonColeccionRetos
El codigo de esta clase es:

```ts
import { ColeccionRetos } from "./coleccion_retos";
import { Ruta } from "../Ruta/rutas";
import { Usuario } from "../Usuario/usuario";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";
import { Reto } from "./retos";

type SchemaType = {
    reto: { _id: number,
            _nombre: string,
            _rutas: Ruta[],
            _tipo: "bicicleta" | "correr",
            _kilometros: number,
            _usuarios: Usuario[] }[]
}

export class JsonColeccionRetos extends ColeccionRetos {
    private database: lowdb.LowdbSync<SchemaType>;

    constructor(listaRetos: Reto[]) {
        super([]);
        this.database = lowdb(new FileSync("./Retos.json"));
        if(this.database.has("reto").value()) {
            const dbItems = this.database.get("reto").value();
            dbItems.forEach(item => this._listaElementos.push(new Reto(item._id, item._nombre, item._rutas, 
                item._tipo, item._usuarios)));
        } else {
            this.database.set("reto", listaRetos).write();
            listaRetos.forEach(item => this._listaElementos.push(item));
        }
    }

    addReto(reto: Reto) {
        super.add(reto);
        this.storeRetos();
    }

    removeReto(index: number) {
        super.remove(index);
        this.storeRetos();
    }

    modifyReto(index: number, item: Reto) {
        super.modify(index, item);
        this.storeRetos();
    }

    buscarReto(atributo: string, orden: "asc" | "desc") {
        switch (atributo) {
            case "nombre":
                super.buscarNombre(orden);
                break;
            case "cantidad":
                super.buscarCantidadUsuarios(orden);
                break;
            case "kilometros":
                super.buscarKilometros(orden);
                break;
            default:
                break;
        }
        this.storeRetos();
        this.showReto();
    }

    showReto() {
        this._listaElementos.forEach((item) => console.log(item.id, item.nombre, 
            item.tipo, item.kilometros));
    }

    private storeRetos() {
        this.database.set("reto", [...this._listaElementos.values()]).write();
    }
} 
```

El código define una clase JsonColeccionRetos que extiende la clase ColeccionRetos. La clase JsonColeccionRetos tiene un constructor que recibe una lista de retos y crea una instancia de la base de datos lowdb utilizando el adaptador FileSync para almacenar la información de los retos en un archivo Retos.json.

El constructor también verifica si hay algún reto almacenado en la base de datos y, si existe, los agrega a la lista de elementos de la colección. Si no hay retos almacenados en la base de datos, los retos se agregan a la base de datos y a la lista de elementos de la colección.

La clase JsonColeccionRetos también tiene métodos para agregar, eliminar y modificar retos. Estos métodos heredan las funciones correspondientes de la clase ColeccionRetos y también llaman a storeRetos() para actualizar los cambios en la base de datos.

La clase JsonColeccionRetos también tiene un método buscarReto que ordena los elementos de la colección según el atributo especificado (nombre, cantidad o kilometros) en orden ascendente o descendente y llama a storeRetos() y showReto() para actualizar los cambios y mostrar la información del reto.

El método showReto simplemente recorre la lista de elementos de la colección y muestra información específica de cada reto (su id, nombre, tipo y kilómetros). El método storeRetos se encarga de almacenar la lista de elementos de la colección en la base de datos utilizando el método write() de lowdb.

### Fichero prompt_reto
El codigo de esta clase es:

```ts
import { Usuario } from "../Usuario/usuario";
import { Grupo } from "../Grupo/grupos";
import { EstadisticasEntrenamiento } from "../Usuario/estadisticas_entrenamiento";
import { Ruta } from "../Ruta/rutas";
import { Reto } from "../Reto/retos";
import { HistorialRutas } from "../Usuario/usuario";
import { mainPrompt } from "../main";
import {
  coleccionGrupos,
  coleccionRetos,
  coleccionRutas,
  coleccionUsuarios,
} from "..";
import * as inquirer from "inquirer";

enum Comandos {
  Añadir = "Añadir Reto",
  Eliminar = "Eliminar Reto",
  Modificar = "Modificar Reto",
  Ordenar = "Ordenar lista",
  Salir = "Salir al menú principal",
}

export async function promptAdd() {
  console.clear();
  coleccionRetos.showReto();
  const datos = await inquirer.prompt([
    {
      type: "input",
      name: "addId",
      message: "Inserte ID: ",
    },
    {
      type: "input",
      name: "addNombre",
      message: "Inserte nombre: ",
    },
    {
      type: "input",
      name: "addRuta",
      message: "Inserte ruta: ",
    },
    {
      type: "input",
      name: "addTipo",
      message: "Inserte tipo de actividad: ",
    },
    {
      type: "input",
      name: "addKilometros",
      message: "Inserte longitud del reto: ",
    },
    {
      type: "input",
      name: "addUsuarios",
      message: "Inserte usuarios del reto: ",
    },
  ]);

  const id: number = datos["addId"];
  const nombre: string = datos["addNombre"];
  const actividad: string = datos["addTipo"];

  //Añadir Ruta
  const rutas: Ruta[] = [];
  const id_rutas: number[] = datos["addRuta"].split(",").map(Number);
  id_rutas.forEach((id) =>
    coleccionRutas._listaElementos.forEach((item) => {
      if (item.id == id) {
        rutas.push(item);
      }
    })
  );

  //añadir usuarios
  const usuarios: Usuario[] = [];
  const id_usuario: number[] = datos["addUsuarios"].split(",").map(Number);
  id_usuario.forEach((id) =>
    coleccionUsuarios._listaElementos.forEach((item) => {
      if (item.id == id) {
        usuarios.push(item);
      }
    })
  );

  if (actividad == "bicicleta" || actividad == "correr") {
    coleccionRetos.addReto(new Reto(id, nombre, rutas, actividad, usuarios));
    console.log("Reto creado.");
    promptRetos();
  } else {
    console.log("ERROR: Datos no correctos.");
    promptRetos();
  }
}

export async function promptRemove() {
  console.clear();
  coleccionRetos.showReto();
  const dato = await inquirer.prompt({
    type: "input",
    name: "addIndex",
    message: "Inserte el índice del elemento: ",
  });
  if (Number(dato["addIndex"]) < coleccionRetos._listaElementos.length) {
    coleccionRetos.removeReto(Number(dato["addIndex"]));
    console.log("Reto eliminado.");
    promptRetos();
  } else {
    console.log("ERROR: índice fuera de los límites.");
    promptRetos();
  }
}

export async function promptModify() {
  console.clear();
  coleccionRetos.showReto();
  const datos = await inquirer.prompt([
    {
      type: "input",
      name: "addId",
      message: "Inserte ID: ",
    },
    {
      type: "input",
      name: "addNombre",
      message: "Inserte nombre: ",
    },
    {
      type: "input",
      name: "addRuta",
      message: "Inserte ruta: ",
    },
    {
      type: "input",
      name: "addTipo",
      message: "Inserte tipo de actividad: ",
    },
    {
      type: "input",
      name: "addKilometros",
      message: "Inserte longitud del reto: ",
    },
    {
      type: "input",
      name: "addUsuarios",
      message: "Inserte usuarios del reto: ",
    },
    {
      type: "input",
      name: "addIndice",
      message: "Inserte el indice del elemento: ",
    }  
  ]);

  const id: number = datos["addId"];
  const nombre: string = datos["addNombre"];
  const actividad: string = datos["addTipo"];

  //Añadir Ruta
  const rutas: Ruta[] = [];
  const id_rutas: number[] = datos["addRuta"].split(",").map(Number);
  id_rutas.forEach((id) =>
    coleccionRutas._listaElementos.forEach((item) => {
      if (item.id == id) {
        rutas.push(item);
      }
    })
  );

  //añadir usuarios
  const usuarios: Usuario[] = [];
  const id_usuario: number[] = datos["addUsuarios"].split(",").map(Number);
  id_usuario.forEach((id) =>
    coleccionUsuarios._listaElementos.forEach((item) => {
      if (item.id == id) {
        usuarios.push(item);
      }
    })
  );

  if (
    (actividad == "bicicleta" || actividad == "correr") &&
    Number(datos["addIndice"]) < coleccionUsuarios._listaElementos.length
  ) {
    coleccionRetos.modifyReto(Number(datos["addIndice"]), new Reto(id, nombre, rutas, actividad, usuarios));
    console.log("Reto creado.");
    promptRetos();
  } else {
    if (actividad != "bicicleta" && actividad != "correr") {
      console.log("ERROR: Tipo de actividad no válido.");
    } else {
      console.log("ERROR: Índice fuera de la colección.");
    }
    promptRetos();
  }
}

export async function promptSort() {
  console.clear();
  coleccionRetos.showReto();
  const datos = await inquirer.prompt([
    {
      type: "input",
      name: "addFactor",
      message:
        "Inserte el factor de búsqueda (nombre o kilometros o usuarios): ",
    },
    {
      type: "input",
      name: "addOrden",
      message: "Inserte el orden de búsqueda (asc o desc): ",
    },
  ]);
  if (
    (datos["addFactor"] == "nombre" ||
      datos["addFactor"] == "kilometros" ||
      datos["addFactor"] == "usuarios") &&
    (datos["addOrden"] == "asc" || datos["addOrden"] == "desc")
  ) {
    coleccionRetos.buscarReto(datos["addFactor"], datos["addOrden"]);
    promptRetos();
  } else {
    console.log("ERROR: Parámetros no válidos.");
    promptRetos();
  }
}

export function promptRetos(): void {
  console.clear();
  coleccionRetos.showReto();
  inquirer
    .prompt({
      type: "list",
      name: "command",
      message: "¿Qué deseas hacer?: ",
      choices: Object.values(Comandos),
    })
    .then((answers) => {
      switch (answers["command"]) {
        case Comandos.Añadir:
          promptAdd();
          break;
        case Comandos.Eliminar:
          promptRemove();
          break;
        case Comandos.Modificar:
          promptModify();
          break;
        case Comandos.Ordenar:
          promptSort();
          break;
        case Comandos.Salir:
          mainPrompt();
          break;
      }
    });
}
```

Este código es un programa de línea de comandos para la gestión de retos de actividad física. Se importan varios módulos y clases necesarios para el programa, como Usuario, Grupo, EstadisticasEntrenamiento, Ruta, Reto, HistorialRutas, y mainPrompt. El programa también utiliza la librería inquirer para interactuar con el usuario mediante la consola.

El programa define un enum llamado Comandos con cuatro opciones: Añadir, Eliminar, Modificar y Ordenar lista. También define tres funciones asincrónicas para cada uno de estos comandos: promptAdd, promptRemove y promptModify.

La función promptAdd permite al usuario agregar un nuevo reto a la lista de retos existentes. Pide al usuario que ingrese un ID, un nombre, una ruta, un tipo de actividad, la longitud del reto y los usuarios asociados al reto. Luego, crea un objeto Reto con los datos proporcionados y lo agrega a la lista de retos.

La función promptRemove permite al usuario eliminar un reto existente de la lista. Pide al usuario que ingrese el índice del reto que desea eliminar y luego lo elimina de la lista.

La función promptModify permite al usuario modificar un reto existente en la lista. Pide al usuario que ingrese el ID, nombre, ruta, tipo de actividad, longitud del reto, usuarios asociados y el índice del elemento que desea modificar. Luego, actualiza los datos del reto correspondiente a ese índice con los nuevos datos proporcionados por el usuario.

### Interfaz coleccion 
El codigo de esta clase es:

```ts
export interface Coleccion<T> {
  _listaElementos: T[];
  add(item: T): void;
  remove(index: number): void;
  modify(index: number, item: T): void;
}
```

Este código define una interfaz llamada Coleccion que tiene tres métodos y una propiedad. La propiedad _listaElementos es un arreglo de elementos de tipo T.

Los tres métodos definidos en la interfaz son:

add(item: T): void; : Este método toma un parámetro de tipo T y lo agrega a la propiedad _listaElementos.
remove(index: number): void;: Este método toma un parámetro de tipo number que representa el índice del elemento que se debe eliminar de la propiedad _listaElementos.
modify(index: number, item: T): void;: Este método toma dos parámetros: un parámetro de tipo number que representa el índice del elemento que se debe modificar y un parámetro de tipo T que representa el nuevo valor para el elemento en la posición dada.

### Clase Gestor
El codigo de esta clase es:

```ts

```

### Fichero main
El codigo de esta clase es:

```ts
import { promptUsuario } from "./Usuario/prompt_usuario";
import { promptRutas } from "./Ruta/prompt_ruta";
import { promptRetos } from "./Reto/prompt_reto";
import { promptGrupo } from "./Grupo/prompt_grupo";
import { Gestor } from "./gestor";
import * as inquirer from "inquirer";

enum Opciones {
    Usuario = "Editar usuarios",
    Ruta = "Editar rutas",
    Reto = "Editar retos",
    Grupo = "Editar grupos",
    Salir = "Salir"
  }

export function mainPrompt() {
    console.clear();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "¿Qué deseas hacer?: ",
        choices: Object.values(Opciones),
    }).then((answers) => {
        switch(answers["command"]) {
            case Opciones.Usuario:
                promptUsuario();
                break;
            case Opciones.Ruta:
                promptRutas();
                break;
            case Opciones.Reto:
                promptRetos();
                break;
            case Opciones.Grupo:
                promptGrupo();
                break;
            case Opciones.Salir:
                return;
        }
    })
}

//mainPrompt();

const prueba = new Gestor();
prueba.mainMenu();
```

Este código importa varios módulos de diferentes archivos y define una enumeración llamada Opciones. Luego, define una función llamada mainPrompt() que utiliza la biblioteca inquirer para crear un menú que le pregunta al usuario qué desea hacer. Dependiendo de la opción que el usuario seleccione, se llamará a una función diferente para manejar la opción. Por último, crea una instancia de la clase Gestor y llama a su método mainMenu() para iniciar la aplicación. En resumen, este código es la lógica principal de una aplicación que utiliza un menú para permitir al usuario interactuar con diferentes funcionalidades.

### Clase Gestor


## Conclusión

## Referencias

1. https://programmingwithjon.medium.com/your-first-typescript-project-part-3-8c84a6145d7e