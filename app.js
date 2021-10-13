
const { argv } = require('./config/yargs');
const crearArchivo = require('./helpers/multiplicar');
const colors = require('colors')


console.clear()

// const [,,arg3 ='base=5'] = process.argv;
// const [,base] = arg3.split('=')

console.log(argv);

 crearArchivo(argv.base,argv.l,argv.h)
 .then(dataName => console.log(dataName .green,'created' .bold.brightRed))
 .catch(err =>console.log(err))





