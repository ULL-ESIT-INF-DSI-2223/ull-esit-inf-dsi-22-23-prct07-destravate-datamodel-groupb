import "mocha";
import { expect } from "chai";
import { Coordenadas } from "../../src/Ruta/coordenadas";
import { ruta, userUno } from "../../src/index"



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
