import { promptUsuario } from "./Usuario/prompt_usuario";
import { promptRutas } from "./Ruta/prompt_ruta";
import { promptRetos } from "./Reto/prompt_reto";
import { promptGrupo } from "./Grupo/prompt_grupo";
import { Gestor } from "./gestor";
import * as inquirer from "inquirer";

/**
 * Enumerable con opciones para el menú main.
 */
enum Opciones {
    Usuario = "Editar usuarios",
    Ruta = "Editar rutas",
    Reto = "Editar retos",
    Grupo = "Editar grupos",
    Salir = "Salir"
  }

/**
 * main del proyecto
 */
export function mainPrompt() {
    console.clear();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "¿Qué deseas hacer?: ",
        choices: Object.values(Opciones),
    }).then((answers) => {
        switch(answers["command"]) {
            case Opciones.Usuario:
                promptUsuario();
                break;
            case Opciones.Ruta:
                promptRutas();
                break;
            case Opciones.Reto:
                promptRetos();
                break;
            case Opciones.Grupo:
                promptGrupo();
                break;
            case Opciones.Salir:
                return;
        }
    })
}

//mainPrompt();

const prueba = new Gestor();
prueba.mainMenu();