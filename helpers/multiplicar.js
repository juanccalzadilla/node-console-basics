const colors = require('colors')
const fs = require('fs');
const crearArchivo = async (base = 2, listar = false, hasta = 10) => {
   try {
    let salida = '';

    console.log(`=================== TABLA DEL ${base} ======================` .rainbow);
    for (let i = 1; i <= hasta; i++) {
       salida += (`${base} x ${i} = ${base * i}\n`);
    }
    
    fs.writeFile(`./files/tabla-${base}.txt`,salida,(err)=>{
        
        if (err) throw err;
    })
    if (listar) {
        console.log(`${salida}`.red );
    }
    
    return `tabla-${base}.txt`;
   } catch (err) {
       throw err;
   }
}

module.exports = crearArchivo;