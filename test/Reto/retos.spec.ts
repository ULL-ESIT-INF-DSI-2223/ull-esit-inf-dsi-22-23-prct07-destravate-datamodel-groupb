import "mocha";
import { expect } from "chai";
import {reto, ruta_1, ruta_2, userUno}from "../../src/index"

describe("Clase Reto", () => {


  it("Id del reto", () => {
    expect(reto.id).to.equal(152);
  });
  it("Cambiar Id del reto", () => {
    reto.id = 23;
  });

  it("Nombre del reto", () => {
    expect(reto.nombre).to.equal("Reto de prueba");
  });

  it("Cambiar Nombre del reto", () => {
    reto.nombre = "Prueba de nombre";
  });

  it("Rutas del reto", () => {
    expect(reto.rutas).to.deep.equal([ruta_1, ruta_2]);
  });

  it("Cambia Rutas del reto", () => {
    reto.rutas = [ruta_1];
  });

  it("Tipo de actividad del reto", () => {
    expect(reto.tipo).to.equal("correr");
  });

  it("cambio Tipo de actividad del reto", () => {
    reto.tipo = "bicicleta";
  });

  it("Kilómetros totales del reto", () => {
    expect(reto.kilometros).to.equal(10);
  });

  it("Cambiar Kilómetros totales del reto", () => {
    reto.kilometros = 15;
  });

  it("Usuarios que realizan el reto", () => {
    expect(reto.usuarios).to.deep.equal([]);
  });

  it("Cambiar Usuarios que realizan el reto", () => {
    reto.usuarios = [userUno];
  });
});
