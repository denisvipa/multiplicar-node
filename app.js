const { argv } = require('./config/yargs');
const colors = require('colors');


const { CrearArchivoBase, listar } = require('./multiplicar/multiplicar');



let comando = argv._[0];
//console.log(argv);

switch (comando){

    case 'listar':
        listar(argv.base, argv.limite);
        break;
    case 'crear':             
        CrearArchivoBase(argv.base, argv.limite)
            .then(archivo => console.log('archivo creado: '.red +  `${ archivo }`.yellow))
            .catch(e=>console.log(e));         
        break;    
    default:
        console.log("Comando no reconocido");
        break;
}

/*
let base = 10;

CrearArchivoBase(base)
    .then(archivo => console.log(`archivo creado: ${ archivo }`))
    .catch(e=>console.log(e));
*/
