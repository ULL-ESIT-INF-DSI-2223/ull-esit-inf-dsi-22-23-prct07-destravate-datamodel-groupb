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

```
import { Coordenadas } from "../src/coordenadas";
import { Usuario } from "./usuario";
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
  private _usuarios: Usuario[]; // Lista de identificadores de usuarios que han realizado la ruta
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
  get usuarios(): Usuario[] {
    return this._usuarios;
  }

  /**
   * Establece una nueva lista de usuarios que realizan la ruta.
   * @param geolocalizacionInicio Nueva lista de usuarios que realizan la ruta.
   */
  set usuarios(usuarios: Usuario[]) {
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

```

Este código define una clase llamada "Ruta" que representa una ruta de actividad al aire libre. La clase tiene propiedades como un identificador único, nombre de la ruta, coordenadas de inicio y fin de la ruta, longitud, desnivel medio, una lista de usuarios que han realizado la ruta, tipo de actividad (bicicleta o correr) y la calificación media de la ruta.

La clase tiene un constructor que inicializa estas propiedades cuando se crea una nueva instancia de la clase. También hay métodos "get" y "set" para cada propiedad que permiten obtener y establecer sus valores. Por ejemplo, el método "getId()" devuelve el identificador único de la ruta, mientras que el método "setId()" establece un nuevo identificador único para la ruta.

La clase depende de otras dos clases llamadas "Coordenadas" y "Usuario". La clase "Coordenadas" representa un par de coordenadas de longitud y latitud, y la clase "Usuario" representa a un usuario que ha realizado la ruta. Estas dos clases se importan al principio del archivo usando la sintaxis de importación de módulos de TypeScript.

Los test realizados para esta clase son:

```
describe("Clase Ruta", () => {
  it("Cambiar Id de ruta", () => {
    ruta.id = 5;
  });
  it("Id de ruta", () => {
    expect(ruta.id).to.equal(5);
  });
  it("Id de ruta mal", () => {
    expect(ruta.id).to.not.equal(65);
  });

  it("Cambiar Nombre de ruta", () => {
    ruta.nombre = "Ruta cambio";
  });
  it("Nombre de ruta", () => {
    expect(ruta.nombre).to.equal("Ruta cambio");
  });
  it("Nombre de ruta mal", () => {
    expect(ruta.nombre).to.not.equal("Ruta de prueba");
  });

  it("Cambio Geolocalización de inicio", () => {
    ruta.geolocalizacionInicio = new Coordenadas(1, 1, 1);
  });
  it("Geolocalización de inicio", () => {
    expect(ruta.geolocalizacionInicio.latitud).to.equal(1);
    expect(ruta.geolocalizacionInicio.longitud).to.equal(1);
    expect(ruta.geolocalizacionInicio.altitud).to.equal(1);
  });
  it("Geolocalización de inicio mal", () => {
    expect(ruta.geolocalizacionInicio.latitud).to.not.equal(0);
    expect(ruta.geolocalizacionInicio.longitud).to.not.equal(0);
    expect(ruta.geolocalizacionInicio.altitud).to.not.equal(0);
  });

  it("Cambio Geolocalización final", () => {
    ruta.geolocalizacionFin = new Coordenadas(2, 2, 2);
  });
  it("Geolocalización final", () => {
    expect(ruta.geolocalizacionFin.latitud).to.equal(2);
    expect(ruta.geolocalizacionFin.longitud).to.equal(2);
    expect(ruta.geolocalizacionFin.altitud).to.equal(2);
  });
  it("Geolocalización final mal", () => {
    expect(ruta.geolocalizacionFin.latitud).to.not.equal(1);
    expect(ruta.geolocalizacionFin.longitud).to.not.equal(1);
    expect(ruta.geolocalizacionFin.altitud).to.not.equal(1);
  });

  it("Cambio Longitud de ruta", () => {
    ruta.longitud = 20;
  });
  it("Longitud de ruta", () => {
    expect(ruta.longitud).to.equal(20);
  });
  it("Longitud de ruta mal", () => {
    expect(ruta.longitud).to.not.equal(10);
  });

  it("Cambio Desnivel medio", () => {
    ruta.desnivelMedio = 30;
  });
  it("Desnivel medio", () => {
    expect(ruta.desnivelMedio).to.equal(30);
  });
  it("Desnivel medio mal", () => {
    expect(ruta.desnivelMedio).to.not.equal(100);
  });

  it("Cambio Lista de usuarios", () => {
    ruta.usuarios = [userUno];
  });
  it("Lista de usuarios", () => {
    expect(ruta.usuarios).to.deep.equal([userUno]);
  });
  it("Lista de usuarios mal", () => {
    expect(ruta.usuarios).to.not.deep.equal([]);
  });

  it("Cambio Tipo de actividad", () => {
    ruta.tipoActividad = "correr";
  });
  it("Tipo de actividad", () => {
    expect(ruta.tipoActividad).to.equal("correr");
  });
  it("Tipo de actividad mal", () => {
    expect(ruta.tipoActividad).to.not.equal("bicicleta");
  });

  it("Cambio Calificación media de ruta", () => {
    ruta.calificacionMedia = 5;
  });
  it("Calificación media de ruta", () => {
    expect(ruta.calificacionMedia).to.equal(5);
  });
  it("Calificación media de ruta mal", () => {
    expect(ruta.calificacionMedia).to.not.equal(4.5);
  });
});
```

### Clase Coordenadas
El codigo de esta clase es:

```
/**

    Clase Coordenadas representa las coordenadas geográficas de un punto en la Tierra
    */
export class Coordenadas {
  private _latitud: number;
  private _longitud: number;
  private _altitud: number;
  /**

    Crea una instancia de Coordenadas
    @param latitud La latitud del punto en grados decimales
    @param longitud La longitud del punto en grados decimales
    @param altitud La altitud del punto en metros
    */
  constructor(latitud: number, longitud: number, altitud: number) {
    this._latitud = latitud;
    this._longitud = longitud;
    this._altitud = altitud;
  }
  /**

    Obtiene la latitud del punto
    @returns La latitud del punto en grados decimales
    */
  get latitud(): number {
    return this._latitud;
  }
  /**

    Establece la latitud del punto
    @param latitud La nueva latitud del punto en grados decimales
    */
  set latitud(latitud: number) {
    this._latitud = latitud;
  }
  /**

    Obtiene la longitud del punto
    @returns La longitud del punto en grados decimales
    */
  get longitud(): number {
    return this._longitud;
  }
  /**

    Establece la longitud del punto
    @param longitud La nueva longitud del punto en grados decimales
    */
  set longitud(longitud: number) {
    this._longitud = longitud;
  }
  /**

    Obtiene la altitud del punto
    @returns La altitud del punto en metros
    */
  get altitud(): number {
    return this._altitud;
  }
  /**

    Establece la altitud del punto
    @param altitud La nueva altitud del punto en metros
    */
  set altitud(altitud: number) {
    this._altitud = altitud;
  }
}

```

Este código define una clase llamada Coordenadas que representa las coordenadas geográficas de un punto en la Tierra, utilizando las propiedades de latitud, longitud y altitud.

El constructor de la clase Coordenadas recibe tres parámetros: latitud, longitud y altitud, y se utiliza para inicializar las variables privadas de la clase _latitud, _longitud y _altitud.

La clase también tiene cuatro métodos que permiten obtener y establecer los valores de latitud, longitud y altitud de un objeto Coordenadas. Los métodos de acceso get y set se utilizan para acceder a las variables privadas _latitud, _longitud y _altitud, respectivamente.

En resumen, este código define una clase útil para representar y manipular coordenadas geográficas de un punto en la Tierra.

Los test realizados para esta clase son:

```
import { expect } from "chai";
import { Coordenadas } from "../src/coordenadas";

const coordenadas = new Coordenadas(0, 0, 0);

describe("coordenadas test", () => {
  it("latitud set", () => {
    coordenadas.latitud = 1;
  });
  it("latitud get", () => {
    expect(coordenadas.latitud).to.be.equal(1);
  });

  it("altitud set", () => {
    coordenadas.altitud = 1;
  });
  it("altitud get", () => {
    expect(coordenadas.altitud).to.be.equal(1);
  });

  it("longitud set", () => {
    coordenadas.longitud = 1;
  });
  it("longitud get", () => {
    expect(coordenadas.longitud).to.be.equal(1);
  });
});

```

### Clase Usuario
El codigo de esta clase es:

```
import { Ruta } from "./rutas";
import { Reto } from "./retos";
import { Grupo } from "./grupos";

/**
 * clase para la craciond e usuarios
 */
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

  /**
   * constructor de la clase Usuario
   * @param nombre nombre del usuario
   * @param tipoActividad el tipo de la actividad que realiza el usuario, puede ser "bicicleta" o "paseo"
   * @param amigos array con los id de los usuarios agregados como amigos
   * @param grupos agrupaciones de IDs de usuarios
   * @param rutas ids de las rutas favoritas del usuario
   * @param retos ids de los retos activos del usuario
   * @param id id del usuario, si no se proporciona uno, se generará automaticamente
   */
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
  /**
   * metodo para generar un id
   * @param min valor minimio que puede adquirir un id
   * @param max valor maximo que puede adquirir un id
   * @returns numero aleatorio generado dentro del rango de valores
   */
  getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  /**
   * getter para obteenr el nombre del usuario
   * @returns nombre del usuario
   */
  get nombre(): string {
    return this._nombre;
  }
  /**
   * metodo para cambiar el nombre del usuario
   * @param nombre nuevo nombre del usuario
   */
  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  /**
   * metodo para obtner el tipo de actividad del usuario
   * @returns el tipo de actividad
   */
  get tipoActividad(): "bicicleta" | "correr" {
    return this._tipoActividad;
  }

  /**
   * metood para cambiar el tipo de actividad del usuario
   * @param tipoActividad el nuevo tipo de actividad del usuario
   */
  set tipoActividad(tipoActividad: "bicicleta" | "correr") {
    this._tipoActividad = tipoActividad;
  }

  /**
   * metodo para obtener los ids de los amigos del usuario
   * @returns array de ids de los amigos del usuario
   */
  get amigos(): Usuario[] {
    return this._amigos;
  }

  /**
   * metodo para definir los amigos del usuario
   */
  set amigos(amigos: Usuario[]) {
    this._amigos = amigos;
  }

  /**
   * metodo para añadir un amigo a la lista
   * @param amigo id del amigo  añadir
   * @returns true si lo ha añadido, false si no lo ha añadido
   */
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

  /**
   * metodo para eliminar un amigo de la lista
   * @param amigo id del amigo
   * @returns true si lo ha eliminado, false si no lo ah eliminado
   */
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
  /**
   * metodo par obtener los grupos de amigos del usuario
   * @returns grupos de maigos del usuario
   */
  get grupos(): Grupo[] {
    return this._grupos;
  }
  /**
   * metodo para definir los grupos de amigos del usuario
   * @param grupos nuvos grupos del usuario
   */
  set grupos(grupos: Grupo[]) {
    this._grupos = grupos;
  }

  /**
   * metodo para añadir un grupo de amigos al usuario
   * @param grupo grupo a añadir
   * @returns false si el grupo ya existe, true si lo añadió
   * esta funcion no funciona correcta mente hasta que se implemente la clase grupo
   */
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

  /**
   * metodo para eliminar un grupo del usuario
   * @param grupo grupo a eliminar
   * @returns false si no existe el grupo, true si lo elimina
   * metodo no funciona correcto hasta que se implemente clase grupo
   */
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

  /**
   * metodo para obtener las rutas de un usuario
   * @returns rutas favoritas del usuario
   */
  get rutas(): Ruta[] {
    return this._rutasFavoritas;
  }

  /**
   * metodo para definir las rutas de un usuario
   * @param nuevas rutas favoritas del usuario
   */
  set rutas(rutas: Ruta[]) {
    this._rutasFavoritas = rutas;
  }

  /**
   * metodo para añadir una ruta a la lista de rutas favoritas de un usuario
   * @param ruta id de la ruta a añadir en el array
   * @returns false si no ha podido añadir la ruta a la lista o true si ah conseguido añadirla
   */
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

  /**
   * metodo para eliminar una ruta de la lista de favoritos de un usuario
   * @param ruta id de la ruta a eliminar
   * @returns true si la ha eliminado o false si no la eliminó
   */
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

  /**
   * metodo para obtener los retos activos del usuario
   * @returns array de los ids de los retos que estés activos
   */
  get retos(): Reto[] {
    return this._retosActivos;
  }

  /**
   * metodo apra defnir los retos activos del usuario
   * @param retos nuevos retos del usuario
   */
  set retos(retos: Reto[]) {
    this._retosActivos = retos;
  }

  /**
   * metodo para añadir un reto a la lista
   * @param reto  id del reto a añadir
   * @returns true si lo añadió correctamente y false si no
   */
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

  /**
   * metodo para eliminar un reto de la lista de retos activos
   * @param reto id del reto a eliminar
   * @returns true si lo eliminó o false si no lo eliminó
   */
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

Los test realizados para esta clase son:

```
import "mocha";
import { expect } from "chai";

import {userDos, userUno,grupo_2, grupo,ruta_1, ruta_2,reto_2,reto_1} from "../src/index"



describe("Clase Usuario", () => {
  it("Set nombre de usuario", () => {
    userUno.nombre = "María";
  });
  it("Nombre de usuario uno bien", () => {
    expect(userUno.nombre).to.be.equal("María");
  });
  it("Nombre de usuario uno mal", () => {
    expect(userUno.nombre).to.not.be.equal("Maía");
  });

  it("Set tipo de actividad", () => {
    userUno.tipoActividad = "correr";
  });
  it("Get tipo de actividad bien", () => {
    expect(userUno.tipoActividad).to.be.equal("correr");
  });
  it("Get tipo de actividad mal", () => {
    expect(userUno.tipoActividad).to.not.be.equal("bicicleta");
  });

  it("Set amigos", () => {
    userUno.amigos = [];
  });
  it("add amigo true", () => {
    expect(userUno.addAmigo(userDos)).to.be.true;
  });
  it("add amigo false", () => {
    expect(userUno.addAmigo(userDos)).to.be.false;
  });
  it("delete amigo true", () => {
    expect(userUno.deleteAmigo(userDos)).to.be.true;
  });
  it("delete amigo false", () => {
    expect(userUno.deleteAmigo(userDos)).to.be.false;
  });
  it("Get amigos bien", () => {
    expect(userUno.amigos).to.be.empty;
  });
  it("Get amigos mal", () => {
    expect(userUno.amigos).to.not.be.equal([userDos]);
  });

  it("Set grupos de amigos", () => {
    userUno.grupos = [grupo];
  });
  it("add grupo true", () => {
    expect(userUno.addGrupo(grupo_2)).to.be.true;
  });
  it("add grupo false", () => {
    expect(userUno.addGrupo(grupo_2)).to.be.false;
  });
  it("delete grupo true", () => {
    expect(userUno.deleteGrupo(grupo_2)).to.be.true;
  });
  it("delete grupo false", () => {
    expect(userUno.deleteGrupo(grupo_2)).to.be.false;
  });
  it("Get grupos bien", () => {
    expect(userUno.grupos).to.deep.equal([grupo]);
  });
  it("Get grupos mal", () => {
    expect(userUno.grupos).to.not.be.equal([1, 2]);
  });

  it("Set ruta ", () => {
    userUno.rutas = [ruta_1];
  });
  it("add ruta true", () => {
    expect(userUno.addRuta(ruta_2)).to.be.true;
  });
  it("add ruta false", () => {
    expect(userUno.addRuta(ruta_2)).to.be.false;
  });
  it("delete ruta true", () => {
    expect(userUno.deleteRuta(ruta_2)).to.be.true;
  });
  it("delete ruta false", () => {
    expect(userUno.deleteRuta(ruta_2)).to.be.false;
  });
  it("Get ruta bien", () => {
    expect(userUno.rutas).to.deep.equal([ruta_1]);
  });
  it("Get ruta mal", () => {
    expect(userUno.rutas).to.not.deep.equal(ruta_2);
  });

  it("Set retos ", () => {
    userUno.retos = [reto_2];
  });
  it("add reto true", () => {
    expect(userUno.addReto(reto_1)).to.be.true;
  });
  it("add reto false", () => {
    expect(userUno.addReto(reto_1)).to.be.false;
  });
  it("delete reto true", () => {
    expect(userUno.deleteReto(reto_1)).to.be.true;
  });
  it("delete reto false", () => {
    expect(userUno.deleteReto(reto_1)).to.be.false;
  });
  it("Get retos bien", () => {
    expect(userUno.retos).to.deep.equal([reto_2]);
  });
  it("Get retos mal", () => {
    expect(userUno.amigos).to.not.deep.equal([reto_1]);
  });
});

```

### Clase Grupo
El codigo de esta clase es:

```
import { EstadisticasEntrenamiento } from "./estadisticas_entrenamiento";
import { Ruta } from "./rutas";
import { Usuario } from "./usuario";

/**
 * Tipo que representa al historial de rutas realizadas por un grupo.
 * Cada tupla contiene la fecha de realización, IDs de los usuarios e ID de ruta.
 */
export type historialRutasGrupal = [string, Usuario[], Ruta][];

/**
 * Clase que representa a un grupo.
 * Un grupo esta conformada por diversos usuarios que realizan actividades en conjunto.
 */
export class Grupo {
  private _id: number;
  private _nombre: string;
  private _participantes: Usuario[];
  private _estadisticasGrupal: EstadisticasEntrenamiento;
  private _clasificacion: number[];
  private _rutasFavoritas: Ruta[];
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
    return this._nombre;
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
  get participantes(): Usuario[] {
    return this._participantes;
  }

  /**
   * Establece una nueva lista de IDs de participantes del grupo.
   * @param nuevosParticipantes Nueva lista de IDs de participantes del grupo.
   */
  set participantes(nuevosParticipantes: Usuario[]) {
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
  get rutasFavoritas(): Ruta[] {
    return this._rutasFavoritas;
  }

  /**
   * Establece nuevas rutas favoritas del grupo.
   * @param nuevasRutas Nuevas rutas favoritas del grupo.
   */
  set rutasFavoritas(nuevasRutas: Ruta[]) {
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

```
import "mocha";
import { expect } from "chai";
import { grupo, userDos, ruta_1, ruta_2 } from "../src/index"
import { EstadisticasEntrenamiento } from "../src/estadisticas_entrenamiento";

describe("grupo test", () => {
  it("set id", () => {
    grupo.id = 6;
  });
  it("get id", () => {
    expect(grupo.id).to.equal(6);
  });

  it("set nombre", () => {
    grupo.nombre = "nombre_prueba";
  });
  it("get nombre", () => {
    expect(grupo.nombre).to.be.equal("nombre_prueba");
  });

  it("set participantes", () => {
    grupo.participantes = [userDos];
  });
  it("get participantes", () => {
    expect(grupo.participantes).to.deep.equal([userDos]);
  });

  it("set estadisticas", () => {
    grupo.estadisticasGrupal = new EstadisticasEntrenamiento(
      [1, 2],
      [3, 4],
      [5, 6]
    );
  });
  it("get estadisticas", () => {
    expect(grupo.estadisticasGrupal).to.deep.equal(
      new EstadisticasEntrenamiento([1, 2], [3, 4], [5, 6])
    );
  });

  it("set clasificacion", () => {
    grupo.clasificacion = [2, 5, 1];
  });
  it("get clasificacion", () => {
    expect(grupo.clasificacion).to.deep.equal([2, 5, 1]);
  });

  it("set rutas favoritas", () => {
    grupo.rutasFavoritas = [ruta_2, ruta_1];
  });
  it("get rutas favoritas", () => {
    expect(grupo.rutasFavoritas).to.deep.equal([ruta_2, ruta_1]);
  });

  it("set historial", () => {
    grupo.historialRutas = [["10-01-2022", [userDos], ruta_2]];
  });
  it("get historial", () => {
    expect(grupo.historialRutas).to.deep.equal([["10-01-2022", [userDos], ruta_2]]);
  });
});
```

### Clase EstadisticaEntrenamiento
El codigo de esta clase es:

```
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

El código define una clase llamada "EstadisticasEntrenamiento" que representa las estadísticas de entrenamiento por semana, mes y año. La clase tiene tres propiedades privadas "_estadisticaSemanal", "_estadisticaMensual" y "_estadisticaAnual" que almacenan los km recorridos y el desnivel total acumulado en una tupla de dos números.

El constructor de la clase toma tres parámetros que corresponden a las estadísticas semanales, mensuales y anuales, y los asigna a las propiedades correspondientes. La clase también tiene tres pares de getters y setters que permiten obtener y establecer las estadísticas semanales, mensuales y anuales.

En resumen, la clase proporciona una manera conveniente de almacenar y manipular las estadísticas de entrenamiento en diferentes periodos de tiempo.

Los test realizados para esta clase son:

```
import "mocha";
import { expect } from "chai";
import { estadistica } from "../src/index"

describe("index test", () => {
  it("set estadistica semanal", () => {
    estadistica.estadisticaSemanal = [1,2]
  });
  it("get estadistica semanal", () => {
    expect(estadistica.estadisticaSemanal ).to.deep.equal([1,2])
  });
  
  it("set estadistica mensual", () => {
    estadistica.estadisticaMensual = [1,2]
  });
  it("get estadistica mensual", () => {
    expect(estadistica.estadisticaMensual).to.deep.equal([1,2])
  });
  it("set estadistica anual", () => {
    estadistica.estadisticaAnual = [1,2]
  });
  it("get estadistica anual", () => {
    expect(estadistica.estadisticaAnual).to.deep.equal([1,2])
  });
  
});
```
## Conclusión

## Referencias

1. https://programmingwithjon.medium.com/your-first-typescript-project-part-3-8c84a6145d7e

2. https://openai.com/blog/chatgpt