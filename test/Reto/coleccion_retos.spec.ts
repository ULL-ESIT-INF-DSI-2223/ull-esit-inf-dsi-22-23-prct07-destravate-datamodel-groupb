import "mocha";
import { expect } from "chai";
import { ColeccionRetos } from "../../src/Reto/coleccion_retos";
import { reto_1, reto_2 } from "../../src/index";

describe("Clase ColeccionRetos", () => {
  const coleccion_rutas = new ColeccionRetos([reto_1]);
  it("add() añade una nueva ruta", () => {
    coleccion_rutas.add(reto_2);
    expect(coleccion_rutas._listaElementos).to.deep.equal([reto_1, reto_2]);
  });
  it("remove() elimina una ruta", () => {
    coleccion_rutas.remove(0);
    expect(coleccion_rutas._listaElementos).to.deep.equal([reto_2]);
  });
  it("modify() modifica una ruta", () => {
    coleccion_rutas.modify(0, reto_1);
    expect(coleccion_rutas._listaElementos).to.deep.equal([reto_1]);
    coleccion_rutas.add(reto_2);
  });

  it("buscarNombre()", () => {
    coleccion_rutas.buscarNombre("asc");
    expect(coleccion_rutas._listaElementos).to.deep.equal([reto_2, reto_1]);
    coleccion_rutas.buscarNombre("desc");
    expect(coleccion_rutas._listaElementos).to.deep.equal([reto_1, reto_2]);
  });
  it("buscarCantidadUsuarios()", () => {
    coleccion_rutas.buscarCantidadUsuarios("asc");
    expect(coleccion_rutas._listaElementos).to.deep.equal([reto_1, reto_2]);
  });
  it("buscarKilometros()", () => {
    coleccion_rutas.buscarKilometros("asc");
    expect(coleccion_rutas._listaElementos).to.deep.equal([reto_2, reto_1]);
    coleccion_rutas.buscarKilometros("desc");
    expect(coleccion_rutas._listaElementos).to.deep.equal([reto_1, reto_2]);
  });
});
