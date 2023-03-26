import * as inquirer from "inquirer";
import { Usuario } from "./Usuario/usuario";
import { coleccionGrupos } from ".";
import { coleccionRetos } from ".";
import { coleccionRutas } from ".";
import { coleccionUsuarios } from ".";
import { promptAdd, promptModify } from "./Usuario/prompt_usuario";
import { promptAddG, promptRemoveG } from "./Grupo/prompt_grupo";
import { promptRemove, promptSort } from "./Ruta/prompt_ruta";
import { EstadisticasEntrenamiento } from "./Usuario/estadisticas_entrenamiento";

enum OpcionesMain {
    Iniciar = "Iniciar sesión",
    Registro = "Registrarse",
    Salir = "Salir"
}

enum OpcionesGestor {
    Perfil = "Ver mi perfil y usuarios",
    VerRutas = "Visualizar las rutas",
    Unirse = "Unirme a un grupo existente",
    Grupos = "Visualziar, crear o borrar grupo",
    Salir = "Salir"
}

enum OpcionesUsuario {
    VerUsuarios = "Visualizar Usuarios",
    Añadir = "Añadir amigos",
    Eliminar = "Eliminar amigos",
    Salir = "Salir"
}

enum OpcionesGrupo {
    VerGrupos = "Visualizar grupos",
    Crear = "Crear grupos",
    Borrar = "Borrar grupos",
    Salir = "Salir"
}

/** 
 * Clase gestor. Permite a un usuario realizar diversas tareas en el sistema.
*/
export class Gestor {
    private usuarioId: number;
    private usuario: Usuario;

    /**
     * Constructor de clase
     */
    constructor() {
        this.usuarioId = -1;
        this.usuario = new Usuario("","bicicleta",[],[],new EstadisticasEntrenamiento([0, 0],[0, 0],[0, 0]),[],[],[])
    }

    /**
     * Menú principal del gestor.
     * Desde aquí un usuario puede iniciar sesión o registrarse.
     */
    mainMenu() {
        console.clear();
        inquirer.prompt({
            type: "list",
            name: "command",
            message: "¿Qué deseas hacer?: ",
            choices: Object.values(OpcionesMain),
        }).then((answers) => {
            switch(answers["command"]) {
                case OpcionesMain.Iniciar:
                    this.menuInicio();
                    break;
                case OpcionesMain.Registro:
                    this.menuRegistro();
                    break;
                case OpcionesMain.Salir:
                    return;
            }
        });
    }

    /**
     * Menú de inicio de sesión.
     * Desde aquí un usuario puede iniciar sesión.
     */
    async menuInicio() {
        console.clear();
        await inquirer.prompt({
            type: "input",
            name: "addId",
            message: "Introduzca su ID: ",
        }).then(answer => {
            coleccionUsuarios._listaElementos.forEach((usuario) => {
                if(usuario.id == Number(answer["addId"])) {
                    this.usuarioId = Number(answer["addId"]);
                    this.usuario = usuario;
                    this.menuUsuario();
                }
            });
        });
        console.log("Usuario no encontrado...");

        this.menuInicio();
    }

    /**
     * Menu de registro de usuario.
     */
    async menuRegistro() {
        console.clear();
        promptAdd();
        coleccionUsuarios._listaElementos.forEach((usuario) => {
            if(usuario.id == this.usuarioId) {
                this.usuario = usuario;
            }
        });
        this.menuInicio();
    }

    /**
     * Menu del usuario.
     * Llega aquí al iniciar sesión satisfactoriamente o registrarse.
     */
    async menuUsuario() {
        console.clear();
        inquirer.prompt({
            type: "list",
            name: "command",
            message: "Hola, ¿qué deseas hacer?: ",
            choices: Object.values(OpcionesGestor),
        }).then(async (answers) => {
            switch(answers["command"]) {
                case OpcionesGestor.Perfil:
                    this.menuPerfil()
                    break;
                case OpcionesGestor.VerRutas: // Ver las rutas existentes en el sistema
                    coleccionRutas.showRuta();
                    await inquirer.prompt({
                        type: "list",
                        name: "command",
                        message: "Presione una tecla para continuar: ",
                    });
                    this.menuUsuario();
                    break;
                case OpcionesGestor.Unirse: // Unirse a un grupo
                    inquirer.prompt({
                        type: "input",
                        name: "addId",
                        message: "Introduzca el ID del grupo deseado: ",
                    }).then((answers) => {
                        coleccionGrupos._listaElementos.forEach((grupo) => {
                            if(grupo.id == Number(answers["addId"])) {
                                grupo.participantes.push(this.usuario);
                                this.menuUsuario();
                            }
                        })
                    });
                    console.log("ERROR: Grupo no encontrado.")
                    await inquirer.prompt({
                        type: "list",
                        name: "command",
                        message: "Presione una tecla para continuar: ",
                    });
                    this.menuUsuario();
                    break;
                case OpcionesGestor.Grupos:
                    this.menuGrupos();
                    break;
                case OpcionesGestor.Salir:
                    return;
            }
        });
    }

    /**
     * Menú donde se puede ver usuarios, añadir o elimiar amigos.
     */
    async menuPerfil(){
        console.clear()
        inquirer
        .prompt({
          type: "list",
          name: "command",
          message: "¿Qué deseas hacer?: ",
          choices: Object.values(OpcionesUsuario),
        })
        .then(async (answers) => {
          switch (answers["command"]) {
            case OpcionesUsuario.VerUsuarios: // Visualizar los usuarios del sistema
                coleccionUsuarios.showUsuario();
                await inquirer.prompt({
                    type: "list",
                    name: "command",
                    message: "Presione una tecla para continuar: ",
                });
                break;
            case OpcionesUsuario.Añadir: // Añadir un usuario a tu lista de amigos
                inquirer.prompt({
                    type: "input",
                    name: "addAmigo",
                    message: "Insertar ID de nuevo amigo:"
                }).then((answers) => {
                    coleccionUsuarios._listaElementos.forEach((usuario) => {
                        if(answers["addAmigo"] == usuario.id){
                            this.usuario.addAmigo(usuario);
                        }
                    }) 
                })
              break;
            case OpcionesUsuario.Eliminar:
                inquirer.prompt({
                    type: "input",
                    name: "addAmigo",
                    message: "Insertar ID de amigo a eliminar:"
                }).then((answers) => {
                    coleccionUsuarios._listaElementos.forEach((usuario) => {
                        if(answers["addAmigo"] == usuario.id){
                            this.usuario.deleteAmigo(usuario);
                        }
                    }) 
                })
              break;
            case OpcionesUsuario.Salir:
                this.menuUsuario();
              break;
          }
        });
    }

    /**
     * Menú en el que un usuario puede añadir, borrar o ver grupos.
     */
    menuGrupos() {
        console.clear();
        inquirer.prompt({
            type: "list",
            name: "command",
            message: "Qué deseas hacer?: ",
            choices: Object.values(OpcionesGrupo),
        }).then((answers) => {
            switch (answers["command"]) {
                case OpcionesGrupo.VerGrupos:
                    coleccionGrupos.showGrupo();
                    this.menuGrupos();
                    break;
                case OpcionesGrupo.Crear:
                    promptAddG();
                    coleccionGrupos._listaElementos[coleccionGrupos._listaElementos.length - 1].participantes.push(this.usuario);
                    this.menuGrupos();
                    break;
                case OpcionesGrupo.Borrar: // El usuario ubicado en la posicion 0 puede borrar el grupo.
                    promptRemoveG(this.usuarioId);
                    this.menuGrupos();
                    break;
                case OpcionesGrupo.Salir:
                    this.menuUsuario();
                    break;
            }
        })
    }
}