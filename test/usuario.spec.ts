import "mocha";
import { expect } from "chai";
import { Usuario } from "../src/usuario";
import { Ruta } from "../src/rutas";
import { Coordenadas } from "../src/coordenadas";
import { Reto } from "../src/retos";

const ruta_1 = new Ruta(1, "Ruta de prueba", new Coordenadas(0, 0, 0), new Coordenadas(1, 1, 1), 10, 55,
[], "correr", 4.5);
const ruta_2 = new Ruta(2, "Ruta por el teide", new Coordenadas(6, 7, 5), new Coordenadas(12, 14, 6), 27, 217,
[], "correr", 4.8);

const reto_1 = new Reto(152, "Reto de prueba", [ruta_1, ruta_2], "correr", []);
const reto_2 = new Reto(152, "Reto de nuevo", [ruta_1, ruta_2], "correr", []);


export let userUno = new Usuario(
  "Mortadelo",
  "bicicleta",
  [],
  [
    [2, 5],
    [20, 33],
  ],
  [ruta_1, ruta_2],
  [reto_1],
  32
);
export let userDos = new Usuario(
  "Filemon",
  "correr",
  [userUno],
  [[26, 13]],
  [ruta_2],
  [reto_2]
);

// let userTres = new Usuario(
//   "Armando",
//   "correr",
//   [],
//   [[]],
//   []
// )


describe("Clase Usuario", () => {
  it("Set nombre de usuario", () => {
    userUno.nombre = "María";
  });
  it("Nombre de usuario uno bien", () => {
    expect(userUno.nombre).to.be.equal("María");
  });
  it("Nombre de usuario uno mal", () => {
    expect(userUno.nombre).to.not.be.equal("Maía");
  });

  it("Set tipo de actividad", () => {
    userUno.tipoActividad = "correr";
  });
  it("Get tipo de actividad bien", () => {
    expect(userUno.tipoActividad).to.be.equal("correr");
  });
  it("Get tipo de actividad mal", () => {
    expect(userUno.tipoActividad).to.not.be.equal("bicicleta");
  });

  it("Set amigos", () => {
    userUno.amigos = [];
  });
  it("add amigo true", () => {
    expect(userUno.addAmigo(userDos)).to.be.true;
  });
  it("add amigo false", () => {
    expect(userUno.addAmigo(userDos)).to.be.false;
  });
  it("delete amigo true", () => {
    expect(userUno.deleteAmigo(userDos)).to.be.true;
  });
  it("delete amigo false", () => {
    expect(userUno.deleteAmigo(userDos)).to.be.false;
  });
  it("Get amigos bien", () => {
    expect(userUno.amigos).to.be.empty
  });
  it("Get amigos mal", () => {
    expect(userUno.amigos).to.not.be.equal([userDos]);
  });

  it("Set grupos de amigos", () => {
    userUno.grupos = [[1,2,3],[4,5]]
  });
  it("add grupo true", () => {
    expect(userUno.addGrupo([25,26])).to.be.true
  });
  it("add grupo false", () => {
    // expect(userUno.addGrupo([25,26])).to.be.false
  });
  it("delete grupo true", () => {
    // expect(userUno.deleteGrupo([25,26])).to.be.true
  });
  it("delete grupo false", () => {
    // expect(userUno.deleteGrupo([25,26])).to.be.false
  });
  it("Get grupos bien", () => {
    expect(userUno.grupos).to.deep.equal([[1,2,3],[4,5], [25,26]])
  });
  it("Get grupos mal", () => {
    expect(userUno.grupos).to.not.be.equal([1,2])
  });


  it("Set ruta ", () => {
    userUno.rutas = [ruta_1]
  });
  it("add ruta true", () => {
    expect(userUno.addRuta(ruta_2)).to.be.true
  });
  it("add ruta false", () => {
    expect(userUno.addRuta(ruta_2)).to.be.false
  });
  it("delete ruta true", () => {
    expect(userUno.deleteRuta(ruta_2)).to.be.true
  });
  it("delete ruta false", () => {
    expect(userUno.deleteRuta(ruta_2)).to.be.false
  });
  it("Get ruta bien", () => {
    expect(userUno.rutas).to.deep.equal([ruta_1])
  });
  it("Get ruta mal", () => {
    expect(userUno.rutas).to.not.deep.equal(ruta_2)
  });


  it("Set retos ", () => {
    userUno.retos = [reto_2]
  });
  it("add reto true", () => {
    expect(userUno.addReto(reto_1)).to.be.true
  });
  it("add reto false", () => {
    expect(userUno.addReto(reto_1)).to.be.false
  });
  it("delete reto true", () => {
    expect(userUno.deleteReto(reto_1)).to.be.true
  });
  it("delete reto false", () => {
    expect(userUno.deleteReto(reto_1)).to.be.false
  });
  it("Get retos bien", () => {
    expect(userUno.retos).to.deep.equal([reto_2])
  });
  it("Get retos mal", () => {
    expect(userUno.amigos).to.not.deep.equal([reto_1])
  });
  

});
