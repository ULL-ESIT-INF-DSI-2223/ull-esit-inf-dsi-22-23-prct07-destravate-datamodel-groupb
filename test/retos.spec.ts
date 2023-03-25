import "mocha";
import { expect } from "chai";
import { Reto } from "../src/retos"
import { Ruta } from "../src/rutas";
import { Coordenadas } from "../src/coordenadas";
import { Usuario } from "../src/usuario";
import { userDos } from "./usuario.spec";

describe('Clase Reto', () => {


    const ruta_1 = new Ruta(1, "Ruta de prueba", new Coordenadas(0, 0, 0), new Coordenadas(1, 1, 1), 10, 55,
    [userDos], "correr", 4.5);
    const ruta_2 = new Ruta(2, "Ruta por el teide", new Coordenadas(6, 7, 5), new Coordenadas(12, 14, 6), 27, 217,
    [], "correr", 4.8);
    const reto = new Reto(152, "Reto de prueba", [ruta_1, ruta_2], "correr", []);

    let userUno = new Usuario(
        "Mortadelo",
        "bicicleta",
        [],
        [
          [2, 5],
          [20, 33],
        ],
        [ruta_1, ruta_2],
        [reto],
        32
      );

    it("Id del reto", () => {
        expect(reto.id).to.equal(152);
    });
    it("Cambiar Id del reto", () => {
        reto.id = 23
    });

    it("Nombre del reto", () => {
        expect(reto.nombre).to.equal("Reto de prueba");
    });

    it("Cambiar Nombre del reto", () => {
        reto.nombre = "Prueba de nombre"
    });

    it("Rutas del reto", () => {
        expect(reto.rutas).to.deep.equal([ruta_1, ruta_2]);
    });

    it("Cambia Rutas del reto", () => {
        reto.rutas = [ruta_1]
    });

    it("Tipo de actividad del reto", () => {
        expect(reto.tipo).to.equal("correr");
    });

    it("cambio Tipo de actividad del reto", () => {
        reto.tipo = "bicicleta"
    });

    it("Kilómetros totales del reto", () => {
        expect(reto.kilometros).to.equal(10);
    });

    it("Cambiar Kilómetros totales del reto", () => {
        reto.kilometos = 15
    });


    it("Usuarios que realizan el reto", () => {
        expect(reto.usuarios).to.deep.equal([]);
    });

    it("Cambiar Usuarios que realizan el reto", () => {
        reto.usuarios = [userUno]
    });


});