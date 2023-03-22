export class Ruta {
    private _nombre: string;
    private _distancia: number;
    private _duracion: number;
    private _coordenadas: Coordenadas[];
  
    constructor(nombre: string, distancia: number, duracion: number, coordenadas: Coordenadas[]) {
      this._nombre = nombre;
      this._distancia = distancia;
      this._duracion = duracion;
      this._coordenadas = coordenadas;
    }
  
    get nombre(): string {
      return this._nombre;
    }
  
    set nombre(nombre: string) {
      this._nombre = nombre;
    }
  
    get distancia(): number {
      return this._distancia;
    }
  
    set distancia(distancia: number) {
      this._distancia = distancia;
    }
  
    get duracion(): number {
      return this._duracion;
    }
  
    set duracion(duracion: number) {
      this._duracion = duracion;
    }
  
    get coordenadas(): Coordenadas[] {
      return this._coordenadas;
    }
  
    set coordenadas(coordenadas: Coordenadas[]) {
      this._coordenadas = coordenadas;
    }
  }
  
  export class Coordenadas {
    private _latitud: number;
    private _longitud: number;
  
    constructor(latitud: number, longitud: number) {
      this._latitud = latitud;
      this._longitud = longitud;
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
  }
  
  const rutas: Ruta[] = [
    new Ruta(
      "Ruta 1",
      10,
      60,
      [
        new Coordenadas(10.1234, -72.3456),
        new Coordenadas(10.2345, -72.4567),
        new Coordenadas(10.3456, -72.5678),
      ]
    ),
    new Ruta(
      "Ruta 2",
      8,
      45,
      [
        new Coordenadas(10.5678, -72.7890),
        new Coordenadas(10.6789, -72.8901),
        new Coordenadas(10.7890, -73.0012),
      ]
    ),
    // ... más rutas
  ];
  