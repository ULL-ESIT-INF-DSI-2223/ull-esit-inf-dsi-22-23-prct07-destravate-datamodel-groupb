import "mocha";
import { expect } from "chai";
import { reto_1, ruta_1, ruta_2, user1 } from "../../src/index";

describe("Clase Reto", () => {
  it("Id del reto", () => {
    expect(reto_1.id).to.equal(152);
  });
  it("Cambiar Id del reto", () => {
    reto_1.id = 23;
  });

  it("Nombre del reto", () => {
    expect(reto_1.nombre).to.equal("Reto de prueba");
  });

  it("Cambiar Nombre del reto", () => {
    reto_1.nombre = "Prueba de nombre";
  });

  it("Rutas del reto", () => {
    expect(reto_1.rutas).to.deep.equal([ruta_1, ruta_2]);
  });

  it("Cambia Rutas del reto", () => {
    reto_1.rutas = [ruta_1];
  });

  it("Tipo de actividad del reto", () => {
    expect(reto_1.tipo).to.equal("correr");
  });

  it("cambio Tipo de actividad del reto", () => {
    reto_1.tipo = "bicicleta";
  });

  it("Kilómetros totales del reto", () => {
    expect(reto_1.kilometros).to.equal(10);
  });

  it("Cambiar Kilómetros totales del reto", () => {
    reto_1.kilometros = 15;
  });

  it("Usuarios que realizan el reto", () => {
    expect(reto_1.usuarios).to.deep.equal([]);
  });

  it("Cambiar Usuarios que realizan el reto", () => {
    reto_1.usuarios = [user1];
  });
});
