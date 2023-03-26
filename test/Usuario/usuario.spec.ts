import "mocha";
import { expect } from "chai";

import {
  user2,
  user1,
  grupo_2,
  grupo_1,
  ruta_1,
  ruta_2,
  reto_2,
  reto_1,
} from "../../src/index";

describe("Clase Usuario", () => {
  it("Set nombre de usuario", () => {
    user1.nombre = "María";
  });
  it("Nombre de usuario uno bien", () => {
    expect(user1.nombre).to.be.equal("María");
  });
  it("Nombre de usuario uno mal", () => {
    expect(user1.nombre).to.not.be.equal("Maía");
  });

  it("Set tipo de actividad", () => {
    user1.tipoActividad = "correr";
  });
  it("Get tipo de actividad bien", () => {
    expect(user1.tipoActividad).to.be.equal("correr");
  });
  it("Get tipo de actividad mal", () => {
    expect(user1.tipoActividad).to.not.be.equal("bicicleta");
  });

  it("Set amigos", () => {
    user1.amigos = [];
  });
  it("add amigo true", () => {
    expect(user1.addAmigo(user2)).to.be.true;
  });
  it("add amigo false", () => {
    expect(user1.addAmigo(user2)).to.be.false;
  });
  it("delete amigo true", () => {
    expect(user1.deleteAmigo(user2)).to.be.true;
  });
  it("delete amigo false", () => {
    expect(user1.deleteAmigo(user2)).to.be.false;
  });
  it("Get amigos bien", () => {
    expect(user1.amigos).to.be.empty;
  });
  it("Get amigos mal", () => {
    expect(user1.amigos).to.not.be.equal([user2]);
  });

  it("Set grupos de amigos", () => {
    user1.grupos = [grupo_1];
  });
  it("add grupo true", () => {
    expect(user1.addGrupo(grupo_2)).to.be.true;
  });
  it("add grupo false", () => {
    expect(user1.addGrupo(grupo_2)).to.be.false;
  });
  it("delete grupo true", () => {
    expect(user1.deleteGrupo(grupo_2)).to.be.true;
  });
  it("delete grupo false", () => {
    expect(user1.deleteGrupo(grupo_2)).to.be.false;
  });
  it("Get grupos bien", () => {
    expect(user1.grupos).to.deep.equal([grupo_1]);
  });
  it("Get grupos mal", () => {
    expect(user1.grupos).to.not.be.equal([1, 2]);
  });

  it("Set ruta ", () => {
    user1.rutas = [ruta_1];
  });
  it("add ruta true", () => {
    expect(user1.addRuta(ruta_2)).to.be.true;
  });
  it("add ruta false", () => {
    expect(user1.addRuta(ruta_2)).to.be.false;
  });
  it("delete ruta true", () => {
    expect(user1.deleteRuta(ruta_2)).to.be.true;
  });
  it("delete ruta false", () => {
    expect(user1.deleteRuta(ruta_2)).to.be.false;
  });
  it("Get ruta bien", () => {
    expect(user1.rutas).to.deep.equal([ruta_1]);
  });
  it("Get ruta mal", () => {
    expect(user1.rutas).to.not.deep.equal(ruta_2);
  });

  it("Set retos ", () => {
    user1.retos = [reto_2];
  });
  it("add reto true", () => {
    expect(user1.addReto(reto_1)).to.be.true;
  });
  it("add reto false", () => {
    expect(user1.addReto(reto_1)).to.be.false;
  });
  it("delete reto true", () => {
    expect(user1.deleteReto(reto_1)).to.be.true;
  });
  it("delete reto false", () => {
    expect(user1.deleteReto(reto_1)).to.be.false;
  });
  it("Get retos bien", () => {
    expect(user1.retos).to.deep.equal([reto_2]);
  });
  it("Get retos mal", () => {
    expect(user1.amigos).to.not.deep.equal([reto_1]);
  });
});
