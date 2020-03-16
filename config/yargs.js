 
const newDesc = (argu) => {
    switch(argu){
        case 'crear':
               return desc = {
                    description: {
                        demand: true,
                        alias: 'd',
                        desc: 'Description de la tarea por hacer'
                    }
                }
        break;     
        case 'actualizar':
               return desc = {
                description: {
                    demand: true,
                    alias: 'a',
                    desc: 'Description de actualizar tarea'
                },
                completado: {
                    default: true,
                    alias: 'c',
                    desc: 'Marca como completado o pendiente de la  tarea'
                }
            }
        break;     
        case 'listar':
               return desc = {
                description: {
                    demand: true,
                    alias: 'l',
                    desc: 'Description de listar tarea'
                }
            }
        break;     
        case 'borrar':
               return desc = {
                description: {
                    demand: true,
                    alias: 'b',
                    desc: 'Description de borrar tarea'
                }
            }
        break;     
    }
}

  const argv = require('yargs')
            .command('crear', 'Crear un elemento por hacer', newDesc('crear'))
            .command('listar', 'Listar todas las tareas', newDesc('listar'))
            .command('actualizar', 'Actualizar al estado completo de la tarea', newDesc('actualizar'))
            .command('borrar', 'Borrar una de las tareas', newDesc('borrar'))
            .help()
            .argv; 


module.exports = {
    argv
};