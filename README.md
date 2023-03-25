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

Los test realizados para esta clase son:

```ts
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

Los test realizados para esta clase son:

```ts
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

Los test realizados para esta clase son:

```ts
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

```ts
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

Los test realizados para esta clase son:

```ts
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