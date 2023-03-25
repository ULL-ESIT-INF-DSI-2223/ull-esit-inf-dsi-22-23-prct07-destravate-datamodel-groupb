import "mocha";
import { expect } from "chai";
import { estadistica_1 } from "../../src/index"

describe("index test", () => {
  it("set estadistica semanal", () => {
    estadistica_1.estadisticaSemanal = [1,2]
  });
  it("get estadistica semanal", () => {
    expect(estadistica_1.estadisticaSemanal ).to.deep.equal([1,2])
  });
  it("set estadistica mensual", () => {
    estadistica_1.estadisticaMensual = [1,2]
  });
  it("get estadistica mensual", () => {
    expect(estadistica_1.estadisticaMensual).to.deep.equal([1,2])
  });
  it("set estadistica anual", () => {
    estadistica_1.estadisticaAnual = [1,2]
  });
  it("get estadistica anual", () => {
    expect(estadistica_1.estadisticaAnual).to.deep.equal([1,2])
  });
});
