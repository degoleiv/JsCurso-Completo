

/**  representar comillas debe ser respetando la jerarquia,
 * si usas "" entonces podras poner '' y alreves 
*/
const saludo = "Hola Mundo! Bienvenidos a 'ultimate javascript' :)";
const saludosimple = 'Hola Mundo! "Bienvenidos a ultimate javascript" :)';
/**
 * \n nueva linea
 * \t tabulacion
 * \' comilla simple 
 * \" comilla doble
 * \\ backslash
 */

const saludoescape = 'Hola \\ Mundo!\n \"Bienvenidos\" \t a \'ultimate javascript\' :)';
console.log(saludoescape);