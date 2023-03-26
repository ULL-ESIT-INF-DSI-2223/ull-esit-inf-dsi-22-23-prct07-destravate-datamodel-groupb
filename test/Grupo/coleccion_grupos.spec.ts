import "mocha";
import { expect } from "chai";
import { ColeccionGrupos } from "../../src/Grupo/coleccion_grupos";
import { grupo_1, grupo_2 } from "../../src/index";

describe("Clase ColeccionGrupos", () => {
  const coleccion_grupos = new ColeccionGrupos([grupo_1]);
  it("add() añade una nueva ruta", () => {
    coleccion_grupos.add(grupo_2);
    expect(coleccion_grupos._listaElementos).to.deep.equal([grupo_1, grupo_2]);
  });
  it("remove() elimina una ruta", () => {
    coleccion_grupos.remove(0);
    expect(coleccion_grupos._listaElementos).to.deep.equal([grupo_2]);
  });
  it("modify() modifica una ruta", () => {
    coleccion_grupos.modify(0, grupo_1);
    expect(coleccion_grupos._listaElementos).to.deep.equal([grupo_1]);
    coleccion_grupos.add(grupo_2);
  });

  it("buscarNombre()", () => {
    coleccion_grupos.buscarNombre("asc");
    expect(coleccion_grupos._listaElementos).to.deep.equal([grupo_1, grupo_2]);
    coleccion_grupos.buscarNombre("desc");
    expect(coleccion_grupos._listaElementos).to.deep.equal([grupo_2, grupo_1]);
  });
  it("buscarCantidadMiembros()", () => {
    coleccion_grupos.buscarCantidadMiembros("asc");
    expect(coleccion_grupos._listaElementos).to.deep.equal([grupo_2, grupo_1]);
    coleccion_grupos.buscarCantidadMiembros("desc");
    expect(coleccion_grupos._listaElementos).to.deep.equal([grupo_1, grupo_2]);
  });
  it("buscarKilometros()", () => {
    coleccion_grupos.buscarKilometros("asc", "sem");
    expect(coleccion_grupos._listaElementos).to.deep.equal([grupo_2, grupo_1]);
    coleccion_grupos.buscarKilometros("asc", "mes");
    expect(coleccion_grupos._listaElementos).to.deep.equal([grupo_2, grupo_1]);
    coleccion_grupos.buscarKilometros("asc", "año");
    expect(coleccion_grupos._listaElementos).to.deep.equal([grupo_2, grupo_1]);
    coleccion_grupos.buscarKilometros("desc", "sem");
    expect(coleccion_grupos._listaElementos).to.deep.equal([grupo_1, grupo_2]);
    coleccion_grupos.buscarKilometros("desc", "mes");
    expect(coleccion_grupos._listaElementos).to.deep.equal([grupo_1, grupo_2]);
    coleccion_grupos.buscarKilometros("desc", "año");
    expect(coleccion_grupos._listaElementos).to.deep.equal([grupo_1, grupo_2]);
  });
});
