import "mocha";
import { expect } from "chai";
import { Reto } from "../src/retos"
import { Ruta } from "../src/rutas";
import { Coordenadas } from "../src/coordenadas";

describe('Clase Reto', () => {
    const ruta_1 = new Ruta(1, "Ruta de prueba", new Coordenadas(0, 0, 0), new Coordenadas(1, 1, 1), 10, 55,
    [1, 2, 3], "correr", 4.5);
    const ruta_2 = new Ruta(2, "Ruta por el teide", new Coordenadas(6, 7, 5), new Coordenadas(12, 14, 6), 27, 217,
    [2, 3, 4], "correr", 4.8);
    const reto = new Reto(152, "Reto de prueba", [ruta_1, ruta_2], "correr", [1, 2, 3, 4]);

    it("Id del reto", () => {
        expect(reto.id).to.equal(152);
    });

    it("Nombre del reto", () => {
        expect(reto.nombre).to.equal("Reto de prueba");
    });

    it("Rutas del reto", () => {
        expect(reto.rutas).to.deep.equal([ruta_1, ruta_2]);
    });

    it("Tipo de actividad del reto", () => {
        expect(reto.tipo).to.equal("correr");
    });

    it("Kilómetros totales del reto", () => {
        expect(reto.kilometros).to.equal(37);
    });

    it("Usuarios que realizan el reto", () => {
        expect(reto.usuarios).to.deep.equal([1, 2, 3, 4]);
    });
});