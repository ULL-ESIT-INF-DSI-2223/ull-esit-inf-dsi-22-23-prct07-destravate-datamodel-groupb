export class Ruta {
    private _nombre: string;
    private _distancia: number;
    private _duracion: number;
    private _coordenadas: Coordenadas[]; // coordenada inicial es el prinncipio y la final es la final
    private _desnivel: number = 0

    constructor(nombre: string, distancia: number, duracion: number, coordenadas: Coordenadas[]) {
      this._nombre = nombre;
      this._distancia = distancia;
      this._duracion = duracion;
      this._coordenadas = coordenadas;
      this.setDesnivel()
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

    setDesnivel(){
      this._desnivel = this.coordenadas[0].altitud - this.coordenadas[this.coordenadas.length - 1 ].altitud 
      this._desnivel < 0 ? this._desnivel = this.desnivel * -1 : undefined
    }

    get desnivel(){
      return this._desnivel
    } 
  }
  
  export class Coordenadas {
    private _latitud: number;
    private _longitud: number;
    private _altitud: number;
  
    constructor(latitud: number, longitud: number, altitud: number) {
      this._latitud = latitud;
      this._longitud = longitud;
      this._altitud = altitud
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

    get altitud(): number{
      return this._altitud
    }

    set altitud(altitud: number){
      this._altitud = altitud
    }
  }
  

