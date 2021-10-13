
const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            desc: 'Multiply base argument'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false, 
            desc: 'Show the table in console'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            desc: 'Limit multiply'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'base must be a number'
        } else {
            return true
        }
    })
    .argv;

module.exports = {
    argv
}