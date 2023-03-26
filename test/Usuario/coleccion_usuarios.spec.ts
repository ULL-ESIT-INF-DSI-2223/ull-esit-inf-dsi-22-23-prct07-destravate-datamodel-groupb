import "mocha";
import { expect } from "chai";
import { ColeccionUsuarios } from "../../src/Usuario/coleccion_usuarios";
import { user1, user2 } from "../../src/index";

describe("Clase ColeccionUsuarios", () => {
  const coleccion_usuarios = new ColeccionUsuarios([user1]);
  it("add() añade una nueva ruta", () => {
    coleccion_usuarios.add(user2);
    expect(coleccion_usuarios._listaElementos).to.deep.equal([
      user1,
      user2,
    ]);
  });
  it("remove() elimina una ruta", () => {
    coleccion_usuarios.remove(0);
    expect(coleccion_usuarios._listaElementos).to.deep.equal([user2]);
  });
  it("modify() modifica una ruta", () => {
    coleccion_usuarios.modify(0, user1);
    expect(coleccion_usuarios._listaElementos).to.deep.equal([user1]);
    coleccion_usuarios.add(user2);
  });

  it("buscarNombre()", () => {
    coleccion_usuarios.buscarNombre("asc");
    expect(coleccion_usuarios._listaElementos).to.deep.equal([
      user2,
      user1,
    ]);
    coleccion_usuarios.buscarNombre("desc");
    expect(coleccion_usuarios._listaElementos).to.deep.equal([
      user1,
      user2,
    ]);
  });
  it("buscarKilometros()", () => {
    coleccion_usuarios.buscarKilometros("asc", "sem");
    expect(coleccion_usuarios._listaElementos).to.deep.equal([
      user1,
      user2,
    ]);
    coleccion_usuarios.buscarKilometros("asc", "mes");
    expect(coleccion_usuarios._listaElementos).to.deep.equal([
      user1,
      user2,
    ]);
    coleccion_usuarios.buscarKilometros("asc", "año");
    expect(coleccion_usuarios._listaElementos).to.deep.equal([
      user1,
      user2,
    ]);
    coleccion_usuarios.buscarKilometros("desc", "sem");
    expect(coleccion_usuarios._listaElementos).to.deep.equal([
      user2,
      user1,
    ]);
    coleccion_usuarios.buscarKilometros("desc", "mes");
    expect(coleccion_usuarios._listaElementos).to.deep.equal([
      user2,
      user1,
    ]);
    coleccion_usuarios.buscarKilometros("desc", "año");
    expect(coleccion_usuarios._listaElementos).to.deep.equal([
      user2,
      user1,
    ]);
  });
});
