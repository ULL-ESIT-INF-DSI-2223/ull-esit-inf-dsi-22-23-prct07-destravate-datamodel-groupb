import "mocha";
import { expect } from "chai";
import { Ruta } from "../src/rutas";
import { Coordenadas } from "../src/coordenadas";

describe("Ruta", () => {
  const ruta = new Ruta(
    1,
    "Ruta de prueba",
    new Coordenadas(0, 0, 0),
    new Coordenadas(1, 1, 1),
    10,
    100,
    [1, 2, 3],
    "Senderismo",
    4.5
  );

  it("should have correct properties", () => {
    expect(ruta.id).to.equal(1);
    expect(ruta.nombre).to.equal("Ruta de prueba");
    expect(ruta.geolocalizacionInicio.latitud).to.equal(0);
    expect(ruta.geolocalizacionInicio.longitud).to.equal(0);
    expect(ruta.geolocalizacionInicio.altitud).to.equal(0);
    expect(ruta.geolocalizacionFin.latitud).to.equal(1);
    expect(ruta.geolocalizacionFin.longitud).to.equal(1);
    expect(ruta.geolocalizacionFin.altitud).to.equal(1);
    expect(ruta.longitud).to.equal(10);
    expect(ruta.desnivelMedio).to.equal(100);
    expect(ruta.usuarios).to.deep.equal([1, 2, 3]);
    expect(ruta.tipoActividad).to.equal("Senderismo");
    expect(ruta.calificacionMedia).to.equal(4.5);
  });
});
