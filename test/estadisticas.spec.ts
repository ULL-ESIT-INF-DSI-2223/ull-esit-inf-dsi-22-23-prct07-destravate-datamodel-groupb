import "mocha";
import { expect } from "chai";
import { EstadisticasEntrenamiento } from "../src/Usuario/estadisticas_entrenamiento";
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
