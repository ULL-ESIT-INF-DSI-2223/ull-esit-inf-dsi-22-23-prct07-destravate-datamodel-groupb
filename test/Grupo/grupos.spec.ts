import "mocha";
import { expect } from "chai";
import { grupo, userDos, ruta_1, ruta_2 } from "../../src/index"
import { EstadisticasEntrenamiento } from "../../src/Usuario/estadisticas_entrenamiento";

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
