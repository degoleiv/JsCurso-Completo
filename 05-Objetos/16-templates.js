/** template String
 *  strings literales 
 *  templates literales
 * */ 

const nombre = 'dego';

function funcion () {
    return "posdata: "
}

const plantilla = `Hola ${nombre}!
Bienvenidos a "ultimate JavaScript " :)
cariños dego
${funcion()} la suma de 2 + 2 es ${2 + 2}
`

console.log(plantilla);


// convertir el template en plantilla 

function plantilla (nombre) {
   return `Hola ${nombre}!
Bienvenidos a "ultimate JavaScript " :)
cariños dego
${funcion()} la suma de 2 + 2 es ${2 + 2}
` ;
}

console.log(plantilla('diana'));