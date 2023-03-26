import "mocha";
import { expect } from "chai";
import { grupo_1, userDos, ruta_1, ruta_2 } from "../../src/index";
import { EstadisticasEntrenamiento } from "../../src/Usuario/estadisticas_entrenamiento";

describe("grupo test", () => {
  it("set id", () => {
    grupo_1.id = 6;
  });
  it("get id", () => {
    expect(grupo_1.id).to.equal(6);
  });

  it("set nombre", () => {
    grupo_1.nombre = "nombre_prueba";
  });
  it("get nombre", () => {
    expect(grupo_1.nombre).to.be.equal("nombre_prueba");
  });

  it("set participantes", () => {
    grupo_1.participantes = [userDos];
  });
  it("get participantes", () => {
    expect(grupo_1.participantes).to.deep.equal([userDos]);
  });

  it("set estadisticas", () => {
    grupo_1.estadisticasGrupal = new EstadisticasEntrenamiento(
      [1, 2],
      [3, 4],
      [5, 6]
    );
  });
  it("get estadisticas", () => {
    expect(grupo_1.estadisticasGrupal).to.deep.equal(
      new EstadisticasEntrenamiento([1, 2], [3, 4], [5, 6])
    );
  });

  it("set clasificacion", () => {
    grupo_1.clasificacion = [2, 5, 1];
  });
  it("get clasificacion", () => {
    expect(grupo_1.clasificacion).to.deep.equal([2, 5, 1]);
  });

  it("set rutas favoritas", () => {
    grupo_1.rutasFavoritas = [ruta_2, ruta_1];
  });
  it("get rutas favoritas", () => {
    expect(grupo_1.rutasFavoritas).to.deep.equal([ruta_2, ruta_1]);
  });

  it("set historial", () => {
    grupo_1.historialRutas = [["10-01-2022", [userDos], ruta_2]];
  });
  it("get historial", () => {
    expect(grupo_1.historialRutas).to.deep.equal([
      ["10-01-2022", [userDos], ruta_2],
    ]);
  });
});
