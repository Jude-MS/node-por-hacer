
const fs = require('fs');

let  listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (error) => {
        if(error) throw new error('No se pudo guardar', error);
        console.log('Tarea guardado exitosamente!');
    });
} 

const caragrDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (description) => {
    caragrDB();

    let porHacer = {
        description,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    caragrDB();
    return listadoPorHacer;
}

const actualizar = (description, completado = true) => {
    caragrDB();

    let index = listadoPorHacer.findIndex (tarea => {
        return tarea.description == description;
    })

    if(index >= 0){
        listadoPorHacer[index].completado = completado; 
        guardarDB();
        return true;
    }else{
        return false
    }

}

const borrar = (description) => {
    caragrDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.description !== description;
    })

    console.log(nuevoListado)

    if(listadoPorHacer.length === nuevoListado.length){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}