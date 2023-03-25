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
