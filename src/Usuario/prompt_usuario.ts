import { Usuario } from "./usuario";
import { ColeccionUsuarios } from "./coleccion_usuarios";
import { JsonColeccionUsuarios } from "./json_coleccion_usuarios";
import { coleccionUsuarios } from "..";
import * as inquirer from "inquirer";

enum Comandos {
    Añadir = "Añadir usuario",
    Eliminar = "Eliminar usuario",
    Modificar = "Modificar usuario",
    Ordenar = "Ordenar lista",
    Salir = "Salir al menú principal"
}

function promptAdd(): void {

}

function promptRemove(): void {

}

function promptModify(): void {

}

function promptSort(): void {

}

function promptUsuario(): void {
    console.clear();
    coleccionUsuarios.showUsuario();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "¿Qué deseas hacer?: ",
        choices: Object.values(Comandos),
    }).then(answers => {
        switch (answers["command"]) {
            case Comandos.Añadir:
                promptAdd();
                break;
            case Comandos.Eliminar:
                promptRemove();
                break;
            case Comandos.Modificar:
                promptModify();
                break;
            case Comandos.Ordenar:
                promptSort();
                break;
            case Comandos.Salir:
                // Vuelve al prompt de inicio
                break;
        }
    });
}