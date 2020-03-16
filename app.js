

const argv  = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
var colors = require('colors/safe');

let command = argv._[0];

switch(command){
    case 'crear':
        let tarea = porHacer.crear(argv.description);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for(let tarea of listado){
            console.log(colors.green('===========Por Hacer============'));
            console.log(tarea.description);
            console.log('Estado', tarea.completado);
            console.log(colors.green('================================='))
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.description, argv.completado );
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.description);
        console.log(borrado);
        break;
    default: 
        console.log('Commando no es valido');
}

