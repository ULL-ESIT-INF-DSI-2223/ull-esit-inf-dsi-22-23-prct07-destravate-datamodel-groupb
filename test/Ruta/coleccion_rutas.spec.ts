import "mocha";
import { expect } from "chai";
import { ColeccionRutas } from "../../src/Ruta/coleccion_rutas"
import { ruta_1, ruta_2 } from "../../src/index"

describe("Clase ColeccionRutas", () => {
    const coleccion_rutas = new ColeccionRutas([ruta_1]);
    it("add() añade una nueva ruta", () => {
        coleccion_rutas.add(ruta_2);
        expect(coleccion_rutas._listaElementos).to.deep.equal([ruta_1, ruta_2]);
    });
    it("remove() elimina una ruta", () => {
        coleccion_rutas.remove(0);
        expect(coleccion_rutas._listaElementos).to.deep.equal([ruta_2]);
    });
    it("modify() modifica una ruta", () => {
        coleccion_rutas.modify(0, ruta_1);
        expect(coleccion_rutas._listaElementos).to.deep.equal([ruta_1]);
        coleccion_rutas.add(ruta_2);
    });

    it("buscarNombre()", () => {
        coleccion_rutas.buscarNombre("asc");
        expect(coleccion_rutas._listaElementos).to.deep.equal([ruta_1, ruta_2]);
        coleccion_rutas.buscarNombre("desc");
        expect(coleccion_rutas._listaElementos).to.deep.equal([ruta_2, ruta_1]);
    });
    it("buscarCantidadUsuarios()", () => {
        coleccion_rutas.buscarCantidadUsuarios("asc");
        expect(coleccion_rutas._listaElementos).to.deep.equal([ruta_2, ruta_1]);
    });
    it("buscarLongitud()", () => {
        coleccion_rutas.buscarLongitud("asc");
        expect(coleccion_rutas._listaElementos).to.deep.equal([ruta_1, ruta_2]);
        coleccion_rutas.buscarLongitud("desc");
        expect(coleccion_rutas._listaElementos).to.deep.equal([ruta_2, ruta_1]);
    });
    it("buscarCalificacion()", () => {
        coleccion_rutas.buscarCalificacion("asc");
        expect(coleccion_rutas._listaElementos).to.deep.equal([ruta_1, ruta_2]);
        coleccion_rutas.buscarCalificacion("desc");
        expect(coleccion_rutas._listaElementos).to.deep.equal([ruta_2, ruta_1]);
    });
    it("buscarTipoActividad()", () => {
        coleccion_rutas.buscarTipoActividad("asc");
        expect(coleccion_rutas._listaElementos).to.deep.equal([ruta_2, ruta_1]);
    });
});