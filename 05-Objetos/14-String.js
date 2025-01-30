const saludo = "Hola Mundo!";
const despedida = new String ("Chao mundo :(");
console.log(typeof saludo); //string
console.log(typeof despedida); //Object

console.log(
    saludo.length, //largo del string 11
    saludo.indexOf('Mu'), // indice donde comienza  la palabra
    saludo.indexOf('aaaaa') , //si no se encuentra es -1
    saludo.includes("Mundo"), // True o False si exite la palabra
    saludo.replace("Mundo", "Dego"), // devolver un string con el contenido remplazado
    saludo.toLowerCase(), // convertir todo a minusculas
    saludo.toUpperCase(), // convertir todo a mayusculas
    saludo.substring(0,4), //pasar los indices para recortar el string
    saludo.substr(0, 4 )// deprecado 
); 


const espacios = '  Hola    mundo  ';
espacios.trimEnd(); // quitar espacios del final
espacios.trimStart(); // quitar espacios del inicio
espacios.trim(); // quitar espacios a nivel general
