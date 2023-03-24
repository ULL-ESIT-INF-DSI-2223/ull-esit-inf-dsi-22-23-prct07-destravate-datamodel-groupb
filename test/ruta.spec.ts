import "mocha";
import { expect } from "chai";
import { Ruta } from "../src/rutas";
import { Coordenadas } from "../src/coordenadas";

describe("Clase Ruta", () => {
  const ruta = new Ruta(1, "Ruta de prueba", new Coordenadas(0, 0, 0), new Coordenadas(1, 1, 1), 10, 100,
    [1, 2, 3], "bicicleta", 4.5);

  it("Id de ruta", () => {
    expect(ruta.id).to.equal(1);
  });

  it("Nombre de ruta", () => {
    expect(ruta.nombre).to.equal("Ruta de prueba");
  });

  it("Geolocalización de inicio", () => {
    expect(ruta.geolocalizacionInicio.latitud).to.equal(0);
    expect(ruta.geolocalizacionInicio.longitud).to.equal(0);
    expect(ruta.geolocalizacionInicio.altitud).to.equal(0);
  });

  it("Geolocalización final", () => {
    expect(ruta.geolocalizacionFin.latitud).to.equal(1);
    expect(ruta.geolocalizacionFin.longitud).to.equal(1);
    expect(ruta.geolocalizacionFin.altitud).to.equal(1);
  });

  it("Longitud de ruta", () => {
    expect(ruta.longitud).to.equal(10);
  });

  it("Desnivel medio", () => {
    expect(ruta.desnivelMedio).to.equal(100);
  });

  it("Lista de usuarios", () => {
    expect(ruta.usuarios).to.deep.equal([1, 2, 3]);
  });

  it("Tipo de actividad", () => {
    expect(ruta.tipoActividad).to.equal("bicicleta");
  });

  it("Calificación media de ruta", () => {
    expect(ruta.calificacionMedia).to.equal(4.5);
  });
});
