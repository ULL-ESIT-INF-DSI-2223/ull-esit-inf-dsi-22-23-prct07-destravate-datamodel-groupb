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

### Clase JsonColeccionUsuarios
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

Los test realizados para esta clase son:

### Clase EstadisticaEntrenamiento
El codigo de esta clase es:

```ts
export class EstadisticasEntrenamiento {
  private _estadisticaSemanal: [number, number];
  private _estadisticaMensual: [number, number];
  private _estadisticaAnual: [number, number];

  constructor(
    estadistcaSemanal: [number, number],
    estadisticaMensual: [number, number],
    estadisticaAnual: [number, number]
  ) {
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
```

El código define una clase llamada "EstadisticasEntrenamiento" que representa las estadísticas de entrenamiento por semana, mes y año. La clase tiene tres propiedades privadas "_estadisticaSemanal", "_estadisticaMensual" y "_estadisticaAnual" que almacenan los km recorridos y el desnivel total acumulado en una tupla de dos números.

El constructor de la clase toma tres parámetros que corresponden a las estadísticas semanales, mensuales y anuales, y los asigna a las propiedades correspondientes. La clase también tiene tres pares de getters y setters que permiten obtener y establecer las estadísticas semanales, mensuales y anuales.

En resumen, la clase proporciona una manera conveniente de almacenar y manipular las estadísticas de entrenamiento en diferentes periodos de tiempo.

 

## Conclusión

## Referencias

1. https://programmingwithjon.medium.com/your-first-typescript-project-part-3-8c84a6145d7e