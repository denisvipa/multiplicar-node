const fs = require('fs');
const colors = require('colors');

let listar = (base, limite) => {

    console.log("*****************************".red);
    console.log(`Tabla del ${ base }`.yellow);
    console.log("*****************************".red);


    for(let i=1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i}`);
    }
}

let CrearArchivoBase = (base, limite) =>{

    return new Promise((resolve, reject)=>{

        if(!Number(base)){
            reject("la base debe ser numerica");
            return;
        }

        let tabla = "";
        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {
            if (err){ reject(`error al crear el archivo: ${ err }`)}

            resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    CrearArchivoBase,
    listar
}