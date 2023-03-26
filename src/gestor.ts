import * as inquirer from "inquirer";
import { HistorialRutas, Usuario } from "./Usuario/usuario";
import { coleccionGrupos } from ".";
import { coleccionRetos } from ".";
import { coleccionRutas } from ".";
import { coleccionUsuarios } from ".";
import { EstadisticasEntrenamiento } from "./Usuario/estadisticas_entrenamiento";
import { Grupo, historialRutasGrupal } from "./Grupo/grupos";
import { Ruta } from "./Ruta/rutas";
import { Reto } from "./Reto/retos";

/**
 * Enumerable con opciones para el menú principal.
 */
enum OpcionesMain {
    Iniciar = "Iniciar sesión",
    Registro = "Registrarse",
    Salir = "Salir"
}

/**
 * Enumerable con opciones para el menú gestor.
 */
enum OpcionesGestor {
    Perfil = "Ver mi perfil y usuarios",
    VerRutas = "Visualizar las rutas",
    Unirse = "Unirme a un grupo existente",
    Grupos = "Visualziar, crear o borrar grupo",
    Salir = "Salir"
}

/**
 * Enumerable con opciones para el menú de usuario.
 */
enum OpcionesUsuario {
    VerUsuarios = "Visualizar Usuarios",
    Añadir = "Añadir amigos",
    Eliminar = "Eliminar amigos",
    Salir = "Salir"
}

/**
 * Enumerable con opciones para el menú de grupos.
 */
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
        let userFound = false;
        await inquirer.prompt({
            type: "input",
            name: "addId",
            message: "Introduzca su ID: ",
        }).then(answer => {
            coleccionUsuarios._listaElementos.forEach((usuario) => {
                if(usuario.id == Number(answer["addId"])) {
                    this.usuarioId = Number(answer["addId"]);
                    this.usuario = usuario;
                    userFound = true;
                    this.menuUsuario();
                }
            });
        });
        if(userFound == false) {
            console.log("Usuario no encontrado...");
            this.menuInicio();
        }
    }

    /**
     * Menu de registro de usuario.
     */
    async menuRegistro() {
        console.clear()
        await this.promptAddUser();
        coleccionUsuarios._listaElementos.forEach((usuario) => {
            if(usuario.id == this.usuarioId) {
                this.usuario = usuario;
            }
        });
        this.mainMenu();
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
                    await coleccionRutas.showRuta();
                    this.menuUsuario();
                    break;
                case OpcionesGestor.Unirse: // Unirse a un grupo
                    let groupFound = false;
                    await inquirer.prompt({
                        type: "input",
                        name: "addId",
                        message: "Introduzca el ID del grupo deseado: ",
                    }).then((answers) => {
                        coleccionGrupos._listaElementos.forEach((grupo) => {
                            if(grupo.id == Number(answers["addId"])) {
                                grupo.participantes.push(this.usuario);
                                groupFound = true;
                                this.menuUsuario();
                            }
                        })
                    });
                    if(groupFound == false) {
                        console.log("ERROR: Grupo no encontrado.");
                        this.menuUsuario();
                    }
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
                this.menuPerfil();
                break;
            case OpcionesUsuario.Añadir: // Añadir un usuario a tu lista de amigos
                await inquirer.prompt({
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
              this.menuPerfil();
              break;
            case OpcionesUsuario.Eliminar:
                await inquirer.prompt({
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
                this.menuPerfil();
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
        inquirer.prompt({
            type: "list",
            name: "command",
            message: "Qué deseas hacer?: ",
            choices: Object.values(OpcionesGrupo),
        }).then(async (answers) => {
            switch (answers["command"]) {
                case OpcionesGrupo.VerGrupos:
                    coleccionGrupos.showGrupo();
                    this.menuGrupos();
                    break;
                case OpcionesGrupo.Crear:
                    await this.promptAddGrupos();
                    coleccionGrupos._listaElementos[coleccionGrupos._listaElementos.length - 1].participantes.push(this.usuario);
                    this.menuGrupos();
                    break;
                case OpcionesGrupo.Borrar: // El usuario ubicado en la posicion 0 puede borrar el grupo.
                    await this.promptRemoveGrupos(this.usuarioId);
                    this.menuGrupos();
                    break;
                case OpcionesGrupo.Salir:
                    this.menuUsuario();
                    break;
            }
        })
    }

    /**
     * Permite registrarse a un usuario a la base de datos.
     */
    async promptAddUser() {
        const datos = await inquirer.prompt([
          {
            type: "input",
            name: "addNombre",
            message: "Inserte el nombre: ",
          },
          {
            type: "input",
            name: "addActividad",
            message: "Inserte el tipo de actividad: ",
          },
          {
            type: "input",
            name: "addAmigos",
            message: "Inserte los ids de los amigos: ",
          },
          {
            type: "input",
            name: "addGrupos",
            message: "Inserte los ids de los grupos: ",
          },
          {
            type: "input",
            name: "addEstadisticas",
            message: "Inserte las estadísticas de entrenamiento: ",
          },
          {
            type: "input",
            name: "addRutas",
            message: "Inserte los id de las rutas favoritas: ",
          },
          {
            type: "input",
            name: "addRetos",
            message: "Inserte los ids de los retos: ",
          },
          {
            type: "input",
            name: "addHistorial",
            message: "Inserte el historial de rutas (fecha, id_ruta): ",
          },
        ]);
      
        const nombre: string = datos["addNombre"];
        const actividad: string = datos["addActividad"];
        // Añadir amigos
        const amigos: Usuario[] = [];
        const id_amigos: number[] = datos["addAmigos"].split(",").map(Number);
        id_amigos.forEach((id) =>
          coleccionUsuarios._listaElementos.forEach((item) => {
            if (item.id == id) {
              amigos.push(item);
            }
          })
        );
        // Añadir grupos
        const grupos: Grupo[] = [];
        const id_grupos: number[] = datos["addGrupos"].split(",").map(Number);
        id_grupos.forEach((id) =>
          coleccionGrupos._listaElementos.forEach((item) => {
            if (item.id == id) {
              grupos.push(item);
            }
          })
        );
        // Añadir datos entrenamiento
        const datosE: number[] = datos["addEstadisticas"].split(",").map(Number);
        const entrenamiento: EstadisticasEntrenamiento =
          new EstadisticasEntrenamiento(
            [datosE[0], datosE[1]],
            [datosE[2], datosE[3]],
            [datosE[4], datosE[5]]
          );
        // Añadir rutas
        const id_rutas: number[] = datos["addRetos"].split(",").map(Number);
        const rutas: Ruta[] = [];
        id_rutas.forEach((id) =>
          coleccionRutas._listaElementos.forEach((item) => {
            if (item.id == id) {
              rutas.push(item);
            }
          })
        );
        // Añadir retos
        const id_retos: number[] = datos["addRutas"].split(",").map(Number);
        const retos: Reto[] = [];
        id_retos.forEach((id) =>
          coleccionRetos._listaElementos.forEach((item) => {
            if (item.id == id) {
              retos.push(item);
            }
          })
        );
        // Añadir historial
        const datos_historial = datos["addHistorial"].split(",");
        const historial: HistorialRutas = [];
        for (let i = 0; i < datos_historial.length; i += 2) {
          coleccionRutas._listaElementos.forEach((item) => {
            if (item.id == datos_historial[i + 1]) {
              historial.push([datos_historial[i], item]);
            }
          });
        }
      
        if (actividad == "bicicleta" || actividad == "correr") {
          coleccionUsuarios.addUsario(
            new Usuario(
              nombre,
              actividad,
              amigos,
              grupos,
              entrenamiento,
              rutas,
              retos,
              historial
            )
          );
        }
      }

      /**
       * Permite a un usuario añadir un grupo a la base de datos.
       */
      async promptAddGrupos() {
        const datos = await inquirer.prompt([
          {
            type: "input",
            name: "addId",
            message: "Inserte el id: ",
          },
          {
            type: "input",
            name: "addNombre",
            message: "Inserte el nombre: ",
          },
          {
            type: "input",
            name: "addParticipantes",
            message: "Inserte los participantes: ",
          },
          {
            type: "input",
            name: "addEstadisticaGrupal",
            message: "Inserte las estadisticas grupales: ",
          },
          {
            type: "input",
            name: "addClasificacion",
            message: "Inserte la clasificacion: ",
          },
          {
            type: "input",
            name: "addRutasFavoritas",
            message: "Inserte los id de las rutas favoritas: ",
          },
          {
            type: "input",
            name: "addHistorial",
            message: "Inserte el historial de rutas (fecha, id_ruta): ",
          },
        ]);
      
        const id = Number(datos["addId"]);
        const nombre: string = datos["addNombre"];
        // Añadir participantes
        const usuarios: Usuario[] = [];
        const id_usuarios: number[] = datos["addId"].split(",").map(Number);
        id_usuarios.forEach((id) =>
          coleccionUsuarios._listaElementos.forEach((item) => {
            if (item.id == id) {
              usuarios.push(item);
            }
          })
        );
        // Añadir estadistica grupal
        const datosE: number[] = datos["addEstadisticaGrupal"].split(",").map(Number);
        const entrenamiento: EstadisticasEntrenamiento =
          new EstadisticasEntrenamiento(
            [datosE[0], datosE[1]],
            [datosE[2], datosE[3]],
            [datosE[4], datosE[5]]
          );
        // Añadir clasificacion
        const clasificacion: number[] = datos["addClasificacion"].split(",").map(Number);
        // Añadir rutas favoritas
        const id_rutas: number[] = datos["addRutasFavoritas"].split(",").map(Number);
        const rutas: Ruta[] = [];
        id_rutas.forEach((id) =>
          coleccionRutas._listaElementos.forEach((item) => {
            if (item.id == id) {
              rutas.push(item);
            }
          })
        );
        // Añadir historial
        const datos_historial = datos["addHistorial"].split(",");
        const historial: historialRutasGrupal = [];
        for (let i = 0; i < datos_historial.length; i += 3) {
          coleccionRutas._listaElementos.forEach((item) => {
            if (item.id == datos_historial[i + 1]) {
              historial.push([datos_historial[i], [], item]);
            }
          });
        }
        coleccionGrupos.addGrupo(new Grupo(id, nombre, usuarios, entrenamiento, clasificacion, rutas, historial));
      }

      /**
       * Permite a un usuario eliminar un grupo de la base de datos.
       * @param Id Id del usuario que realiza la acción.
       */
      async promptRemoveGrupos(Id: number) {
        console.clear();
        coleccionGrupos.showGrupo();
        const dato = await inquirer.prompt({
          type: "input",
          name: "addIndex",
          message: "Inserte el índice del elemento: ",
        });
        if (Number(dato["addIndex"]) < coleccionGrupos._listaElementos.length && Id == coleccionGrupos._listaElementos[Number(dato["addIndex"])].participantes[0].id) {
            coleccionGrupos.removeGrupo(Number(dato["addIndex"]));
            console.log("Grupo eliminado.");
        } else {
          if(Number(dato["addIndex"]) >= coleccionGrupos._listaElementos.length) {
            console.log("ERROR: índice fuera de los límites.");
          } else {
            console.log("ERROR: usuario no tiene permisos.");
          }
        }
      }
}