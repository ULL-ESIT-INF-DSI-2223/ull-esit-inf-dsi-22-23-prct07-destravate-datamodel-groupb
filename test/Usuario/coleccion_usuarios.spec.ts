import "mocha";
import { expect } from "chai";
import { ColeccionUsuarios } from "../../src/Usuario/coleccion_usuarios"
import { userUno, userDos } from "../../src/index"

describe("Clase ColeccionUsuarios", () => {
    const coleccion_usuarios = new ColeccionUsuarios([userUno]);
    it("add() añade una nueva ruta", () => {
        coleccion_usuarios.add(userDos);
        expect(coleccion_usuarios._listaElementos).to.deep.equal([userUno, userDos]);
    });
    it("remove() elimina una ruta", () => {
        coleccion_usuarios.remove(0);
        expect(coleccion_usuarios._listaElementos).to.deep.equal([userDos]);
    });
    it("modify() modifica una ruta", () => {
        coleccion_usuarios.modify(0, userUno);
        expect(coleccion_usuarios._listaElementos).to.deep.equal([userUno]);
        coleccion_usuarios.add(userDos);
    });

    it("buscarNombre()", () => {
        coleccion_usuarios.buscarNombre("asc");
        expect(coleccion_usuarios._listaElementos).to.deep.equal([userDos, userUno]);
        coleccion_usuarios.buscarNombre("desc");
        expect(coleccion_usuarios._listaElementos).to.deep.equal([userUno, userDos]);
    });
    it("buscarKilometros()", () => {
        coleccion_usuarios.buscarKilometros("asc", "sem");
        expect(coleccion_usuarios._listaElementos).to.deep.equal([userUno, userDos]);
        coleccion_usuarios.buscarKilometros("asc", "mes");
        expect(coleccion_usuarios._listaElementos).to.deep.equal([userUno, userDos]);
        coleccion_usuarios.buscarKilometros("asc", "año");
        expect(coleccion_usuarios._listaElementos).to.deep.equal([userUno, userDos]);
        coleccion_usuarios.buscarKilometros("desc", "sem");
        expect(coleccion_usuarios._listaElementos).to.deep.equal([userDos, userUno]);
        coleccion_usuarios.buscarKilometros("desc", "mes");
        expect(coleccion_usuarios._listaElementos).to.deep.equal([userDos, userUno]);
        coleccion_usuarios.buscarKilometros("desc", "año");
        expect(coleccion_usuarios._listaElementos).to.deep.equal([userDos, userUno]);
    });
});