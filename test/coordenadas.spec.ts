import { expect } from "chai";
import { Coordenadas } from "../src/coordenadas";

const coordenadas = new Coordenadas(0, 0, 0);

describe("coordenadas test", () => {
  it("latitud set", () => {
    coordenadas.latitud = 1;
  });
  it("latitud get", () => {
    expect(coordenadas.latitud).to.be.equal(1);
  });

  it("altitud set", () => {
    coordenadas.altitud = 1;
  });
  it("altitud get", () => {
    expect(coordenadas.altitud).to.be.equal(1);
  });

  it("longitud set", () => {
    coordenadas.longitud = 1;
  });
  it("longitud get", () => {
    expect(coordenadas.longitud).to.be.equal(1);
  });
});
